// ナル先生カードコレクション定義
const cards = [
  {
    id: "card-001",
    title: "微分積分の女神",
    rarity: 5, // ハート数（レアリティ）: 1-5
    description: "「あっ…やばい…微分積分が楽しくなってきちゃった…❤️」",
    image: "/images/cards/card-placeholder.jpg",
    category: "講義中",
    releaseDate: "2025-04-01",
  },
  {
    id: "card-002",
    title: "真剣な眼差し",
    rarity: 3,
    description: "「この定理の美しさ、伝わるかな…？」",
    image: "/images/cards/card-placeholder.jpg",
    category: "講義中",
    releaseDate: "2025-04-02",
  },
  {
    id: "card-003",
    title: "黒板の前のナル先生",
    rarity: 4,
    description: "「今日は楕円曲線について説明するね！」",
    image: "/images/cards/card-placeholder.jpg",
    category: "講義中",
    releaseDate: "2025-04-03",
  },
  {
    id: "card-004",
    title: "放課後のナル先生",
    rarity: 2,
    description: "「今日の授業、どうだった？もっと質問ある？」",
    image: "/images/cards/card-placeholder.jpg",
    category: "日常",
    releaseDate: "2025-04-04",
  },
  {
    id: "card-005",
    title: "カフェでの研究",
    rarity: 3,
    description: "「この問題、面白いアプローチがありそう…」",
    image: "/images/cards/card-placeholder.jpg",
    category: "日常",
    releaseDate: "2025-04-05",
  },
  {
    id: "card-006",
    title: "図書館のナル先生",
    rarity: 4,
    description: "「数学の歴史って、ロマンがあるよね…」",
    image: "/images/cards/card-placeholder.jpg",
    category: "日常",
    releaseDate: "2025-04-06",
  },
  {
    id: "card-007",
    title: "興奮MAX！",
    rarity: 5,
    description: "「これは…！完全に証明できた！やった！❤️❤️❤️」",
    image: "/images/cards/card-placeholder.jpg",
    category: "特別",
    releaseDate: "2025-04-07",
  },
  {
    id: "card-008",
    title: "メガネをかけたナル先生",
    rarity: 4,
    description: "「メガネをかけると、ちょっと賢くなった気がする？」",
    image: "/images/cards/card-placeholder.jpg",
    category: "日常",
    releaseDate: "2025-04-08",
  },
  {
    id: "card-009",
    title: "お誕生日のナル先生",
    rarity: 5,
    description: "「今日は22歳になりました！お祝いありがとう！❤️」",
    image: "/images/cards/card-placeholder.jpg",
    category: "特別",
    releaseDate: "2025-04-09",
  },
  {
    id: "card-010",
    title: "夕暮れのナル先生",
    rarity: 3,
    description: "「今日も一日、数学を教えられて幸せだったな…」",
    image: "/images/cards/card-placeholder.jpg",
    category: "日常",
    releaseDate: "2025-04-10",
  },
  {
    id: "card-011",
    title: "研究室のナル先生",
    rarity: 4,
    description: "「この論文、すごく興味深い結果が出ているね！」",
    image: "/images/cards/card-placeholder.jpg",
    category: "講義中",
    releaseDate: "2025-04-11",
  },
  {
    id: "card-012",
    title: "困り顔のナル先生",
    rarity: 2,
    description: "「あれ？この証明、どこか間違えちゃったかな…？」",
    image: "/images/cards/card-placeholder.jpg",
    category: "日常",
    releaseDate: "2025-04-12",
  },
];

// カードをランダムに1枚取得する関数
function getRandomCard() {
  const randomIndex = Math.floor(Math.random() * cards.length);
  return cards[randomIndex];
}

// レアリティでカードをフィルタリングする関数
function getCardsByRarity(rarity) {
  return cards.filter(card => card.rarity === rarity);
}

// カテゴリでカードをフィルタリングする関数
function getCardsByCategory(category) {
  return cards.filter(card => card.category === category);
}

// 日付順にカードをソートする関数
function getSortedCardsByDate() {
  return [...cards].sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
}

export { cards, getRandomCard, getCardsByRarity, getCardsByCategory, getSortedCardsByDate };
