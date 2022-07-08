import { useState, useEffect } from 'react';

export type Question = {
  correct_answer: string;
  question: string;
};

export default function useLocalStorage(
  key: string,
  value: any
): [Array<Question> | Array<any> | any | null, Function, Function] {
  const [state, setState] = useState<Array<Question> | Array<any> | null>(
    value
  );
  const localStorageValue = localStorage.getItem(key);

  useEffect(() => {
    if (localStorageValue) {
      setState(JSON.parse(localStorageValue));
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, []);

  const update = (to: Array<Question>): void => {
    setState(to);
    localStorage.setItem(key, JSON.stringify(to));
  };

  const remove = (): void => {
    setState(null);
    localStorage.removeItem(key);
  };

  return [state, update, remove];
}
