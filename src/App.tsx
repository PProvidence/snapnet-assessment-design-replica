import React from 'react';
import { Twitter, Facebook, Instagram, Menu, ArrowRight } from 'lucide-react';

// Assets
import logoIcon from './assets/logo.svg';
import illustrationLight from './assets/illustration-white.svg';

import illustrationDark from './assets/illustration-dark.svg';
import decorLeft from './assets/decor-left.svg';
import decorRight from './assets/rightRotatedDecor.svg';

export default function App() {
  return (
    // OUTER CONTAINER
    // Uses 'bg-bg-primary' which switches between #F8FDFA and #101010 automatically
    <div className="min-h-screen flex items-center justify-center bg-bg-primary p-0 2xl:p-10 transition-colors duration-300">
      
      {/* MAIN CARD */}
      <div className="relative w-full max-w-[1440px] min-h-screen 2xl:min-h-[900px] 2xl:h-auto 2xl:aspect-[1440/900] bg-bg-card 2xl:rounded-[20px] shadow-2xl overflow-hidden flex flex-col transition-colors duration-300">

        {/* --- DECORATION LAYER --- */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <img src={decorLeft} alt="" className="absolute bottom-0 left-0 w-[40%] max-w-[600px] opacity-90 dark:opacity-20" />
          <img src={decorRight} alt="" className="absolute top-0 right-0 w-[35%] max-w-[500px] opacity-60 dark:opacity-20" />
        </div>

        {/* --- CONTENT LAYER --- */}
        <div className="relative z-10 flex flex-col h-full px-6 md:px-16 lg:px-24 py-8">
          
          {/* HEADER */}
          <nav className="flex justify-between items-center w-full mb-8 lg:mb-12">
            
            {/* Social Icons (text-icon-header) */}
            <div className="flex gap-6">
              <Twitter className="w-5 h-5 text-icon-header hover:text-brand-green cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 text-icon-header hover:text-brand-green cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-icon-header hover:text-brand-green cursor-pointer transition-colors" />
            </div>

            {/* Logo Section */}
            <div className="flex items-center gap-3 absolute left-1/2 -translate-x-1/2">
              <img src={logoIcon} alt="Finance Logo" className="h-8 w-auto" />
              
              {/* Logo Text (text-text-logo) */}
              <span className="font-['Maven_Pro'] font-medium text-[25.64px] text-text-logo tracking-tight">
                Finance
              </span>
            </div>

            {/* Menu Button (text-btn-menu) */}
            <button className="p-2 transition-colors hover:opacity-80">
              <Menu className="w-8 h-8 text-btn-menu" />
            </button>
          </nav>

          {/* MAIN CONTENT */}
          <main className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Text */}
            <div className="space-y-8 max-w-[540px]">
              
              {/* Heading (text-text-main) */}
              <h1 className="font-['Overpass'] font-bold text-5xl lg:text-[4rem] leading-[1.1] text-text-main">
                Mutual Investment
              </h1>
              
              {/* Body Text (text-text-body) */}
              <p className="font-['Overpass'] font-normal text-2xl text-text-body leading-relaxed">
                At Finance we care about your future. We help you invest the way you want. So you can relax, have fun and let your fund grow.
              </p>
              
              {/* CTA Section */}
              <div className="flex flex-col items-start gap-5 pt-4">
                
                {/* Button (bg-brand-green) */}
                <button className="bg-brand-green hover:bg-green-600 text-white font-['Overpass'] font-semibold text-2xl px-10 py-4 rounded-full shadow-lg shadow-green-200 dark:shadow-none transition-transform hover:-translate-y-1">
                  Learn more
                </button>
                
                {/* Decorative Line (border-line-decor) */}
                <div className="w-[69.50px] h-0 border-t-2 border-line-decor ml-10 mt-1" />
              </div>
            </div>

            {/* Right Column: Illustration */}
            <div className="relative flex justify-center items-center h-full">
              {/* Light Illustration (Visible in Light Mode) */}
              <img 
                src={illustrationLight} 
                alt="Investment Growth" 
                className="w-full h-auto object-contain dark:hidden block drop-shadow-xl"
              />
              {/* Dark Illustration (Visible in Dark Mode) */}
              <img 
                src={illustrationDark} 
                alt="Investment Growth" 
                className="w-full h-auto object-contain hidden dark:block drop-shadow-xl"
              />
            </div>
          </main>

          {/* FOOTER / SCROLL INDICATOR */}
          <div className="pt-8 pb-4 flex justify-center">
             <div className="w-10 h-10 rounded-full border-2 border-brand-green flex items-center justify-center text-brand-green animate-bounce cursor-pointer hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors">
               <ArrowRight className="w-5 h-5 rotate-90" />
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}