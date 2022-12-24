import React from 'react';

type PageProps = {
  title: string;
  children?: JSX.Element[] | JSX.Element;
};

export default function Page({ title, children }: PageProps) {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left dark:text-gray-400">{title}</h1>
      </div>
      {children}
    </section>
  );
}
