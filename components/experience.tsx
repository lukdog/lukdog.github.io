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
      <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-4">
        <div className="grid grid-cols-1 dark:bg-gray-900 max-w-2xl mx-auto pt-32">
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
                <div className="divider-container flex flex-col items-center -mt-2">
                  <div className="w-4 h-4 bg-orange-600 rounded-full relative z-10"></div>
                  <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
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
    <div className="relative experience-card border p-4 rounded-md shadow-xl motion-safe:hover:shadow-2xl transition-shadow duration-300 bg-white dark:bg-gray-800 z-10 mx-4">
      <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-orange-600 font-bold dark:text-orange-800">
        {year}
      </h1>
      <div>
        <h1 className="font-semibold text-2xl">{title}</h1>

        {/* Company Link */}
        {companyLink ? (
          <Link href={companyLink} className="text-gray-500">
            {company}
          </Link>
        ) : (
          <p className="text-gray-500">{company}</p>
        )}
      </div>

      <p className="text-gray-600 dark:text-gray-400 my-2">{desc}</p>

      {/* Tech Stack */}
      {techSkills && (
        <div className="flex flex-row flex-wrap mt-2 mb-2">
          {techSkills.map((skill, idx) => (
            <Image
              src={skill.iconUrl}
              height="50"
              width="50"
              key={idx}
              alt={skill.name}
              className="transition-all duration-300 motion-safe:hover:-translate-y-2"
            />
          ))}
        </div>
      )}
    </div>
  );
};
