import React from 'react';
import type { NextPage } from 'next';
import { Experience } from '../types/global';

import Container from '../components/container';
import ExperienceComponent from '../components/experience';

const experiences: Experience[] = [
  {
    title: 'Senior Software Developer',
    desc: "I'm currently working as a Senior Software Developer at a company called Satispay. I'm working on the backend of the company's main product, which is a payment platform for merchants and consumers. I'm also working on the company's internal tools, which are used by the whole company.",
    year: '2021',
    company: 'Satispay',
    companyLink: 'https://www.satispay.com/',
  },
  {
    title: 'Software Developer',
    desc: "I worked as a Software Developer at a company called Satispay. I worked on the backend of the company's main product, which is a payment platform for merchants and consumers. I also worked on the company's internal tools, which are used by the whole company.",
    year: '2020',
    company: 'Satispay',
    companyLink: 'https://www.satispay.com/',
  },
  {
    title: 'Software Developer',
    desc: "I worked as a Software Developer at a company called Satispay. I worked on the backend of the company's main product, which is a payment platform for merchants and consumers. I also worked on the company's internal tools, which are used by the whole company.",
    year: '2019',
    company: 'Satispay',
    companyLink: 'https://www.satispay.com/',
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
