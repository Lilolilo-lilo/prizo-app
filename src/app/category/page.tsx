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
    <main className="min-h-screen flex items-center justify-center bg-white p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        <h1 className="text-2xl font-semibold text-center mb-3">
          Выберите свою категорию
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Выберите категорию, которая лучше всего описывает ваши интересы. 
          Вы можете выбирать между продуктами и услугами. 
          Это поможет нам адаптировать предложения и задачи к вашим предпочтениям, 
          обеспечивая более персонализированный опыт.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <label className="flex items-start p-4 border rounded-lg cursor-pointer hover:border-[#4D63F5] transition-colors">
              <input
                type="radio"
                name="category"
                value="products"
                checked={selectedCategory === 'products'}
                onChange={(e) => setSelectedCategory('products')}
                className="mt-1 w-4 h-4 text-[#4D63F5] border-gray-300 focus:ring-[#4D63F5]"
              />
              <div className="ml-4">
                <div className="font-medium">Продукты</div>
                <div className="text-gray-500 text-sm">
                  Получайте предложения по товарам, участвуйте в акциях от брендов и магазинов.
                </div>
              </div>
            </label>

            <label className="flex items-start p-4 border rounded-lg cursor-pointer hover:border-[#4D63F5] transition-colors">
              <input
                type="radio"
                name="category"
                value="services"
                checked={selectedCategory === 'services'}
                onChange={(e) => setSelectedCategory('services')}
                className="mt-1 w-4 h-4 text-[#4D63F5] border-gray-300 focus:ring-[#4D63F5]"
              />
              <div className="ml-4">
                <div className="font-medium">Услуги</div>
                <div className="text-gray-500 text-sm">
                  Выберите услуги, которые вас интересуют, среди предложений салонов, специалистов и т. д.
                </div>
              </div>
            </label>
          </div>

          <button
            type="submit"
            disabled={!selectedCategory}
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