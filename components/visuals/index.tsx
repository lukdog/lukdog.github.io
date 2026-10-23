// Maps the `visual` key of each item in content/site.ts to the drawing or object that shows it.
import type { ComponentType } from 'react';
import type { VisualKey } from '@/content/types';
import { BikeDoodle, SnowboardDoodle, SwimmingDoodle, TrekkingDoodle } from './doodles/outside';
import { ArchitectureDoodle, CodeDoodle, IntegrationsDoodle, MobileDoodle, WebDoodle, WhyDoodle } from './doodles/work';
import { LedGames } from './objects/LedGames';
import { Macropad } from './objects/Macropad';
import { MoodCube } from './objects/MoodCube';
import { NessoHippo } from './objects/NessoHippo';
import { PressMe } from './objects/PressMe';
import { ScheduleScreen } from './objects/ScheduleScreen';
import { SunLamp } from './objects/SunLamp';
import { TvLight } from './objects/TvLight';

export const visuals = {
  code: CodeDoodle,
  why: WhyDoodle,
  architecture: ArchitectureDoodle,
  integrations: IntegrationsDoodle,
  pressMe: PressMe,
  web: WebDoodle,
  mobile: MobileDoodle,
  bike: BikeDoodle,
  snowboard: SnowboardDoodle,
  trekking: TrekkingDoodle,
  swimming: SwimmingDoodle,
  sunLamp: SunLamp,
  moodCube: MoodCube,
  tvLight: TvLight,
  ledGames: LedGames,
  schedule: ScheduleScreen,
  nessoHippo: NessoHippo,
  macropad: Macropad,
} satisfies Record<VisualKey, ComponentType>;
