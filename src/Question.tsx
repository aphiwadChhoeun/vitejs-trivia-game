import { Text } from '@nextui-org/react';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

export type QuestionProps = {
  question: string;
};

export default function Question(props: QuestionProps) {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        duration: 1,
        y: 0,
        ease: 'power3.out',
      }
    );
  }, []);

  return (
    <Text
      ref={textRef}
      weight="bold"
      size={'1.5em'}
      css={{
        userSelect: 'none',
        '@sm': {
          fontSize: '3em',
        },
        '@md': {
          fontSize: '5em',
        },
        textGradient: '45deg, $blue600 -50%, $red600 150%',
        opacity: 0,
      }}
    >
      {decodeEntity(props.question)}
    </Text>
  );
}

function decodeEntity(input: string) {
  var textarea = document.createElement('textarea');
  textarea.innerHTML = input;
  return textarea.value;
}
