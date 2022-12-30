import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';

type IconProps = {
  name: string;
  width: number;
  height: number;
  lightUrl: string;
  darkUrl?: string;
  className?: string;
};

export default function Icon({ name, width, height, lightUrl, darkUrl, className }: IconProps) {
  return (
    <div>
      <Image
        alt={name}
        width={width}
        height={height}
        src={lightUrl}
        className={classNames(className, darkUrl && 'dark:invisible')}
      />
      {darkUrl && <Image alt={name} width={width} height={height} src={darkUrl} className="invisible dark:visible" />}
    </div>
  );
}
