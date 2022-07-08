import { Container, Spacer, Button } from '@nextui-org/react';

export type OptionsProps = {
  selectHandler: Function;
};

export default function Options(props: OptionsProps) {
  return (
    <Container
      display="flex"
      justify="center"
      alignItems="center"
      wrap="wrap"
      css={{ gap: '1em' }}
    >
      <Button
        color="success"
        size="xl"
        shadow
        bordered
        onPress={() => props.selectHandler(true)}
      >
        True
      </Button>
      <Button
        color="error"
        size="xl"
        shadow
        bordered
        onPress={() => props.selectHandler(false)}
      >
        False
      </Button>
    </Container>
  );
}
