import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';

export const BrandLogo = ({ variant = 'light', size = 'default' }) => {
  const { lang, isRTL } = useLanguage();

  const isDarkBg = variant === 'dark'; // on dark backgrounds (like hero or footer)

  return (
    <Link
      to="/"
      className="group inline-flex items-center gap-3 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A88B64] rounded-lg p-1 transition-transform"
      aria-label="المنزل العربي للديكورات - الصفحة الرئيسية"
    >
      {/* Architectural Emblem */}
      <div className={`relative flex items-center justify-center shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-xl transition-all duration-300 shadow-sm ${isDarkBg
        ? 'bg-[#A88B64] text-[#252522] group-hover:bg-[#C2A882]'
        : 'bg-[#252522] text-[#F7F4EE] group-hover:bg-[#343430]'
        }`}>
        <svg
          viewBox="0 0 40 40"
          fill="none"
          className="w-6 h-6 transform transition-transform duration-300 group-hover:scale-105"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Apex roof */}
          <path d="M20 7L31 17H9L20 7Z" fill="currentColor" />
          {/* Outer frame */}
          <rect x="11" y="19" width="18" height="15" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
          {/* Inner arch */}
          <path d="M16 34V25C16 22.7909 17.7909 21 20 21C22.2091 21 24 22.7909 24 25V34" stroke={isDarkBg ? '#252522' : '#A88B64'} strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col leading-tight">
        <span className={`text-base md:text-lg font-bold tracking-tight transition-colors ${isDarkBg
          ? 'text-[#F7F4EE] group-hover:text-[#D8C6AE]'
          : 'text-[#252522] group-hover:text-[#A88B64]'
          }`}>
          {isRTL ? 'المنزل العربي' : 'AL MANZIL AL ARABI'}
        </span>
        <span className={`text-[11px] md:text-xs font-medium tracking-wider uppercase transition-colors ${isDarkBg ? 'text-[#D8C6AE]/80' : 'text-[#8C7967]'
          }`}>
          {isRTL ? 'للمقاولات ' : 'DECOR & CONTRACTING'}
        </span>
      </div>
    </Link>
  );
};
