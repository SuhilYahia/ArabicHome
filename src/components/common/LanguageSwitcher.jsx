import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { Globe } from 'lucide-react';

export const LanguageSwitcher = ({ isDarkBg = false, compact = false }) => {
  const { lang, setLanguage } = useLanguage();

  return (
    <div 
      className={`inline-flex items-center rounded-full p-1 transition-all border ${
        isDarkBg 
          ? 'bg-white/10 border-white/20 text-white backdrop-blur-sm' 
          : 'bg-[#F7F4EE] border-[#D8C6AE]/60 text-[#252522]'
      }`}
      role="group"
      aria-label="Language selection"
    >
      <button
        type="button"
        onClick={() => setLanguage('ar')}
        className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all flex items-center gap-1 cursor-pointer ${
          lang === 'ar'
            ? 'bg-[#A88B64] text-white shadow-sm'
            : isDarkBg
              ? 'text-white/80 hover:text-white'
              : 'text-[#8C7967] hover:text-[#252522]'
        }`}
        aria-pressed={lang === 'ar'}
      >
        <span>عربي</span>
      </button>

      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all flex items-center gap-1 cursor-pointer ${
          lang === 'en'
            ? 'bg-[#A88B64] text-white shadow-sm'
            : isDarkBg
              ? 'text-white/80 hover:text-white'
              : 'text-[#8C7967] hover:text-[#252522]'
        }`}
        aria-pressed={lang === 'en'}
      >
        <span>EN</span>
      </button>
    </div>
  );
};
