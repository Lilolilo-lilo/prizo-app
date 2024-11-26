'use client';

import { useRouter } from 'next/navigation';

const PrizeDetailsTopBar = () => {
  const router = useRouter();

  return (
    <div className="fixed top-0 left-0 right-0 h-16 bg-white flex items-center px-4 shadow-sm z-50">
      <button 
        className="w-6 h-6 mr-4 flex items-center justify-center"
        onClick={() => router.back()}
      >
        <img
          src="/icons/Back.svg"
          alt="Назад"
          width={24}
          height={24}
        />
      </button>
      <span className="text-[18px] font-medium">Подробнее</span>
    </div>
  );
};

export default PrizeDetailsTopBar;