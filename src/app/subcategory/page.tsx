'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

type SubcategoryOption = {
  id: string;
  label: string;
};

const SUBCATEGORIES: Record<string, { title: string; options: SubcategoryOption[] }> = {
  'products': {
    title: 'Товары',
    options: [
      { id: 'food', label: 'Продукты питания' },
      { id: 'electronics', label: 'Электротехника' },
      { id: 'clothing', label: 'Одежда' }
    ]
  },
  'services': {
    title: 'Услуги',
    options: [
      { id: 'hairdressing', label: 'Парикмахерская' },
      { id: 'spa', label: 'Spa процедуры' },
      { id: 'cosmetics', label: 'Косметика и уход' }
    ]
  }
};

export default function Subcategory() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get('type') as 'products' | 'services';
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);

  const categoryData = SUBCATEGORIES[type] || SUBCATEGORIES['products'];

  const handleCheckboxChange = (subcategory: string) => {
    setSelectedSubcategories(prev => {
      if (prev.includes(subcategory)) {
        return prev.filter(item => item !== subcategory);
      } else {
        return [...prev, subcategory];
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedSubcategories.length > 0) {
      console.log({ subcategories: selectedSubcategories });
      router.push('/filters');
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
          <Link href="/category" className="mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <h1 className="text-2xl font-semibold">Выберите подкатегории</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h2 className="text-xl font-medium mb-4">{categoryData.title}</h2>
            <div className="space-y-3">
              {categoryData.options.map((option) => (
                <label 
                  key={option.id}
                  className="flex items-center p-3 border rounded-lg cursor-pointer hover:border-[#4D63F5] transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={selectedSubcategories.includes(option.id)}
                    onChange={() => handleCheckboxChange(option.id)}
                    className="w-4 h-4 text-[#4D63F5] border-gray-300 rounded focus:ring-[#4D63F5]"
                  />
                  <span className="ml-3">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={selectedSubcategories.length === 0}
            className="w-full text-white py-3 rounded-lg transition-colors duration-200 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ backgroundColor: '#4D63F5' }}
          >
            Продолжить
          </button>
        </form>
      </motion.div>
    </main>
  );
}