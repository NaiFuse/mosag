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
  src: '/images/hero-hochzeitsturm.jpg',
  srcset: '/images/hero-hochzeitsturm-1280.jpg 1280w, /images/hero-hochzeitsturm.jpg 2560w',
  alt: 'Hochzeitsturm und Russische Kapelle auf der Mathildenhöhe in Darmstadt',
  note: 'Hero – Hochzeitsturm Darmstadt',
  credit: 'Foto: Thomas Wolf, www.foto-tw.de · CC BY-SA 3.0 DE · farblich bearbeitet',
  creditHref: 'https://commons.wikimedia.org/wiki/File:Darmstadt_Mathildenh%C3%B6he.jpg'
 },
 unterhaltsreinigung: { alt: 'Gereinigter Büroarbeitsplatz', note: 'Unterhaltsreinigung im Büro' },
 treppenhausreinigung: { alt: 'Sauberes Treppenhaus mit Handlauf', note: 'Gepflegtes Treppenhaus' },
 fensterreinigung: { alt: 'Fensterreinigung an einer Glasfront', note: 'Fensterreinigung an Glasfläche' },
 winterdienst: { alt: 'Geräumter Gehweg vor einem Gewerbegebäude im Winter', note: 'Winterdienst auf Außenfläche' },
 hausmeisterservice: { alt: 'Objektbetreuung im Eingangsbereich einer Immobilie', note: 'Hausmeisterservice / Objektkontrolle' },
 sonderreinigung: { alt: 'Gründliche Sonderreinigung einer Fläche', note: 'Sonderreinigung' },
 process: { alt: 'Gemeinsame Objektbesichtigung vor Angebotserstellung', note: 'Objektbesichtigung / Beratungsgespräch' },
 about1: { alt: 'Das MOSAG-Team bei der Arbeit', note: 'Team / Inhaber bei der Arbeit (Hochformat)' },
 about2: { alt: 'Reinigungsausstattung von MOSAG', note: 'Arbeitsmaterial / Ausstattung' },
 about3: { alt: 'Gepflegter Eingangsbereich nach der Reinigung', note: 'Ergebnis: gepflegter Eingangsbereich' },
 values: { alt: 'MOSAG-Mitarbeiter vor einem betreuten Objekt in Darmstadt', note: 'Team- oder Arbeitsfoto (Hochformat)' }
};

