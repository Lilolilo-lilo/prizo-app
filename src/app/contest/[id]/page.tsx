'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CalendarIcon, ClockIcon, ResultsIcon, TrophyIcon, PointsIcon } from '../../components/icons/ContestIcons';

interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const Tab = ({ label, isActive, onClick }: TabProps) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 text-sm font-medium ${
      isActive ? 'text-primary border-b-2 border-primary' : 'text-gray-500 border-b border-[#F2F2F2]'
    }`}
  >
    {label}
  </button>
);

const TopBar = () => {
  const router = useRouter();
  return (
    <div className="flex items-center p-4 bg-white">
      <button onClick={() => router.back()} className="mr-4">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="currentColor"/>
        </svg>
      </button>
      <h1 className="text-[22px] font-medium">Подробнее</h1>
    </div>
  );
};

const Details = () => (
  <div className="px-4 space-y-4">
    <h2 className="text-[22px] font-medium">Выиграй эксклюзивный дубайский шоколад!</h2>
    <p className="text-[14px] text-[#47454F]">
      Примите участие в нашем вкусном конкурсе и получите шанс выиграть роскошный дубайский шоколад! 
      Выполните простые условия и насладитесь ароматами Востока прямо у себя дома. 
      Победитель будет случайно выбран среди всех участников!
    </p>
    <h3 className="text-[22px] font-medium">Условия участия</h3>
    <p className="text-[14px] text-[#47454F]">
      Подпишитесь на нашу страницу в Instagram и Facebook.<br/>
      Сделайте покупку на сумму от 100 рублей в нашем интернет-магазине или офлайн магазине.<br/>
      Опубликуйте фото вашего любимого блюда с хештегом #DubaiChocoChallenge и отметьте нас в посте.<br/>
      Отправьте свою заявку через форму на сайте, указав свои данные и ссылку на пост.
    </p>
    <h4 className="text-[16px] font-medium">Информация</h4>
    <div className="space-y-2">
      <div className="flex items-center text-[16px]">
        <CalendarIcon className="w-6 h-6 mr-2"/>
        <span>Начало 05.11.2024 | Конец 06.11.2024</span>
      </div>
      <div className="flex items-center text-[16px]">
        <ClockIcon className="w-6 h-6 mr-2"/>
        <span>Начало в 15:00 | Конец 19:00</span>
      </div>
      <div className="flex items-center text-[16px]">
        <ResultsIcon className="w-6 h-6 mr-2"/>
        <span>Итоги: 1 ноября 2024 г., 12:00</span>
      </div>
      <div className="flex items-center text-[16px]">
        <TrophyIcon className="w-6 h-6 mr-2"/>
        <span>За победу дубайский шоколад</span>
      </div>
      <div className="flex items-center text-[16px]">
        <PointsIcon className="w-6 h-6 mr-2"/>
        <span>За участие 250 баллов</span>
      </div>
    </div>
  </div>
);

export default function ContestPage() {
  const [activeTab, setActiveTab] = useState('details');
  
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      
      <div className="relative w-[358px] h-[191px] mx-auto">
        <video
          className="w-full h-full object-cover rounded-lg"
          controls
          poster="/contest-thumbnail.jpg"
        >
          <source src="/contest-video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="flex border-b border-[#F2F2F2]">
        <Tab
          label="Детали"
          isActive={activeTab === 'details'}
          onClick={() => setActiveTab('details')}
        />
        <Tab
          label="Участники"
          isActive={activeTab === 'participants'}
          onClick={() => setActiveTab('participants')}
        />
        <Tab
          label="О нас"
          isActive={activeTab === 'about'}
          onClick={() => setActiveTab('about')}
        />
        <Tab
          label="Отзывы"
          isActive={activeTab === 'reviews'}
          onClick={() => setActiveTab('reviews')}
        />
      </div>

      <div className="pb-20">
        {activeTab === 'details' && <Details />}
        {activeTab === 'participants' && <div className="p-4">Список участников</div>}
        {activeTab === 'about' && <div className="p-4">Информация о нас</div>}
        {activeTab === 'reviews' && <div className="p-4">Отзывы участников</div>}
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
        <button className="button-primary w-full">
          Участвовать
        </button>
      </div>
    </div>
  );
}