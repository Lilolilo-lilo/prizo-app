'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Filters() {
  const router = useRouter();
  const [city, setCity] = useState('');
  const [formats, setFormats] = useState<string[]>([]);

  const handleCheckboxChange = (format: string) => {
    setFormats(prev => {
      if (prev.includes(format)) {
        return prev.filter(item => item !== format);
      } else {
        return [...prev, format];
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city) {
      console.log({ city, formats });
      // Здесь будет навигация на следующую страницу
      // router.push('/next-page');
    }
  };

  return (
    <main className="min-h-screen bg-white p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <div className="flex items-center mb-6">
          <Link href="/subcategory" className="mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <h1 className="text-2xl font-semibold">Фильтрация</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <h2 className="text-xl font-medium mb-2">Геолокация</h2>
            <p className="text-gray-600 mb-4">
              Выберите свой город или регион, чтобы просмотреть предложения, 
              специфичные для вашего региона.
            </p>
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                Город
              </label>
              <input
                type="text"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4D63F5] focus:border-transparent"
                required
              />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-4">Форматы</h2>
            <div className="space-y-3">
              <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:border-[#4D63F5] transition-colors">
                <input
                  type="checkbox"
                  checked={formats.includes('contests')}
                  onChange={() => handleCheckboxChange('contests')}
                  className="w-4 h-4 text-[#4D63F5] border-gray-300 rounded focus:ring-[#4D63F5]"
                />
                <span className="ml-3">Конкурсы</span>
              </label>

              <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:border-[#4D63F5] transition-colors">
                <input
                  type="checkbox"
                  checked={formats.includes('business_tasks')}
                  onChange={() => handleCheckboxChange('business_tasks')}
                  className="w-4 h-4 text-[#4D63F5] border-gray-300 rounded focus:ring-[#4D63F5]"
                />
                <span className="ml-3">Задачи для бизнеса</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            disabled={!city}
            className="w-full text-white py-3 rounded-lg transition-colors duration-200 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ backgroundColor: '#4D63F5' }}
          >
            Применить фильтры
          </button>
        </form>
      </motion.div>
    </main>
  );
}