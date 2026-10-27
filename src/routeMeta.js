/**
 * SEO metadata for every indexable route. Shared by the useSEO hook (wired in
 * Layout) and scripts/prerender-routes.mjs (static HTML, sitemap, serve.json),
 * so keep it plain JS with no JSX or browser-only imports.
 */

import { blogPosts } from './data/blogPosts.js'
import { blogFaqs } from './data/blogFaqs.js'

export const SITE = {
  name: 'DoAide Colors',
  baseUrl: 'https://colors.doaide.com',
  ogImage: 'https://colors.doaide.com/og-colors.png',
}

const ORG = { '@type': 'Organization', name: 'DoAide', url: 'https://doaide.com' }

// Fit "<title> | DoAide Colors" into ~70 chars; long titles go without it.
const withSuffix = (title) => (`${title} | DoAide Colors`.length <= 70 ? `${title} | DoAide Colors` : title)

const tool = (path, h1, title, description) => ({ path, h1, title: withSuffix(title), description, kind: 'tool' })

export const routes = [
  {
    path: '/',
    kind: 'home',
    h1: 'DoAide | Colors',
    title: 'DoAide Colors — Free Color Tools for Designers & Developers',
    description:
      'Generate color palettes, CSS gradients, check WCAG contrast, convert hex/rgb/hsl, extract colors from images — all free, no login required.',
  },
  tool(
    '/palette',
    'Color Palette Generator',
    'Color Palette Generator',
    'Generate harmonious 5-color palettes with complementary, analogous, triadic, and split-complementary harmony rules. Free, no login.'
  ),
  tool(
    '/picker',
    'Color Picker',
    'Online Color Picker — HEX, RGB, HSL Values',
    'Pick any color and get its HEX, RGB, HSL and CMYK values instantly, with one-click copy. Free online color picker, no login required.'
  ),
  tool(
    '/gradient',
    'Gradient Generator',
    'CSS Gradient Generator',
    'Create beautiful CSS gradients — linear, radial, and conic — with multiple color stops, presets, and live preview. Copy CSS instantly.'
  ),
  tool(
    '/contrast',
    'Contrast Checker',
    'Color Contrast Checker — WCAG AA/AAA',
    'Free WCAG contrast checker — test text and background colors for AA and AAA accessibility compliance. Get instant ratio and fix suggestions.'
  ),
  tool(
    '/extract',
    'Image Color Extractor',
    'Image Color Extractor — Get a Palette from a Photo',
    'Upload an image and extract its dominant color palette as HEX codes. Runs in your browser, so your image is never uploaded. Free.'
  ),
  tool(
    '/converter',
    'Color Converter',
    'Color Converter — HEX, RGB, HSL, CMYK',
    'Convert colors between HEX, RGB, HSL, and CMYK formats instantly. Free online color converter with named color approximation.'
  ),
  tool(
    '/tailwind',
    'Tailwind Color Finder',
    'Tailwind Color Finder — Closest Tailwind CSS Class',
    'Paste any HEX or RGB color and find the closest Tailwind CSS color class, like teal-600. Free tool for Tailwind developers.'
  ),
  tool(
    '/brands',
    'Brand Colors',
    'Brand Color Palettes — HEX Codes of Popular Brands',
    'Browse the official color palettes of popular brands worldwide with HEX codes you can copy for mockups and inspiration.'
  ),
  tool(
    '/shadow',
    'CSS Shadow Generator',
    'CSS Box Shadow Generator',
    'Create beautiful CSS box shadows with live preview — offset, blur, spread and color — then copy the CSS. Free, no login.'
  ),
  tool(
    '/fonts',
    'Font Pairing',
    'Google Font Pairings — Heading & Body Combos',
    'Browse beautiful Google Font pairings for headings and body text with live preview, and copy the CSS import. Free font pairing tool.'
  ),
  {
    path: '/blog',
    kind: 'blog',
    h1: 'Blog',
    title: 'Blog — Color Theory, Accessibility & Design Tips | DoAide Colors',
    description:
      'Color theory, accessibility guides, and design tips from DoAide Colors. Learn WCAG contrast, CSS gradients, palette building, and more.',
  },
  ...blogPosts.map((p) => ({
    path: `/blog/${p.slug}`,
    kind: 'post',
    h1: p.title,
    title: withSuffix(p.title),
    description: p.description,
    published: p.date,
    faqs: blogFaqs[p.slug],
  })),
]

export const canonicalFor = (path) => `${SITE.baseUrl}${path}`

export const metaForPath = (path) => routes.find((r) => r.path === path)

export function jsonLdFor(route) {
  const url = canonicalFor(route.path)
  let main
  switch (route.kind) {
    case 'home':
      main = {
        '@type': 'WebApplication',
        name: SITE.name,
        url,
        description: route.description,
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
        author: ORG,
      }
      break
    case 'tool':
      main = {
        '@type': 'WebApplication',
        name: route.h1,
        url,
        description: route.description,
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
        isPartOf: { '@type': 'WebSite', name: SITE.name, url: canonicalFor('/') },
      }
      break
    case 'post':
      main = {
        '@type': 'BlogPosting',
        headline: route.h1,
        description: route.description,
        url,
        mainEntityOfPage: url,
        datePublished: route.published,
        author: ORG,
        publisher: ORG,
      }
      break
    default:
      main = { '@type': 'Blog', name: `${SITE.name} Blog`, url, description: route.description, publisher: ORG }
  }
  const graph = [main]
  if (route.faqs?.length) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: route.faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    })
  }
  return { '@context': 'https://schema.org', '@graph': graph }
}
