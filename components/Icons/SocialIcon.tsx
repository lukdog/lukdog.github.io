import React from 'react';
import Icon from './Icon';
import SocialIconLoader from '../../services/icons/SocialIconLoader';
import Link from 'next/link';

type SocialIconProps = {
  name: string;
  width: number;
  height: number;
  url: string;
  className?: string;
};

export default function SkillIcon({ name, width, height, className, url }: SocialIconProps) {
  const icon = SocialIconLoader(name.toLowerCase());

  if (icon) {
    return (
      <Link href={url}>
        <Icon
          name={name}
          width={width}
          height={height}
          lightUrl={icon.lightUrl}
          darkUrl={icon.darkUrl}
          className={className}
        />
      </Link>
    );
  } else return null;
}
