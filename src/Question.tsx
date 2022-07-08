import { Text } from '@nextui-org/react';

export type QuestionProps = {
  question: string;
};

export default function Question(props: QuestionProps) {
  return (
    <Text
      size={'1.5em'}
      css={{
        '@sm': {
          fontSize: '3em',
        },
        '@md': {
          fontSize: '5em',
        },
      }}
    >
      {decodeEntity(props.question)}
    </Text>
  );
}

function decodeEntity(input: string) {
  var textarea = document.createElement('textarea');
  textarea.innerHTML = input;
  return textarea.value;
}
