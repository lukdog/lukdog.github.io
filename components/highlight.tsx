import React, { Children } from 'react';
import { RoughNotation } from 'react-rough-notation';

type HighlightProps = {
  color: string;
  duration: number;
  children?: JSX.Element;
  forceShow?: boolean;
};

export default function Highlight({ color, children, duration, forceShow }: HighlightProps) {
  return (
    <RoughNotation
      type="highlight"
      multiline={false}
      padding={[2, 2]}
      iterations={1}
      animationDuration={duration}
      color={color}
      show={forceShow || false}
    >
      {children}
    </RoughNotation>
  );
}
