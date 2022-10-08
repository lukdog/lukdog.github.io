import React from 'react';
import { SocialLinks } from '../types/global';
import Footer from './footer';
import Navbar from './navbar';

type ContainerProps = {
  socials?: SocialLinks;
  name: string;
  children: JSX.Element[] | JSX.Element;
};

export default function Container({ children, name, socials }: ContainerProps) {
  return (
    <div>
      <main className="dark:bg-gray-800 w-full">
        <Navbar name="Luca Doglione" role="Senior SW Developer" socialLinks={socials} />
        <div>{children}</div>
        <Footer socialLinks={socials} name={name} />
      </main>
    </div>
  );
}
