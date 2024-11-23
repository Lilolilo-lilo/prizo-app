'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

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
        className="w-full max-w-2xl"
      >
        <h1 className="text-2xl font-semibold text-center mb-3 text-foreground">
          Категории
        </h1>
        <h2 className="text-xl font-medium text-center mb-2 text-foreground">
          Добро пожаловать! Давайте персонализируем ваш опыт.
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-8">
          Выберите категорию, которая лучше всего описывает ваши интересы. 
          Вы можете выбирать между продуктами и услугами.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <label className={`flex items-start p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
              selectedCategory === 'products'
                ? 'border-primary bg-primary bg-opacity-5'
                : 'border-gray-300 hover:border-primary'
            }`}>
              <input
                type="radio"
                name="category"
                value="products"
                checked={selectedCategory === 'products'}
                onChange={() => setSelectedCategory('products')}
                className="mt-1 w-4 h-4 text-primary border-gray-300 focus:ring-primary"
              />
              <div className="ml-4">
                <div className="font-medium text-foreground">Продукты</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  Получайте предложения по товарам, участвуйте в акциях от брендов и магазинов.
                </div>
              </div>
            </label>

            <label className={`flex items-start p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
              selectedCategory === 'services'
                ? 'border-primary bg-primary bg-opacity-5'
                : 'border-gray-300 hover:border-primary'
            }`}>
              <input
                type="radio"
                name="category"
                value="services"
                checked={selectedCategory === 'services'}
                onChange={() => setSelectedCategory('services')}
                className="mt-1 w-4 h-4 text-primary border-gray-300 focus:ring-primary"
              />
              <div className="ml-4">
                <div className="font-medium text-foreground">Услуги</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  Выберите услуги, которые вас интересуют, среди предложений салонов, специалистов и т. д.
                </div>
              </div>
            </label>
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