import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SocialLinks } from '../types/global';
import Icon from './Icons/Icon';
import SocialsWidget from './SocialsWidget';

type NavbarProps = {
  name: string;
  role: string;
  socialLinks?: SocialLinks;
  className?: string;
};

export default function Navbar({ name, role, socialLinks, className }: NavbarProps) {
  const router = useRouter();
  console.log(router.asPath);

  return (
    <div className={classnames(className, 'mx-auto  max-w-6xl px-4 py-10')}>
      <div className="flex  items-center justify-between md:flex-row">
        {/* Logo / Home / Text */}

        <div className="flex flex-col">
          <Link href="/">
            <h1 className="text-xl font-semibold dark:text-gray-100">{name}</h1>
            <p className="text-base font-light text-gray-500 dark:text-gray-300">{role}</p>
          </Link>
        </div>

        <div className="hidden space-x-8 md:block">
          <Link href="/">
            <span
              className={`text-base  ${
                router.asPath === '/'
                  ? 'font-bold text-gray-800 dark:text-gray-400'
                  : 'font-normal text-gray-600 dark:text-gray-300 '
              }`}
            >
              About{' '}
              {router.asPath === '/' && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-down inline-block h-3 w-3"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                  />
                </svg>
              )}
            </span>
          </Link>
          <Link href="/experience">
            <span
              className={`text-base  ${
                router.asPath === '/experience'
                  ? 'font-bold text-gray-800 dark:text-gray-400'
                  : 'font-normal text-gray-600 dark:text-gray-300 '
              }`}
            >
              Experience{' '}
              {router.asPath === '/experience' && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-down inline-block h-3 w-3"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                  />
                </svg>
              )}
            </span>
          </Link>
        </div>
        {socialLinks && <SocialsWidget socials={socialLinks} height={20} width={20} className="space-x-4" />}
      </div>
      <div className="mt-4 block space-x-8 md:hidden">
        <Link href="/about">
          <span className="text-base font-normal text-gray-600 dark:text-gray-300">About</span>
        </Link>
        <Link href="/experience">
          <span className="text-base font-normal text-gray-600 dark:text-gray-300">Experience</span>
        </Link>
      </div>
    </div>
  );
}
