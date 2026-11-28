export const site = {
 name: 'MOSAG', fullName: "Mo's Sauberer Authentischer Gebäudeservice",
 owner: 'Mohamed El Yassini', contactName: 'M. El Yassini',
 phoneDisplay: '+49 172 3103033', phoneHref: '+491723103033',
 email: 'm.elyassini@gmx.net', street: 'Moltkestraße 10', zipCity: '64295 Darmstadt',
 region: 'Rhein-Main-Gebiet', domain: 'mosag-gebaeudeservice.de'
};
export const services = [
 {slug:'unterhaltsreinigung',name:'Unterhaltsreinigung',seoTitle:'Beste Unterhaltsreinigung in Darmstadt – Büroreinigung, Sanitärreinigung & Reinigung von Gemeinschaftsflächen für Unternehmen in Ihrer Nähe',icon:'✦',teaser:'Saubere Arbeitswelten, die im Alltag überzeugen.',intro:'Regelmäßige Reinigung von Büro-, Geschäfts- und Gemeinschaftsflächen – abgestimmt auf Nutzungszeiten und Anforderungen.',items:['Büro- und Arbeitsbereiche','Sanitär- und Gemeinschaftsflächen','Laufende Pflege stark frequentierter Bereiche']},
 {slug:'treppenhausreinigung',name:'Treppenhausreinigung',seoTitle:'Beste Treppenhausreinigung in Darmstadt – Reinigung von Treppenhäusern, Eingangsbereichen & Handläufen für Hausverwaltungen und Gewerbe',icon:'▤',teaser:'Ein gepflegter erster Eindruck für jede Immobilie.',intro:'Werterhaltende Reinigung von Eingängen, Treppenhäusern und gemeinschaftlich genutzten Verkehrsflächen.',items:['Treppen und Podeste','Eingangsbereiche','Handläufe und Kontaktflächen']},
 {slug:'fensterreinigung',name:'Fensterreinigung',seoTitle:'Beste Fensterreinigung in Darmstadt – Glasreinigung von Fenstern, Glastüren & Trennwänden für Gewerbeimmobilien in Ihrer Nähe',icon:'▣',teaser:'Klare Sicht und ein überzeugender Außenauftritt.',intro:'Professionelle Reinigung von Glasflächen für einen gepflegten Eindruck in gewerblichen Immobilien.',items:['Fenster und Glasflächen','Glasinnentüren und Trennwände','Individuell vereinbarte Reinigungsintervalle']},
 {slug:'winterdienst',name:'Winterdienst',seoTitle:'Bester Winterdienst in Darmstadt – Schneeräumung & Streudienst für Gewerbeflächen im Rhein-Main-Gebiet',icon:'❄',teaser:'Gut vorbereitet auf die kalte Jahreszeit.',intro:'Winterdienstleistungen für gewerbliche Außenflächen nach individueller Vereinbarung und örtlichen Anforderungen.',items:['Abstimmung der zu betreuenden Flächen','Saisonale Einsatzplanung','Dokumentation nach Vereinbarung']},
 {slug:'hausmeisterservice',name:'Hausmeisterservice',seoTitle:'Bester Hausmeisterservice in Darmstadt – Objektbetreuung, Objektkontrollen & Pflege von Gemeinschaftsflächen in Ihrer Nähe',icon:'⌂',teaser:'Verlässliche Betreuung rund um Ihre Immobilie.',intro:'Unterstützende Objektbetreuung und regelmäßige Kontroll- und Pflegeaufgaben nach Absprache.',items:['Regelmäßige Objektkontrollen','Pflege gemeinschaftlicher Bereiche','Koordination vereinbarter Serviceaufgaben']},
 {slug:'sonderreinigung',name:'Sonderreinigung',seoTitle:'Beste Sonderreinigung in Darmstadt – individuelle Reinigung bei besonderem Anlass für Gewerbe im Rhein-Main-Gebiet',icon:'✧',teaser:'Besondere Aufgaben brauchen passende Lösungen.',intro:'Individuell geplante Reinigungsleistungen außerhalb des üblichen Turnus – passend zum Objekt und Bedarf.',items:['Reinigung bei besonderem Anlass','Individuelle Objektbesichtigung','Leistungsumfang nach Angebot']}
];

/**
 * Foto-Slots der Startseite.
 * Es liegen noch keine echten MOSAG-Fotos vor. Solange `src` leer ist, zeigt die Seite
 * einen deutlich gekennzeichneten Platzhalter. Zum Austauschen: Foto nach
 * public/images/ legen und hier z. B. src: '/images/hero.jpg' eintragen.
 */
export type PhotoSlot = { src?: string; srcset?: string; alt: string; note: string; credit?: string; creditHref?: string };
export const photos: Record<string, PhotoSlot> = {
 hero: {
  src: '/images/hero-hochzeitsturm-himmel-1280.jpg',
  srcset: '/images/hero-hochzeitsturm-himmel-1280.jpg 1280w, /images/hero-hochzeitsturm-himmel.jpg 2560w',
  alt: 'Hochzeitsturm (Fünffingerturm) auf der Mathildenhöhe in Darmstadt vor blauem Himmel',
  note: 'Hero – Hochzeitsturm Darmstadt',
  credit: 'Foto: Tilman2007 · CC BY-SA 4.0 · Himmel erweitert',
  creditHref: 'https://commons.wikimedia.org/wiki/File:Mathildenh%C3%B6he,_Hochzeitsturm_Darmstadt_20200902_011.jpg'
 },
 unterhaltsreinigung: { src: '/images/leistungen/unterhaltsreinigung.webp', alt: 'Scheuersaugmaschinen in einer hellen, sauberen Büro-Lobby', note: 'Unterhaltsreinigung im Büro', credit: 'Foto: Z22 · CC BY-SA 4.0', creditHref: 'https://commons.wikimedia.org/wiki/File:Floor_scrubbers.jpg' },
 treppenhausreinigung: { src: '/images/leistungen/treppenhausreinigung.webp', alt: 'Gepflegtes Treppenhaus mit Handlauf und gefliesten Wänden', note: 'Gepflegtes Treppenhaus', credit: 'Foto: Sam Wilson · CC BY-SA 2.0', creditHref: 'https://commons.wikimedia.org/wiki/File:Atlas_Building_stairs_and_tiles.jpg' },
 fensterreinigung: { src: '/images/leistungen/fensterreinigung.webp', alt: 'Streifenfreie Reinigung einer Glasfläche mit dem Fenstersauger', note: 'Fensterreinigung an Glasfläche', credit: 'Foto: Shixart1985 · CC BY 2.0', creditHref: 'https://commons.wikimedia.org/wiki/File:Handheld_window_cleaner_in_use_for_streak-free_shine_on_glass_surface_in_bright_indoor_setting.jpg' },
 winterdienst: { src: '/images/leistungen/winterdienst.webp', alt: 'Hausmeister räumt Schnee mit der Schneeschaufel', note: 'Winterdienst auf Außenfläche', credit: 'Foto: W.carter · CC BY-SA 4.0', creditHref: 'https://commons.wikimedia.org/wiki/File:Maintenance_man_shoveling_snow_in_Tuntorp.jpg' },
 hausmeisterservice: { src: '/images/leistungen/hausmeisterservice.webp', alt: 'Pflege der Außenanlagen: Laub wird mit dem Laubbläser entfernt', note: 'Hausmeisterservice / Außenanlagen', credit: 'Foto: Cbaile19 · CC0', creditHref: 'https://commons.wikimedia.org/wiki/File:Leaf_blower,_Homewood_Cemetery.jpg' },
 sonderreinigung: { src: '/images/leistungen/sonderreinigung.webp', alt: 'Grundreinigung eines Fliesenbodens mit der Einscheibenmaschine', note: 'Sonderreinigung / Grundreinigung', credit: 'Foto: Moritz Borkowski · CC BY-SA 4.0', creditHref: 'https://commons.wikimedia.org/wiki/File:Grundreinigung-Fliesenboden.jpg' },
 process: { alt: 'Gemeinsame Objektbesichtigung vor Angebotserstellung', note: 'Objektbesichtigung / Beratungsgespräch' },
 about1: { alt: 'Das MOSAG-Team bei der Arbeit', note: 'Team / Inhaber bei der Arbeit (Hochformat)' },
 about2: { alt: 'Reinigungsausstattung von MOSAG', note: 'Arbeitsmaterial / Ausstattung' },
 about3: { alt: 'Gepflegter Eingangsbereich nach der Reinigung', note: 'Ergebnis: gepflegter Eingangsbereich' },
 values: { alt: 'MOSAG-Mitarbeiter vor einem betreuten Objekt in Darmstadt', note: 'Team- oder Arbeitsfoto (Hochformat)' }
};


/** Orte im Einsatzgebiet (Luftlinie ab Moltkestraße 10, gerundet). Ortsseite entsteht, sobald src/data/orte/<slug>.md existiert. */
export const towns = [
 {slug:'weiterstadt',name:'Weiterstadt',km:6},
 {slug:'muehltal',name:'Mühltal',km:6},
 {slug:'griesheim',name:'Griesheim',km:6},
 {slug:'rossdorf',name:'Roßdorf',km:8},
 {slug:'pfungstadt',name:'Pfungstadt',km:8},
 {slug:'ober-ramstadt',name:'Ober-Ramstadt',km:8},
 {slug:'erzhausen',name:'Erzhausen',km:9},
 {slug:'messel',name:'Messel',km:10},
 {slug:'seeheim-jugenheim',name:'Seeheim-Jugenheim',km:12},
 {slug:'gross-zimmern',name:'Groß-Zimmern',km:13},
 {slug:'langen',name:'Langen',km:13},
 {slug:'gross-gerau',name:'Groß-Gerau',km:13},
 {slug:'reinheim',name:'Reinheim',km:14},
 {slug:'dieburg',name:'Dieburg',km:14},
 {slug:'moerfelden-walldorf',name:'Mörfelden-Walldorf',km:14},
 {slug:'muenster-hessen',name:'Münster (Hessen)',km:16},
 {slug:'dreieich',name:'Dreieich',km:17},
 {slug:'gross-umstadt',name:'Groß-Umstadt',km:20},
 {slug:'bensheim',name:'Bensheim',km:21},
 {slug:'ruesselsheim',name:'Rüsselsheim am Main',km:22},
 {slug:'babenhausen',name:'Babenhausen',km:24},
 {slug:'offenbach',name:'Offenbach am Main',km:27},
 {slug:'frankfurt',name:'Frankfurt am Main',km:27},
 {slug:'mainz',name:'Mainz',km:31},
 {slug:'hanau',name:'Hanau',km:35},
 {slug:'wiesbaden',name:'Wiesbaden',km:37}
];
