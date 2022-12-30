import type { NextPage } from 'next';
import About from '../components/about';
import Container from '../components/container';
import HeroBanner, { ColoredTitle } from '../components/herobanner';
import { SocialLinks } from '../types/global';

const titles: ColoredTitle[] = [
  { title: 'Hello,', color: '#14B8A6' },
  { title: "I'm", color: '#F56565' },
  { title: 'Luca.', color: '#ED8936' },
];

const socials: SocialLinks = {
  github: 'https://github.com/LukDog',
  instagram: 'https://instagram.com/lukdog8',
  linkedin: 'https://it.linkedin.com/in/lucadoglione',
  medium: 'https://medium.com/@lukdog'
};

const techSkills: string[] = [
  'JavaScript',
  'Typescript',
  'go',
  'ReactJs',
  'NodeJs',
  'Auth0',
  'AWS',
  'Tailwind',
  'NextJS',
];

const Home: NextPage = () => {
  return (
    <Container socials={socials} name="Luca Doglione">
      <HeroBanner titles={titles} profilePicUrl="/IMG_5454.png"></HeroBanner>
      <About
        intro="Software Engineer passionate about web and mobile development"
        email="l.doglione@mail.cc"
        description={[
          'As a Senior Software Developer with a passion for Information Technology and software development from the age of 16, I have dedicated my career to becoming a skilled and specialized developer. With a focus on front-end and mobile application development.',
          'Throughout my career, I have had the opportunity to work on a variety of projects. My strong problem-solving skills and attention to detail have allowed me to consistently deliver high-quality work on time and to specification.',
          'I am also a highly collaborative team player, with strong communication skills and a dedication to delivering the best possible user experience. I am always happy to learn new technologies and approaches, and I believe that staying current and up-to-date is crucial for success in the rapidly-evolving field of software development.',
        ]}
        resumeUrl="https://luk.dog"
        currentCompany="Arduino CC"
        currentCompanyUrl="https://arduino.cc"
        socialLinks={socials}
        techSkills={techSkills}
      />
    </Container>
  );
};

export default Home;
