import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { blogPosts } from '../data/blogPosts';
import { jsonLdFor, metaForPath, routes } from '../routeMeta';

const appSrc = readFileSync(resolve(process.cwd(), 'src/App.jsx'), 'utf-8');

describe('routeMeta', () => {
  it('has unique paths, titles and descriptions', () => {
    for (const key of ['path', 'title', 'description']) {
      const values = routes.map((r) => r[key]);
      expect(new Set(values).size).toBe(values.length);
    }
  });

  it('matches the router exactly', () => {
    const appPaths = [...appSrc.matchAll(/<Route path="([^"]+)"/g)].map((m) => `/${m[1]}`);
    const metaPaths = routes.map((r) => r.path).filter((p) => p !== '/');
    expect([...metaPaths].sort()).toEqual([...appPaths].sort());
  });

  it('keeps titles within 70 chars', () => {
    for (const r of routes) expect(r.title.length, r.path).toBeLessThanOrEqual(70);
  });

  it('dates every post and emits complete FAQ entries', () => {
    for (const p of blogPosts) {
      const graph = jsonLdFor(metaForPath(`/blog/${p.slug}`))['@graph'];
      expect(graph[0].datePublished).toBe(p.date);
      const faq = graph.find((n) => n['@type'] === 'FAQPage');
      for (const q of faq?.mainEntity ?? []) {
        expect(q.name).toBeTruthy();
        expect(q.acceptedAnswer.text).toBeTruthy();
      }
    }
  });
});
