'use client';

import { useState } from 'react';
import NavigationBar from '../components/NavigationBar';

interface RatingUser {
  id: number;
  rank: number;
  nickname: string;
  avatar: string;
  prizesCount: number;
  level: number;
}

const getRankColor = (rank: number): string => {
  switch (rank) {
    case 1:
      return 'bg-[#FFD700]'; // Золото
    case 2:
      return 'bg-[#8E8E8E]'; // Серебро
    case 3:
      return 'bg-[#CD7F32]'; // Бронза
    case 4:
      return 'bg-[#4D63F5]'; // Синий
    case 5:
      return 'bg-[#D3436C]'; // Розовый
    default:
      return 'bg-[#CAC4D0]'; // Серый
  }
};

const nicknames = [
  'One_girl',
  'Lucky_star',
  'Sweet_candy',
  'Dream_catcher',
  'Magic_unicorn',
  'Bright_soul',
  'Happy_vibes',
  'Sky_walker',
  'Moon_child',
  'Ocean_breeze',
  'Star_dust',
  'Wild_flower',
  'Snow_queen',
  'Sun_shine',
  'Night_owl'
];

// Создаем пользователей с возрастающими значениями от последнего к первому месту
const ratingUsers: RatingUser[] = Array.from({ length: 15 }, (_, index) => {
  const reverseIndex = 14 - index; // 14 -> 0 (для 15-го -> 1-го места)
  return {
    id: index + 1,
    rank: index + 1,
    nickname: nicknames[index],
    avatar: `https://i.pravatar.cc/80?img=${index + 1}`,
    prizesCount: reverseIndex + 1, // От 1 до 15 призов
    level: reverseIndex + 3 // От 3 до 17 уровня
  };
}).sort((a, b) => a.rank - b.rank); // Сортируем по возрастанию ранга

enum SocialNetwork {
  VKontakte = 'vkontakte',
  Telegram = 'telegram',
  WhatsApp = 'whatsapp'
}

interface SocialNetworkItem {
  type: SocialNetwork;
  displayName: string;
  icon: string;
}

const socialNetworks: readonly SocialNetworkItem[] = [
  { type: SocialNetwork.VKontakte, displayName: 'Вконтакте', icon: 'Vkontakte' },
  { type: SocialNetwork.Telegram, displayName: 'Telegram', icon: 'Telegram' },
  { type: SocialNetwork.WhatsApp, displayName: 'WhatsApp', icon: 'WhatsApp' }
] as const;

export default function WinnersPage() {
  const [activeTab, setActiveTab] = useState<'истории' | 'рейтинг'>('истории');
  const [likeCount, setLikeCount] = useState(345);
  const [isLiked, setIsLiked] = useState(false);
  const [isSharePopupOpen, setIsSharePopupOpen] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const handleTabClick = (tab: 'истории' | 'рейтинг') => {
    setActiveTab(tab);
  };

  const handleLikeClick = () => {
    if (!isLiked) {
      setLikeCount(prev => prev + 1);
    } else {
      setLikeCount(prev => prev - 1);
    }
    setIsLiked(!isLiked);
  };

  const handleShare = (networkType: SocialNetwork): void => {
    console.log(`Sharing via ${networkType}`);
    setIsSharePopupOpen(false);
    setShowSuccessAlert(true);
    setTimeout(() => {
      setShowSuccessAlert(false);
    }, 2000);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'истории':
        return (
          <div className="px-4 py-6">
            {/* Winner Card */}
            <div className="space-y-4">
              {/* User Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src="https://i.pravatar.cc/80?img=47"
                    alt="Fio.kettia"
                    className="w-[40px] h-[40px] rounded-full object-cover"
                  />
                  <div>
                    <h2 className="text-[16px] text-[#1C1B1F]">
                      Fio.kettia
                    </h2>
                    <span className="text-[14px] text-[#47454F]">
                      Среда 17:18
                    </span>
                  </div>
                </div>
                <div className="px-2 h-[18px] rounded-full bg-[#4D63F5] text-white text-[10px] flex items-center justify-center">
                  дубайский шоколад
                </div>
              </div>

              {/* Video Content */}
              <div className="w-full h-[420px] bg-black rounded-lg overflow-hidden relative">
                <video
                  src="/videos/Dubai.mp4"
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  autoPlay
                  muted
                  loop
                />
              </div>

              {/* Interaction Buttons */}
              <div className="flex items-center justify-between px-0 mt-4 w-full gap-6">
                {/* Like Button */}
                <div className="flex items-center gap-2">
                  <button 
                    className="flex items-center gap-1 group"
                    onClick={handleLikeClick}
                  >
                    <img
                      src="/Icons/Like.svg"
                      alt="Понравилось"
                      width={24}
                      height={24}
                      className={`transform transition-transform duration-200 ${isLiked ? 'scale-125' : 'scale-100'} ${isLiked ? 'opacity-100' : 'opacity-80'}`}
                    />
                    <span className={`text-[14px] mr-4 ${isLiked ? 'text-[#D3436C]' : 'text-[#47454F]'}`}>
                      Понравилось
                    </span>
                  </button>
                  <div className={`px-2 h-[16px] rounded-full ${isLiked ? 'bg-[#D3436C]' : 'bg-[#47454F]'} text-white text-[11px] flex items-center justify-center min-w-[32px]`}>
                    {likeCount}
                  </div>
                </div>

                {/* Share Button */}
                <div className="flex items-center gap-2">
                  <button 
                    className="flex items-center gap-1"
                    onClick={() => setIsSharePopupOpen(true)}
                  >
                    <img
                      src="/Icons/Share.svg"
                      alt="Поделиться"
                      width={24}
                      height={24}
                    />
                    <span className="text-[14px] mr-4 text-[#4D63F5]">
                      Поделиться
                    </span>
                  </button>
                  <div className="px-2 h-[16px] rounded-full bg-[#4D63F5] text-white text-[11px] flex items-center justify-center min-w-[32px]">
                    154
                  </div>
                </div>
              </div>
            </div>

            {/* Share Popup */}
            {isSharePopupOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-2xl p-6 w-[90%] max-w-[320px]">
                  <h3 className="text-[18px] font-medium text-center mb-6">Поделиться</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {socialNetworks.map((network) => (
                      <button
                        key={network.type}
                        onClick={() => handleShare(network.type)}
                        className="flex flex-col items-center gap-2"
                      >
                        <div className="w-12 h-12 rounded-full bg-[#4D63F5] bg-opacity-10 flex items-center justify-center">
                          <img
                            src={`/Icons/${network.icon}.svg`}
                            alt={network.displayName}
                            width={24}
                            height={24}
                          />
                        </div>
                        <span className="text-[12px] text-[#47454F]">{network.displayName}</span>
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => setIsSharePopupOpen(false)}
                    className="mt-6 w-full py-3 text-[#4D63F5] text-[14px] border-t border-gray-100"
                  >
                    Отмена
                  </button>
                </div>
              </div>
            )}

            {/* Success Alert */}
            {showSuccessAlert && (
              <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-[#4D63F5] text-white px-4 py-2 rounded-full text-[14px] shadow-lg">
                Вы успешно поделились
              </div>
            )}
          </div>
        );
      case 'рейтинг':
        return (
          <div className="px-4 py-4">
            <div className="space-y-4">
              {ratingUsers.map((user) => (
                <div key={user.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3 relative">
                    {/* Rank number */}
                    <div className={`absolute -top-1 -left-1 w-[16px] h-[16px] ${getRankColor(user.rank)} rounded-full flex items-center justify-center shadow-sm`}>
                      <span className="text-[11px] text-white">{user.rank}</span>
                    </div>
                    {/* Avatar */}
                    <img
                      src={user.avatar}
                      alt={user.nickname}
                      className="w-[40px] h-[40px] rounded-full object-cover"
                    />
                    {/* Nickname */}
                    <span className="text-[14px] text-[#1C1B1F]">
                      {user.nickname}
                    </span>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    {/* Prizes count */}
                    <div className="flex items-center gap-1">
                      <img
                        src="/Icons/WinnersYellow.svg"
                        alt="Призы"
                        width={24}
                        height={24}
                      />
                      <span className="text-[14px] text-[#1C1B1F]">
                        {user.prizesCount} призов
                      </span>
                    </div>
                    {/* Level badge */}
                    <div className="px-2 h-[18px] rounded-full bg-[#FFA658] text-white text-[10px] flex items-center justify-center">
                      уровень {user.level}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-20">
        <NavigationBar />
        {/* Tab Bar - фиксированный */}
        <div className="bg-white">
          <div className="flex items-center justify-around border-b border-[#E5E5E5] px-4 py-3">
            <button
              className={`flex items-center gap-2 ${
                activeTab === 'истории' ? 'text-[#4D63F5]' : 'text-[#47454F]'
              }`}
              onClick={() => handleTabClick('истории')}
            >
              <img
                src="/Icons/Stories.svg"
                alt="Истории"
                width={24}
                height={24}
                className={`${
                  activeTab === 'истории' 
                    ? '[filter:invert(37%)sepia(74%)saturate(1045%)hue-rotate(211deg)brightness(101%)contrast(101%)]' 
                    : '[filter:brightness(0)saturate(100%)invert(32%)sepia(10%)saturate(686%)hue-rotate(202deg)brightness(91%)contrast(88%)]'
                }`}
              />
              <span className="text-[14px]">Истории</span>
            </button>
            <button
              className={`flex items-center gap-2 ${
                activeTab === 'рейтинг' ? 'text-[#4D63F5]' : 'text-[#47454F]'
              }`}
              onClick={() => handleTabClick('рейтинг')}
            >
              <img
                src="/Icons/Stars.svg"
                alt="Рейтинг"
                width={24}
                height={24}
                className={`${
                  activeTab === 'рейтинг' 
                    ? '[filter:invert(37%)sepia(74%)saturate(1045%)hue-rotate(211deg)brightness(101%)contrast(101%)]' 
                    : '[filter:invert(29%)sepia(5%)saturate(1475%)hue-rotate(215deg)brightness(96%)contrast(86%)]'
                }`}
              />
              <span className="text-[14px]">Рейтинг</span>
            </button>
          </div>
        </div>
      </div>

      {/* Отступ для фиксированного хедера */}
      <div className="pt-[60px]" />

      {/* Контент с возможностью скролла */}
      <div className="flex-1 overflow-y-auto pb-20">
        {renderContent()}
      </div>
    </main>
  );
}
