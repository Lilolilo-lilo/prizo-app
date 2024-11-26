'use client';

import TopBar from '../components/TopBar';
import NavigationBar from '../components/NavigationBar';
import PrizeCard from '../components/PrizeCard';

export default function MainPage() {
  return (
    <div className="min-h-screen bg-[#F8F8FB]">
      <TopBar />
      
      <main className="container mx-auto px-4 pt-20 pb-24">
        <div className="flex flex-col items-center gap-6">
          <PrizeCard />
        </div>
      </main>

      <NavigationBar />
    </div>
  );
}