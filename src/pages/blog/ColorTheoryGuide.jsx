import { Link } from 'react-router-dom';

export default function ColorTheoryGuide() {
  return (
    <div>
      <article className="max-w-3xl mx-auto">
        <Link to="/blog" className="text-sm text-gray-400 hover:text-brand-teal transition-colors no-underline mb-6 inline-block">&larr; Back to Blog</Link>

        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 leading-tight">
            Color Theory for UI Design: How to Pick Colors That Work
          </h1>
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <span>October 5, 2026</span>
            <span>|</span>
            <span>10 min read</span>
          </div>
        </header>

        <div className="prose-custom space-y-6 text-gray-600 leading-relaxed">
          <p>
            Choosing colors for a UI is part science, part craft. Color theory gives you the science — a set of rules that reliably produce harmonious combinations. This guide covers the fundamentals and shows you how to apply them with modern design tools.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">The Color Wheel and HSL</h2>
          <p>
            Designers work in <strong className="text-gray-900">HSL</strong> (Hue, Saturation, Lightness) rather than HEX or RGB because it maps directly to how we think about color. Hue is the position on the color wheel (0–360°), saturation is intensity (0–100%), and lightness is brightness (0–100%).
          </p>
          <p>
            When you keep saturation and lightness constant and only rotate the hue, the resulting colors naturally relate to each other. This is the foundation of color harmonies.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Color Harmonies Explained</h2>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Complementary (180° apart)</h3>
          <p>
            Two colors directly opposite on the wheel create maximum contrast and visual energy. Use one as the dominant color and the other sparingly for accents — call-to-action buttons, alerts, or highlights. Avoid using them at equal weight; the result is jarring.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Analogous (30° apart)</h3>
          <p>
            Three to five colors adjacent on the wheel. These palettes feel calm and cohesive — ideal for backgrounds, cards, and gradients. The risk is low contrast between elements, so pair them with a neutral dark or light for text.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Triadic (120° apart)</h3>
          <p>
            Three colors evenly spaced around the wheel. Vibrant and balanced, triadic schemes work well for dashboards or data visualization where you need distinct but harmonious categories.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Split-Complementary</h3>
          <p>
            A base color plus the two colors adjacent to its complement. This gives you the contrast of complementary with less tension — easier to work with while still visually interesting.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">The 60-30-10 Rule</h2>
          <p>
            A classic interior design principle that applies equally to UI: use your dominant color for <strong className="text-gray-900">60%</strong> of the interface (backgrounds, large surfaces), a secondary color for <strong className="text-gray-900">30%</strong> (cards, secondary actions), and an accent for <strong className="text-gray-900">10%</strong> (buttons, links, highlights).
          </p>
          <p>
            This ratio creates visual hierarchy without overwhelming the user. Your 5-color palette naturally maps to this: one neutral background, two shades for content surfaces, one primary brand color, and one accent.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Color Psychology in UI</h2>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden my-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left px-4 py-3 text-gray-500 font-medium">Color</th>
                  <th className="text-left px-4 py-3 text-gray-500 font-medium">Common Associations</th>
                  <th className="text-left px-4 py-3 text-gray-500 font-medium">UI Usage</th>
                </tr>
              </thead>
              <tbody className="text-gray-500">
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3"><span className="inline-block w-3 h-3 rounded-full bg-blue-500 mr-2"></span>Blue</td>
                  <td className="px-4 py-3">Trust, stability, calm</td>
                  <td className="px-4 py-3">Primary actions, links, info states</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3"><span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"></span>Green</td>
                  <td className="px-4 py-3">Success, growth, nature</td>
                  <td className="px-4 py-3">Success states, confirmations, CTAs</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3"><span className="inline-block w-3 h-3 rounded-full bg-red-500 mr-2"></span>Red</td>
                  <td className="px-4 py-3">Urgency, danger, energy</td>
                  <td className="px-4 py-3">Errors, destructive actions, alerts</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3"><span className="inline-block w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>Yellow</td>
                  <td className="px-4 py-3">Warning, optimism, warmth</td>
                  <td className="px-4 py-3">Warnings, highlights, badges</td>
                </tr>
                <tr>
                  <td className="px-4 py-3"><span className="inline-block w-3 h-3 rounded-full bg-purple-500 mr-2"></span>Purple</td>
                  <td className="px-4 py-3">Creativity, luxury, wisdom</td>
                  <td className="px-4 py-3">Premium features, creative tools</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Building a UI Palette: Step by Step</h2>
          <ol className="list-decimal pl-5 space-y-3">
            <li><strong className="text-gray-900">Start with your brand color.</strong> This is your primary — the color users associate with your product.</li>
            <li><strong className="text-gray-900">Choose a harmony.</strong> Use our <Link to="/palette" className="text-brand-teal hover:underline">Palette Generator</Link> to explore complementary, analogous, or triadic options built from your brand color.</li>
            <li><strong className="text-gray-900">Add neutrals.</strong> Every UI needs 4–6 shades of gray for backgrounds, text, borders, and disabled states. Generate these by desaturating your brand color slightly.</li>
            <li><strong className="text-gray-900">Define semantic colors.</strong> Success (green), warning (yellow/amber), error (red), and info (blue) — these should still harmonize with your palette.</li>
            <li><strong className="text-gray-900">Test contrast.</strong> Run every text/background pair through a <Link to="/contrast" className="text-brand-teal hover:underline">contrast checker</Link> to ensure WCAG AA compliance.</li>
            <li><strong className="text-gray-900">Test in context.</strong> Apply the palette to actual UI components. Colors behave differently in isolation vs. surrounded by other elements.</li>
          </ol>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Dark Mode Considerations</h2>
          <p>
            Dark mode isn't just inverting your colors. Saturated colors that look great on light backgrounds become harsh on dark ones. Reduce saturation by 10–20% and increase lightness slightly for text on dark backgrounds. Use elevation (lighter surfaces = closer to user) rather than shadows to create depth.
          </p>

          <div className="bg-white rounded-xl p-6 border border-gray-200 mt-10">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Generate Your Palette</h3>
            <p className="text-gray-500 mb-4">Pick a base color and harmony rule — get a harmonious 5-color palette instantly.</p>
            <Link to="/palette" className="btn-primary no-underline inline-block">
              Open Palette Generator
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
