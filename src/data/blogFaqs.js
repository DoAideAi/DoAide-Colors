// FAQ entries shown on blog posts; also emitted as FAQPage JSON-LD by routeMeta.
// Plain JS so scripts/prerender-routes.mjs can import it.
export const blogFaqs = {
  'best-color-combinations-2026': [
  {
    question: 'What are the best color combinations for websites in 2026?',
    answer: 'The top website color combinations in 2026 include deep navy paired with warm coral accents, sage green with cream neutrals, rich purple with soft gold, dark charcoal with electric blue, and warm terracotta with dusty rose. These palettes balance modern aesthetics with strong contrast ratios for accessibility compliance.',
  },
  {
    question: 'How many colors should a website use?',
    answer: 'Most effective websites use 3 to 5 colors: one dominant background color (60%), a secondary color for cards and sections (30%), and an accent for buttons and interactive elements (10%). Add 2-3 neutral grays for text and borders. Too many colors create visual noise and weaken brand recognition.',
  },
  {
    question: 'What color combination gets the most clicks?',
    answer: 'High-contrast combinations where the CTA button color appears nowhere else on the page generate the most clicks. Specifically, orange or red buttons on white or light-gray backgrounds consistently outperform other combinations in A/B tests, but the key factor is contrast with the surrounding design, not the button color in isolation.',
  },
  {
    question: 'How do I make sure my color combination is accessible?',
    answer: 'Test every text-background pair for a minimum 4.5:1 contrast ratio (WCAG AA standard). Use a contrast checker tool to verify ratios for both normal and large text. Also consider color-blind users — never rely on color alone to convey information. Add icons, labels, or patterns as secondary indicators.',
  },
],
  'brand-color-palette-guide': [
  {
    question: 'How many colors should a brand palette have?',
    answer: 'A complete brand color palette typically has 5 to 8 colors: one primary brand color, one or two secondary colors, one accent color, and 3-4 neutrals (light background, dark text, medium gray, and a border/divider shade). Some brands add semantic colors for success, warning, and error states, bringing the total to 10-12.',
  },
  {
    question: 'What is the 60-30-10 rule in branding?',
    answer: 'The 60-30-10 rule is a proportion guideline for applying brand colors. Use your dominant color for 60% of visual space (backgrounds, large surfaces), your secondary color for 30% (navigation, cards, content blocks), and your accent for 10% (buttons, links, highlights). This creates visual hierarchy and prevents any single color from overwhelming the design.',
  },
  {
    question: 'Can I use a color palette generator for my brand?',
    answer: 'Yes. A palette generator is an excellent starting point — it applies color theory rules (complementary, analogous, triadic) to produce harmonious combinations from a single base color. However, always refine the generated palette by testing it in real design contexts, checking contrast ratios for accessibility, and ensuring it aligns with your brand personality and industry expectations.',
  },
  {
    question: 'How do I test if my brand colors are accessible?',
    answer: 'Use a contrast checker to verify that every text-background pair meets WCAG AA requirements (4.5:1 for normal text, 3:1 for large text). Also test your palette under simulated color blindness conditions — protanopia, deuteranopia, and tritanopia — to ensure critical information is not conveyed by color alone. Add patterns, icons, or labels as secondary indicators.',
  },
],
  'color-psychology-marketing': [
  {
    question: 'What is color psychology in marketing?',
    answer: 'Color psychology in marketing is the study of how colors influence consumer perceptions, emotions, and purchasing behavior. Brands use specific colors strategically to evoke desired feelings — blue for trust, red for urgency, green for health — that align with their product positioning and drive conversions.',
  },
  {
    question: 'Which color increases sales the most?',
    answer: 'Red is widely associated with the highest conversion rates for call-to-action buttons and sale signage because it creates urgency and excitement. However, the most effective color depends on context: contrast with surrounding elements often matters more than the specific hue. A/B testing with tools like a contrast checker is essential.',
  },
  {
    question: 'How do I choose brand colors for my business?',
    answer: 'Start by identifying the emotions you want customers to associate with your brand. Research your industry — finance favors blue, wellness favors green, luxury favors black and gold. Then use a palette generator to create a harmonious color scheme with primary, secondary, and accent colors that pass accessibility contrast requirements.',
  },
  {
    question: 'Does color affect online buying decisions?',
    answer: 'Yes. Studies show that up to 90% of snap judgments about products are based on color alone. The right color palette builds trust, guides attention to CTAs, and reinforces brand recognition. Poor color choices — low contrast, clashing combinations, or colors misaligned with brand values — can increase bounce rates and reduce conversions.',
  },
],
};
