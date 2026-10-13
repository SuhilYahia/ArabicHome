import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import { ArrowLeft, ArrowRight, Eye, ShieldCheck, Ruler, Sparkles } from 'lucide-react';

export const AboutSection = () => {
  const { t, lang, isRTL } = useLanguage();

  const valueIcons = [Eye, ShieldCheck, Ruler];

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-y border-[#D8C6AE]/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Gallery Staggered Grid (spans 5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Large Image */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-xl border border-[#D8C6AE]/40">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                  alt="AL MANZIL AL ARABI DECOR Architecture"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Overlapping Floating Architectural Detail Image */}
              <div className={`absolute -bottom-8 ${isRTL ? '-left-6' : '-right-6'} w-3/5 rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl border-4 border-white hidden sm:block`}>
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80"
                  alt="Architectural Material Details"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Decorative Bronze Stamp */}
              <div className={`absolute -top-5 ${isRTL ? '-right-5' : '-left-5'} w-20 h-20 rounded-2xl bg-[#F7F4EE] border border-[#D8C6AE] flex flex-col items-center justify-center p-2 text-center shadow-md`}>
                <Sparkles className="w-5 h-5 text-[#A88B64] mb-0.5" />
                <span className="text-[10px] font-bold text-[#252522] uppercase tracking-wider">
                  {isRTL ? 'إتقان' : 'Craft'}
                </span>
              </div>
            </div>
          </div>

          {/* Editorial Content (spans 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D8C6AE]/30 text-[#8C7967] text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#A88B64]" />
              <span>{t.about.sectionBadge}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-4xl font-bold text-[#252522] leading-tight">
              {t.about.title}
            </h2>

            <p className="text-lg text-[#A88B64] font-medium leading-relaxed">
              {t.about.subtitle}
            </p>

            <div className="space-y-4 text-sm sm:text-base text-[#8C7967] leading-relaxed">
              <p>{t.about.paragraph1}</p>
              <p>{t.about.paragraph2}</p>
            </div>

            {/* 3 Pillars / Value Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {t.about.values.map((val, idx) => {
                const IconComponent = valueIcons[idx] || Sparkles;
                return (
                  <div key={idx} className="p-4 rounded-2xl bg-[#F7F4EE] border border-[#D8C6AE]/40">
                    <span className="inline-flex p-2 rounded-xl bg-[#A88B64]/15 text-[#A88B64] mb-2.5">
                      <IconComponent className="w-4 h-4" />
                    </span>
                    <h3 className="text-sm font-bold text-[#252522] mb-1">
                      {val.title}
                    </h3>
                    <p className="text-xs text-[#8C7967] leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA action */}
            <div className="pt-4 flex items-center gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#252522] hover:bg-[#343430] text-[#F7F4EE] text-sm font-semibold transition-all transform hover:-translate-y-0.5"
              >
                <span>{t.about.ctaText}</span>
                {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
