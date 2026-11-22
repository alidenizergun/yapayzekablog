import SwiftUI
import UserNotifications

struct SettingsView: View {
    @AppStorage(NewsChecker.enabledKey) private var notificationsOn = false
    @State private var denied = false
    @Environment(\.openURL) private var openURL

    private let site = "https://www.yzgundemi.com"
    private var version: String {
        Bundle.main.object(forInfoDictionaryKey: "CFBundleShortVersionString") as? String ?? "1.0"
    }

    var body: some View {
        NavigationStack {
            Form {
                Section {
                    Toggle("Yeni haber bildirimleri", isOn: Binding(
                        get: { notificationsOn },
                        set: { on in
                            if on {
                                Task {
                                    let ok = await NewsChecker.enable()
                                    denied = !ok
                                }
                            } else {
                                notificationsOn = false
                            }
                        }
                    ))
                    if denied {
                        Button("Bildirim izni kapalı: Ayarlar'dan açın") {
                            if let url = URL(string: UIApplication.openSettingsURLString) { openURL(url) }
                        }
                    }
                } header: {
                    Text("Bildirimler")
                } footer: {
                    Text("Uygulama arka planda yeni haberleri kontrol eder. Kontrol sıklığını iOS belirler; bildirimler birkaç dakika ile birkaç saat arasında gecikebilir.")
                }

                Section("YZ Gündemi") {
                    Link("Siteyi Safari'de aç", destination: URL(string: site + "/")!)
                    Link("Hakkımızda", destination: URL(string: site + "/hakkimizda/")!)
                    Link("Hata bildir", destination: URL(string: site + "/hata-bildir/")!)
                    Link("Gizlilik", destination: URL(string: site + "/gizlilik/")!)
                }

                Section {
                    LabeledContent("Sürüm", value: version)
                } footer: {
                    Text("Yapay zeka gelişmeleri, her gün ve Türkçe.")
                }
            }
            .navigationTitle("Ayarlar")
            .task {
                // İzin Ayarlar'dan kapatıldıysa anahtar da kapalı görünsün
                let status = await UNUserNotificationCenter.current().notificationSettings().authorizationStatus
                if status == .denied && notificationsOn { notificationsOn = false; denied = true }
            }
        }
    }
}
