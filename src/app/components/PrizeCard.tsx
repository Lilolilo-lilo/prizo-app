'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const PrizeCard = () => {
  const router = useRouter();
  const [count, setCount] = useState(4);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    router.push('/prize-details');
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm w-[334px] mx-auto" onClick={handleClick}>
      <div className="relative">
        <div className="relative w-[334px] h-[425px]">
          <Image
            src="/prize.png"
            alt="Prize"
            fill
            className="object-cover"
          />
        </div>

        <div className="p-4">
          <h3 className="text-[16px] font-medium text-foreground mb-4">
            Выиграй эксклюзивный дубайский шоколад!
          </h3>

          <div className="flex items-center mb-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="ml-2 text-xs text-gray-700">
              Начало 24.11.05 | Конец 25.11.05
            </span>
          </div>

          <div className="flex items-center mb-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="ml-2 text-xs text-gray-700">
              Начало в 15:00 | Конец 19:00
            </span>
          </div>

          <div className="h-[1px] bg-[#F2F2F2] mb-4"></div>

          <div className="flex items-center justify-between">
            <div className="relative w-[71px] h-[28px]">
              <Image
                src="/Logo/flowwow.png"
                alt="Flowwow"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex items-center gap-2">
              <div className="relative w-[71px] h-[28px]">
                <Image
                  src="/avatar.png"
                  alt="Avatar"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xs bg-[#4D63F5] text-white px-2 py-1 rounded">
                +{count}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrizeCard;