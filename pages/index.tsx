import type { NextPage } from 'next';
import About from '../components/about';
import Container from '../components/container';
import HeroBanner, { ColoredTitle } from '../components/herobanner';
import { SocialLinks } from '../types/global';

const titles: ColoredTitle[] = [
  { title: 'Hello', color: '#F56565' },
  { title: "I'm", color: '#ED8936' },
  { title: 'LukDog', color: '#ECC94B' },
];

const socials: SocialLinks = {
  github: 'https://github.com/LukDog',
  instagram: 'https://instagram.com/lukdog8',
  linkedin: 'https://inkedin.com/in/lucadoglione',
};

const Home: NextPage = () => {
  return (
    <Container socials={socials}>
      <HeroBanner titles={titles} profilePicUrl="./IMG_5454.png"></HeroBanner>
      <About
        intro="Software Engineer passionate about web and mobile development"
        email="l.doglione@mail.cc"
        description={[
          "I've been developing full-stack application since I was 10 years old. I didn't know what full-stack meant at that time because the term was not coined back then. I'm so out of content right now that I'm literally crying writing this text since lorem text is so 2012 now.",
          "After learning HTML and struggling with CSS, I came up with a brilliant idea of using bootstrap so that I don't have to style everything by myself and - for obvious reasons - if you knew bootstrap, you were cool.",
          "But now, I'm a legend. I've been coding in React, Angular, Vue, Svelte, Node.js, Express, Fastify, MongoDB, MySQL, Bootstrap, Tailwind, C, C++, C#, Rust, Haskell, Perl, PHP, Assembly, Logo and YouDontKnowShit programming language etc to name a few. Although I barely know the syntax (Psst, Stack overflow!), I consider myself a Ninja developer I'm laughing right now.",
        ]}
        resumeUrl="https://luk.dog"
        currentCompany="Arduino CC"
        currentCompanyUrl="https://arduino.cc"
        socialLinks={socials}
      />
    </Container>
  );
};

export default Home;
