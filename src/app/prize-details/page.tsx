'use client';

import { useState } from 'react';
import PrizeDetailsTopBar from '../components/PrizeDetailsTopBar';

const participants = [
  { id: 1, name: 'Ильина Екатерина', prizes: 15, avatar: 'https://i.pravatar.cc/80?img=47' },
  { id: 2, name: 'Смирнов Александр', prizes: 12, avatar: 'https://i.pravatar.cc/80?img=51' },
  { id: 3, name: 'Петрова Анна', prizes: 8, avatar: 'https://i.pravatar.cc/80?img=44' },
  { id: 4, name: 'Козлов Дмитрий', prizes: 10, avatar: 'https://i.pravatar.cc/80?img=53' },
  { id: 5, name: 'Соколова Мария', prizes: 7, avatar: 'https://i.pravatar.cc/80?img=41' },
  { id: 6, name: 'Морозов Игорь', prizes: 14, avatar: 'https://i.pravatar.cc/80?img=55' },
  { id: 7, name: 'Васильева Ольга', prizes: 9, avatar: 'https://i.pravatar.cc/80?img=42' },
  { id: 8, name: 'Попов Сергей', prizes: 11, avatar: 'https://i.pravatar.cc/80?img=57' },
  { id: 9, name: 'Николаева София', prizes: 13, avatar: 'https://i.pravatar.cc/80?img=45' },
  { id: 10, name: 'Иванов Максим', prizes: 6, avatar: 'https://i.pravatar.cc/80?img=59' },
  { id: 11, name: 'Кузнецова Алиса', prizes: 16, avatar: 'https://i.pravatar.cc/80?img=43' },
  { id: 12, name: 'Лебедев Артём', prizes: 8, avatar: 'https://i.pravatar.cc/80?img=52' },
  { id: 13, name: 'Павлова Виктория', prizes: 12, avatar: 'https://i.pravatar.cc/80?img=46' },
  { id: 14, name: 'Семёнов Кирилл', prizes: 9, avatar: 'https://i.pravatar.cc/80?img=54' },
  { id: 15, name: 'Голубева Дарья', prizes: 11, avatar: 'https://i.pravatar.cc/80?img=48' },
];

export default function PrizeDetailsPage() {
  const [activeTab, setActiveTab] = useState('детали');
  const [showPopup, setShowPopup] = useState(false);

  const handleParticipate = () => {
    setShowPopup(true);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'участники':
        return (
          <div className="px-4 py-6 space-y-4">
            {participants.map((participant) => (
              <div key={participant.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={participant.avatar}
                    alt={participant.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span className="text-[14px] text-[#193238]">
                    {participant.name}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="/Icons/WinnersYellow.svg"
                    alt="Призы"
                    width={20}
                    height={20}
                  />
                  <span className="text-[14px] text-[#193238]">
                    {participant.prizes} призов
                  </span>
                </div>
              </div>
            ))}
          </div>
        );
      case 'детали':
        return (
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
        );
      case 'о нас':
        return (
          <div className="px-4 py-6 space-y-6">
            {/* Профиль */}
            <div className="flex flex-col items-center text-center">
              <div className="w-[100px] h-[100px] rounded-full border-2 border-[#47454F] flex items-center justify-center p-1">
                <img
                  src="/Logo/flowwow.png"
                  alt="Flowwow"
                  className="w-[71px] h-[20px] object-contain"
                />
              </div>
              <h2 className="text-[16px] text-[#193238] mt-3">
                Маркетплейс цветов и подарков
              </h2>
              <div className="flex gap-4 mt-4 w-full">
                <button className="flex-1 h-10 rounded-lg bg-[#4D63F5] text-[14px] text-white">
                  В магазин
                </button>
                <button className="flex-1 h-10 rounded-lg border border-[#193238] text-[14px] text-[#193238]">
                  Написать
                </button>
              </div>
            </div>

            {/* О компании */}
            <div>
              <h3 className="text-[16px] text-[#193238] mb-2">О нашей компании</h3>
              <p className="text-[14px] text-[#47454F]">
                Flowwow — это онлайн-сервис для покупки необычных товаров в локальных магазинах. Наш конек — доставка букетов, тортов и редких подарков: картин, подарочных сертификатов, экзотических комнатных растений, дизайнерской посуды и украшений.
              </p>
            </div>

            {/* Статистика */}
            <div>
              <h3 className="text-[16px] text-[#193238] mb-3">Статистика</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src="/Icons/Star.svg"
                      alt="Розыгрыши"
                      width={24}
                      height={24}
                    />
                    <span className="text-[14px] text-[#47454F]">
                      Провели уже розыгрышей
                    </span>
                  </div>
                  <div className="px-2 h-[18px] rounded-full bg-[#33D646] text-white text-[12px] flex items-center justify-center">
                    50
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src="/Icons/Smile.svg"
                      alt="Участники"
                      width={24}
                      height={24}
                    />
                    <span className="text-[14px] text-[#FF8214]">
                      Довольных участников
                    </span>
                  </div>
                  <div className="px-2 h-[18px] rounded-full bg-[#FF8214] text-white text-[12px] flex items-center justify-center">
                    500
                  </div>
                </div>
              </div>
            </div>

            {/* Соц сети */}
            <div>
              <h3 className="text-[16px] text-[#193238] mb-3">Мы в соц сетях</h3>
              <div className="space-y-3">
                <a href="https://t.me/flowwow" className="flex items-center gap-2 text-[14px] text-[#47454F]">
                  <img src="/Icons/Telegram.svg" alt="Telegram" width={24} height={24} />
                  <span>Telegram: @Flowwow</span>
                </a>
                <a href="https://vk.com/flowwow" className="flex items-center gap-2 text-[14px] text-[#47454F]">
                  <img src="/Icons/Vkontakte.svg" alt="VK" width={24} height={24} />
                  <span>Вконтакте:vk.com - Flowwow</span>
                </a>
                <a href="https://wa.me/79001234567" className="flex items-center gap-2 text-[14px] text-[#47454F]">
                  <img src="/Icons/WhatsApp.svg" alt="WhatsApp" width={24} height={24} />
                  <span>WhatsApp:+7 (832) 345 - 47 - 18</span>
                </a>
                <a href="https://flowwow.ru" className="flex items-center gap-2 text-[14px] text-[#47454F]">
                  <img src="/Icons/Website.svg" alt="Website" width={24} height={24} />
                  <span>Сайт: https://flowwow.com/</span>
                </a>
              </div>
            </div>
          </div>
        );
      case 'отзывы':
        return (
          <div className="px-4 py-6">
            {/* Отзывы */}
            <div className="space-y-8">
              <div className="flex gap-3">
                <img
                  src="https://i.pravatar.cc/80?img=47"
                  alt="One_girl"
                  className="w-[40px] h-[40px] rounded-full object-cover"
                />
                <div className="flex-1">
                  <h2 className="text-[16px] text-[#1C1B1F]">
                    One_girl
                  </h2>
                  <span className="text-[14px] text-[#47454F] block">
                    Вторник 14:32
                  </span>
                  <p className="text-[14px] text-[#47454F] mt-2">
                    Я участвовала в розыгрыше дубайского шоколада и хотя не выиграла, сам процесс был очень увлекательным! Призы просто потрясающие, а участие в конкурсе дало мне бонус в виде скидки на товары компании, который я с удовольствием использовала. Очень жду следующий конкурс!
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <img
                  src="https://i.pravatar.cc/80?img=44"
                  alt="Sweet_candy"
                  className="w-[40px] h-[40px] rounded-full object-cover"
                />
                <div className="flex-1">
                  <h2 className="text-[16px] text-[#1C1B1F]">
                    Sweet_candy
                  </h2>
                  <span className="text-[14px] text-[#47454F] block">
                    Понедельник 18:15
                  </span>
                  <p className="text-[14px] text-[#47454F] mt-2">
                    Регулярно участвую в конкурсах от Flowwow, и этот был особенно интересным! Очень прозрачные условия участия и честный выбор победителей. Даже если не выигрываешь главный приз, всегда получаешь приятные бонусы.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <img
                  src="https://i.pravatar.cc/80?img=42"
                  alt="Maria_flowers"
                  className="w-[40px] h-[40px] rounded-full object-cover"
                />
                <div className="flex-1">
                  <h2 className="text-[16px] text-[#1C1B1F]">
                    Maria_flowers
                  </h2>
                  <span className="text-[14px] text-[#47454F] block">
                    Воскресенье 12:40
                  </span>
                  <p className="text-[14px] text-[#47454F] mt-2">
                    Выиграла в прошлом конкурсе подарочный сертификат! Процесс участия очень простой и понятный. Отдельное спасибо за оперативную доставку приза и приятное общение с менеджером.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <img
                  src="https://i.pravatar.cc/80?img=45"
                  alt="Alex_bright"
                  className="w-[40px] h-[40px] rounded-full object-cover"
                />
                <div className="flex-1">
                  <h2 className="text-[16px] text-[#1C1B1F]">
                    Alex_bright
                  </h2>
                  <span className="text-[14px] text-[#47454F] block">
                    Суббота 20:05
                  </span>
                  <p className="text-[14px] text-[#47454F] mt-2">
                    Отличная организация конкурса! Особенно порадовала активность в комментариях и поддержка участников. Хотя я не выиграл главный приз, получил приятный бонус на следующую покупку.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <img
                  src="https://i.pravatar.cc/80?img=43"
                  alt="Diana_style"
                  className="w-[40px] h-[40px] rounded-full object-cover"
                />
                <div className="flex-1">
                  <h2 className="text-[16px] text-[#1C1B1F]">
                    Diana_style
                  </h2>
                  <span className="text-[14px] text-[#47454F] block">
                    Пятница 15:23
                  </span>
                  <p className="text-[14px] text-[#47454F] mt-2">
                    Участвовала в нескольких конкурсах от Flowwow, и каждый раз все организовано на высшем уровне! Прозрачные правила, честное проведение, быстрая доставка призов. Продолжайте в том же духе!
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <img
                  src="https://i.pravatar.cc/80?img=41"
                  alt="Kate_dreams"
                  className="w-[40px] h-[40px] rounded-full object-cover"
                />
                <div className="flex-1">
                  <h2 className="text-[16px] text-[#1C1B1F]">
                    Kate_dreams
                  </h2>
                  <span className="text-[14px] text-[#47454F] block">
                    Четверг 09:17
                  </span>
                  <p className="text-[14px] text-[#47454F] mt-2">
                    Спасибо за такие интересные конкурсы! Очень нравится формат проведения и то, что даже не выиграв главный приз, получаешь приятные бонусы. Обязательно буду участвовать в следующих розыгрышах!
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <img
                  src="https://i.pravatar.cc/80?img=48"
                  alt="Mark_positive"
                  className="w-[40px] h-[40px] rounded-full object-cover"
                />
                <div className="flex-1">
                  <h2 className="text-[16px] text-[#1C1B1F]">
                    Mark_positive
                  </h2>
                  <span className="text-[14px] text-[#47454F] block">
                    Среда 16:50
                  </span>
                  <p className="text-[14px] text-[#47454F] mt-2">
                    Классный конкурс! Порадовало, что можно следить за процессом в реальном времени. Спасибо за возможность участвовать и за скидку на будущие покупки!
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <img
                  src="https://i.pravatar.cc/80?img=46"
                  alt="Lisa_happy"
                  className="w-[40px] h-[40px] rounded-full object-cover"
                />
                <div className="flex-1">
                  <h2 className="text-[16px] text-[#1C1B1F]">
                    Lisa_happy
                  </h2>
                  <span className="text-[14px] text-[#47454F] block">
                    Вторник 11:30
                  </span>
                  <p className="text-[14px] text-[#47454F] mt-2">
                    Очень понравилась организация конкурса! Все четко, понятно и прозрачно. Приятно участвовать в таких мероприятиях, где чувствуется забота об участниках.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <img
                  src="https://i.pravatar.cc/80?img=49"
                  alt="Anna_smile"
                  className="w-[40px] h-[40px] rounded-full object-cover"
                />
                <div className="flex-1">
                  <h2 className="text-[16px] text-[#1C1B1F]">
                    Anna_smile
                  </h2>
                  <span className="text-[14px] text-[#47454F] block">
                    Понедельник 13:45
                  </span>
                  <p className="text-[14px] text-[#47454F] mt-2">
                    Потрясающий конкурс! Особенно порадовало разнообразие призов и бонусов. Буду ждать новых розыгрышей, очень понравилось участвовать!
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <img
                  src="https://i.pravatar.cc/80?img=50"
                  alt="Mike_cool"
                  className="w-[40px] h-[40px] rounded-full object-cover"
                />
                <div className="flex-1">
                  <h2 className="text-[16px] text-[#1C1B1F]">
                    Mike_cool
                  </h2>
                  <span className="text-[14px] text-[#47454F] block">
                    Воскресенье 17:20
                  </span>
                  <p className="text-[14px] text-[#47454F] mt-2">
                    Отличная идея с розыгрышем дубайского шоколада! Хотя не выиграл, но получил скидку на следующий заказ. Спасибо за такие интересные акции!
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PrizeDetailsTopBar />
      
      {/* Видео */}
      <div className="w-full h-[250px] bg-gray-200 mt-16">
        <video 
          className="w-full h-full object-cover"
          src="/videos/dubai-chocolate.mp4"
          controls
          playsInline
        />
      </div>

      {/* Tab Menu */}
      <div className="h-12 flex items-center px-4 border-b sticky top-0 bg-white">
        {['Детали', 'Участники', 'О нас', 'Отзывы'].map((tab) => {
          const tabKey = tab.toLowerCase();
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tabKey)}
              className={`px-4 h-12 text-sm whitespace-nowrap relative ${
                activeTab === tabKey
                  ? 'text-[#4D63F5] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#4D63F5]'
                  : 'text-[#47454F]'
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-16">
        {renderContent()}
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