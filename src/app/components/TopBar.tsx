import Image from 'next/image';

const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 h-[64px] bg-white flex items-center justify-between px-4 shadow-sm z-50">
      <div className="relative w-[91px] h-[26px]">
        <Image
          src="/Logo/Logo.svg"
          alt="Prizo Logo"
          fill
          className="object-contain"
        />
      </div>
      
      <button className="w-6 h-6">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 7H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M6 12H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M10 17H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>
    </div>
  );
};

export default TopBar;