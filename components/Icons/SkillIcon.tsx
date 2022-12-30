import React from 'react';
import Icon from './Icon';
import TechIconLoader from '../../services/icons/TechIconLoader';

type SkillIconProps = {
  name: string;
  width: number;
  height: number;
  className?: string;
};

export default function SkillIcon({ name, width, height, className }: SkillIconProps) {
  const icon = TechIconLoader(name.toLowerCase());

  if (icon) {
    return (
      <Icon
        name={name}
        width={width}
        height={height}
        lightUrl={icon.lightUrl}
        darkUrl={icon.darkUrl}
        className={className}
      />
    );
  } else return null;
}
