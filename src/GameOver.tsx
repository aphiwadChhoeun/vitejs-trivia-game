import { useMemo } from 'react';
import { Text, Button } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from './useLocalStorage';
import type { Question } from './useLocalStorage';

export default function GameOver() {
  const navigate = useNavigate();
  const [questions] = useLocalStorage('question', null);
  const [answers] = useLocalStorage('answers', []);
  const correctResult = useMemo(() => {
    return processAnswers(questions, answers);
  }, [answers]);

  const restartHandler = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <>
      <Text size={60}>Game Over</Text>
      <Text size={60}>
        {correctResult}/{answers.length}
      </Text>
      <Button onPress={() => restartHandler()}>Restart</Button>
    </>
  );
}

function processAnswers(
  questions: Array<Question>,
  answers: Array<any>
): number {
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
