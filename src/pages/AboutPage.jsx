import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { AboutSection } from '../components/sections/AboutSection';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { ProcessSection } from '../components/sections/ProcessSection';
import { CallToAction } from '../components/sections/CallToAction';
import { Sparkles } from 'lucide-react';

export const AboutPage = () => {
  const { t, lang } = useLanguage();

  return (
    <main className="pt-24">
      {/* Page Header Banner */}
      <section className="bg-[#252522] text-[#F7F4EE] py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
            alt="About AL MANZIL AL ARABI DECOR"
            className="w-full h-full object-cover object-center opacity-25 filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#252522] via-[#252522]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#D8C6AE] text-xs font-semibold tracking-wider uppercase mb-4 border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-[#A88B64]" />
            <span>{t.about.sectionBadge}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F7F4EE] mb-6">
            {t.about.title}
          </h1>
          <p className="text-base sm:text-lg text-[#D8C6AE]/90 max-w-2xl mx-auto leading-relaxed">
            {t.brand.tagline}
          </p>
        </div>
      </section>

      {/* Main About Component */}
      <AboutSection />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Process Section */}
      <ProcessSection />

      {/* CTA */}
      <CallToAction />
    </main>
  );
};
