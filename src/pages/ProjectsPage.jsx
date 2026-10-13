import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { GallerySection } from '../components/sections/GallerySection';
import { CallToAction } from '../components/sections/CallToAction';
import { Sparkles } from 'lucide-react';

export const ProjectsPage = () => {
  const { t } = useLanguage();

  return (
    <main className="pt-24">
      {/* Header Banner */}
      <section className="bg-[#252522] text-[#F7F4EE] py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80"
            alt="Signature Portfolio at AL MANZIL AL ARABI DECOR"
            className="w-full h-full object-cover object-center opacity-25 filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#252522] via-[#252522]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#D8C6AE] text-xs font-semibold tracking-wider uppercase mb-4 border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-[#A88B64]" />
            <span>{t.gallery.sectionBadge}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F7F4EE] mb-6">
            {t.gallery.title}
          </h1>
          <p className="text-base sm:text-lg text-[#D8C6AE]/90 max-w-2xl mx-auto leading-relaxed">
            {t.gallery.subtitle}
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <GallerySection />

      {/* CTA */}
      <CallToAction />
    </main>
  );
};
