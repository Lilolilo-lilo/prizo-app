'use client';

import { useRouter } from 'next/navigation';
import { SplashScreen } from './components/SplashScreen';

export default function Home() {
  const router = useRouter();

  const handleSplashComplete = () => {
    router.push('/registration');
  };

  return <SplashScreen onComplete={handleSplashComplete} />;
}