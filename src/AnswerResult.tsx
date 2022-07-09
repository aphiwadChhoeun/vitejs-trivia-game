import { useEffect, useMemo, useRef, useState } from 'react';
import { Text } from '@nextui-org/react';
import useLocalStorage from './useLocalStorage';
import type { Question } from './useLocalStorage';
import { gsap } from 'gsap';

export default function AnswerResult() {
  const [questions] = useLocalStorage('question', null);
  const [answers] = useLocalStorage('answers', []);
  const correctResult = useMemo(() => {
    return processAnswers(questions, answers);
  }, [answers]);
  const [result, setResult] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline();
    let temp = { v: 0 };
    tl.to(temp, {
      v: correctResult,
      duration: 1.5,
      delay: 1,
      ease: 'power3.out',
      onUpdate: () => {
        setResult(Math.ceil(temp.v));
      },
    });

    tl.to(
      textRef.current,
      {
        scale: 1.2,
        duration: 0.2,
        ease: 'expo.out',
      },
      '>-1'
    );

    tl.to(
      textRef.current,
      {
        scale: 1.0,
        duration: 0.2,
        ease: 'expo.out',
      },
      '>-.05'
    );
  }, []);

  return (
    <>
      <Text
        size={60}
        weight="bold"
        css={{
          textAlign: 'center',
          lh: 0.5,
          '@xsMax': {
            lh: 0.8,
          },
        }}
      >
        YOUR SCORE
      </Text>
      <Text ref={textRef} size={60} weight="bold">
        {result}/{answers.length}
      </Text>
    </>
  );
}

function processAnswers(
  questions: Array<Question>,
  answers: Array<any>
): number {
  if (answers.length <= 0) return 0;
  let correctCount = 0;

  for (let index = 0; index < questions?.length; index++) {
    if (
      questions[index]?.correct_answer.toLowerCase() ===
      answers[index].toString()
    ) {
      correctCount += 1;
    }
  }

  return correctCount;
}
