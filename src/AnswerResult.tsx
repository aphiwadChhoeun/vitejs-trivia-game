import { useMemo } from 'react';
import { Text } from '@nextui-org/react';
import useLocalStorage from './useLocalStorage';

import type { Question } from './useLocalStorage';

export default function AnswerResult() {
  const [questions] = useLocalStorage('question', null);
  const [answers] = useLocalStorage('answers', []);
  const correctResult = useMemo(() => {
    return processAnswers(questions, answers);
  }, [answers]);

  return (
    <Text size={60}>
      Corect Answers: {correctResult}/{answers.length}
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
