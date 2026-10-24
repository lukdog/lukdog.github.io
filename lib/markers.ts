// Marker colours as Tailwind classes and as raw values (the hand-drawn highlighter needs a literal colour).
import type { MarkerColor } from '@/content/types';

export const markerBg: Record<MarkerColor, string> = {
  teal: 'bg-teal',
  coral: 'bg-coral',
  orange: 'bg-orange',
};

export const markerStroke: Record<MarkerColor, string> = {
  teal: 'stroke-teal',
  coral: 'stroke-coral',
  orange: 'stroke-orange',
};

/** The original site palette; the text on top is always dark, so one set reads in both themes. */
export const markerHex: Record<MarkerColor, string> = {
  teal: '#14b8a6',
  coral: '#f56565',
  orange: '#ed8936',
};
