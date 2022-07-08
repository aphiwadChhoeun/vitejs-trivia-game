import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';
import Question from './Question';
import Options from './Options';
import { useNavigate } from 'react-router-dom';
import { Spacer } from '@nextui-org/react';

export default function Home() {
  const [questions, setQuestions] = useLocalStorage('question', null);
  const [index, setIndex] = useLocalStorage('index', 0);
  const [answers, setAnswers] = useLocalStorage('answers', []);
  const navigate = useNavigate();

  useEffect(() => {
    const dataExists = JSON.parse(localStorage.getItem('question') ?? '');

    if (!dataExists) {
      fetch('https://opentdb.com/api.php?amount=10&category=9&type=boolean')
        .then((res) => res.json())
        .then((data) => {
          setQuestions(data.results);
        });
    }
  }, []);

  const selectHandler = (option: boolean) => {
    const newAnswers = [...answers];
    newAnswers.push(option);
    setAnswers(newAnswers);

    if (index >= questions.length - 1) {
      navigate('/game-over');
      return;
    }
    setIndex(index + 1);
  };

  return (
    <>
      {questions ? (
        <Question key={index} question={questions[index]?.question} />
      ) : null}
      <Spacer y={1} />
      <Options selectHandler={(option: boolean) => selectHandler(option)} />
      <Spacer y={2} />
    </>
  );
}
