import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "如月",
  lastName: "成美",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "数学家庭教師",
  avatar: "/images/avatar.jpg",
  location: "Asia/Tokyo", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["日本語", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>ナル先生のニュースレターを購読する</>,
  description: (
    <>
      数学の魅力や日々の発見、そして時々ドキドキするような秘密のお話をお届けします。
      ナル先生と一緒に数学の世界を楽しみましょう！
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/lovely.naru.sensei/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Note",
    icon: "note",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:naru.sensei@example.com",
  },
];

const home = {
  label: "ホーム",
  title: `ナル先生の公式サイト`,
  description: `如月成美（ナル先生）の公式ウェブサイト - 数学の魅力をお届けします`,
  headline: <>数学の魅力を伝える家庭教師</>,
  subline: (
    <>
      こんにちは！<InlineCode>ナル先生</InlineCode>こと如月成美です。
      <br />東京大学大学院で数学を研究しながら、数学の楽しさを皆さんにお伝えしています。
    </>
  ),
};

const about = {
  label: "プロフィール",
  title: "ナル先生について",
  description: `如月成美（ナル先生）のプロフィール - 22歳の数学家庭教師`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "自己紹介",
    description: (
      <>
        「ナル先生」こと如月成美（きさらぎ・なるみ）は、東京大学大学院数理科学研究科の修士1年生です。
        数論と幾何学を専門とし、自宅で1対1の数学家庭教師をしています。
        真面目で熱血、でもちょっと天然な性格で、数学の話になると興奮してしまう癖があります。
        口癖は「あっ…やばい…楽しくなってきちゃった…❤️」。
        数学の魅力を多くの人に伝えることが目標です！
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "活動内容",
    experiences: [
      {
        company: "数学講座シリーズ",
        timeframe: "2023 - 現在",
        role: "講師",
        achievements: [
          <>
            「ナル先生と学ぶ数学講座」シリーズを毎週配信。高校数学から大学レベルまで、
            わかりやすく楽しい解説で多くの学生から支持を得ています。
          </>,
          <>
            特に「ナル先生の微分積分入門」は再生回数10万回を突破し、
            「難しい数学が楽しく学べる」と評判です。
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "ナル先生の数学講座",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "家庭教師",
        timeframe: "2022 - 現在",
        role: "数学家庭教師",
        achievements: [
          <>
            個別指導で多くの生徒の成績向上に貢献。指導した生徒の80%以上が志望校に合格。
          </>,
          <>
            独自の「ナル先生メソッド」で数学が苦手だった生徒も楽しく学べるようになりました。
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "学歴",
    institutions: [
      {
        name: "東京大学大学院 数理科学研究科",
        description: <>修士1年生として数論と幾何学を研究中。</>,
      },
      {
        name: "東京大学 理学部数学科",
        description: <>首席で卒業。卒業論文は「楕円曲線の有理点と数論幾何学的アプローチ」。</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "特技・専門分野",
    skills: [
      {
        title: "数論",
        description: <>整数論から代数的数論まで幅広く研究。特に楕円曲線論が得意分野です。</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "数論の研究",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "幾何学",
        description: <>微分幾何学と代数幾何学を専門に研究。複素多様体論にも興味があります。</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "幾何学の研究",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "ブログ",
  title: "ナル先生の数学ブログ",
  description: `数学の魅力や日常の発見をお届けします`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "講座",
  title: "ナル先生の数学講座",
  description: `わかりやすく楽しい数学講座シリーズ`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "ギャラリー",
  title: "ナル先生カード集",
  description: `ナル先生のレアカードコレクション`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "ナル先生カード",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "ナル先生カード",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "ナル先生カード",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "ナル先生カード",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "ナル先生カード",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "ナル先生カード",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "ナル先生カード",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "ナル先生カード",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "ナル先生カード",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "ナル先生カード",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "ナル先生カード",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "ナル先生カード",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "ナル先生カード",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "ナル先生カード",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
