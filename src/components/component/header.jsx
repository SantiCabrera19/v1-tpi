'use client'

import { HeartPulse } from 'lucide-react';
import { LoginSpaOasis } from '@/components/component/login-spa-oasis';
import { NavigationButtons } from '@/components/component/navigation-buttons';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-pink-200 via-pink-300 to-pink-200 text-gray-800 shadow-lg backdrop-blur-sm bg-opacity-80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center space-x-3 group">
            <div className="p-2 bg-white rounded-full shadow-md">
            <img src="/icon.png" alt="Icono Personalizado" className="w-6 h-6" />
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-pink-400">
              Oasis Sentirse Bien
            </h1>
          </div>
          <NavigationButtons />
          <LoginSpaOasis />
        </div>
      </div>
    </header>
  );
}
