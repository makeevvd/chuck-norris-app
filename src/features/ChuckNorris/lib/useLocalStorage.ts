import { useEffect, useRef, useState } from 'react';

const useLocalStorageState = <TState>(key: string, defaultValue: TState | (() => TState)) => {
  const [state, setState] = useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key);
    if (valueInLocalStorage) {
      return JSON.parse(valueInLocalStorage);
    }
    return defaultValue instanceof Function ? defaultValue() : defaultValue;
  });

  const prevKeyRef = useRef(key);

  useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey);
    }
    prevKeyRef.current = key;
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState] as const;
};

export { useLocalStorageState };
