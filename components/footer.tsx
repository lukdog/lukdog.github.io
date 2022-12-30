import React from 'react';
import Link from 'next/link';
import SocialsWidget from './SocialsWidget';
import { SocialLinks } from '../types/global';

type FooterProps = {
  name: string;
  socialLinks?: SocialLinks;
};

export default function Footer({ name, socialLinks }: FooterProps) {
  return (
    <div className="bg-[#F1F1F1] dark:bg-gray-900">
      <div className="mx-auto  max-w-6xl px-4 py-10 md:py-20">
        <div className="mt-8 flex flex-col justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
          <div>
            <p>&copy; {name}. All Rights Reserved.</p>
          </div>
          <div>
            <div>
              Thanks to
              <div className="inline-block transform transition duration-300 hover:-rotate-3 hover:scale-110">
                <Link className="rounded-md px-2 py-1 hover:bg-red-500  hover:text-gray-50" href="https://manuarora.in">
                  Manu Arora
                </Link>
              </div>
            </div>
          </div>
          {socialLinks && <SocialsWidget socials={socialLinks} height={20} width={20} className="space-x-4" />}
        </div>
      </div>
    </div>
  );
}
