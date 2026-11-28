import { defineConfig } from 'astro/config';
import fs from 'node:fs';

// Links auf Ortsseiten (/einsatzgebiet/<slug>/), deren Text in src/data/orte/ noch fehlt,
// werden beim Build zu normalem Text. Sobald die Ortsseite existiert, ist der Link automatisch aktiv.
function unlinkMissingTowns() {
  return (tree) => {
    const walk = (node) => {
      if (!node.children) return;
      node.children = node.children.map((child) => {
        if (child.type === 'element' && child.tagName === 'a') {
          const m = String(child.properties?.href ?? '').match(/^\/einsatzgebiet\/([a-z0-9-]+)\/$/);
          if (m && !fs.existsSync(new URL(`./src/data/orte/${m[1]}.md`, import.meta.url))) {
            return { type: 'element', tagName: 'span', properties: {}, children: child.children };
          }
        }
        walk(child);
        return child;
      });
    };
    walk(tree);
  };
}

// Interne Platzhalter wie [BESTÄTIGEN: …] oder [RECHTLICH PRÜFEN] bleiben im Markdown stehen
// (damit sie auffindbar sind), erscheinen aber nicht auf der Website. Leere Absätze/Listenpunkte entfallen.
const PLACEHOLDER = /\s*\[(?:BESTÄTIGEN|RECHTLICH PRÜFEN)[^\]]*\]/g;
function hidePlaceholders() {
  const isEmpty = (n) => n.type === 'element' && ['p', 'li'].includes(n.tagName) &&
    n.children.every((c) => (c.type === 'text' && !c.value.trim()) || (c.type === 'element' && c.tagName !== 'br' && isEmpty({ ...c, tagName: 'p' })));
  return (tree) => {
    const walk = (node) => {
      if (!node.children) return;
      for (const child of node.children) {
        if (child.type === 'text') child.value = child.value.replace(PLACEHOLDER, '');
        else walk(child);
      }
      node.children = node.children.filter((c) => !isEmpty(c));
    };
    walk(tree);
  };
}

export default defineConfig({
  site: 'https://mosag-gebaeudeservice.de',
  output: 'static',
  markdown: { rehypePlugins: [unlinkMissingTowns, hidePlaceholders] }
});
