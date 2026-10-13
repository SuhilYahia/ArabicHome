import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import { getWhatsAppLink } from '../../config/business';
import { ArrowLeft, ArrowRight, MessageCircle, Sparkles, Compass, ShieldCheck } from 'lucide-react';

export const Hero = () => {
  const { t, lang, isRTL } = useLanguage();

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#252522] text-[#F7F4EE] pt-24 pb-16">
      {/* Background Architectural Image with Luxury Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury Interior Architectural Decor"
          className="w-full h-full object-cover object-center filter brightness-[0.4] scale-105 transition-transform duration-1000 ease-out"
          loading="eager"
        />
        {/* Subtle Warm Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#252522] via-[#252522]/50 to-[#252522]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#A88B64]/20 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex flex-col items-center text-center">
        {/* Editorial Subtitle Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D8C6AE]/30 text-[#D8C6AE] text-xs md:text-sm font-medium tracking-wide mb-6">
          <Sparkles className="w-4 h-4 text-[#A88B64]" />
          <span>{t.hero.badge}</span>
        </div>

        {/* Primary Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[#F7F4EE] max-w-4xl leading-[1.25] sm:leading-[1.2] mb-6">
          {t.hero.headline}
        </h1>

        {/* Secondary Description */}
        <p className="text-base sm:text-lg md:text-xl text-[#D8C6AE]/90 max-w-2xl leading-relaxed font-normal mb-10">
          {t.hero.description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center mb-16">
          {/* Primary CTA */}
          <Link
            to="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#A88B64] hover:bg-[#8C704D] text-white text-sm sm:text-base font-semibold shadow-lg shadow-[#A88B64]/20 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>{t.hero.primaryCta}</span>
            {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          </Link>

          {/* Secondary CTA */}
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-[#F7F4EE] border border-white/20 backdrop-blur-xs text-sm sm:text-base font-medium transition-all duration-200 hover:border-white/40"
          >
            <span>{t.hero.secondaryCta}</span>
          </Link>

          {/* WhatsApp Direct */}
          <a
            href={getWhatsAppLink(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#85E3A1] hover:text-white border border-[#25D366]/40 text-sm sm:text-base font-medium transition-all duration-200"
          >
            <MessageCircle className="w-4 h-4 fill-[#25D366]/40" />
            <span>{t.hero.whatsappCta}</span>
          </a>
        </div>

        {/* Value Highlights Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl text-start">
          <div className="p-4 sm:p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#A88B64]/50 transition-colors">
            <div className="flex items-center gap-3 mb-1">
              <span className="p-2 rounded-lg bg-[#A88B64]/20 text-[#A88B64]">
                <Compass className="w-4 h-4" />
              </span>
              <h2 className="text-sm sm:text-base font-semibold text-[#F7F4EE]">
                {t.hero.stats.comprehensive}
              </h2>
            </div>
            <p className="text-xs text-[#D8C6AE]/75 pt-1">
              {t.hero.stats.comprehensiveDesc}
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#A88B64]/50 transition-colors">
            <div className="flex items-center gap-3 mb-1">
              <span className="p-2 rounded-lg bg-[#A88B64]/20 text-[#A88B64]">
                <Sparkles className="w-4 h-4" />
              </span>
              <h2 className="text-sm sm:text-base font-semibold text-[#F7F4EE]">
                {t.hero.stats.craftsmanship}
              </h2>
            </div>
            <p className="text-xs text-[#D8C6AE]/75 pt-1">
              {t.hero.stats.craftsmanshipDesc}
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#A88B64]/50 transition-colors">
            <div className="flex items-center gap-3 mb-1">
              <span className="p-2 rounded-lg bg-[#A88B64]/20 text-[#A88B64]">
                <ShieldCheck className="w-4 h-4" />
              </span>
              <h2 className="text-sm sm:text-base font-semibold text-[#F7F4EE]">
                {t.hero.stats.materials}
              </h2>
            </div>
            <p className="text-xs text-[#D8C6AE]/75 pt-1">
              {t.hero.stats.materialsDesc}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
