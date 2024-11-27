'use client';

import { useState, useEffect } from 'react';
import NavigationBar from '../components/NavigationBar';
import Image from 'next/image';

interface Prize {
  id: number;
  name: string;
}

const prizes: Prize[] = [
  { id: 1, name: 'Дубайский шоколад' },
  { id: 2, name: 'Iphone 15' },
  { id: 3, name: 'Клавиатура Apple Magic' },
  { id: 4, name: 'Посещение в SPA салон в Турции' },
];

export default function ProfilePage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');

  useEffect(() => {
    const savedName = localStorage.getItem('user_name');
    const savedPhone = localStorage.getItem('user_phone');
    const savedCity = localStorage.getItem('user_city');
    
    if (savedName) setName(savedName);
    if (savedPhone) setPhone(savedPhone);
    if (savedCity) setCity(savedCity);
  }, []);

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <NavigationBar />
      
      <div className="flex-1 px-4 pt-4">
        {/* Профиль */}
        <div className="flex items-center space-x-6">
          {/* Аватар с индикатором уровня */}
          <div className="relative flex-shrink-0">
            <div className="w-[132px] h-[132px] rounded-full bg-[#FFA658] p-1">
              <Image
                src="/AvatarProfile.png"
                alt="Аватар"
                width={132}
                height={132}
                className="rounded-full object-cover"
                priority
              />
            </div>
            {/* Бейдж уровня */}
            <div className="absolute -top-1 -right-1 bg-[#FFA658] px-2 h-[20px] flex items-center rounded-full">
              <span className="text-[11px] text-white">3 уровень</span>
            </div>
          </div>

          {/* Информация справа от аватара */}
          <div className="flex flex-col justify-center space-y-3">
            {/* Имя */}
            <h1 className="text-[16px] font-medium text-[#1C1B1F]">{name}</h1>

            {/* Баллы */}
            <div className="flex items-center space-x-2">
              <Image src="/Icons/Scores.png" alt="Баллы" width={24} height={24} />
              <span className="text-[14px] text-[#1C1B1F]">баллы</span>
              <div className="px-2 h-[20px] flex items-center bg-[#FFA658] rounded-full">
                <span className="text-[11px] text-white">500</span>
              </div>
            </div>
          </div>
        </div>

        {/* Общая информация */}
        <div className="mt-8">
          <h2 className="text-[20px] font-medium text-[#1C1B1F] mb-4">Общая информация</h2>
          <div className="space-y-3">
            <div>
              <span className="text-[16px] text-[#1C1B1F]">Имя:</span>
              <span className="text-[16px] text-[#49454F] ml-2">{name}</span>
            </div>
            <div>
              <span className="text-[16px] text-[#1C1B1F]">Телефон:</span>
              <span className="text-[16px] text-[#49454F] ml-2">{phone}</span>
            </div>
            <div>
              <span className="text-[16px] text-[#1C1B1F]">Город:</span>
              <span className="text-[16px] text-[#49454F] ml-2">{city}</span>
            </div>
          </div>
        </div>

        {/* Мои призы */}
        <div className="mt-8 mb-8">
          <h2 className="text-[20px] font-medium text-[#1C1B1F] mb-4">Мои призы</h2>
          <div className="space-y-3">
            {prizes.map((prize) => (
              <div key={prize.id} className="flex items-center gap-2">
                <Image src="/Icons/WinnersYellow.svg" alt="Приз" width={24} height={24} />
                <span className="text-[14px] text-[#1C1B1F]">{prize.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
