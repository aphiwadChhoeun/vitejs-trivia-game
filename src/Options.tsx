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

  const selectHandler = (option: boolean) => {
    props.selectHandler(option);

    gsap.fromTo(
      controlsRef.current,
      {
        opacity: 1,
        y: 0,
      },
      {
        height: 0,
        opacity: 0,
        y: 50,
        duration: 0.2,
        ease: 'power3.out',
      }
    );
  };

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
          onPress={() => selectHandler(true)}
        >
          TRUE
        </Button>

        <Button
          color="error"
          size="xl"
          shadow
          onPress={() => selectHandler(false)}
        >
          FALSE
        </Button>
      </Container>
    </div>
  );
}
