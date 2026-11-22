import BackgroundTasks
import Foundation
import UserNotifications

/// Arka planda sitenin son haberler akışına bakar, yeni haber varsa yerel bildirim gösterir.
/// Sunucu ve push anahtarı gerekmez; ancak iOS arka plan yenilemesini kendi takvimine göre çalıştırır
/// (genellikle saatte bir ile birkaç saatte bir arası), bu yüzden bildirimler anlık değildir.
enum NewsChecker {
    static let taskID = "com.yzgundemi.app.yenihaber"
    static let feedURL = URL(string: "https://www.yzgundemi.com/uygulama/son-haberler.json")!
    static let enabledKey = "bildirim"
    private static let seenKey = "gorulenHaberler"

    struct Feed: Decodable { let items: [Item] }
    struct Item: Decodable {
        let id: String
        let title: String
        let category: String
        let url: String
    }

    static func scheduleRefresh() {
        guard UserDefaults.standard.bool(forKey: enabledKey) else { return }
        let request = BGAppRefreshTaskRequest(identifier: taskID)
        request.earliestBeginDate = Date(timeIntervalSinceNow: 30 * 60)
        try? BGTaskScheduler.shared.submit(request)
    }

    /// Bildirim izni ister; izin verilirse mevcut haberleri "görüldü" sayar (ilk açılışta eski haberler için bildirim gelmez).
    static func enable() async -> Bool {
        let granted = (try? await UNUserNotificationCenter.current().requestAuthorization(options: [.alert, .sound, .badge])) ?? false
        UserDefaults.standard.set(granted, forKey: enabledKey)
        if granted {
            await check()
            scheduleRefresh()
        }
        return granted
    }

    static func check() async {
        guard UserDefaults.standard.bool(forKey: enabledKey) else { return }
        guard let response = try? await URLSession.shared.data(from: feedURL),
              let feed = try? JSONDecoder().decode(Feed.self, from: response.0) else { return }

        let stored = UserDefaults.standard.stringArray(forKey: seenKey)
        let seen = Set(stored ?? [])
        let fresh = feed.items.filter { !seen.contains($0.id) }
        UserDefaults.standard.set(Array(feed.items.prefix(100).map(\.id)), forKey: seenKey)
        guard stored != nil, !fresh.isEmpty else { return }

        let center = UNUserNotificationCenter.current()
        for item in fresh.prefix(3) {
            let content = UNMutableNotificationContent()
            content.title = item.category.isEmpty ? "YZ Gündemi" : item.category
            content.body = item.title
            content.sound = .default
            content.threadIdentifier = "haberler"
            content.userInfo = ["url": item.url]
            try? await center.add(UNNotificationRequest(identifier: "haber-\(item.id)", content: content, trigger: nil))
        }
        if fresh.count > 3 {
            let content = UNMutableNotificationContent()
            content.title = "YZ Gündemi"
            content.body = "\(fresh.count - 3) yeni haber daha yayında."
            content.threadIdentifier = "haberler"
            content.userInfo = ["url": "https://www.yzgundemi.com/"]
            try? await center.add(UNNotificationRequest(identifier: "haber-ozet-\(Date().timeIntervalSince1970)", content: content, trigger: nil))
        }
    }
}
