import { Text, Spacer, Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Text h1>Trivia Game</Text>

      <Spacer y={1} />

      <Link to="/game">
        <Button size="lg">Star Game</Button>
      </Link>
    </>
  );
}
