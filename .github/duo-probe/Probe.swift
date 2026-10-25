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
        "/Users/runner/work/Signal-iOS/Signal-iOS/.github/duo-probe/sb",
    ].compactMap { $0 }
    for c in candidates where FileManager.default.fileExists(atPath: c + "/iframe.html") { return URL(fileURLWithPath: c) }
    return URL(fileURLWithPath: candidates.last!)
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

final class WebVC: UIViewController {
    var web: WKWebView!
    let urls = [
        "probe://app/iframe.html?id=probe-duo--workspace&viewMode=story",
        "probe://app/iframe.html?id=probe-duo--creation&viewMode=story",
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
        web = WKWebView(frame: view.bounds, configuration: cfg)
        web.autoresizingMask = [.flexibleWidth, .flexibleHeight]
        if #available(iOS 16.4, *) { web.isInspectable = true }
        view.addSubview(web)
        out("root=\(scheme.root.path) exists=\(FileManager.default.fileExists(atPath: scheme.root.path + "/iframe.html"))")
        loadNext()
        Timer.scheduledTimer(withTimeInterval: 30, repeats: true) { [weak self] _ in
            MainActor.assumeIsolated { self?.loadNext() }
        }
    }
    func loadNext() {
        let u = urls[idx % urls.count]
        idx += 1
        out("load \(u) bounds=\(view.bounds.size) safe=\(view.safeAreaInsets) adjInset=\(web.scrollView.adjustedContentInset)")
        web.load(URLRequest(url: URL(string: u)!))
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
