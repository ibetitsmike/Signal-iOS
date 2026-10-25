import UIKit
import WebKit
import UniformTypeIdentifiers

let start = Date()
func out(_ s: String) {
    print("WEBPROBE +\(String(format: "%.1f", Date().timeIntervalSince(start))) \(s)")
    fflush(stdout)
}

func storybookRoot() -> URL {
    let candidates = [
        ProcessInfo.processInfo.environment["PROBE_SB"],
        "/Users/runner/work/Signal-iOS/Signal-iOS/.github/duo-probe",
    ].compactMap { $0 }
    for c in candidates where FileManager.default.fileExists(atPath: c + "/sb-base/iframe.html") { return URL(fileURLWithPath: c) }
    return URL(fileURLWithPath: candidates.last!)
}

// WKWebView shows the keyboard only for user-initiated focus; the probe focuses from script.
func installFocusSwizzle() {
    guard let cls = NSClassFromString("WKContentView") else { out("no WKContentView"); return }
    var count: UInt32 = 0
    if let list = class_copyMethodList(cls, &count) {
        for i in 0..<Int(count) {
            let name = NSStringFromSelector(method_getName(list[i]))
            if name.contains("elementDidFocus") { out("method \(name) types=\(String(cString: method_getTypeEncoding(list[i])!))") }
        }
        free(list)
    }
    let sel = NSSelectorFromString("_elementDidFocus:userIsInteracting:blurPreviousNode:activityStateChanges:userObject:")
    guard let m = class_getInstanceMethod(cls, sel) else { out("no focus selector"); return }
    typealias Orig = @convention(c) (AnyObject, Selector, UnsafeRawPointer?, Bool, Bool, UInt, AnyObject?) -> Void
    let orig = unsafeBitCast(method_getImplementation(m), to: Orig.self)
    let block: @convention(block) (AnyObject, UnsafeRawPointer?, Bool, Bool, UInt, AnyObject?) -> Void = { me, info, _, blur, changes, obj in
        orig(me, sel, info, true, blur, changes, obj)
    }
    method_setImplementation(m, imp_implementationWithBlock(block))
    out("focus swizzle installed")
}

final class FileScheme: NSObject, WKURLSchemeHandler {
    let root = storybookRoot()
    func webView(_ webView: WKWebView, start task: WKURLSchemeTask) {
        guard let url = task.request.url else { return }
        var path = url.path
        if path.isEmpty || path == "/" { path = "/index.html" }
        let file = root.appendingPathComponent(String(path.dropFirst()))
        guard let data = try? Data(contentsOf: file) else {
            out("404 \(path)")
            task.didReceive(HTTPURLResponse(url: url, statusCode: 404, httpVersion: "HTTP/1.1", headerFields: [:])!)
            task.didFinish()
            return
        }
        let mime = UTType(filenameExtension: file.pathExtension)?.preferredMIMEType ?? "application/octet-stream"
        let fixed = file.pathExtension == "js" || file.pathExtension == "mjs" ? "text/javascript" : mime
        task.didReceive(HTTPURLResponse(url: url, statusCode: 200, httpVersion: "HTTP/1.1", headerFields: ["Content-Type": fixed, "Content-Length": "\(data.count)", "Access-Control-Allow-Origin": "*"])!)
        task.didReceive(data)
        task.didFinish()
    }
    func webView(_ webView: WKWebView, stop task: WKURLSchemeTask) {}
}

final class Probe: NSObject, WKScriptMessageHandler {
    func userContentController(_ c: WKUserContentController, didReceive message: WKScriptMessage) {
        out("LOG \(message.body)")
    }
}

final class WebVC: UIViewController, WKNavigationDelegate {
    var web: WKWebView!
    let urls = [
        "probe://app/sb-base/iframe.html?id=probe-duo--workspace&viewMode=story",
        "probe://app/sb-fix/iframe.html?id=probe-duo--workspace&viewMode=story",
        "probe://app/sb-base/iframe.html?id=probe-duo--creation&viewMode=story",
        "probe://app/sb-fix/iframe.html?id=probe-duo--creation&viewMode=story",
    ]
    var idx = 0
    let scheme = FileScheme()
    let probe = Probe()
    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = .black
        let cfg = WKWebViewConfiguration()
        cfg.setURLSchemeHandler(scheme, forURLScheme: "probe")
        cfg.userContentController.add(probe, name: "probe")
        let meta = "var m=document.querySelector('meta[name=viewport]'); if(!m){m=document.createElement('meta');m.name='viewport';document.head.appendChild(m);} m.content='width=device-width, initial-scale=1.0, viewport-fit=cover, interactive-widget=resizes-content, maximum-scale=1';"
        cfg.userContentController.addUserScript(WKUserScript(source: meta, injectionTime: .atDocumentEnd, forMainFrameOnly: true))
        web = WKWebView(frame: view.bounds, configuration: cfg)
        web.autoresizingMask = [.flexibleWidth, .flexibleHeight]
        if #available(iOS 16.4, *) { web.isInspectable = true }
        web.navigationDelegate = self
        view.addSubview(web)
        out("root=\(scheme.root.path) exists=\(FileManager.default.fileExists(atPath: scheme.root.path + "/sb-base/iframe.html"))")
        installFocusSwizzle()
        loadNext()
        Timer.scheduledTimer(withTimeInterval: 45, repeats: true) { [weak self] _ in
            MainActor.assumeIsolated { self?.loadNext() }
        }
    }
    func loadNext() {
        let u = urls[idx % urls.count]
        idx += 1
        out("load \(u) bounds=\(view.bounds.size) safe=\(view.safeAreaInsets) adjInset=\(web.scrollView.adjustedContentInset)")
        web.load(URLRequest(url: URL(string: u)!))
    }
    func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        let resize = false
        out("didFinish idx=\(idx) resize=\(resize)")
        DispatchQueue.main.asyncAfter(deadline: .now() + 10) { [weak self] in
            guard let self else { return }
            if resize {
                let b = self.view.bounds
                self.web.autoresizingMask = []
                self.web.frame = CGRect(x: 0, y: 0, width: 951, height: 1300)
                out("resized big")
                DispatchQueue.main.asyncAfter(deadline: .now() + 3) {
                    self.web.frame = b
                    self.web.autoresizingMask = [.flexibleWidth, .flexibleHeight]
                    out("resized back")
                    DispatchQueue.main.asyncAfter(deadline: .now() + 1) {
                        self.web.evaluateJavaScript("window.__probeGo=1") { _, _ in }
                    }
                }
            } else {
                self.web.evaluateJavaScript("window.__probeGo=1") { _, _ in }
            }
        }
    }

    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        out("viewDidAppear bounds=\(view.bounds.size) safe=\(view.safeAreaInsets)")
    }
    override func viewWillTransition(to size: CGSize, with coordinator: UIViewControllerTransitionCoordinator) {
        super.viewWillTransition(to: size, with: coordinator)
        out("willTransition to=\(size)")
    }
}

final class SceneDelegate: UIResponder, UIWindowSceneDelegate {
    var window: UIWindow?
    func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
        guard let windowScene = scene as? UIWindowScene else { return }
        let window = UIWindow(windowScene: windowScene)
        window.rootViewController = WebVC()
        window.makeKeyAndVisible()
        self.window = window
    }
}

@main
final class AppDelegate: UIResponder, UIApplicationDelegate {
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]? = nil) -> Bool { true }
    func application(_ application: UIApplication, configurationForConnecting connectingSceneSession: UISceneSession, options: UIScene.ConnectionOptions) -> UISceneConfiguration {
        let configuration = UISceneConfiguration(name: nil, sessionRole: connectingSceneSession.role)
        configuration.delegateClass = SceneDelegate.self
        return configuration
    }
}
