'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegistrationPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Сохраняем данные в localStorage
    localStorage.setItem('user_name', name);
    localStorage.setItem('user_phone', phone);
    
    router.push('/category');
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <h1 className="text-2xl font-semibold text-center mb-8 text-foreground">
          Регистрация
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="form-label">
              Имя
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-field"
              required
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="form-label">
              Телефон
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="input-field"
              required
            />
          </div>

          <button type="submit" className="button-primary">
            Продолжить
          </button>
        </form>
      </motion.div>
    </main>
  );
}