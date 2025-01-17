import React from 'react';
import type { NextPage } from 'next';
import { Experience, SocialLinks } from '../types/global';

import Container from '../components/container';
import ExperienceComponent from '../components/experience';
import Head from 'next/head';

const experiences: Experience[] = [
  {
    title: 'Associate Engineering Manager',
    desc: 'Lead of Mobile and Web teams in Arduino Software and Cloud Area. Responsible for mobile applications, many Arduino Websites and Web applications and services related to Arduino Cloud.',
    year: '2023',
    company: 'Arduino',
    companyLink: 'https://arduino.cc/',
    techSkills: ['Go', 'Auth0', 'AWS', 'postman', 'Figma', 'Jira'],
  },
  {
    title: 'Senior Specialist Software Engineer',
    desc: "I'm currently responsible of web and mobile teams in Arduino software area. The first one is in charge of many microservices and react applications while the second is currently working on Iot Remote and Science Journal applications. I'm also involved in software architecture, development and review.",
    year: '2022',
    company: 'Arduino',
    companyLink: 'https://arduino.cc/',
    techSkills: ['Go', 'Typescript', 'ReactJs', 'Auth0', 'AWS', 'postman', 'Figma', 'Jira'],
  },
  {
    title: 'Senior Software Engineer',
    desc: 'I worked as a Senior Software Engineer in Arduino. My main activities were related to design and development of microservices and frontend applications.',
    year: '2021',
    company: 'Arduino',
    companyLink: 'https://arduino.cc/',
    techSkills: ['Go', 'Typescript', 'ReactJs', 'GraphQL', 'npm', 'postman', 'Figma'],
  },
  {
    title: 'HMI Technical Leader',
    desc: 'I worked as technical manager for prototypes development through new technologies. My responsabilities were related to research and implementation about modern and reusable UI solutions, management of development team, training and support.',
    year: '2020',
    company: 'Marelli',
    companyLink: 'https://www.marelli.com/',
    techSkills: ['Android', 'Javascript', 'Linux', 'NodeJs', 'Jira'],
  },
  {
    title: 'HMI Software Engineer',
    desc: 'I worked as software architect and developer for the Alfa Romeo Giulia and Stelvio infotainment system, responsible for the development and code review with particular attention to performance optimization and code reuse.',
    year: '2018',
    company: 'Marelli',
    companyLink: 'https://www.marelli.com/',
    techSkills: ['html5', 'css3', 'sass', 'Javascript', 'jQuery', 'Linux', 'NodeJs', 'Jira'],
  },
  {
    title: 'Software Engineer Consultant',
    desc: 'I worked as Consultant for Magneti Marelli in the Infotainment Area with the role of graphical user interface developer and analyst in the HMI team.',
    year: '2016',
    company: 'Teoresi',
    companyLink: 'https://www.teoresigroup.com/',
    techSkills: ['html5', 'css3', 'sass', 'Javascript', 'jQuery'],
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

const socials: SocialLinks = {
  github: 'https://github.com/LukDog',
  instagram: 'https://instagram.com/lukdog8',
  linkedin: 'https://it.linkedin.com/in/lucadoglione',
  medium: 'https://medium.com/@lukdog',
};

const Experience: NextPage = function () {
  return (
    <>
      <Head>
        <title>Luca Doglione - Experiences</title>
        <meta
          name="description"
          content="Luca Doglione - Software Engineer passionate about web and mobile development"
          key="desc"
        />
      </Head>
      <Container name="Luca Doglione" socials={socials}>
        <ExperienceComponent experiences={experiences} />
      </Container>
    </>
  );
};

export default Experience;
