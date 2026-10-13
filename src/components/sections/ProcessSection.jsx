import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { Sparkles, PhoneCall, Layout, Palette, FileText, CheckCircle2 } from 'lucide-react';

export const ProcessSection = () => {
  const { t, isRTL } = useLanguage();

  const stepIcons = [PhoneCall, Layout, Palette, FileText, CheckCircle2];

  return (
    <section className="py-20 lg:py-28 bg-[#F7F4EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D8C6AE]/30 text-[#8C7967] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#A88B64]" />
            <span>{t.process.sectionBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#252522] tracking-tight">
            {t.process.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#8C7967] leading-relaxed">
            {t.process.subtitle}
          </p>
        </div>

        {/* 5 Steps Horizontal / Staggered Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          {t.process.steps.map((step, index) => {
            const Icon = stepIcons[index] || Sparkles;
            return (
              <div
                key={index}
                className="relative bg-white rounded-3xl p-6 border border-[#D8C6AE]/40 shadow-xs hover:shadow-lg hover:border-[#A88B64]/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-10 h-10 rounded-2xl bg-[#F7F4EE] text-[#A88B64] group-hover:bg-[#A88B64] group-hover:text-white transition-colors flex items-center justify-center font-bold text-sm">
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-[#D8C6AE]/20 text-[#8C7967]">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#252522] mb-2 group-hover:text-[#A88B64] transition-colors leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#8C7967] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#D8C6AE]/20 text-[10px] text-[#A88B64] font-semibold uppercase tracking-wider">
                  {isRTL ? `المرحلة ${index + 1}` : `Stage ${index + 1}`}
                </div>
              </div>
            );
          })}
        </div>

        {/* Explanatory Note */}
        <div className="mt-12 text-center text-xs text-[#8C7967]/80 italic">
          {t.process.note}
        </div>

      </div>
    </section>
  );
};
