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

export default defineConfig({
  site: 'https://mosag-gebaeudeservice.de',
  output: 'static',
  markdown: { rehypePlugins: [unlinkMissingTowns] }
});
