// The shape of everything the site says; content/site.ts must satisfy it.

export type MarkerColor = 'teal' | 'coral' | 'orange';

/** The drawings and objects an item can show, resolved by components/visuals. */
export type VisualKey =
  | 'code'
  | 'why'
  | 'architecture'
  | 'integrations'
  | 'teams'
  | 'pressMe'
  | 'web'
  | 'mobile'
  | 'bike'
  | 'snowboard'
  | 'trekking'
  | 'swimming'
  | 'sunLamp'
  | 'moodCube'
  | 'tvLight'
  | 'ledGames'
  | 'schedule'
  | 'nessoHippo'
  | 'macropad';

export type Link = { label: string; href: string };

/** `~~text~~` inside a title is drawn as a hand-made strike-through. */
export type Item = { visual: VisualKey; title: string; text: string };

export type Group = {
  title: string;
  marker: MarkerColor;
  note: string;
  items: Item[];
  /** Shows the "turn off the lights" button next to the title. */
  lightSwitch?: boolean;
};

export type Section = {
  id: string;
  title: string;
  underline: MarkerColor;
  note: string;
  intro: string;
  groups: Group[];
};

export type Role = { year: string; title: string; text?: string; current?: boolean };

export type Company = { name: string; span: string; marker: MarkerColor; roles: Role[] };

export type Site = {
  name: string;
  url: string;
  description: string;
  repo: string;
  nav: Link[];
  hero: {
    words: { text: string; marker: MarkerColor }[];
    lead: string;
    /** The part of `lead` that gets the hand-drawn squiggle. */
    squiggle: string;
    byline: string;
    photo: { src: string; alt: string; width: number; height: number; caption: string };
  };
  work: Section;
  timeline: { id: string; title: string; underline: MarkerColor; note: string; companies: Company[]; more: Link };
  afterWork: Section;
  contact: {
    id: string;
    title: string;
    /** The word in `title` that gets circled. */
    circled: string;
    text: string;
    /** Leave empty to hide the address row until there is one. */
    email?: string;
    socials: Link[];
  };
  footer: { note: string };
};
