'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Добавляем проверку, чтобы редирект происходил только на клиенте
    if (typeof window !== 'undefined') {
      const redirectTimer = setTimeout(() => {
        router.replace('/registration');
      }, 4000);

      return () => clearTimeout(redirectTimer);
    }
  }, [router]);

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center">
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <div className="relative w-[200px] h-[200px]">
            <Image
              src="/Logo/Logo.svg"
              alt="Prizo Logo"
              fill
              priority
              className="object-contain"
            />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="loading-spinner" />
        </motion.div>
      </div>
    </div>
  );
}