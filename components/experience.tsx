import React from 'react';
import { Experience } from '../types/global';
import Page from './page';

type ExperienceProps = {
  experiences: Experience[];
};

export default function ExperienceComponent({ experiences }: ExperienceProps) {
  return (
    <Page title="Experience">
      <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-4">
        <div className="grid grid-cols-1 dark:bg-gray-900 max-w-xl mx-auto pt-20">
          {/* Experience card */}
          {experiences.map((exp, idx) => (
            <div key={idx}>
              <ExperienceCard
                title={exp.title}
                desc={exp.desc}
                year={exp.year}
                company={exp.company}
                companyLink={exp.companyLink}
              />
              {idx === experiences.length - 1 ? null : (
                <div className="divider-container flex flex-col items-center -mt-2">
                  <div className="w-4 h-4 bg-orange-600 rounded-full relative z-10">
                    <div className="w-4 h-4 bg-orange-800 rounded-full relative z-10 animate-ping"></div>
                  </div>
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

const ExperienceCard = ({ title, desc, year, company, companyLink }: Experience) => {
  return (
    <div className="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4">
      <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-orange-600 font-bold dark:text-orange-800">
        {year}
      </h1>
      <h1 className="font-semibold text-xl">{title}</h1>
      <a href={companyLink} className="text-gray-500">
        {company}
      </a>
      <p className="text-gray-600 dark:text-gray-400 my-2">{desc}</p>
    </div>
  );
};
