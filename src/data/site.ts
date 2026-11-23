export const site = {
 name: 'MOSAG', fullName: "Mo's Sauberer Authentischer Gebäudeservice",
 owner: 'Mohamed El Yassini', contactName: 'M. El Yassini',
 phoneDisplay: '+49 172 3103033', phoneHref: '+491723103033',
 email: 'm.elyassini@gmx.net', street: 'Moltkestraße 10', zipCity: '64295 Darmstadt',
 region: 'Rhein-Main-Gebiet', domain: 'mosag-gebaeudeservice.de'
};
export const services = [
 {slug:'unterhaltsreinigung',name:'Unterhaltsreinigung',icon:'✦',teaser:'Saubere Arbeitswelten, die im Alltag überzeugen.',intro:'Regelmäßige Reinigung von Büro-, Geschäfts- und Gemeinschaftsflächen – abgestimmt auf Nutzungszeiten und Anforderungen.',items:['Büro- und Arbeitsbereiche','Sanitär- und Gemeinschaftsflächen','Laufende Pflege stark frequentierter Bereiche']},
 {slug:'treppenhausreinigung',name:'Treppenhausreinigung',icon:'▤',teaser:'Ein gepflegter erster Eindruck für jede Immobilie.',intro:'Werterhaltende Reinigung von Eingängen, Treppenhäusern und gemeinschaftlich genutzten Verkehrsflächen.',items:['Treppen und Podeste','Eingangsbereiche','Handläufe und Kontaktflächen']},
 {slug:'fensterreinigung',name:'Fensterreinigung',icon:'▣',teaser:'Klare Sicht und ein überzeugender Außenauftritt.',intro:'Professionelle Reinigung von Glasflächen für einen gepflegten Eindruck in gewerblichen Immobilien.',items:['Fenster und Glasflächen','Glasinnentüren und Trennwände','Individuell vereinbarte Reinigungsintervalle']},
 {slug:'winterdienst',name:'Winterdienst',icon:'❄',teaser:'Gut vorbereitet auf die kalte Jahreszeit.',intro:'Winterdienstleistungen für gewerbliche Außenflächen nach individueller Vereinbarung und örtlichen Anforderungen.',items:['Abstimmung der zu betreuenden Flächen','Saisonale Einsatzplanung','Dokumentation nach Vereinbarung']},
 {slug:'hausmeisterservice',name:'Hausmeisterservice',icon:'⌂',teaser:'Verlässliche Betreuung rund um Ihre Immobilie.',intro:'Unterstützende Objektbetreuung und regelmäßige Kontroll- und Pflegeaufgaben nach Absprache.',items:['Regelmäßige Objektkontrollen','Pflege gemeinschaftlicher Bereiche','Koordination vereinbarter Serviceaufgaben']},
 {slug:'sonderreinigung',name:'Sonderreinigung',icon:'✧',teaser:'Besondere Aufgaben brauchen passende Lösungen.',intro:'Individuell geplante Reinigungsleistungen außerhalb des üblichen Turnus – passend zum Objekt und Bedarf.',items:['Reinigung bei besonderem Anlass','Individuelle Objektbesichtigung','Leistungsumfang nach Angebot']}
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
  src: '/images/hero-hochzeitsturm-himmel.jpg',
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

