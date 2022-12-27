import React from 'react';

type PageProps = {
  title: string;
  children?: JSX.Element[] | JSX.Element;
};

export default function Page({ title, children }: PageProps) {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="mx-auto h-48 max-w-6xl bg-white dark:bg-gray-800">
        <h1 className=" py-20 text-center text-5xl font-bold dark:text-gray-400 md:text-left md:text-9xl">{title}</h1>
      </div>
      {children}
    </section>
  );
}
