import { Container, Button, Text } from '@nextui-org/react';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

export type OptionsProps = {
  selectHandler: Function;
};

export default function Options(props: OptionsProps) {
  const controlsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      controlsRef.current,
      {
        opacity: 0,
        y: -50,
      },
      {
        delay: 1,
        opacity: 1,
        duration: 0.2,
        y: 0,
        ease: 'power3.out',
      }
    );
  }, []);

  return (
    <div ref={controlsRef} style={{ opacity: 0 }}>
      <Container
        display="flex"
        justify="center"
        alignItems="center"
        wrap="wrap"
        css={{ gap: '1em' }}
      >
        <Button
          color="primary"
          size="xl"
          shadow
          onPress={() => props.selectHandler(true)}
        >
          TRUE
        </Button>
        <Text color="$gray600">OR</Text>
        <Button
          color="error"
          size="xl"
          shadow
          onPress={() => props.selectHandler(false)}
        >
          FALSE
        </Button>
      </Container>
    </div>
  );
}
