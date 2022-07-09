import { useState, useEffect, useRef, useContext } from 'react';
import useLocalStorage from './useLocalStorage';
import Question from './Question';
import Options from './Options';
import { useNavigate } from 'react-router-dom';
import { Spacer, Text } from '@nextui-org/react';
import { gsap } from 'gsap';
import { localstorageContext } from './localstorageProvider';

export default function Home() {
  const [questions, setQuestions] = useLocalStorage('question', null);
  const [index, setIndex] = useLocalStorage('index', 0);
  const [answers, setAnswers] = useLocalStorage('answers', []);
  const navigate = useNavigate();

  const [result, setResult] = useState<string | null>(null);
  const resultRef = useRef(null);

  const [progress, setProgress] = useContext(localstorageContext);

  useEffect(() => {
    if (!questions) {
      fetch('https://opentdb.com/api.php?amount=10&category=9&type=boolean')
        .then((res) => res.json())
        .then((data) => {
          setQuestions(data.results);
        });
    }

    setProgress(index);
  }, []);

  const selectHandler = (option: boolean) => {
    const newAnswers = [...answers];
    newAnswers.push(option);
    setAnswers(newAnswers);

    setResult(
      questions[index].correct_answer.toLowerCase() === option.toString()
        ? 'Correct!'
        : 'Incorrect!'
    );

    gsap.fromTo(
      resultRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.4,
        ease: 'power3.out',
        onComplete: () => {
          setTimeout(() => {
            setResult(null);

            if (index >= questions.length - 1) {
              navigate('/game-over');
              return;
            }

            setProgress(index + 1);
            setIndex(index + 1);
          }, 1000);
        },
      }
    );
  };

  return (
    <>
      {questions ? (
        <Question key={index} question={questions[index]?.question} />
      ) : null}
      <Spacer y={1} />
      <div
        style={{
          height: '120px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Options
          key={'option_' + index}
          selectHandler={(option: boolean) => selectHandler(option)}
        />

        <Text
          key={'result_' + index}
          weight="bold"
          size={24}
          color={result === 'Correct!' ? 'success' : 'error'}
          css={{ textTransform: 'uppercase', userSelect: 'none' }}
        >
          {result}
        </Text>
      </div>
    </>
  );
}
