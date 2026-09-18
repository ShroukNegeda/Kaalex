export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "turn-ideas-into-growth-ready-products",
    title: "How to turn ideas into growth-ready digital products",
    excerpt:
      "A practical framework for moving from a concept to a product that customers trust and teams can scale.",
    content:
      "Great digital products rarely begin with a perfect plan. They begin with a sharp problem, a clear user, and a disciplined process. At KAALEX, we start by validating the idea, outlining the user journey, and defining the business outcomes that matter most. Once the direction is clear, we turn concept into experience, then into a product that can be tested, improved, and scaled.\n\nThe winning formula is simple: clarify the goal, design around real user behavior, build with structure, and keep learning after launch. That is how a promising idea becomes a product with momentum.",
    category: "Product Strategy",
    readTime: "5 min read",
    date: "2026-09-10",
    image: "/images/portfolio/dev.png",
  },
  {
    id: "2",
    slug: "uiux-design-for-brand-trust",
    title: "Why UI/UX design is a growth engine, not a cosmetic layer",
    excerpt:
      "Strong design reduces friction, builds trust, and makes conversion easier across the customer journey.",
    content:
      "Design shapes how people feel about a brand before they speak with a salesperson or make a purchase. When a product feels intuitive, it removes hesitation and increases confidence. That is why UI/UX is not just a visual choice; it is a commercial one.\n\nWhen design is aligned with user intent, the journey becomes easier to understand, easier to navigate, and easier to trust. Clear information architecture, consistent flows, and well-placed calls to action often create measurable gains in conversion, retention, and customer satisfaction.",
    category: "UI/UX",
    readTime: "4 min read",
    date: "2026-08-29",
    image: "/images/portfolio/ui-ux.png",
  },
  {
    id: "3",
    slug: "wordPress-headless-content-system",
    title: "What a WordPress-powered publishing workflow can do for growth teams",
    excerpt:
      "A managed content workflow helps teams publish faster while keeping brand quality, SEO, and updates consistent.",
    content:
      "Content publishing is not just about writing articles. It is about operational consistency. A platform like WordPress can give marketing teams a faster publishing workflow, while a custom front-end can keep the experience polished and conversion-focused.\n\nThis setup is especially valuable when a company wants to publish thought leadership, case studies, and campaign pages without slowing down product or design work. When structure, content flow, and design are aligned, publishing becomes a growth asset rather than a bottleneck.",
    category: "Content Strategy",
    readTime: "6 min read",
    date: "2026-07-18",
    image: "/images/portfolio/media.png",
  },
];
