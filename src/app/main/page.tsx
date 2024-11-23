'use client';

import TopBar from '../components/TopBar';
import NavigationBar from '../components/NavigationBar';
import PrizeCard from '../components/PrizeCard';

export default function MainPage() {
  return (
    <div className="min-h-screen bg-[#F8F8FB] pb-[80px] pt-[80px]">
      <TopBar />
      
      <main className="container mx-auto px-4">
        <div className="grid gap-4">
          <PrizeCard />
        </div>
      </main>

      <NavigationBar />
    </div>
  );
}