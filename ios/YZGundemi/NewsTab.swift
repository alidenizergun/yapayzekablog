import Combine
import SwiftUI
import WebKit

/// Sitenin tamamı uygulama içinde açılır; altta geri, ileri, kaydet ve paylaş düğmeleri vardır.
struct NewsTab: View {
    @EnvironmentObject private var router: Router
    @EnvironmentObject private var saved: SavedStore
    @StateObject private var web = WebModel()

    var body: some View {
        VStack(spacing: 0) {
            ZStack {
                WebView(model: web)
                    .ignoresSafeArea(edges: .horizontal)
                if web.failed {
                    OfflineView { web.reload() }
                }
            }
            if web.isLoading {
                ProgressView(value: web.progress)
                    .progressViewStyle(.linear)
                    .tint(Color.accentColor)
                    .frame(height: 2)
            }
            Divider()
            HStack {
                toolbarButton("chevron.backward", label: "Geri", disabled: !web.canGoBack) { web.webView.goBack() }
                toolbarButton("chevron.forward", label: "İleri", disabled: !web.canGoForward) { web.webView.goForward() }
                toolbarButton("house", label: "Ana sayfa", disabled: false) { web.load(WebModel.home) }
                toolbarButton(isSaved ? "bookmark.fill" : "bookmark", label: isSaved ? "Kaydedilenlerden çıkar" : "Haberi kaydet", disabled: !web.isArticle) {
                    if let url = web.url { saved.toggle(url: url, title: web.cleanTitle) }
                }
                if let url = web.url {
                    ShareLink(item: url, subject: Text(web.cleanTitle)) {
                        Image(systemName: "square.and.arrow.up").frame(maxWidth: .infinity, minHeight: 44)
                    }
                    .accessibilityLabel("Paylaş")
                } else {
                    toolbarButton("square.and.arrow.up", label: "Paylaş", disabled: true) {}
                }
            }
            .font(.system(size: 19, weight: .regular))
            .padding(.horizontal, 8)
            .background(.bar)
        }
        .onReceive(router.$pendingURL.compactMap { $0 }) { url in
            web.load(url)
            router.pendingURL = nil
        }
    }

    private var isSaved: Bool { web.url.map(saved.contains) ?? false }

    private func toolbarButton(_ icon: String, label: String, disabled: Bool, action: @escaping () -> Void) -> some View {
        Button(action: action) {
            Image(systemName: icon).frame(maxWidth: .infinity, minHeight: 44)
        }
        .disabled(disabled)
        .accessibilityLabel(label)
    }
}

struct OfflineView: View {
    let retry: () -> Void
    var body: some View {
        ContentUnavailableView {
            Label("Bağlantı yok", systemImage: "wifi.slash")
        } description: {
            Text("İnternet bağlantınızı kontrol edip tekrar deneyin. Kaydettiğiniz haberlerin listesi Kaydedilenler sekmesinde.")
        } actions: {
            Button("Tekrar dene", action: retry).buttonStyle(.borderedProminent)
        }
        .background(Color(.systemBackground))
    }
}

struct WebView: UIViewRepresentable {
    let model: WebModel
    func makeUIView(context: Context) -> WKWebView { model.webView }
    func updateUIView(_ uiView: WKWebView, context: Context) {}
}

@MainActor
final class WebModel: NSObject, ObservableObject, WKNavigationDelegate, WKUIDelegate {
    static let home = URL(string: "https://www.yzgundemi.com/")!
    static let ownHosts = ["yzgundemi.com", "www.yzgundemi.com"]

    let webView: WKWebView
    @Published var canGoBack = false
    @Published var canGoForward = false
    @Published var isLoading = false
    @Published var progress = 0.0
    @Published var title = ""
    @Published var url: URL?
    @Published var failed = false
    private var observers: [NSKeyValueObservation] = []

    override init() {
        let config = WKWebViewConfiguration()
        // Site, uygulamadan gelen ziyaretleri bu etiketle ayırt edebilir
        config.applicationNameForUserAgent = "YZGundemiApp/1.0"
        config.allowsInlineMediaPlayback = true
        webView = WKWebView(frame: .zero, configuration: config)
        super.init()
        webView.navigationDelegate = self
        webView.uiDelegate = self
        webView.allowsBackForwardNavigationGestures = true
        webView.isOpaque = false
        webView.backgroundColor = .systemBackground
        let refresh = UIRefreshControl()
        refresh.addTarget(self, action: #selector(pulled(_:)), for: .valueChanged)
        webView.scrollView.refreshControl = refresh

        observers = [
            webView.observe(\.canGoBack, options: [.initial, .new]) { [weak self] wv, _ in Task { @MainActor in self?.canGoBack = wv.canGoBack } },
            webView.observe(\.canGoForward, options: [.initial, .new]) { [weak self] wv, _ in Task { @MainActor in self?.canGoForward = wv.canGoForward } },
            webView.observe(\.isLoading, options: [.initial, .new]) { [weak self] wv, _ in Task { @MainActor in self?.isLoading = wv.isLoading } },
            webView.observe(\.estimatedProgress, options: [.new]) { [weak self] wv, _ in Task { @MainActor in self?.progress = wv.estimatedProgress } },
            webView.observe(\.title, options: [.new]) { [weak self] wv, _ in Task { @MainActor in self?.title = wv.title ?? "" } },
            webView.observe(\.url, options: [.new]) { [weak self] wv, _ in Task { @MainActor in self?.url = wv.url } },
        ]
        load(Self.home)
    }

    /// Yalnızca haber sayfaları kaydedilebilir.
    var isArticle: Bool {
        guard let path = url?.path else { return false }
        return path.hasPrefix("/haber/") || path.hasPrefix("/en/news/")
    }

    /// Sayfa başlığından site adı çıkarılır ("Başlık · YZ Gündemi" → "Başlık").
    var cleanTitle: String {
        for sep in [" · YZ Gündemi", " | YZ Gündemi", " - YZ Gündemi"] where title.hasSuffix(sep) {
            return String(title.dropLast(sep.count))
        }
        return title.isEmpty ? "YZ Gündemi" : title
    }

    func load(_ target: URL) {
        failed = false
        webView.load(URLRequest(url: target))
    }

    func reload() {
        failed = false
        if webView.url == nil { load(Self.home) } else { webView.reload() }
    }

    @objc private func pulled(_ control: UIRefreshControl) {
        reload()
        control.endRefreshing()
    }

    private static func isOwn(_ url: URL) -> Bool {
        guard let host = url.host?.lowercased() else { return false }
        return ownHosts.contains(host)
    }

    // Sitenin kendi sayfaları uygulamada, diğer siteler (kaynak bağlantıları) Safari'de açılır
    func webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction) async -> WKNavigationActionPolicy {
        guard let target = navigationAction.request.url, let scheme = target.scheme?.lowercased() else { return .cancel }
        if ["about", "blob", "data"].contains(scheme) { return .allow }
        if scheme == "http" || scheme == "https" {
            // Sayfa içi çerçeveler (video vb.) ve sitenin kendi sayfaları uygulamada kalır
            let mainFrame = navigationAction.targetFrame?.isMainFrame ?? true
            if !mainFrame || Self.isOwn(target) { return .allow }
        }
        // Başka siteler (kaynak bağlantıları), mailto: ve tel: dışarıda açılır
        _ = await UIApplication.shared.open(target)
        return .cancel
    }

    // target="_blank" bağlantıları
    func webView(_ webView: WKWebView, createWebViewWith configuration: WKWebViewConfiguration, for navigationAction: WKNavigationAction, windowFeatures: WKWindowFeatures) -> WKWebView? {
        if let target = navigationAction.request.url {
            if Self.isOwn(target) { webView.load(URLRequest(url: target)) } else { UIApplication.shared.open(target) }
        }
        return nil
    }

    func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) { failed = false }

    func webView(_ webView: WKWebView, didFailProvisionalNavigation navigation: WKNavigation!, withError error: Error) { handle(error) }

    func webView(_ webView: WKWebView, didFail navigation: WKNavigation!, withError error: Error) { handle(error) }

    private func handle(_ error: Error) {
        let code = (error as NSError).code
        if code == NSURLErrorCancelled || code == 102 /* çerçeve yüklemesi kesildi */ { return }
        failed = true
    }
}
