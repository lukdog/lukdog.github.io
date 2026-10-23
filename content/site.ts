// Everything the site says lives here. Edit this file to change the copy; the components only lay it out.
import type { Site } from './types';

export const site = {
  name: 'Luca Doglione',
  url: 'https://lukdog.com',
  description:
    'Luca Doglione builds software, products and the architecture that keeps them together. Sometimes they glow.',
  repo: 'https://github.com/lukdog/lukdog.github.io',

  nav: [
    { label: 'Things I like', href: '#things' },
    { label: 'So far', href: '#so-far' },
    { label: 'After work', href: '#after' },
    { label: 'Say hi', href: '#say-hi' },
  ],

  hero: {
    words: [
      { text: 'Hello,', marker: 'teal' },
      { text: "I'm", marker: 'coral' },
      { text: 'Luca.', marker: 'orange' },
    ],
    lead: 'I like to build things: software, products, and the architecture that keeps them together. Sometimes they also glow.',
    squiggle: 'build things',
    byline: 'By day I lead engineering teams at Arduino (a Qualcomm company). Based in Turin.',
    photo: {
      src: '/luca.jpg',
      alt: 'Luca at the seaside, smiling at the camera',
      width: 660,
      height: 880,
      caption: "that's me",
    },
  },

  work: {
    id: 'things',
    title: 'Things I like doing',
    underline: 'orange',
    note: '(at work)',
    intro: 'At work I build software products: the code, the architecture and the screens people use.',
    groups: [
      {
        title: 'Building software',
        marker: 'teal',
        note: '(mostly at work)',
        items: [
          {
            visual: 'code',
            title: 'I write ~~bugs~~ code.',
            text: 'Mostly Go and TypeScript. Writing code is still the way I think best.',
          },
          {
            visual: 'why',
            title: 'I ask why, before how.',
            text: 'Before I build something, I want to know who it is for and why it should exist.',
          },
          {
            visual: 'architecture',
            title: 'I draw boxes and arrows.',
            text: 'Architecture is my favourite puzzle: many small pieces, a few good rules, and no shortcuts between them.',
          },
          {
            visual: 'integrations',
            title: 'I make systems talk to each other.',
            text: 'APIs, webhooks and queues. I like the glue that makes two products work as one.',
          },
        ],
      },
      {
        title: 'Making interfaces',
        marker: 'coral',
        note: '(web, mobile, anything with a screen)',
        items: [
          {
            visual: 'pressMe',
            title: 'I make things nice to use.',
            text: 'A button should answer when you press it, and a tool should work without reading the manual.',
          },
          {
            visual: 'web',
            title: 'I build for the web.',
            text: 'Websites and web apps, from the first sketch to the last pixel. Fast pages, please.',
          },
          {
            visual: 'mobile',
            title: 'I build for your pocket.',
            text: 'Mobile apps that feel at home on a phone: quick, clear and easy to use with one hand.',
          },
        ],
      },
    ],
  },

  timeline: {
    id: 'so-far',
    title: 'So far',
    underline: 'coral',
    note: '(company by company)',
    more: { label: 'The long version is on LinkedIn', href: 'https://it.linkedin.com/in/lucadoglione' },
    companies: [
      {
        name: 'Arduino',
        span: '2021 → today · now part of Qualcomm',
        marker: 'teal',
        roles: [
          {
            year: '2026',
            title: 'Senior Staff Manager',
            current: true,
            text: 'I manage the teams behind frontend and mobile apps, the Go microservices of Arduino Cloud, the Arduino websites and the learning platform. I also lead the software QA team.',
          },
          {
            year: '2023',
            title: 'Associate Engineering Manager',
            text: 'Lead of the mobile and web teams in the Software & Cloud area: mobile apps, Arduino websites and the services around Arduino Cloud.',
          },
          {
            year: '2022',
            title: 'Senior Specialist Software Engineer',
            text: 'Responsible for the web and mobile teams: microservices and React apps on one side, IoT Remote and Science Journal on the other. Also architecture, development and code review.',
          },
          {
            year: '2021',
            title: 'Senior Software Engineer',
            text: 'Design and development of microservices and frontend applications.',
          },
        ],
      },
      {
        name: 'Marelli',
        span: '2018 → 2021',
        marker: 'coral',
        roles: [
          {
            year: '2020',
            title: 'HMI Technical Leader',
            text: 'Technical manager for prototypes with new technologies: research on modern and reusable UI, a team to manage, training and support.',
          },
          {
            year: '2018',
            title: 'HMI Software Engineer',
            text: 'Architect and developer for the Alfa Romeo Giulia and Stelvio infotainment, with attention to performance and code reuse.',
          },
        ],
      },
      {
        name: 'Teoresi',
        span: '2016 → 2018',
        marker: 'orange',
        roles: [
          {
            year: '2016',
            title: 'Software Engineer Consultant',
            text: 'Consultant for Magneti Marelli in the infotainment area, as GUI developer and analyst in the HMI team.',
          },
        ],
      },
      {
        name: 'Politecnico di Torino',
        span: '2011 → 2016',
        marker: 'teal',
        roles: [
          {
            year: '2016',
            title: 'MSc in Computer Engineering',
            text: 'Software and Digital Systems Engineering. Thesis on information security and forensic analysis.',
          },
          { year: '2014', title: 'BSc in Computer Engineering' },
        ],
      },
      {
        name: 'Aethia',
        span: '2014',
        marker: 'coral',
        roles: [{ year: '2014', title: 'Intern', text: 'Four months of HPC configuration and testing.' }],
      },
    ],
  },

  afterWork: {
    id: 'after',
    title: 'After work',
    underline: 'teal',
    note: '(away from the office)',
    intro: 'After work I go outside, or I build small objects for my home and my desk. Most of them light up.',
    groups: [
      {
        title: 'Getting outside',
        marker: 'teal',
        note: '(no screens allowed)',
        items: [
          { visual: 'bike', title: 'Gravel rides.', text: 'Long rides on gravel roads, far from any notification.' },
          {
            visual: 'snowboard',
            title: 'Snowboarding.',
            text: 'Winter weekends in the mountains, as many as I can get.',
          },
          { visual: 'trekking', title: 'Trekking.', text: 'Mountain paths, a backpack and no rush to arrive.' },
          {
            visual: 'swimming',
            title: 'Swimming.',
            text: 'Lanes in the pool: the one place where no screen can follow me.',
          },
        ],
      },
      {
        title: 'Making things that light up',
        marker: 'orange',
        note: '(my hobby)',
        lightSwitch: true,
        items: [
          {
            visual: 'sunLamp',
            title: 'A lamp that copies the sun.',
            text: 'It follows sunrise and sunset where it lives, with the same colours of the sky outside.',
          },
          {
            visual: 'moodCube',
            title: 'A cube that sets the mood.',
            text: '3D printed, with a small board inside. Put it down on one side and the lights at home change.',
          },
          {
            visual: 'tvLight',
            title: 'A light behind the TV.',
            text: 'The wall behind the screen glows with the colours of the picture, so the room feels bigger.',
          },
          {
            visual: 'ledGames',
            title: 'Games on 96 LEDs.',
            text: 'Twelve by eight lights on a small board are enough for Flappy Bird and Pong.',
          },
        ],
      },
      {
        title: 'Gadgets for my desk',
        marker: 'coral',
        note: '(also a hobby)',
        items: [
          {
            visual: 'schedule',
            title: 'A screen with my day.',
            text: 'The weather, the time and my next meeting. During a call, a bar shows how much time is left.',
          },
          {
            visual: 'nessoHippo',
            title: 'A hippo that watches me work.',
            text: 'It sits on my monitor and talks to Claude. Its colour follows how much I used it today, and it looks curious when an agent needs my input.',
          },
          {
            visual: 'macropad',
            title: 'A macropad with my shortcuts.',
            text: 'Nineteen keys, two knobs and a tiny screen. I built a small web editor to program it.',
          },
        ],
      },
    ],
  },

  contact: {
    id: 'say-hi',
    title: 'Say hi',
    circled: 'hi',
    text: "For any question, send me a mail and I'll get back to you. I swear.",
    email: '',
    socials: [
      { label: 'GitHub', href: 'https://github.com/lukdog' },
      { label: 'LinkedIn', href: 'https://it.linkedin.com/in/lucadoglione' },
      { label: 'Instagram', href: 'https://instagram.com/lukdog8' },
      { label: 'Medium', href: 'https://medium.com/@lukdog' },
    ],
  },

  footer: { note: 'Drawn by hand in Turin' },
} satisfies Site;
