export type Service = {
  slug: string;
  icon: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  features: { title: string; description: string }[];
  process: { step: number; title: string; description: string }[];
};

export const services: Service[] = [
  {
    slug: "social-media-marketing",
    icon: "📱",
    title: "Social Media Management",
    tagline: "Grow louder. Connect deeper.",
    description:
      "We transform your social presence from a passive feed into a living brand engine — crafting platform-native content, building communities, and turning followers into loyal customers.",
    image:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=1200&auto=format&fit=crop&q=80",
    features: [
      {
        title: "Platform Strategy",
        description:
          "Tailored content plans for Instagram, TikTok, LinkedIn, X, and more — built around where your audience actually lives.",
      },
      {
        title: "Content Calendar",
        description:
          "Consistent, on-brand publishing schedules with copy, visuals, and hashtag research handled end-to-end.",
      },
      {
        title: "Community Management",
        description:
          "We respond, engage, and nurture your audience daily — turning comments into conversations and fans into advocates.",
      },
      {
        title: "Analytics & Reporting",
        description:
          "Monthly deep-dive reports with actionable insights on reach, engagement, and follower growth.",
      },
      {
        title: "Influencer Coordination",
        description:
          "We identify and manage partnerships with micro and macro influencers aligned with your niche.",
      },
      {
        title: "Trend Monitoring",
        description:
          "We stay on top of platform algorithm changes and cultural trends so your content never goes stale.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Brand Audit",
        description:
          "We analyze your current presence, competitors, and audience to identify gaps and opportunities.",
      },
      {
        step: 2,
        title: "Strategy Build",
        description:
          "We craft a platform-specific content strategy with tone, pillars, and posting frequency.",
      },
      {
        step: 3,
        title: "Content Production",
        description:
          "Our team creates, designs, and writes all content — ready for your approval before publishing.",
      },
      {
        step: 4,
        title: "Publish & Engage",
        description:
          "We go live on schedule and actively manage your community in real time.",
      },
      {
        step: 5,
        title: "Optimize & Scale",
        description:
          "Monthly reviews refine what's working and double down on top-performing content formats.",
      },
    ],
  },
  {
    slug: "seo",
    icon: "🔍",
    title: "SEO Optimization",
    tagline: "Be found first. Always.",
    description:
      "We engineer your search presence from the ground up — technical foundations, keyword architecture, and authority-building that moves you to page one and keeps you there.",
    image:
      "https://images.unsplash.com/photo-1674027001840-1a3e834eb73f?w=1200&auto=format&fit=crop&q=80",
    features: [
      { title: "Technical SEO Audit", description: "We fix crawl errors, site speed issues, Core Web Vitals, and schema markup that hold back your rankings." },
      { title: "Keyword Research", description: "Deep intent-based keyword mapping across informational, navigational, and commercial queries." },
      { title: "On-Page Optimization", description: "Meta tags, heading structures, internal linking, and content optimization for every key page." },
      { title: "Link Building", description: "White-hat outreach campaigns that earn high-authority backlinks from relevant publications." },
      { title: "Content SEO", description: "We produce blog posts and landing pages engineered to rank and convert simultaneously." },
      { title: "Rank Tracking", description: "Weekly position monitoring with competitor gap analysis so you always know where you stand." },
    ],
    process: [
      { step: 1, title: "Site Audit", description: "Full technical crawl and content review to establish a baseline and prioritize fixes." },
      { step: 2, title: "Keyword Mapping", description: "We assign target keywords to every page and identify new content opportunities." },
      { step: 3, title: "On-Page Fixes", description: "We implement all technical and content optimizations directly on your site." },
      { step: 4, title: "Authority Building", description: "Outreach campaigns secure backlinks from trusted sites in your industry." },
      { step: 5, title: "Monitor & Report", description: "Ongoing rank tracking and monthly reports showing traffic growth and ROI." },
    ],
  },
  {
    slug: "paid-ads",
    icon: "📢",
    title: "Paid Advertising",
    tagline: "Every dollar working harder.",
    description:
      "We run precision ad campaigns across Google, Meta, and TikTok that cut through the noise — targeting the right audience at the exact moment they're ready to act.",
    image:
      "https://images.unsplash.com/photo-1631270315847-f418bde47ca6?q=80&w=1200&auto=format&fit=crop",
    features: [
      { title: "Campaign Architecture", description: "Structured ad accounts with clear campaign, ad set, and creative hierarchies built for scale." },
      { title: "Audience Targeting", description: "Custom and lookalike audiences, interest layering, and retargeting funnels that convert." },
      { title: "Creative Strategy", description: "Ad copy and visual creative designed specifically for each platform's native behavior." },
      { title: "Budget Optimization", description: "Daily bid management and budget reallocation to maximize ROAS across all channels." },
      { title: "A/B Testing", description: "Continuous split testing of headlines, creatives, CTAs, and landing pages." },
      { title: "Conversion Tracking", description: "Full pixel and event setup so every conversion is attributed accurately." },
    ],
    process: [
      { step: 1, title: "Account Audit", description: "We review your existing campaigns (or set up from scratch) to identify waste and opportunity." },
      { step: 2, title: "Funnel Mapping", description: "We map your customer journey and build campaigns for awareness, consideration, and conversion." },
      { step: 3, title: "Creative Production", description: "Ad creatives and copy are produced and tested before budget is committed." },
      { step: 4, title: "Launch & Monitor", description: "Campaigns go live with daily performance monitoring and rapid response to data." },
      { step: 5, title: "Scale Winners", description: "Proven ad sets get scaled while underperformers are paused and iterated on." },
    ],
  },
  {
    slug: "branding",
    icon: "✦",
    title: "Branding & Identity",
    tagline: "Look like you mean it.",
    description:
      "We build brand identities that stop people mid-scroll — from naming and positioning to visual systems that scale beautifully across every touchpoint.",
    image:
      "https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?w=1200&auto=format&fit=crop&q=80",
    features: [
      { title: "Brand Strategy", description: "Positioning, archetype, tone of voice, and competitive differentiation defined with precision." },
      { title: "Logo Design", description: "Primary, secondary, and icon marks delivered in all formats — print-ready and pixel-perfect." },
      { title: "Color & Typography", description: "A complete visual language including color palette, type hierarchy, and usage rules." },
      { title: "Brand Guidelines", description: "A comprehensive style guide your entire team can use to stay consistent across all channels." },
      { title: "Collateral Design", description: "Business cards, decks, social templates, and email signatures all built to system." },
      { title: "Brand Naming", description: "Strategic naming workshops that produce memorable, ownable, and legally available names." },
    ],
    process: [
      { step: 1, title: "Discovery", description: "We run workshops to understand your vision, audience, values, and competitive landscape." },
      { step: 2, title: "Strategy", description: "Brand positioning, voice, and personality are defined and signed off before design begins." },
      { step: 3, title: "Concept Design", description: "Two or three distinct visual directions are presented with full rationale." },
      { step: 4, title: "Refinement", description: "Your chosen direction is refined through feedback rounds until it's exactly right." },
      { step: 5, title: "Delivery", description: "Final files, guidelines, and templates handed over in a complete brand package." },
    ],
  },
  {
    slug: "content-creation",
    icon: "✍️",
    title: "Content Creation",
    tagline: "Stories that make people act.",
    description:
      "We produce written, visual, and video content that earns attention, builds trust, and drives measurable engagement — at scale, on brand, always on time.",
    image:
      "https://images.unsplash.com/photo-1764664035176-8e92ff4f128e?w=1200&auto=format&fit=crop&q=80",
    features: [
      { title: "Blog & Article Writing", description: "Long-form content that ranks, educates, and positions your brand as a category leader." },
      { title: "Video Production", description: "Short-form reels, explainer videos, and brand films crafted for maximum retention." },
      { title: "Graphic Design", description: "Social graphics, infographics, and display assets that stop the scroll instantly." },
      { title: "Email Copy", description: "Newsletters and sequences with high open rates written to nurture and convert." },
      { title: "Copywriting", description: "Landing page, ad, and website copy engineered to persuade and convert." },
      { title: "Content Strategy", description: "Editorial calendars and content pillars aligned to your growth objectives." },
    ],
    process: [
      { step: 1, title: "Content Audit", description: "We assess what you have, what's working, and what's missing from your content ecosystem." },
      { step: 2, title: "Pillar Planning", description: "We define your content pillars and map topics to each stage of the buyer journey." },
      { step: 3, title: "Production", description: "Our writers, designers, and videographers produce content to brief on a rolling schedule." },
      { step: 4, title: "Review & Approve", description: "You review every piece before it goes live — we handle revisions quickly." },
      { step: 5, title: "Distribute & Measure", description: "We publish, promote, and track content performance to continuously improve output." },
    ],
  },
  {
    slug: "web-development",
    icon: "🎨",
    title: "Web Development",
    tagline: "Built to convert. Designed to impress.",
    description:
      "We build fast, beautiful websites that reflect your brand's ambition — from marketing sites and landing pages to full e-commerce experiences engineered for growth.",
    image:
      "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?w=1200&auto=format&fit=crop&q=80",
    features: [
      { title: "Custom Design", description: "Every site is designed from scratch — no templates, no compromise, tailored to your brand." },
      { title: "Next.js Development", description: "Blazing-fast, SEO-friendly builds on Next.js with server components and edge delivery." },
      { title: "CMS Integration", description: "Headless CMS setup (Sanity, Contentful, or similar) so your team can update content easily." },
      { title: "E-commerce", description: "Shopify or custom store builds optimized for product discovery and checkout conversion." },
      { title: "Performance Optimization", description: "Core Web Vitals optimization, image handling, and caching for top Lighthouse scores." },
      { title: "Ongoing Support", description: "Post-launch maintenance, updates, and feature development on a retainer basis." },
    ],
    process: [
      { step: 1, title: "Discovery & Scope", description: "We define goals, user flows, tech stack, and project timeline before a line is written." },
      { step: 2, title: "Design", description: "Wireframes and high-fidelity Figma designs are reviewed and approved before development." },
      { step: 3, title: "Development", description: "We build in sprints with regular staging previews so you always see progress." },
      { step: 4, title: "QA & Testing", description: "Cross-browser testing, mobile QA, performance audits, and accessibility checks." },
      { step: 5, title: "Launch & Handoff", description: "We deploy, monitor the launch, and train your team to manage the site confidently." },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}