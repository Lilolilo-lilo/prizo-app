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
    router.push('/contest/1'); // Здесь 1 - это ID конкурса
  };

  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-sm w-[334px] mx-auto mb-4 cursor-pointer transition-transform hover:scale-[1.02]"
      onClick={handleClick}
    >
      <div className="relative">
        {/* Основное изображение */}
        <div className="relative w-[334px] h-[425px]">
          <Image
            src="/prize.png"
            alt="Prize"
            fill
            className="object-cover"
          />
        </div>

        {/* Контент карточки */}
        <div className="p-4">
          <h3 className="text-[16px] font-medium text-[#193238] mb-4">
            Выиграй эксклюзивный дубайский шоколад!
          </h3>

          {/* Дата */}
          <div className="flex items-center mb-2">
            <CalendarIcon />
            <span className="ml-2 text-xs text-[#7E8A8C]">
              Начало 24.11.05 | Конец 25.11.05
            </span>
          </div>

          {/* Время */}
          <div className="flex items-center mb-4">
            <TimeIcon />
            <span className="ml-2 text-xs text-[#7E8A8C]">
              Начало в 15:00 | Конец 19:00
            </span>
          </div>

          {/* Разделительная линия */}
          <div className="h-[1px] bg-[#E8ECEF] mb-4"></div>

          {/* Участники */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((_, index) => (
                  <div
                    key={index}
                    className="w-6 h-6 rounded-full border-2 border-white bg-gray-200"
                  />
                ))}
              </div>
              <span className="ml-2 text-xs text-[#7E8A8C]">
                +{count} участников
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-xs font-medium text-[#193238]">250</span>
              <span className="ml-1 text-xs text-[#7E8A8C]">баллов</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.6667 2.66667H3.33333C2.59695 2.66667 2 3.26362 2 4V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V4C14 3.26362 13.403 2.66667 12.6667 2.66667Z" stroke="#7E8A8C" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.6667 1.33333V4M5.33333 1.33333V4M2 6.66667H14" stroke="#7E8A8C" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TimeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="#7E8A8C" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 4.66667V8L10 10" stroke="#7E8A8C" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default PrizeCard;