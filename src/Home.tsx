import { Text, Spacer, Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Text h1 size={100} css={{ textAlign: 'center' }}>
        Trivia Game
      </Text>
      <Text color="$gray600">
        Play a fun game of 10 TRUE of FALSE trivia questions.
      </Text>

      <Spacer y={1} />

      <Link to="/game">
        <Button
          size="lg"
          shadow
          rounded
          bordered
          css={{ textTransform: 'uppercase' }}
        >
          Start Game
        </Button>
      </Link>
    </>
  );
}
