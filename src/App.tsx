import { TbBrandTwitter , TbBrandMedium } from 'react-icons/tb';
import { TiSocialFacebookCircular } from 'react-icons/ti';
import { TextAlignEnd } from 'lucide-react';
import { BsArrowDown } from 'react-icons/bs';

// Assets
import logoIcon from './assets/logo.svg';
import illustrationLight from './assets/illustration-white.svg';
import illustrationDark from './assets/illustration-dark.svg';
import decorLeft from './assets/decor-left.svg';
import decorRight from './assets/rightRotatedDecor.svg';
import outerDecor from './assets/outerbg-decor.svg';
import outerDarkDecor from './assets/outerbgdark-decor.svg';

export default function App() {
  return (
    // OUTER CONTAINER
    <div className="min-h-screen flex items-center justify-center bg-bg-primary p-0 2xl:p-10 transition-colors duration-300">
      <img
        src={outerDecor} alt=""
        className="absolute top-0 right-0 w-[40%] max-w-177.5 pointer-events-none hidden dark:hidden 2xl:block z-0"
      />
      {/*Illustration (Visible in Dark Mode)  */}
      <img
        src={outerDarkDecor} alt=""
        className="absolute top-0 right-0 w-[40%] max-w-177.5 pointer-events-none hidden dark:block 2xl:block z-0"
      />
      {/* MAIN CARD */}
      <div className="relative w-full max-w-360 min-h-screen 2xl:min-h-225 2xl:h-auto 2xl:aspect-1440/900 bg-bg-card 2xl:rounded-[20px] shadow-2xl overflow-hidden flex flex-col transition-colors duration-300">

        {/* --- DECORATION LAYER --- */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <img src={decorLeft} alt="" className="absolute bottom-0 left-0 w-[40%] max-w-150" />
          <img src={decorRight} alt="" className="absolute top-0 right-0 w-[35%] max-w-125" />
        </div>

        {/* --- CONTENT LAYER --- */}
        <div className="relative z-10 flex flex-col h-full px-5 sm:px-6 md:px-16 lg:px-24 py-8">

          {/* HEADER */}
          <nav className="flex justify-between items-center w-full mb-8 lg:mb-12">

            {/* Social Icons (text-icon-header) */}
            <div className="flex gap-2.5 sm:gap-6">
              <a href="#" target="_blank" rel="noreferrer" aria-label="Twitter"
                className="text-icon-header hover:text-brand-green/80 transition-colors"
              >
                <TbBrandTwitter className="size-5 md:size-6 " />
              </a>

              <a href="#" target="_blank" rel="noreferrer" aria-label="Facebook"
                className="text-icon-header hover:text-brand-green/80 transition-colors"
              >
                <TiSocialFacebookCircular className="size-5 md:size-6 " />
              </a>

              <a href="#" target="_blank" rel="noreferrer" aria-label="Medium"
                className="text-icon-header hover:text-brand-green/80 transition-colors"
              >
                <TbBrandMedium className="size-5 md:size-6 " />
              </a>
            </div>

            {/* Logo Section */}
            <div className="flex items-center gap-2 sm:gap-3 absolute left-1/2 -translate-x-1/2">
              <img src={logoIcon} alt="Finance Logo" fetchPriority="high" className="h-6 sm:h-10 w-auto" />

              {/* Logo Text */}
              <span className="font-logo font-medium text-2xl sm:text-[25.64px] text-text-logo tracking-tight">
                Finance
              </span>
            </div>

            {/* Menu Button */}
            <button className="p-2 transition-colors ">
              <TextAlignEnd className="size-6 md:size-8 text-btn-menu hover:text-brand-green" />
            </button>
          </nav>

          {/* MAIN CONTENT */}
          <main className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Column */}
            <div className="space-y-8 max-w-135">

              {/* Heading */}
              <h1 className="font-sans font-bold text-5xl 2xl:text-6xl leading-[1.1] text-text-main">
                Mutual Investment
              </h1>

              <p className="font-sans font-normal text-2xl text-text-body leading-relaxed">
                At Finance we care about your future. We help you invest the way you want. So you can relax, have fun and let your fund grow.
              </p>

              {/* CTA Section */}
              <div className="flex flex-col items-start w-fit gap-4 pt-4">

                <button className="bg-brand-green hover:bg-green-600 text-white font-sans font-semibold text-2xl px-15 py-3 rounded-[55px] shadow-lg shadow-green-200 dark:shadow-none transition-transform hover:-translate-y-1">
                  Learn more
                </button>

                {/* Decorative Line */}
                <div className="w-[69.50px] mx-auto align-middle h-0 border-t-2 border-line-decor text-center mt-1" />
              </div>
            </div>

            {/* Right Column: Illustration */}
            <div className="relative flex justify-center items-center h-full">
              {/* Light Illustration (Visible in Light Mode) */}
              <img
                src={illustrationLight}
                alt="Investment Growth"
                className="w-full h-auto object-contain dark:hidden block drop-shadow-xl"
                fetchPriority="high"
              />
              {/* Dark Illustration (Visible in Dark Mode) */}
              <img
                src={illustrationDark}
                alt="Investment Growth"
                className="w-full h-auto object-contain hidden dark:block drop-shadow-xl"
                fetchPriority="high"
              />
            </div>
          </main>

          {/* FOOTER / SCROLL INDICATOR */}
          <div className="pt-8 pb-4 flex justify-center">
            <div className="w-10 h-10 rounded-full border-2 border-brand-green flex items-center justify-center text-brand-green animate-bounce cursor-pointer hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors">
              <BsArrowDown className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}