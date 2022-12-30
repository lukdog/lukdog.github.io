export type SocialLinks = {
  apple?: string;
  clubhouse?: string;
  discord?: string;
  dribbble?: string;
  facebook?: string;
  figma?: string;
  github?: string;
  google?: string;
  instagram?: string;
  linkedin?: string;
  medium?: string;
  pinterest?: string;
  reddit?: string;
  signal?: string;
  skype?: string;
  snapchat?: string;
  spotify?: string;
  telegram?: string;
  tiktok?: string;
  tumblr?: string;
  twitch?: string;
  twitter?: string;
  VK?: string;
  youtube?: string;
};

export type Experience = {
  title: string;
  desc: string;
  year: string;
  company: string;
  companyLink?: string;
  techSkills?: string[];
};

export type NavigationElement = {
  name: string;
  url: string;
};

export type Icon = {
  name: string;
  lightUrl: string;
  darkUrl?: string;
};
