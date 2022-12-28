import React from 'react';
import { SocialLinks } from '../types/global';
import { TechSkill } from '../types/global';
import Image from 'next/image';
import Page from './page';

type AboutProps = {
  intro: string;
  email: string;
  description: string[];
  resumeUrl: string;
  currentCompanyUrl: string;
  currentCompany: string;
  searchingForJob?: boolean;
  socialLinks?: SocialLinks;
  techSkills?: TechSkill[];
};

export default function About({
  intro,
  email,
  description,
  resumeUrl,
  currentCompanyUrl,
  currentCompany,
  searchingForJob = false,
  socialLinks,
  techSkills,
}: AboutProps) {
  return (
    <Page title="About Me">
      <div className="-mt-4 bg-[#F1F1F1] dark:bg-gray-900">
        <div className="text-container mx-auto max-w-6xl pt-20 dark:text-gray-300">
          <p className="mx-4 text-2xl font-semibold leading-loose  md:text-4xl" style={{ lineHeight: '3rem' }}>
            {intro}. <br /> Currently employed in{' '}
            <a className="rounded-md bg-teal-500 px-2 py-1 text-white" href={currentCompanyUrl}>
              {currentCompany}
            </a>
          </p>
        </div>
      </div>
      <div className="bg-[#F1F1F1] px-4 dark:bg-gray-900">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-y-20 gap-x-20 pt-20 md:grid-cols-3">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Contact</h1>
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
                For any question, send a{' '}
                <a
                  href={`mailto:${email}`}
                  className="border-b-2 border-gray-800 font-bold text-gray-800 dark:border-gray-300 dark:text-gray-300"
                >
                  mail
                </a>{' '}
                and I&apos;ll get back. I swear.
              </p>
            </div>
            {searchingForJob && (
              <div className="mt-8">
                <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Job Opportunities</h1>
                <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
                  I&apos;m looking for a job currently, If you see me as a good fit, check my{' '}
                  <a
                    href={resumeUrl}
                    target="__blank"
                    className="border-b-2 border-gray-800 font-bold text-gray-800 dark:border-gray-300 dark:text-gray-300"
                  >
                    CV.
                  </a>
                </p>
              </div>
            )}

            {/* Social Links */}
            {socialLinks && (
              <div>
                <h1 className="mt-8 text-xl font-semibold text-gray-700 dark:text-gray-200">Social Links</h1>
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
              <p key={idx} className="mb-4 text-xl text-gray-700 dark:text-gray-300 ">
                {desc}
              </p>
            ))}

            {/* Tech Stack */}
            {techSkills && (
              <div>
                <h1 className="inline-block rounded-md bg-teal-500 px-2 py-1 text-3xl font-bold text-gray-50">
                  Tech Stack
                </h1>
                <div className="mt-8 flex flex-row flex-wrap">
                  {techSkills.map((skill, idx) => (
                    <Image src={skill.iconUrl} height="80" width="80" key={idx} alt={skill.name} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Page>
  );
}

type SocialLinkRendererProp = {
  name: string;
  link: string;
};

function SocialLinkRenderer({ link, name }: SocialLinkRendererProp) {
  return (
    <div className="flex flex-row items-center justify-start ">
      <a href={link} className="group flex flex-row items-center space-x-4">
        <div className="my-4">&rarr;</div>
        <p className="relative overflow-hidden font-mono text-lg text-gray-500 dark:text-gray-300">
          <div className="absolute bottom-0 h-0.5 w-full -translate-x-24 transform bg-gray-400 transition duration-300 group-hover:translate-x-0"></div>
          {name}
        </p>
      </a>
    </div>
  );
}
