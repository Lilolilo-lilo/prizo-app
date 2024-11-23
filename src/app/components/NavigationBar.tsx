'use client';

import { useState } from 'react';

interface IconProps {
  active: boolean;
}

const NavigationBar = () => {
  const [activeTab, setActiveTab] = useState('main');

  return (
    <div className="fixed bottom-0 left-0 right-0 h-[80px] bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.05)] flex items-center justify-around px-6">
      <button
        onClick={() => setActiveTab('main')}
        className="flex flex-col items-center"
      >
        <MainIcon active={activeTab === 'main'} />
        <span
          className={`text-xs mt-1 transition-colors duration-200 ${
            activeTab === 'main' ? 'text-[#4D63F5]' : 'text-[#3D3D3E]'
          }`}
        >
          Главная
        </span>
      </button>

      <button
        onClick={() => setActiveTab('shop')}
        className="flex flex-col items-center"
      >
        <ShopIcon active={activeTab === 'shop'} />
        <span
          className={`text-xs mt-1 transition-colors duration-200 ${
            activeTab === 'shop' ? 'text-[#4D63F5]' : 'text-[#3D3D3E]'
          }`}
        >
          Магазин
        </span>
      </button>

      <button
        onClick={() => setActiveTab('winners')}
        className="flex flex-col items-center"
      >
        <WinnersIcon active={activeTab === 'winners'} />
        <span
          className={`text-xs mt-1 transition-colors duration-200 ${
            activeTab === 'winners' ? 'text-[#4D63F5]' : 'text-[#3D3D3E]'
          }`}
        >
          Победители
        </span>
      </button>

      <button
        onClick={() => setActiveTab('profile')}
        className="flex flex-col items-center"
      >
        <ProfileIcon active={activeTab === 'profile'} />
        <span
          className={`text-xs mt-1 transition-colors duration-200 ${
            activeTab === 'profile' ? 'text-[#4D63F5]' : 'text-[#3D3D3E]'
          }`}
        >
          Профиль
        </span>
      </button>
    </div>
  );
};

const MainIcon = ({ active }: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 18V15" stroke={active ? "#4D63F5" : "#3D3D3E"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.07 2.82L3.14002 8.37C2.36002 8.99 1.86002 10.3 2.03002 11.28L3.36002 19.24C3.60002 20.66 4.96002 21.81 6.40002 21.81H17.6C19.03 21.81 20.4 20.65 20.64 19.24L21.97 11.28C22.13 10.3 21.63 8.99 20.86 8.37L13.93 2.83C12.86 1.97 11.13 1.97 10.07 2.82Z" stroke={active ? "#4D63F5" : "#3D3D3E"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ShopIcon = ({ active }: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001" stroke={active ? "#4D63F5" : "#3D3D3E"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z" stroke={active ? "#4D63F5" : "#3D3D3E"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z" stroke={active ? "#4D63F5" : "#3D3D3E"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const WinnersIcon = ({ active }: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.15 16.5V18.6" stroke={active ? "#4D63F5" : "#3D3D3E"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.15002 22H17.15V21C17.15 19.9 16.25 19 15.15 19H9.15002C8.05002 19 7.15002 19.9 7.15002 21V22V22Z" stroke={active ? "#4D63F5" : "#3D3D3E"} strokeWidth="1.5" strokeMiterlimit="10"/>
    <path d="M6.15002 22H18.15" stroke={active ? "#4D63F5" : "#3D3D3E"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 16C8.13 16 5 12.87 5 9V6C5 3.79 6.79 2 9 2H15C17.21 2 19 3.79 19 6V9C19 12.87 15.87 16 12 16Z" stroke={active ? "#4D63F5" : "#3D3D3E"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.46998 11.65C4.71998 11.41 4.05998 10.97 3.53998 10.45C2.63998 9.44998 2.03998 8.24998 2.03998 6.84998C2.03998 5.44998 3.13998 4.34998 4.53998 4.34998H5.18998C4.98998 4.80998 4.88998 5.31998 4.88998 5.84998V8.84998C4.88998 9.84998 5.09998 10.79 5.46998 11.65Z" stroke={active ? "#4D63F5" : "#3D3D3E"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.53 11.65C19.28 11.41 19.94 10.97 20.46 10.45C21.36 9.44998 21.96 8.24998 21.96 6.84998C21.96 5.44998 20.86 4.34998 19.46 4.34998H18.81C19.01 4.80998 19.11 5.31998 19.11 5.84998V8.84998C19.11 9.84998 18.9 10.79 18.53 11.65Z" stroke={active ? "#4D63F5" : "#3D3D3E"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ProfileIcon = ({ active }: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.72 11.28 8.72 9.51C8.72 7.7 10.18 6.23 12 6.23C13.81 6.23 15.28 7.7 15.28 9.51C15.27 11.28 13.88 12.72 12.12 12.78Z" stroke={active ? "#4D63F5" : "#3D3D3E"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.74 19.38C16.96 21.01 14.6 22 12 22C9.4 22 7.04 21.01 5.26 19.38C5.36 18.44 5.96 17.52 7.03 16.8C9.77 14.98 14.25 14.98 16.97 16.8C18.04 17.52 18.64 18.44 18.74 19.38Z" stroke={active ? "#4D63F5" : "#3D3D3E"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke={active ? "#4D63F5" : "#3D3D3E"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default NavigationBar;