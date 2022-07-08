import { useState, useEffect } from 'react';

export default function useLocalStorage(key: string, value: any) {
  const [state, setState] = useState(value);
  const localStorageValue = localStorage.getItem(key);

  useEffect(() => {
    if (localStorageValue) {
      setState(JSON.parse(localStorageValue));
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, []);

  const update = (to: any) => {
    setState(to);
    localStorage.setItem(key, JSON.stringify(to));
  };

  const remove = () => {
    setState(null);
    localStorage.removeItem(key);
  };

  return [state, update, remove];
}
