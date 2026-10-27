import { Link } from 'react-router-dom';
import { blogFaqs } from '../../data/blogFaqs';

export default function BrandColorPaletteGuide() {
  const faqData = blogFaqs['brand-color-palette-guide'];

  return (
    <div>
      <article className="max-w-3xl mx-auto">
        <Link to="/blog" className="text-sm text-gray-400 hover:text-brand-teal transition-colors no-underline mb-6 inline-block">&larr; Back to Blog</Link>

        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 leading-tight">
            How to Create a Brand Color Palette: Step-by-Step Guide
          </h1>
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <span>October 10, 2026</span>
            <span>|</span>
            <span>11 min read</span>
          </div>
        </header>

        <div className="prose-custom space-y-6 text-gray-600 leading-relaxed">
          <p>
            A brand color palette is not a mood board exercise — it is a strategic decision that affects every customer touchpoint from your website to your packaging, email templates, social graphics, and investor decks. Companies like Coca-Cola, Tiffany, and Spotify are inseparable from their colors because those colors were chosen deliberately and applied consistently. This guide walks you through the same process, step by step, using free tools you can open right now.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Step 1: Define Your Brand Personality</h2>
          <p>
            Before you pick a single color, write down three to five adjectives that describe how you want customers to feel when they interact with your brand. Are you bold or calm? Playful or serious? Premium or accessible? These adjectives become the filter through which every color decision passes.
          </p>
          <p>
            Map your adjectives to the color-emotion spectrum. Bold and energetic brands lean toward warm colors — red, orange, yellow. Calm and trustworthy brands gravitate toward cool tones — blue, teal, green. Premium brands often use dark neutrals, muted jewel tones, or metallic accents. Playful brands embrace bright, saturated palettes. If your personality spans two of these categories — say, trustworthy but also innovative — your palette will blend cool primary colors with a warmer accent.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Step 2: Research Your Industry</h2>
          <p>
            Your color palette does not exist in a vacuum — it sits alongside competitors, partners, and industry conventions. Research serves two purposes: understanding what customers expect and finding opportunities to differentiate.
          </p>
          <p>
            Use our <Link to="/extract" className="text-brand-teal hover:underline">Image Extractor</Link> to pull color palettes from competitor websites and marketing materials. Screenshot their homepages and drop the images into the tool — you will get the exact hex codes they use. Compile these into a competitive landscape: which colors dominate your industry? Where is the gap?
          </p>
          <p>
            Conventional does not mean wrong. If every bank uses blue, there is a reason — blue signals trust, and customers expect it. But if you are building a neo-bank for Gen Z, breaking that convention with a bold purple or green could be exactly the differentiation you need. Know the rule before you break it.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Step 3: Choose Your Primary Color</h2>
          <p>
            Your primary color is the one color people will associate with your brand. It carries the most emotional weight and appears most frequently across your materials. Choose it based on the personality-color mapping from Step 1, filtered through the competitive research from Step 2.
          </p>
          <p>
            Open our <Link to="/picker" className="text-brand-teal hover:underline">Color Picker</Link> and experiment with hues. When you find a candidate, adjust its saturation and lightness to fine-tune the feel. Higher saturation feels more energetic and youthful; lower saturation feels more sophisticated and mature. Higher lightness feels more approachable; lower lightness feels more authoritative.
          </p>
          <p>
            Do not use a color someone else owns. Tiffany blue (<code className="text-gray-700 bg-gray-100 px-1.5 py-0.5 rounded">#0ABAB5</code>), Coca-Cola red (<code className="text-gray-700 bg-gray-100 px-1.5 py-0.5 rounded">#F40009</code>), and UPS brown (<code className="text-gray-700 bg-gray-100 px-1.5 py-0.5 rounded">#644117</code>) are strongly associated with their owners. Check our <Link to="/brands" className="text-brand-teal hover:underline">Brand Colors</Link> reference to make sure your choice does not overlap with a major competitor.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Step 4: Build Secondary Colors with Harmony Rules</h2>
          <p>
            Once you have a primary color, use color harmony to generate secondary colors that are mathematically guaranteed to look good together. This is where most DIY branding efforts go wrong — people pick colors they personally like rather than colors that relate to each other on the color wheel.
          </p>
          <p>
            Open our <Link to="/palette" className="text-brand-teal hover:underline">Palette Generator</Link>, enter your primary color, and try each harmony mode:
          </p>
          <ul className="list-disc pl-5 space-y-3">
            <li><strong className="text-gray-900">Complementary</strong> — your primary plus the color directly opposite it on the wheel. Maximum contrast and energy. Good for brands that want to be bold and distinctive.</li>
            <li><strong className="text-gray-900">Analogous</strong> — your primary plus its neighbors on the wheel. Harmonious and cohesive. Good for brands that want to feel calm and unified.</li>
            <li><strong className="text-gray-900">Triadic</strong> — three colors evenly spaced around the wheel. Balanced and vibrant. Good for brands with multiple product lines or categories that need visual separation.</li>
            <li><strong className="text-gray-900">Split-Complementary</strong> — your primary plus the two colors adjacent to its complement. The contrast of complementary with less tension. The safest bet for most brands.</li>
          </ul>
          <p>
            Pick the harmony that best matches your brand personality. If you chose "bold and innovative" in Step 1, complementary or triadic will serve you well. If you chose "calm and reliable," analogous is your friend.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Step 5: Add an Accent Color</h2>
          <p>
            Your accent color is the workhorse of interaction design. It marks buttons, links, active states, notifications, and anything the user needs to notice or click. The accent should satisfy two requirements: it must contrast strongly with both your primary and secondary colors, and it must not be confused with semantic colors (green for success, red for errors).
          </p>
          <p>
            If your primary and secondary colors are cool-toned, a warm accent — orange, coral, gold — creates an unmistakable visual signal. If your palette is warm, a cool accent — teal, blue — achieves the same effect. Test the accent against your backgrounds using the <Link to="/contrast" className="text-brand-teal hover:underline">Contrast Checker</Link> to confirm it meets WCAG AA requirements.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Step 6: Define Your Neutral System</h2>
          <p>
            Neutrals do the heavy lifting in any design. They are the colors of text, backgrounds, borders, shadows, and disabled states — the scaffolding that supports your brand colors. A typical neutral system needs at least four shades:
          </p>
          <ul className="list-disc pl-5 space-y-3">
            <li><strong className="text-gray-900">Darkest neutral</strong> — for body text and headings. Not pure black (#000000), which is too harsh on screens; use a dark gray with a slight tint of your primary color, like <code className="text-gray-700 bg-gray-100 px-1.5 py-0.5 rounded">#1A1F2E</code> for a blue-tinted brand.</li>
            <li><strong className="text-gray-900">Medium neutral</strong> — for secondary text, labels, and captions. Around 50-60% lightness.</li>
            <li><strong className="text-gray-900">Light neutral</strong> — for borders, dividers, and subtle backgrounds. Around 85-90% lightness.</li>
            <li><strong className="text-gray-900">Lightest neutral</strong> — for page backgrounds. Not pure white (#FFFFFF) unless your brand demands it; a warm off-white or cool ice-white feels more polished.</li>
          </ul>
          <p>
            Generate these by taking your primary color, dropping the saturation to 5-15%, and creating a lightness ramp from 10% to 97%. This technique tints your entire neutral system with your brand color, creating subtle cohesion that pure grays cannot achieve. Use our <Link to="/converter" className="text-brand-teal hover:underline">Color Converter</Link> to work in HSL and fine-tune these values.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Step 7: Add Semantic Colors</h2>
          <p>
            Every digital product needs semantic colors for feedback states: success (green), warning (yellow/amber), error (red), and informational (blue). These are functional, not decorative — they must be instantly recognizable regardless of context.
          </p>
          <p>
            The challenge is making these semantic colors harmonize with your brand palette rather than clashing with it. The technique is simple: take the standard semantic hue (green ≈ 140°, yellow ≈ 45°, red ≈ 0°, blue ≈ 210°) and match the saturation and lightness to your brand colors. If your primary has 70% saturation and 45% lightness, apply the same values to your semantic hues. The result is a set of functional colors that feel native to your brand.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Step 8: Test Accessibility</h2>
          <p>
            Accessibility testing is not optional — it is a legal requirement in many jurisdictions and a moral imperative everywhere. Test every combination of text and background colors in your palette for WCAG AA compliance.
          </p>
          <p>
            Open our <Link to="/contrast" className="text-brand-teal hover:underline">Contrast Checker</Link> and test these pairs at minimum:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Body text on page background</li>
            <li>Body text on card/surface background</li>
            <li>Heading text on page background</li>
            <li>Button text on button color</li>
            <li>Link color on page background</li>
            <li>Each semantic color text on its background tint</li>
            <li>Placeholder text in input fields</li>
          </ul>
          <p>
            If any pair fails, adjust the lightness of the lighter color or the darkness of the darker color until the ratio passes 4.5:1 for normal text. Do not compromise on this step. Read our <Link to="/blog/wcag-color-contrast-guide" className="text-brand-teal hover:underline">WCAG Contrast Guide</Link> for a comprehensive walkthrough.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Step 9: Create Dark Mode Variants</h2>
          <p>
            In 2026, a brand palette that only works on light backgrounds is incomplete. Dark mode is expected by users and required by many app stores. Converting your palette to dark mode is not a simple inversion — it requires intentional adjustments.
          </p>
          <p>
            For dark mode, swap your lightest and darkest neutrals so text is light on dark backgrounds. Reduce the saturation of your brand colors by 10-20% — saturated colors on dark backgrounds cause eye strain and halation. Use elevation (progressively lighter surface colors) instead of shadows to create depth. Test contrast for every pair again — ratios change in dark mode.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Step 10: Document and Distribute</h2>
          <p>
            A palette that lives only in a designer's head dies when that designer leaves. Document your colors in a brand style guide that includes:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Every color's hex, RGB, HSL, and CMYK values (use our <Link to="/converter" className="text-brand-teal hover:underline">Color Converter</Link>)</li>
            <li>The role of each color (primary, secondary, accent, neutral, semantic)</li>
            <li>Usage rules — where each color should and should not be used</li>
            <li>Minimum contrast ratios and approved text-background pairings</li>
            <li>Light mode and dark mode variants</li>
            <li>CSS custom properties or design token names for development handoff</li>
          </ul>
          <p>
            Distribute the guide as a living document, not a PDF that will go stale. Update it as your brand evolves, and audit your digital properties quarterly to catch palette drift.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Common Mistakes to Avoid</h2>
          <ul className="list-disc pl-5 space-y-3">
            <li><strong className="text-gray-900">Choosing colors in isolation.</strong> A color that looks great on its own may clash with your other palette members. Always evaluate colors in context, together.</li>
            <li><strong className="text-gray-900">Ignoring print.</strong> If your brand appears on physical materials, verify that your digital colors have viable CMYK equivalents. Some vibrant screen colors cannot be reproduced in print.</li>
            <li><strong className="text-gray-900">Too many primary colors.</strong> One primary, one or two secondaries, one accent. More than that, and you dilute recognition. Think of the brands you know best — they are all associated with one color.</li>
            <li><strong className="text-gray-900">Skipping real-world testing.</strong> Your palette needs to work on phones in sunlight, on projectors in meeting rooms, and on monitors with different calibrations. Test beyond your own screen.</li>
          </ul>

          <div className="bg-white rounded-xl p-6 border border-gray-200 mt-10">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Start Building Your Brand Palette</h3>
            <p className="text-gray-500 mb-4">Enter your brand color, pick a harmony rule, and generate a complete palette with accessibility testing built in.</p>
            <Link to="/palette" className="btn-primary no-underline inline-block">
              Open Palette Generator
            </Link>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Frequently Asked Questions</h2>
          {faqData.map((faq, i) => (
            <div key={i} className="bg-white/30 rounded-xl p-5 border border-gray-200">
              <h3 className="text-base font-semibold text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-sm text-gray-500">{faq.answer}</p>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}
