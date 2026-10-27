import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

function renderAt(path) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  );
}

describe('Home page', () => {
  it('renders the title and tool links', async () => {
    renderAt('/');
    expect(screen.getAllByText('Colors').length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText('Color Palette Generator')).toBeInTheDocument();
    expect(screen.getByText('Contrast Checker')).toBeInTheDocument();
    expect(screen.getByText('Gradient Generator')).toBeInTheDocument();
    expect(screen.getByText('Color Converter')).toBeInTheDocument();
  });
});

describe('Palette Generator', () => {
  it('renders palette page', async () => {
    renderAt('/palette');
    expect(await screen.findByText('Color Palette Generator')).toBeInTheDocument();
    expect(screen.getByText('Generate')).toBeInTheDocument();
  });
});

describe('Contrast Checker', () => {
  it('renders contrast page with WCAG results', async () => {
    renderAt('/contrast');
    expect(await screen.findByText('Contrast Checker')).toBeInTheDocument();
    expect(screen.getByText('WCAG Results')).toBeInTheDocument();
  });
});

describe('Gradient Generator', () => {
  it('renders gradient page', async () => {
    renderAt('/gradient');
    expect(await screen.findByText('Gradient Generator')).toBeInTheDocument();
    expect(screen.getByText('CSS Code')).toBeInTheDocument();
  });
});

describe('Color Converter', () => {
  it('renders converter page with format buttons', async () => {
    renderAt('/converter');
    expect(await screen.findByText('Color Converter')).toBeInTheDocument();
    expect(screen.getAllByText('HEX').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('RGB').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('HSL').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('CMYK').length).toBeGreaterThanOrEqual(1);
  });
});

describe('Blog', () => {
  it('renders blog index with post titles', async () => {
    renderAt('/blog');
    expect(await screen.findByText(/WCAG Color Contrast/)).toBeInTheDocument();
    expect(screen.getByText(/Color Theory for UI Design/)).toBeInTheDocument();
    expect(screen.getByText(/CSS Gradients/)).toBeInTheDocument();
  });

  it('renders WCAG blog post', async () => {
    renderAt('/blog/wcag-color-contrast-guide');
    expect(await screen.findByText(/What Is Color Contrast Ratio/)).toBeInTheDocument();
  });

  it('renders color theory blog post', async () => {
    renderAt('/blog/color-theory-for-ui-design');
    expect(await screen.findByText(/The Color Wheel and HSL/)).toBeInTheDocument();
  });

  it('renders CSS gradients blog post', async () => {
    renderAt('/blog/css-gradients-complete-guide');
    expect(await screen.findByText(/Linear Gradients/)).toBeInTheDocument();
  });

  it('renders color psychology marketing blog post', async () => {
    renderAt('/blog/color-psychology-marketing');
    expect(await screen.findByText(/Why Color Matters More Than You Think/)).toBeInTheDocument();
  });

  it('renders best color combinations 2026 blog post', async () => {
    renderAt('/blog/best-color-combinations-2026');
    expect(await screen.findByText(/What Makes a Great Website Color Combination/)).toBeInTheDocument();
  });

  it('renders brand color palette guide blog post', async () => {
    renderAt('/blog/brand-color-palette-guide');
    expect(await screen.findByText(/Define Your Brand Personality/)).toBeInTheDocument();
  });
});

describe('Navigation', () => {
  it('renders nav links in Layout', async () => {
    renderAt('/');
    expect(await screen.findByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('Palette')).toBeInTheDocument();
  });
});
