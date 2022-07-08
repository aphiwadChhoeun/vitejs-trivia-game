import { Text, Button } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import AnswerResult from './AnswerResult';

export default function GameOver() {
  const navigate = useNavigate();

  const restartHandler = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <>
      <Text size={60}>Game Over</Text>
      <AnswerResult />
      <Button onPress={() => restartHandler()}>Restart</Button>
    </>
  );
}
