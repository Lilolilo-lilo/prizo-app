'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Category() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<'products' | 'services' | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedCategory) {
      console.log({ category: selectedCategory });
      router.push(`/subcategory?type=${selectedCategory}`);
    }
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
          Выберите категорию
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setSelectedCategory('products')}
              className={`p-4 rounded-lg border-2 transition-all duration-200 flex flex-col items-center ${
                selectedCategory === 'products'
                  ? 'border-primary bg-primary bg-opacity-10'
                  : 'border-gray-300 hover:border-primary'
              }`}
            >
              <div className="relative w-12 h-12 mb-2">
                <Image
                  src="/window.svg"
                  alt="Products"
                  fill
                  className="object-contain"
                />
              </div>
              <span className={`text-sm font-medium ${
                selectedCategory === 'products' ? 'text-primary' : 'text-foreground'
              }`}>
                Товары
              </span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedCategory('services')}
              className={`p-4 rounded-lg border-2 transition-all duration-200 flex flex-col items-center ${
                selectedCategory === 'services'
                  ? 'border-primary bg-primary bg-opacity-10'
                  : 'border-gray-300 hover:border-primary'
              }`}
            >
              <div className="relative w-12 h-12 mb-2">
                <Image
                  src="/file.svg"
                  alt="Services"
                  fill
                  className="object-contain"
                />
              </div>
              <span className={`text-sm font-medium ${
                selectedCategory === 'services' ? 'text-primary' : 'text-foreground'
              }`}>
                Услуги
              </span>
            </button>
          </div>

          <button
            type="submit"
            disabled={!selectedCategory}
            className={`button-primary ${!selectedCategory && 'opacity-50 cursor-not-allowed'}`}
          >
            Продолжить
          </button>
        </form>
      </motion.div>
    </main>
  );
}