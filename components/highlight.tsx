import React, { Children } from 'react';
import { RoughNotation } from 'react-rough-notation';

type HighlightProps = {
  color: string;
  duration: number;
  children?: JSX.Element;
};

export default function Highlight({ color, children, duration }: HighlightProps) {
  return (
    <RoughNotation
      type="highlight"
      multiline={true}
      padding={[0, 2]}
      iterations={1}
      animationDuration={duration}
      color={color}
    >
      {children}
    </RoughNotation>
  );
}
