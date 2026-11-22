import SwiftUI
import UserNotifications

@main
struct YZGundemiApp: App {
    @UIApplicationDelegateAdaptor(AppDelegate.self) private var appDelegate
    @StateObject private var router = Router.shared
    @StateObject private var saved = SavedStore()
    @Environment(\.scenePhase) private var scenePhase

    var body: some Scene {
        WindowGroup {
            RootView()
                .environmentObject(router)
                .environmentObject(saved)
                .tint(Color.accentColor)
        }
        .onChange(of: scenePhase) { _, phase in
            // Uygulama arka plana geçince bir sonraki haber kontrolü planlanır
            if phase == .background { NewsChecker.scheduleRefresh() }
        }
        .backgroundTask(.appRefresh(NewsChecker.taskID)) {
            NewsChecker.scheduleRefresh()
            await NewsChecker.check()
        }
    }
}

/// Bildirime dokununca ilgili haberi açar.
final class AppDelegate: NSObject, UIApplicationDelegate, UNUserNotificationCenterDelegate {
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]? = nil) -> Bool {
        UNUserNotificationCenter.current().delegate = self
        return true
    }

    func userNotificationCenter(_ center: UNUserNotificationCenter, willPresent notification: UNNotification) async -> UNNotificationPresentationOptions {
        [.banner, .list, .sound]
    }

    func userNotificationCenter(_ center: UNUserNotificationCenter, didReceive response: UNNotificationResponse) async {
        if let s = response.notification.request.content.userInfo["url"] as? String, let url = URL(string: s) {
            await MainActor.run { Router.shared.open(url) }
        }
    }
}

/// Sekmeler arası geçiş ve "şu haberi aç" istekleri.
@MainActor
final class Router: ObservableObject {
    static let shared = Router()
    enum Tab: Hashable { case news, saved, settings }
    @Published var tab: Tab = .news
    @Published var pendingURL: URL?

    func open(_ url: URL) {
        tab = .news
        pendingURL = url
    }
}

struct RootView: View {
    @EnvironmentObject private var router: Router

    var body: some View {
        TabView(selection: $router.tab) {
            NewsTab()
                .tabItem { Label("Haberler", systemImage: "newspaper") }
                .tag(Router.Tab.news)
            SavedView()
                .tabItem { Label("Kaydedilenler", systemImage: "bookmark") }
                .tag(Router.Tab.saved)
            SettingsView()
                .tabItem { Label("Ayarlar", systemImage: "gearshape") }
                .tag(Router.Tab.settings)
        }
    }
}
