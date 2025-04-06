// 数学講座シリーズのデータ定義
const courses = [
  {
    id: "course-001",
    title: "微分積分入門講座",
    description: "高校生から大学初年度レベルの微分積分を、わかりやすく解説する講座シリーズです。",
    image: "/images/projects/project-01/cover-01.jpg",
    level: "初級〜中級",
    duration: "全5回",
    price: "無料",
    featured: true,
    topics: [
      "変化率と微分係数",
      "導関数と応用",
      "積分の基礎",
      "定積分と応用",
      "微分方程式入門"
    ],
    url: "/work/automate-design-handovers-with-a-figma-to-code-pipeline"
  },
  {
    id: "course-002",
    title: "数論入門 - 整数の不思議な世界",
    description: "整数の性質を探求する数論の世界へようこそ。素数の神秘から合同式まで、数論の基礎を楽しく学べる講座です。",
    image: "/images/projects/project-01/cover-02.jpg",
    level: "中級",
    duration: "全5回",
    price: "無料",
    featured: true,
    topics: [
      "素数の神秘",
      "最大公約数と互いに素",
      "合同式の世界",
      "二次剰余",
      "数論の現代的応用"
    ],
    url: "/work/building-once-ui-a-customizable-design-system"
  },
  {
    id: "course-003",
    title: "幾何学の魅力 - 図形で考える数学の世界",
    description: "点、線、面から始まる幾何学の世界。直感的に理解できる図形の性質から、高次元空間の抽象的な概念まで、幾何学の魅力を探ります。",
    image: "/images/projects/project-01/cover-03.jpg",
    level: "初級〜上級",
    duration: "全5回",
    price: "無料",
    featured: false,
    topics: [
      "ユークリッド幾何学の基礎",
      "座標幾何学",
      "三角法と計量幾何学",
      "非ユークリッド幾何学",
      "現代幾何学と応用"
    ],
    url: "/work/simple-portfolio-builder"
  },
  {
    id: "course-004",
    title: "線形代数学 - ベクトルと行列の世界",
    description: "現代数学の基礎となる線形代数学を、直感的な理解と応用例を交えて解説します。",
    image: "/images/projects/project-01/cover-04.jpg",
    level: "中級",
    duration: "全6回",
    price: "会員限定",
    featured: false,
    topics: [
      "ベクトル空間の基礎",
      "行列と線形変換",
      "行列式と逆行列",
      "固有値と固有ベクトル",
      "内積空間",
      "応用例（コンピュータグラフィックス、機械学習など）"
    ],
    url: "#"
  },
  {
    id: "course-005",
    title: "確率統計入門 - データの背後にある数学",
    description: "日常生活からビジネス、科学研究まで幅広く使われる確率統計の基礎を学びます。",
    image: "/images/projects/project-01/cover-01.jpg",
    level: "初級〜中級",
    duration: "全4回",
    price: "会員限定",
    featured: false,
    topics: [
      "確率の基礎概念",
      "確率分布と期待値",
      "統計的推測",
      "データ分析の実践"
    ],
    url: "#"
  }
];

// 講座をランダムに取得する関数
function getRandomCourse() {
  const randomIndex = Math.floor(Math.random() * courses.length);
  return courses[randomIndex];
}

// 無料講座のみを取得する関数
function getFreeCourses() {
  return courses.filter(course => course.price === "無料");
}

// 会員限定講座のみを取得する関数
function getMemberOnlyCourses() {
  return courses.filter(course => course.price === "会員限定");
}

// レベル別に講座を取得する関数
function getCoursesByLevel(level) {
  return courses.filter(course => course.level.includes(level));
}

// おすすめ講座を取得する関数
function getFeaturedCourses() {
  return courses.filter(course => course.featured);
}

export { 
  courses, 
  getRandomCourse, 
  getFreeCourses, 
  getMemberOnlyCourses, 
  getCoursesByLevel,
  getFeaturedCourses 
};
