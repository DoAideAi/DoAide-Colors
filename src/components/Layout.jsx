import { Link, Outlet, useLocation } from 'react-router-dom';
import { useState } from 'react';
import useSEO from '../hooks/useSEO';

const navLinks = [
  { path: '/palette', label: 'Palette' },
  { path: '/picker', label: 'Picker' },
  { path: '/gradient', label: 'Gradient' },
  { path: '/contrast', label: 'Contrast' },
  { path: '/extract', label: 'Extract' },
  { path: '/converter', label: 'Converter' },
  { path: '/tailwind', label: 'Tailwind' },
  { path: '/brands', label: 'Brands' },
  { path: '/shadow', label: 'Shadow' },
  { path: '/fonts', label: 'Fonts' },
  { path: '/blog', label: 'Blog' },
];

const doaideProducts = [
  { name: 'Colors', href: 'https://colors.doaide.com' },
  { name: 'PDF', href: 'https://pdf.doaide.com' },
  { name: 'Invoice', href: 'https://invoice.doaide.com' },
  { name: 'Resume', href: 'https://resume.doaide.com' },
  { name: 'QR', href: 'https://qr.doaide.com' },
  { name: 'Draw', href: 'https://draw.doaide.com' },
  { name: 'Docs', href: 'https://docs.doaide.com' },
  { name: 'Convert', href: 'https://convert.doaide.com' },
];

export default function Layout() {
  const location = useLocation();
  useSEO(location.pathname.replace(/\/+$/, '') || '/');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--da-surface-alt)] flex flex-col">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-1.5 no-underline">
            <span className="text-xl font-bold text-brand-teal">DoAide</span>
            <span className="text-xl font-bold text-gray-400 mx-0.5">|</span>
            <span className="text-xl font-bold text-gray-800">Colors</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors no-underline ${
                  location.pathname === link.path
                    ? 'bg-brand-teal/10 text-brand-teal'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            className="lg:hidden p-2 min-h-[48px] min-w-[48px] flex items-center justify-center text-gray-500 hover:text-gray-900"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur">
            <div className="px-4 py-3 flex flex-wrap gap-2">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`inline-flex items-center px-3 py-1.5 min-h-[48px] rounded-lg text-sm font-medium transition-colors no-underline ${
                    location.pathname === link.path
                      ? 'bg-brand-teal/10 text-brand-teal'
                      : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 flex-1 w-full">
        <Outlet />
      </main>

      <footer className="border-t border-gray-200 bg-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-semibold text-brand-teal">DoAide</span>
                <span className="text-xs bg-brand-teal/10 text-brand-teal px-2 py-0.5 rounded-full font-medium">A DoAide Product</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                {doaideProducts.map(p => (
                  <a
                    key={p.name}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm transition-colors no-underline ${
                      p.name === 'Colors'
                        ? 'text-brand-teal font-medium'
                        : 'text-gray-400 hover:text-brand-teal'
                    }`}
                  >
                    {p.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs text-gray-400">Free forever. No login required.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
