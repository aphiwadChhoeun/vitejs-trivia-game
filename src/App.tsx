import { Container } from '@nextui-org/react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Game from './Game';
import GameOver from './GameOver';

function App() {
  return (
    <Container
      display="flex"
      direction="column"
      justify="center"
      alignItems="center"
      css={{
        minHeight: '100vh',
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/game-over" element={<GameOver />} />
      </Routes>
    </Container>
  );
}

export default App;
