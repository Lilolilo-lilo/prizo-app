'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const NavigationBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState('main');

  useEffect(() => {
    // Определяем активный таб на основе текущего URL
    const path = pathname?.split('/')[1] || 'main';
    setActiveTab(path);
  }, [pathname]);

  const handleNavigation = (tab: string) => {
    setActiveTab(tab);
    switch (tab) {
      case 'main':
        router.push('/main');
        break;
      case 'shop':
        router.push('/shop');
        break;
      case 'winners':
        router.push('/winners');
        break;
      case 'profile':
        router.push('/profile');
        break;
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.05)] flex items-center justify-around px-6">
      <button
        onClick={() => handleNavigation('main')}
        className="flex flex-col items-center"
      >
        <img
          src="/Icons/Main.svg"
          alt="Главная"
          width={24}
          height={24}
          style={{ filter: `brightness(0) saturate(100%) ${activeTab === 'main' ? 'invert(37%) sepia(74%) saturate(1045%) hue-rotate(213deg) brightness(99%) contrast(101%)' : 'invert(23%) sepia(11%) saturate(394%) hue-rotate(182deg) brightness(97%) contrast(88%)'}` }}
        />
        <span className={`text-xs mt-1 ${activeTab === 'main' ? 'text-[#4D63F5]' : 'text-[#3D3D3E]'}`}>
          Главная
        </span>
      </button>

      <button
        onClick={() => handleNavigation('shop')}
        className="flex flex-col items-center"
      >
        <img
          src="/Icons/Shop.svg"
          alt="Магазин"
          width={24}
          height={24}
          style={{ filter: `brightness(0) saturate(100%) ${activeTab === 'shop' ? 'invert(37%) sepia(74%) saturate(1045%) hue-rotate(213deg) brightness(99%) contrast(101%)' : 'invert(23%) sepia(11%) saturate(394%) hue-rotate(182deg) brightness(97%) contrast(88%)'}` }}
        />
        <span className={`text-xs mt-1 ${activeTab === 'shop' ? 'text-[#4D63F5]' : 'text-[#3D3D3E]'}`}>
          Магазин
        </span>
      </button>

      <button
        onClick={() => handleNavigation('winners')}
        className="flex flex-col items-center"
      >
        <img
          src="/Icons/Winners.svg"
          alt="Победители"
          width={24}
          height={24}
          style={{ filter: `brightness(0) saturate(100%) ${activeTab === 'winners' ? 'invert(37%) sepia(74%) saturate(1045%) hue-rotate(213deg) brightness(99%) contrast(101%)' : 'invert(23%) sepia(11%) saturate(394%) hue-rotate(182deg) brightness(97%) contrast(88%)'}` }}
        />
        <span className={`text-xs mt-1 ${activeTab === 'winners' ? 'text-[#4D63F5]' : 'text-[#3D3D3E]'}`}>
          Победители
        </span>
      </button>

      <button
        onClick={() => handleNavigation('profile')}
        className="flex flex-col items-center"
      >
        <img
          src="/Icons/Profile.svg"
          alt="Профиль"
          width={24}
          height={24}
          style={{ filter: `brightness(0) saturate(100%) ${activeTab === 'profile' ? 'invert(37%) sepia(74%) saturate(1045%) hue-rotate(213deg) brightness(99%) contrast(101%)' : 'invert(23%) sepia(11%) saturate(394%) hue-rotate(182deg) brightness(97%) contrast(88%)'}` }}
        />
        <span className={`text-xs mt-1 ${activeTab === 'profile' ? 'text-[#4D63F5]' : 'text-[#3D3D3E]'}`}>
          Профиль
        </span>
      </button>
    </div>
  );
};

export default NavigationBar;