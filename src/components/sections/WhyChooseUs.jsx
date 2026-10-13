import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { 
  Sparkles, 
  Layers, 
  CheckCircle, 
  Maximize2, 
  MessageSquare, 
  HeartHandshake 
} from 'lucide-react';

export const WhyChooseUs = () => {
  const { t } = useLanguage();

  const icons = [
    Sparkles,
    Layers,
    CheckCircle,
    Maximize2,
    MessageSquare,
    HeartHandshake
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F7F4EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D8C6AE]/30 text-[#8C7967] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#A88B64]" />
            <span>{t.whyChooseUs.sectionBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#252522] tracking-tight">
            {t.whyChooseUs.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#8C7967] leading-relaxed">
            {t.whyChooseUs.subtitle}
          </p>
        </div>

        {/* 6 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {t.whyChooseUs.points.map((point, index) => {
            const Icon = icons[index] || Sparkles;
            return (
              <div
                key={index}
                className="bg-white p-7 rounded-3xl border border-[#D8C6AE]/40 shadow-xs hover:shadow-lg hover:border-[#A88B64]/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="p-3 rounded-2xl bg-[#F7F4EE] text-[#A88B64] group-hover:bg-[#A88B64] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="text-xs font-mono font-semibold text-[#8C7967]/50">
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#252522] mb-2.5 group-hover:text-[#A88B64] transition-colors">
                    {point.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#8C7967] leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
