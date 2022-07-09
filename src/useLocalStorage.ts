import { useState } from 'react';

export type Question = {
  correct_answer: string;
  question: string;
};

export default function useLocalStorage(
  key: string,
  initialValue: any
): [Array<Question> | Array<any> | any | null, Function, Function] {
  const [state, setState] = useState<any | null>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const update = (value: any): void => {
    setState(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  const remove = (): void => {
    setState(null);
    localStorage.removeItem(key);
  };

  return [state, update, remove];
}
