'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      onComplete();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-background flex items-center justify-center z-50"
        >
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.5,
                ease: "easeOut"
              }}
            >
              <div className="relative w-[150px] h-[42px]">
                <Image
                  src="/Logo/Logo.svg"
                  alt="Prizo Logo"
                  width={150}
                  height={42}
                  priority
                  className="object-contain"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center mt-6"
            >
              <div className="loading-spinner" />
              <p className="mt-2 text-primary font-medium text-sm">Загрузка...</p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};