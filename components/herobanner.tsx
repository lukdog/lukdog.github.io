import React from 'react';
import { RoughNotationGroup } from 'react-rough-notation';
import Highlight from './highlight';
import Image from 'next/image';

export type ColoredTitle = {
  color: string;
  title: string;
};

type HeroBannerProps = {
  titles: ColoredTitle[];
  profilePicUrl: string;
};

export default function HeroBanner({ titles, profilePicUrl }: HeroBannerProps) {
  return (
    <div className="mx-auto flex max-w-screen-xl flex-row items-start justify-center overflow-hidden">
      <div className="mx-auto w-full text-center md:w-1/2 md:text-left lg:p-20">
        <RoughNotationGroup show={true}>
          {titles.map((el, id) => {
            return (
              <div className="mx-auto md:mx-0" style={{ width: "fit-content" }} key={id}>
              <Highlight key={id} color={el.color} duration={250}>
                <h1 className="max-w-fit my-2 text-6xl font-bold text-gray-700 dark:text-gray-200 md:text-8xl">{el.title}</h1>
              </Highlight>
              </div>
            );
          })}
        </RoughNotationGroup>
      </div>

      <div className="-mr-30 relative mt-20 hidden w-full md:w-1/2 lg:block">
        <div className="w-3/4 ">
          <Image src={profilePicUrl} height="600" width="600" alt="avatar" className="rounded shadow" />
          <div className="mt-4 flex flex-row justify-between">
            <div className="flex flex-row space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-90deg-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
                />
              </svg>
              <p className="font-mono">That&apos;s me</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
