import Image from 'next/image';
import { useState, useEffect } from 'react';

const PrizeCard = () => {
  const [count, setCount] = useState(4);

  useEffect(() => {
    // Увеличиваем счетчик каждые 5 секунд
    const interval = setInterval(() => {
      setCount(prev => prev + 1);
    }, 5000); // 5000 мс = 5 секунд

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm w-[334px] mx-auto mb-4">
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
          <div className="w-[302px] h-[1px] bg-[#F2F2F2] mx-auto mb-4" />

          {/* Нижняя часть карточки */}
          <div className="flex justify-between items-center">
            {/* Логотип */}
            <div className="relative w-[96px] h-[27px]">
              <Image
                src="/Logo/flowwow.png"
                alt="Company Logo"
                fill
                className="object-contain"
              />
            </div>

            {/* Аватары и бейдж */}
            <div className="flex items-center">
              <div className="relative w-[71px] h-[28px]">
                <Image
                  src="/avatar.png"
                  alt="User Avatar"
                  fill
                  className="rounded-full border-2 border-white object-cover"
                />
              </div>
              <div className="ml-2 bg-[#14B5FF] rounded-full px-2 py-1 flex items-center justify-center">
                <span className="text-white text-xs">+{count}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CalendarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 2V5" stroke="#337EDD" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 2V5" stroke="#337EDD" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.5 9.09H20.5" stroke="#337EDD" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#337EDD" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.6947 13.7H15.7037" stroke="#337EDD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.6947 16.7H15.7037" stroke="#337EDD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.9955 13.7H12.0045" stroke="#337EDD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.9955 16.7H12.0045" stroke="#337EDD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.29431 13.7H8.30329" stroke="#337EDD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.29431 16.7H8.30329" stroke="#337EDD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TimeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z" stroke="#3AD079" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.71 15.18L12.61 13.33C12.07 13.01 11.63 12.24 11.63 11.61V7.51001" stroke="#3AD079" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default PrizeCard;