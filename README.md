# MOSAG Gebäudeservice – Webseitenprojekt

**Status: Entwurf / nicht veröffentlicht.** Astro + TypeScript + statische Seiten.

## Voraussetzungen
Node.js (aktuelle LTS-Version), npm.

## Lokal starten
```bash
npm install
npm run dev
```
Dann die angezeigte lokale Adresse öffnen (normalerweise http://localhost:4321).

## Produktionsbuild
```bash
npm run build
npm run preview
```

## GitHub
Den **Inhalt** dieses entpackten Ordners in das private Repository `mosag-website` hochladen. Keine `node_modules`- oder `dist`-Ordner hochladen. Die ZIP-Datei nicht als einzige Datei hochladen.

## Original-Logo
`public/images/mosag-original.png` ist eine **unveränderte Kopie des vom Auftraggeber hochgeladenen Logo-Screenshots**. Er enthält auch die diagonalen Eckelemente. Das Logo wurde nicht neu gezeichnet oder künstlich verändert. Für eine spätere sauber freigestellte Logo-Version ist eine Originaldatei mit transparentem Hintergrund empfehlenswert.

## Kontaktdaten und Texte
Zentral in `src/data/site.ts` ändern. Die Leistungsseiten werden aus dieser Datei erzeugt.

## Kontaktformular – wichtig
Das Formular nutzt HTML-Attribute für **Netlify Forms**. Es versendet **lokal und auf anderen Hostern nicht automatisch E-Mails**. Für den echten Betrieb:
1. Vor Veröffentlichung Netlify als Hosting-Anbieter bewusst auswählen und Datenschutzfolgen prüfen. (Cloudflare Pages unterstützt Netlify Forms nicht.)
2. In Netlify eine neue Site mit dem privaten GitHub-Repository verbinden, Build command `npm run build`, Publish directory `dist`.
3. Forms-Erkennung aktivieren/prüfen; einen Build auslösen.
4. Im Netlify-Dashboard E-Mail-Benachrichtigungen für `m.elyassini@gmx.net` einrichten.
5. Mit echten Testnachrichten Versand, Spam-Schutz, Datenschutz und Zustellbarkeit testen.
6. Netlify-Tarif-/Nutzungslimits beachten. Bei anderer Hostingwahl Formularverarbeitung ersetzen.

Die Formular-Dankeseite ist kein Nachweis, dass eine E-Mail erfolgreich zugestellt wurde. Bei Netlify Forms werden Einsendungen im Dashboard gespeichert und können Benachrichtigungen auslösen.

## Domain
Die gewünschte Domain ist `mosag-gebaeudeservice.de`. Die Verfügbarkeit wurde **nicht** geprüft. Canonical URL und robots.txt sind darauf vorbereitet. Vor tatsächlichem Start prüfen.

## Rechtliches
`/impressum/` enthält die vom Auftraggeber mitgeteilten Angaben. Ob zusätzliche Pflichtangaben notwendig sind, muss vor Veröffentlichung geprüft werden. `/datenschutz/` ist **ausdrücklich ein Entwurf** und muss anhand der realen technischen Anbieter, Speicherfristen und Datenflüsse rechtlich ergänzt werden.

## SEO
Metatitel und -beschreibungen sind hinterlegt. Sitemap kann vor Veröffentlichung per Astro-Sitemap-Integration ergänzt werden; aktuell ist noch keine Sitemap eingebunden.

## Sicherheit
Siehe `SECURITY.md`. Sicherheitsheader in `public/_headers` gelten bei unterstützten Hostern wie Netlify und Cloudflare Pages; ihre tatsächliche Auslieferung muss geprüft werden.
