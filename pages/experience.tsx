import React from 'react';
import type { NextPage } from 'next';
import { Experience } from '../types/global';

import Container from '../components/container';
import ExperienceComponent from '../components/experience';

const experiences: Experience[] = [
  {
    title: 'Senior Specialist Software Engineer',
    desc: "I'm currently responsible of web and mobile teams in Arduino sofftware area. The first one is in charge of many microservices and react applications while the second is currently working on Iot Remote and Science Journal applications. I'm also involved in software architecture, development and review.",
    year: '2022',
    company: 'Arduino',
    companyLink: 'https://arduino.cc/',
    techSkills: [
      { name: 'Go', iconUrl: '/tech-icons/go.svg' },
      { name: 'Typescript', iconUrl: '/tech-icons/typescript.svg' },
      { name: 'ReactJs', iconUrl: '/tech-icons/reactjs.svg' },
      { name: 'Auth0', iconUrl: '/tech-icons/auth0.svg' },
      { name: 'AWS', iconUrl: '/tech-icons/aws.svg' },
      { name: 'postman', iconUrl: '/tech-icons/postman.svg' },
      { name: 'Figma', iconUrl: '/tech-icons/figma.svg' },
      { name: 'Jira', iconUrl: '/tech-icons/jira.svg' },
    ],
  },
  {
    title: 'Senior Software Engineer',
    desc: 'I worked as a Senior Software Engineer in Arduino. My main activities were related to design and development of microservices and frontend applications.',
    year: '2021',
    company: 'Arduino',
    companyLink: 'https://arduino.cc/',
    techSkills: [
      { name: 'Go', iconUrl: '/tech-icons/go.svg' },
      { name: 'Typescript', iconUrl: '/tech-icons/typescript.svg' },
      { name: 'ReactJs', iconUrl: '/tech-icons/reactjs.svg' },
      { name: 'GraphQL', iconUrl: '/tech-icons/graphql.svg' },
      { name: 'npm', iconUrl: '/tech-icons/npm.svg' },
      { name: 'postman', iconUrl: '/tech-icons/postman.svg' },
      { name: 'Figma', iconUrl: '/tech-icons/figma.svg' },
    ],
  },
  {
    title: 'HMI Technical Leader',
    desc: 'I worked as technical manager for prototypes development through new technologies. My responsabilities were related to research and implementation about modern and reusable UI solutions, management of development team, training and support.',
    year: '2020',
    company: 'Marelli',
    companyLink: 'https://www.marelli.com/',
    techSkills: [
      { name: 'Android', iconUrl: '/tech-icons/android.svg' },
      { name: 'Javascript', iconUrl: '/tech-icons/js.svg' },
      { name: 'Linux', iconUrl: '/tech-icons/linux.svg' },
      { name: 'NodeJs', iconUrl: '/tech-icons/nodejs.svg' },
      { name: 'Jira', iconUrl: '/tech-icons/jira.svg' },
    ],
  },
  {
    title: 'HMI Software Engineer',
    desc: 'I worked as software architect and developer for the Alfa Romeo Giulia and Stelvio infotainment system, responsible for the development and code review with particular attention to performance optimization and code reuse.',
    year: '2018',
    company: 'Marelli',
    companyLink: 'https://www.marelli.com/',
    techSkills: [
      { name: 'html5', iconUrl: '/tech-icons/html5.svg' },
      { name: 'css3', iconUrl: '/tech-icons/css.svg' },
      { name: 'sass', iconUrl: '/tech-icons/sass.svg' },
      { name: 'Javascript', iconUrl: '/tech-icons/js.svg' },
      { name: 'jQuery', iconUrl: '/tech-icons/jquery.svg' },
      { name: 'Linux', iconUrl: '/tech-icons/linux.svg' },
      { name: 'NodeJs', iconUrl: '/tech-icons/nodejs.svg' },
      { name: 'Jira', iconUrl: '/tech-icons/jira.svg' },
    ],
  },
  {
    title: 'Software Engineer Consultant',
    desc: 'I worked as Consultant for Magneti Marelli in the Infotainment Area with the role of graphical user interface developer and analyst in the HMI team.',
    year: '2016',
    company: 'Teoresi',
    companyLink: 'https://www.teoresigroup.com/',
    techSkills: [
      { name: 'html5', iconUrl: '/tech-icons/html5.svg' },
      { name: 'css3', iconUrl: '/tech-icons/css.svg' },
      { name: 'sass', iconUrl: '/tech-icons/sass.svg' },
      { name: 'Javascript', iconUrl: '/tech-icons/js.svg' },
      { name: 'jQuery', iconUrl: '/tech-icons/jquery.svg' },
    ],
  },
  {
    title: "Master's degree in Computer Engineering",
    desc: "I'm graduated in Software and Digital System Engineering at Polytechnic University of Turin. Master thesis was about information security and forensic analysis",
    year: '2016',
    company: 'Politecnico di Torino',
    companyLink: 'https://www.polito.it/',
  },
  {
    title: 'Intern',
    desc: 'I had a 4 months internship at Aethia Srl in the area of HPC configuration and testing.',
    year: '2014',
    company: 'Aethia Srl',
    companyLink: 'https://www.aethia.com/',
  },
];

const Experience: NextPage = function () {
  return (
    <Container name="Luca Doglione">
      <ExperienceComponent experiences={experiences} />
    </Container>
  );
};

export default Experience;
