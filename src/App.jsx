import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

const PaletteGenerator = lazy(() => import('./pages/PaletteGenerator'));
const ColorPicker = lazy(() => import('./pages/ColorPicker'));
const GradientGenerator = lazy(() => import('./pages/GradientGenerator'));
const ContrastChecker = lazy(() => import('./pages/ContrastChecker'));
const ImageExtractor = lazy(() => import('./pages/ImageExtractor'));
const ColorConverter = lazy(() => import('./pages/ColorConverter'));
const TailwindFinder = lazy(() => import('./pages/TailwindFinder'));
const BrandColors = lazy(() => import('./pages/BrandColors'));
const ShadowGenerator = lazy(() => import('./pages/ShadowGenerator'));
const FontPairing = lazy(() => import('./pages/FontPairing'));
const Blog = lazy(() => import('./pages/Blog'));
const WcagContrastGuide = lazy(() => import('./pages/blog/WcagContrastGuide'));
const ColorTheoryGuide = lazy(() => import('./pages/blog/ColorTheoryGuide'));
const CssGradientsGuide = lazy(() => import('./pages/blog/CssGradientsGuide'));
const ColorPsychologyMarketing = lazy(() => import('./pages/blog/ColorPsychologyMarketing'));
const BestColorCombinations2026 = lazy(() => import('./pages/blog/BestColorCombinations2026'));
const BrandColorPaletteGuide = lazy(() => import('./pages/blog/BrandColorPaletteGuide'));

export default function App() {
  return (
    <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', padding: '4rem 1rem' }}>Loading…</div>}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="palette" element={<PaletteGenerator />} />
          <Route path="picker" element={<ColorPicker />} />
          <Route path="gradient" element={<GradientGenerator />} />
          <Route path="contrast" element={<ContrastChecker />} />
          <Route path="extract" element={<ImageExtractor />} />
          <Route path="converter" element={<ColorConverter />} />
          <Route path="tailwind" element={<TailwindFinder />} />
          <Route path="brands" element={<BrandColors />} />
          <Route path="shadow" element={<ShadowGenerator />} />
          <Route path="fonts" element={<FontPairing />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/wcag-color-contrast-guide" element={<WcagContrastGuide />} />
          <Route path="blog/color-theory-for-ui-design" element={<ColorTheoryGuide />} />
          <Route path="blog/css-gradients-complete-guide" element={<CssGradientsGuide />} />
          <Route path="blog/color-psychology-marketing" element={<ColorPsychologyMarketing />} />
          <Route path="blog/best-color-combinations-2026" element={<BestColorCombinations2026 />} />
          <Route path="blog/brand-color-palette-guide" element={<BrandColorPaletteGuide />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
