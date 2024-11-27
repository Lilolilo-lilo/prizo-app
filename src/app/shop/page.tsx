'use client';

import NavigationBar from '../components/NavigationBar';

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-white pb-16">
      <div className="px-4 py-6">
        <h1 className="text-2xl font-semibold text-[#1C1B1F]">Магазин</h1>
        {/* Здесь будет контент магазина */}
      </div>
      <NavigationBar />
    </main>
  );
}
