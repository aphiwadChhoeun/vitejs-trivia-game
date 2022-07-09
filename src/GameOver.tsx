import { Button } from '@nextui-org/react';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AnswerResult from './AnswerResult';
import { progressContext } from './ProgressProvider';
import useLocalStorage from './useLocalStorage';
import { gsap } from 'gsap';

export default function GameOver() {
  const [progress, setProgress] = useContext(progressContext);
  const [answers, setAnswers] = useLocalStorage('answers', []);
  const navigate = useNavigate();

  let newProgress = answers.length * 10;

  useEffect(() => {
    setProgress(answers.length * 10);

    let temp = { v: 0 };
    gsap.to(temp, {
      v: 100,
      duration: 0.5,
      delay: 1,
      ease: 'sine.out',
      onUpdate: () => {
        newProgress = answers.length * 10 - temp.v;
        setProgress(newProgress);
      },
    });
  }, []);

  const restartHandler = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <>
      <AnswerResult />
      <Button onPress={() => restartHandler()}>REPLAY</Button>
    </>
  );
}
