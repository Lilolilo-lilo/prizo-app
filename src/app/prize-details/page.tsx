'use client';

import { useState } from 'react';
import PrizeDetailsTopBar from '../components/PrizeDetailsTopBar';

export default function PrizeDetailsPage() {
  const [activeTab, setActiveTab] = useState('details');
  const [showPopup, setShowPopup] = useState(false);

  const handleParticipate = () => {
    setShowPopup(true);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PrizeDetailsTopBar />
      
      {/* Видео */}
      <div className="w-full h-[250px] bg-gray-200 mt-16">
        <video 
          className="w-full h-full object-cover"
          src="/dubai-chocolate.mp4"
          controls
          playsInline
        />
      </div>

      {/* Tab Menu */}
      <div className="h-12 flex items-center px-4 border-b sticky top-0 bg-white">
        {['Детали', 'Участники', 'О\u00A0нас', 'Отзывы'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab.toLowerCase())}
            className={`px-4 h-12 text-sm whitespace-nowrap relative ${
              activeTab === tab.toLowerCase()
                ? 'text-[#4D63F5] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#4D63F5]'
                : 'text-[#47454F]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-16">
        <div className="px-4 py-6 space-y-6">
          {/* Заголовок */}
          <h1 className="text-[22px] text-[#193238]">
            Выиграй эксклюзивный дубайский шоколад!
          </h1>

          {/* Описание */}
          <p className="text-sm text-[#47454F]">
            Примите участие в нашем вкусном конкурсе и получите шанс выиграть роскошный дубайский шоколад! Выполните простые условия и насладитесь ароматами Востока прямо у себя дома. Победитель будет случайно выбран среди всех участников!
          </p>

          {/* Условия участия */}
          <div>
            <h2 className="text-base text-[#193238] mb-3">Условия участия</h2>
            <ul className="text-sm text-[#47454F] list-disc pl-5 space-y-2">
              <li>Подпишитесь на нашу страницу в Instagram и Facebook.</li>
              <li>Сделайте покупку на сумму от 100 рублей в нашем интернет-магазине или офлайн магазине.</li>
              <li>Опубликуйте фото вашего любимого блюда с хештегом #DubaiChocoChallenge и отметьте нас в посте.</li>
              <li>Отправьте свою заявку через форму на сайте, указав свои данные и ссылку на пост.</li>
            </ul>
          </div>

          {/* Информация */}
          <div>
            <h2 className="text-base text-[#193238] mb-4">Информация</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src="/Icons/Calendar.svg"
                  alt="Календарь"
                  width={24}
                  height={24}
                />
                <span className="text-sm text-[#47454F]">
                  Начало 05.11.2024 | Конец 06.11.2024
                </span>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="/Icons/Time.svg"
                  alt="Время"
                  width={24}
                  height={24}
                />
                <span className="text-sm text-[#47454F]">
                  Начало в 15:00 | Конец 19:00
                </span>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="/Icons/Result.svg"
                  alt="Итоги"
                  width={24}
                  height={24}
                />
                <span className="text-sm text-[#47454F]">
                  Итоги: 1 ноября 2024 г., 12:00
                </span>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="/Icons/Winners.svg"
                  alt="Победитель"
                  width={24}
                  height={24}
                />
                <span className="text-sm text-[#47454F]">
                  За победу дубайский шоколад
                </span>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="/Icons/Scores.png"
                  alt="Баллы"
                  width={24}
                  height={24}
                />
                <span className="text-sm text-[#47454F]">
                  За участие 250 баллов
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Кнопка участвовать */}
      <div className="fixed bottom-0 left-0 right-0 px-4 py-1 bg-white flex justify-center">
        <button 
          className="w-[280px] h-12 bg-[#4D63F5] text-white rounded-lg"
          onClick={handleParticipate}
        >
          Участвовать
        </button>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div 
            className="absolute inset-0 bg-[#193238] opacity-95"
            onClick={() => setShowPopup(false)}
          ></div>
          <div className="relative bg-white rounded-lg px-6 py-4 text-center w-[280px]">
            <p className="text-[#193238] text-lg">
              Теперь вы участвуете в данном конкурсе!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}