'use client';

import { useEffect } from 'react';

const COUNTER_KEY = 'prize_counter';

const getStoredCount = () => {
  if (typeof window === 'undefined') return 4;
  const stored = localStorage.getItem(COUNTER_KEY);
  return stored ? parseInt(stored) : 4;
};

export const incrementCounter = () => {
  if (typeof window === 'undefined') return;
  const newValue = getStoredCount() + 1;
  localStorage.setItem(COUNTER_KEY, newValue.toString());
};

const GlobalCounter = () => {
  useEffect(() => {
    // Убедимся, что значение существует при первом запуске
    if (!localStorage.getItem(COUNTER_KEY)) {
      localStorage.setItem(COUNTER_KEY, '4');
    }

    const interval = setInterval(() => {
      incrementCounter();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Этот компонент не рендерит ничего видимого
  return null;
};

export default GlobalCounter;
