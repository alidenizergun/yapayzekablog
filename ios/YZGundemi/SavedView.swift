import SwiftUI

struct SavedItem: Codable, Identifiable, Hashable {
    var id: String { url }
    let url: String
    let title: String
    let savedAt: Date
}

/// Kaydedilen haberler yalnızca bu telefonda tutulur (sunucuya gönderilmez).
@MainActor
final class SavedStore: ObservableObject {
    private static let key = "kaydedilenler"
    @Published private(set) var items: [SavedItem] = []

    init() {
        if let data = UserDefaults.standard.data(forKey: Self.key),
           let list = try? JSONDecoder().decode([SavedItem].self, from: data) {
            items = list
        }
    }

    func contains(_ url: URL) -> Bool { items.contains { $0.url == url.absoluteString } }

    func toggle(url: URL, title: String) {
        if contains(url) {
            items.removeAll { $0.url == url.absoluteString }
        } else {
            items.insert(SavedItem(url: url.absoluteString, title: title, savedAt: .now), at: 0)
        }
        persist()
    }

    func remove(at offsets: IndexSet) {
        items.remove(atOffsets: offsets)
        persist()
    }

    private func persist() {
        if let data = try? JSONEncoder().encode(items) { UserDefaults.standard.set(data, forKey: Self.key) }
    }
}

struct SavedView: View {
    @EnvironmentObject private var saved: SavedStore
    @EnvironmentObject private var router: Router

    var body: some View {
        NavigationStack {
            Group {
                if saved.items.isEmpty {
                    ContentUnavailableView(
                        "Kaydedilen haber yok",
                        systemImage: "bookmark",
                        description: Text("Bir haberi okurken alttaki yer işareti düğmesine dokunun; sonra buradan okuyabilirsiniz.")
                    )
                } else {
                    List {
                        ForEach(saved.items) { item in
                            Button {
                                if let url = URL(string: item.url) { router.open(url) }
                            } label: {
                                VStack(alignment: .leading, spacing: 4) {
                                    Text(item.title).font(.headline).foregroundStyle(.primary).multilineTextAlignment(.leading)
                                    Text(item.savedAt, format: .dateTime.day().month(.wide).year())
                                        .font(.subheadline).foregroundStyle(.secondary)
                                }
                                .padding(.vertical, 4)
                            }
                        }
                        .onDelete(perform: saved.remove)
                    }
                    .listStyle(.plain)
                }
            }
            .navigationTitle("Kaydedilenler")
        }
    }
}
