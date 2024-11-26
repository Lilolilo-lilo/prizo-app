'use client';

import Image from 'next/image';

const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 h-16 bg-background flex items-center justify-between px-4 shadow-sm z-50">
      <div className="relative w-[91px] h-[26px]">
        <Image
          src="/Logo/Logo.svg"
          alt="Prizo Logo"
          width={91}
          height={26}
          className="object-contain"
          priority
        />
      </div>
      
      <button className="w-6 h-6 flex items-center justify-center text-foreground">
        <img
          src="/Icons/Filter.svg"
          alt="Filter"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
};

export default TopBar;