import UIKit

func sizeClass(_ s: UIUserInterfaceSizeClass) -> String {
    switch s {
    case .compact: return "C"
    case .regular: return "R"
    default: return "?"
    }
}

func orient(_ o: UIInterfaceOrientation) -> String {
    switch o {
    case .portrait: return "portrait"
    case .portraitUpsideDown: return "upsideDown"
    case .landscapeLeft: return "landscapeLeft"
    case .landscapeRight: return "landscapeRight"
    default: return "unknown(\(o.rawValue))"
    }
}

func deviceOrient(_ o: UIDeviceOrientation) -> String {
    switch o {
    case .portrait: return "portrait"
    case .portraitUpsideDown: return "upsideDown"
    case .landscapeLeft: return "landscapeLeft"
    case .landscapeRight: return "landscapeRight"
    case .faceUp: return "faceUp"
    case .faceDown: return "faceDown"
    default: return "unknown(\(o.rawValue))"
    }
}

@MainActor
func describe(_ window: UIWindow?, _ tag: String) -> String {
    guard let window, let scene = window.windowScene else { return "PROBE \(tag) no window/scene" }
    let screen = scene.screen
    let st = screen.traitCollection
    let wt = window.traitCollection
    let main = UIScreen.main
    var lines = [String]()
    lines.append("PROBE \(tag) t=\(Date().timeIntervalSince1970)")
    lines.append("PROBE   window.bounds=\(window.bounds.size) traits h=\(sizeClass(wt.horizontalSizeClass)) v=\(sizeClass(wt.verticalSizeClass)) idiom=\(wt.userInterfaceIdiom.rawValue) scale=\(wt.displayScale)")
    lines.append("PROBE   scene.interfaceOrientation=\(orient(scene.interfaceOrientation)) coordSpace=\(scene.coordinateSpace.bounds.size)")
    if #available(iOS 26.0, *) {
        let g = scene.effectiveGeometry
        lines.append("PROBE   effectiveGeometry.interfaceOrientation=\(orient(g.interfaceOrientation)) coordSpace=\(g.coordinateSpace.bounds.size) locked=\(g.isInterfaceOrientationLocked)")
    }
    lines.append("PROBE   scene.screen bounds=\(screen.bounds.size) native=\(screen.nativeBounds.size) scale=\(screen.scale) traits h=\(sizeClass(st.horizontalSizeClass)) v=\(sizeClass(st.verticalSizeClass)) idiom=\(st.userInterfaceIdiom.rawValue)")
    lines.append("PROBE   UIScreen.main bounds=\(main.bounds.size) native=\(main.nativeBounds.size) sameAsScene=\(main === screen) screensCount=\(UIScreen.screens.count)")
    lines.append("PROBE   device.orientation=\(deviceOrient(UIDevice.current.orientation)) idiom=\(UIDevice.current.userInterfaceIdiom.rawValue) model=\(UIDevice.current.model)")
    lines.append("PROBE   safeArea=\(window.safeAreaInsets)")
    return lines.joined(separator: "\n")
}

@MainActor
func log(_ window: UIWindow?, _ tag: String) {
    let text = describe(window, tag)
    print(text)
    fflush(stdout)
    (window?.rootViewController as? ProbeViewController)?.label.text = text.replacingOccurrences(of: "PROBE ", with: "")
}

final class ProbeViewController: UIViewController {
    let label = UILabel()

    override var supportedInterfaceOrientations: UIInterfaceOrientationMask { .portrait }

    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = .systemYellow
        label.numberOfLines = 0
        label.font = .monospacedSystemFont(ofSize: 11, weight: .regular)
        label.textColor = .black
        label.translatesAutoresizingMaskIntoConstraints = false
        view.addSubview(label)
        NSLayoutConstraint.activate([
            label.leadingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.leadingAnchor, constant: 8),
            label.trailingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.trailingAnchor, constant: -8),
            label.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor, constant: 8),
        ])
    }

    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        log(view.window, "viewDidAppear")
    }

    override func viewWillTransition(to size: CGSize, with coordinator: UIViewControllerTransitionCoordinator) {
        super.viewWillTransition(to: size, with: coordinator)
        print("PROBE viewWillTransition to=\(size)")
        log(view.window, "willTransition(before)")
        coordinator.animate(alongsideTransition: nil) { [weak self] _ in
            log(self?.view.window, "didTransition")
        }
    }

    override func traitCollectionDidChange(_ previousTraitCollection: UITraitCollection?) {
        super.traitCollectionDidChange(previousTraitCollection)
        log(view.window, "traitCollectionDidChange")
    }
}

final class SceneDelegate: UIResponder, UIWindowSceneDelegate {
    var window: UIWindow?

    func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
        guard let windowScene = scene as? UIWindowScene else { return }
        let window = UIWindow(windowScene: windowScene)
        window.rootViewController = ProbeViewController()
        window.makeKeyAndVisible()
        self.window = window
        log(window, "willConnect")
        Timer.scheduledTimer(withTimeInterval: 5, repeats: true) { [weak self] _ in
            MainActor.assumeIsolated { log(self?.window, "tick") }
        }
        if ProcessInfo.processInfo.environment["PROBE_KVC"] == "1" {
            DispatchQueue.main.asyncAfter(deadline: .now() + 3) {
                print("PROBE kvc: setting UIDevice orientation via KVC")
                UIDevice.current.setValue(UIDeviceOrientation.portrait.rawValue, forKey: "orientation")
                UIViewController.attemptRotationToDeviceOrientation()
                print("PROBE kvc: survived")
                fflush(stdout)
            }
        }
    }

    func windowScene(_ windowScene: UIWindowScene, didUpdate previousCoordinateSpace: UICoordinateSpace, interfaceOrientation previousInterfaceOrientation: UIInterfaceOrientation, traitCollection previousTraitCollection: UITraitCollection) {
        log(window, "scene.didUpdate(prevOrientation=\(orient(previousInterfaceOrientation)))")
    }

    func sceneDidDisconnect(_ scene: UIScene) {
        print("PROBE sceneDidDisconnect")
        fflush(stdout)
    }
}

@main
final class AppDelegate: UIResponder, UIApplicationDelegate {
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]? = nil) -> Bool {
        print("PROBE didFinishLaunching")
        UIDevice.current.beginGeneratingDeviceOrientationNotifications()
        NotificationCenter.default.addObserver(forName: UIDevice.orientationDidChangeNotification, object: nil, queue: .main) { _ in
            print("PROBE orientationDidChange device=\(deviceOrient(UIDevice.current.orientation))")
            fflush(stdout)
        }
        return true
    }

    func application(_ application: UIApplication, configurationForConnecting connectingSceneSession: UISceneSession, options: UIScene.ConnectionOptions) -> UISceneConfiguration {
        let configuration = UISceneConfiguration(name: nil, sessionRole: connectingSceneSession.role)
        configuration.delegateClass = SceneDelegate.self
        return configuration
    }
}
