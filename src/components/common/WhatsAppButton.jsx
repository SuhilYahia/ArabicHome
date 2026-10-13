import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { getWhatsAppLink } from '../../config/business';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  const { lang, t, isRTL } = useLanguage();

  return (
    <aside aria-label="WhatsApp quick contact" className={`fixed bottom-6 z-30 transition-all ${isRTL ? 'left-6' : 'right-6'}`}>
      <a
        href={getWhatsAppLink(lang)}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
        aria-label={t.hero.whatsappCta}
      >
        {/* Subtle breathing ripple */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 group-hover:opacity-0" />
        
        <MessageCircle className="w-7 h-7 fill-white relative z-10" />

        {/* Floating Tooltip */}
        <span 
          className={`absolute bottom-full mb-2 hidden sm:group-hover:inline-block px-3 py-1.5 rounded-lg bg-[#252522] text-[#F7F4EE] text-xs font-medium whitespace-nowrap shadow-lg border border-white/10 transition-opacity pointer-events-none ${
            isRTL ? 'left-0' : 'right-0'
          }`}
        >
          {t.hero.whatsappCta}
        </span>
      </a>
    </aside>
  );
};
