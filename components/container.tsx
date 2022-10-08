import React from 'react';
import { SocialLinks } from '../types/global';
import Navbar from './navbar';

type ContainerProps = {
  socials?: SocialLinks;
  children: JSX.Element[] | JSX.Element;
};

export default function Container({ children, socials }: ContainerProps) {
  return (
    <div>
      <main className="dark:bg-gray-800 w-full">
        <Navbar name="Luca Doglione" role="Senior SW Developer" socialLinks={socials} />
        <div>{children}</div>
      </main>
    </div>
  );
}
