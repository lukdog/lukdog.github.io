export type SocialLinks = {
  instagram?: string;
  twitter?: string;
  linkedin?: string;
  github?: string;
  facebook?: string;
};

export type Experience = {
  title: string;
  desc: string;
  year: string;
  company: string;
  companyLink?: string;
  techSkills?: TechSkill[];
};

export type NavigationElement = {
  name: string;
  url: string;
};

export type TechSkill = {
  name: string;
  iconUrl: string;
};
