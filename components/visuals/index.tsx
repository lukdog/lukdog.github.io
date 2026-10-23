// Maps the `visual` key of each item in content/site.ts to the drawing or object that shows it.
import type { ComponentType } from 'react';
import type { VisualKey } from '@/content/types';
import { BikeDoodle, SnowboardDoodle, SwimmingDoodle, TrekkingDoodle } from './doodles/outside';
import { ArchitectureDoodle, CodeDoodle, IntegrationsDoodle, MobileDoodle, WebDoodle, WhyDoodle } from './doodles/work';
import { Stage } from './Stage';

export const visuals = {
  code: CodeDoodle,
  why: WhyDoodle,
  architecture: ArchitectureDoodle,
  integrations: IntegrationsDoodle,
  pressMe: Stage,
  web: WebDoodle,
  mobile: MobileDoodle,
  bike: BikeDoodle,
  snowboard: SnowboardDoodle,
  trekking: TrekkingDoodle,
  swimming: SwimmingDoodle,
  sunLamp: Stage,
  moodCube: Stage,
  tvLight: Stage,
  ledGames: Stage,
  schedule: Stage,
  nessoHippo: Stage,
  macropad: Stage,
} satisfies Record<VisualKey, ComponentType>;
