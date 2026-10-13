import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import { getWhatsAppLink } from '../../config/business';
import { ArrowLeft, ArrowRight, MessageCircle, Sparkles } from 'lucide-react';

export const CallToAction = () => {
  const { t, lang, isRTL } = useLanguage();

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-[#252522] text-[#F7F4EE]">
      {/* Background with luxury architectural texture and warm lighting vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=80"
          alt="Architectural Decor Ambience"
          className="w-full h-full object-cover object-center opacity-20 filter contrast-125"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#252522] via-[#252522]/90 to-[#252522]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D8C6AE]/30 text-[#D8C6AE] text-xs font-semibold tracking-wider uppercase mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#A88B64]" />
          <span>{isRTL ? 'ابدأ مشروعك اليوم' : 'Begin Your Space Transformation'}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F7F4EE] leading-tight mb-6">
          {t.cta.headline}
        </h2>

        <p className="text-base sm:text-lg text-[#D8C6AE]/90 max-w-2xl mx-auto leading-relaxed mb-10">
          {t.cta.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#A88B64] hover:bg-[#8C704D] text-white text-sm sm:text-base font-semibold shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>{t.cta.contactBtn}</span>
            {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          </Link>

          <a
            href={getWhatsAppLink(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-[#F7F4EE] border border-white/20 backdrop-blur-xs text-sm sm:text-base font-semibold transition-all hover:border-white/40"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>{t.cta.whatsappBtn}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
