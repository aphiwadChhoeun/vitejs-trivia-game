import { useEffect, useMemo, useState } from 'react';
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

  useEffect(() => {
    let temp = { v: 0 };
    gsap.to(temp, {
      v: correctResult,
      duration: 1.5,
      delay: 1,
      ease: 'power3.out',
      onUpdate: () => {
        setResult(Math.ceil(temp.v));
      },
    });
  }, []);

  return (
    <Text size={60} weight="bold">
      SCORE {result}/{answers.length}
    </Text>
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
