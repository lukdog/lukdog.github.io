import React from 'react';
import { Experience } from '../types/global';
import Page from './page';
import Image from 'next/image';
import Link from 'next/link';

type ExperienceProps = {
  experiences: Experience[];
};

export default function ExperienceComponent({ experiences }: ExperienceProps) {
  return (
    <Page title="Experience">
      <div className="-mt-4 bg-[#F1F1F1] dark:bg-gray-900">
        <div className="mx-auto grid max-w-2xl grid-cols-1 pt-32 dark:bg-gray-900">
          {/* Experience card */}
          {experiences.map((exp, idx) => (
            <div key={idx}>
              <ExperienceCard
                title={exp.title}
                desc={exp.desc}
                year={exp.year}
                company={exp.company}
                companyLink={exp.companyLink}
                techSkills={exp.techSkills}
              />
              {idx === experiences.length - 1 ? null : (
                <div className="divider-container -mt-2 flex flex-col items-center">
                  <div className="relative z-10 h-4 w-4 rounded-full bg-orange-600 dark:brightness-75"></div>
                  <div className="-mt-2 h-24 w-1 rounded-full bg-gray-200 dark:bg-gray-500"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Page>
  );
}

const ExperienceCard = ({ title, desc, year, company, companyLink, techSkills }: Experience) => {
  return (
    <div className="experience-card relative z-10 mx-4 rounded-md border bg-white p-4 shadow-xl transition-shadow duration-300 motion-safe:hover:shadow-2xl dark:border-gray-800 dark:bg-zinc-800">
      <h1 className="absolute -top-10 text-4xl font-bold text-orange-600 dark:brightness-75 md:-left-10 md:-top-10">
        {year}
      </h1>
      <div>
        <h1 className="text-2xl font-semibold dark:text-gray-400">{title}</h1>

        {/* Company Link */}
        {companyLink ? (
          <Link href={companyLink} className="text-gray-500">
            {company}
          </Link>
        ) : (
          <p className="text-gray-500">{company}</p>
        )}
      </div>

      <p className="my-2 text-gray-600 dark:text-gray-400">{desc}</p>

      {/* Tech Stack */}
      {techSkills && (
        <div className="mt-2 mb-2 flex flex-row flex-wrap">
          {techSkills.map((skill, idx) => (
            <Image
              src={skill.iconUrl}
              height="50"
              width="50"
              key={idx}
              alt={skill.name}
              className="transition-all duration-300 motion-safe:hover:-translate-y-2 dark:brightness-75"
            />
          ))}
        </div>
      )}
    </div>
  );
};
