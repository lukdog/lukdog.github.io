import React from 'react';
import { SocialLinks } from '../types/global';

type AboutProps = {
  intro: string;
  email: string;
  description: string[];
  resumeUrl: string;
  currentCompanyUrl: string;
  currentCompany: string;
  searchingForJob?: boolean;
  socialLinks?: SocialLinks;
};

export default function About({
  intro,
  email,
  description,
  resumeUrl,
  currentCompanyUrl,
  currentCompany,
  socialLinks,
  searchingForJob = false,
}: AboutProps) {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left dark:text-gray-400">About Me.</h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20 dark:text-gray-300">
          <p className="leading-loose text-2xl md:text-4xl font-semibold  mx-4" style={{ lineHeight: '3rem' }}>
            {intro}. <br /> Currently employed in{' '}
            <a className="bg-teal-500 rounded-md px-2 py-1 text-white" href={currentCompanyUrl}>
              {currentCompany}
            </a>
          </p>
        </div>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Contact</h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                For any question, send an{' '}
                <a
                  href={`mailto:${email}`}
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  mail
                </a>{' '}
                and I'll get back. I swear.
              </p>
            </div>
            {searchingForJob && (
              <div className="mt-8">
                <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Job Opportunities</h1>
                <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                  I'm looking for a job currently, If you see me as a good fit, check my{' '}
                  <a
                    href={resumeUrl}
                    target="__blank"
                    className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                  >
                    CV.
                  </a>
                </p>
              </div>
            )}

            {/* Social Links */}
            {socialLinks && (
              <div>
                <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">Social Links</h1>
                <div className="mt-4 ml-4">
                  {socialLinks.facebook && <SocialLinkRenderer name="Facebook" link={socialLinks.facebook} />}
                  {socialLinks.twitter && <SocialLinkRenderer name="Twitter" link={socialLinks.twitter} />}
                  {socialLinks.github && <SocialLinkRenderer name="Github" link={socialLinks.github} />}
                  {socialLinks.linkedin && <SocialLinkRenderer name="Linkedin" link={socialLinks.linkedin} />}
                  {socialLinks.instagram && <SocialLinkRenderer name="Instagram" link={socialLinks.instagram} />}
                </div>
              </div>
            )}
          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-2">
            {description?.map((desc, idx) => (
              <p key={idx} className="text-xl text-gray-700 mb-4 dark:text-gray-300 ">
                {desc}
              </p>
            ))}

            <h1 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">Tech Stack</h1>
            <div className="flex flex-row flex-wrap mt-8">
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                className="h-10 w-10 mx-2 my-2"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/java/java.png"
                className="h-10 w-10 mx-2 my-2"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"
                className="h-10 w-10 mx-2 my-2"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
                className="h-10 w-10 mx-2 my-2"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
                className="h-10 w-10 mx-2 my-2"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/angular/angular.png"
                className="h-10 w-10 mx-2 my-2"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/vue/vue.png"
                className="h-10 w-10 mx-2 my-2"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
                className="h-10 w-10 mx-2 my-2"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                className="h-10 w-10 mx-2 my-2"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png"
                className="h-10 w-10 mx-2 my-2"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png"
                className="h-10 w-10 mx-2 my-2"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png"
                className="h-10 w-10 mx-2 my-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type SocialLinkRendererProp = {
  name: string;
  link: string;
};

function SocialLinkRenderer({ link, name }: SocialLinkRendererProp) {
  return (
    <div className="flex flex-row justify-start items-center ">
      <a href={link} className="flex flex-row items-center space-x-4 group">
        <div className="my-4">&rarr;</div>
        <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
          <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
          {name}
        </p>
      </a>
    </div>
  );
}
