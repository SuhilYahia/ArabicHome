import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import { SERVICES_DATA } from '../../data/services';
import { getWhatsAppLink } from '../../config/business';
import { ArrowLeft, ArrowRight, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';

export const ServicesGrid = ({ limit = null, showAllCta = true }) => {
  const { t, lang, isRTL } = useLanguage();

  const services = limit ? SERVICES_DATA.slice(0, limit) : SERVICES_DATA;

  return (
    <section id="services-section" className="py-20 lg:py-28 bg-[#F7F4EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D8C6AE]/30 text-[#8C7967] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#A88B64]" />
            <span>{t.services.sectionBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#252522] tracking-tight">
            {t.services.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#8C7967] leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* 9 Services Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            return (
              <div
                key={service.id}
                className="group flex flex-col justify-between bg-white rounded-3xl overflow-hidden border border-[#D8C6AE]/40 shadow-xs hover:shadow-xl hover:border-[#A88B64]/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Top Image Card with Subtle Gradient Overlay */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#252522]">
                  <img
                    src={service.image}
                    alt={service.title[lang]}
                    className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                    loading={index < 3 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  
                  {/* Category Pill Tag */}
                  <span className="absolute top-4 left-4 z-10 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#252522]/80 text-[#F7F4EE] backdrop-blur-xs border border-white/10">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Dual language title banner */}
                    <div className="mb-3">
                      <h3 className="text-xl font-bold text-[#252522] group-hover:text-[#A88B64] transition-colors">
                        {service.title[lang]}
                      </h3>
                      <p className="text-xs font-medium text-[#8C7967] mt-0.5">
                        {lang === 'ar' ? service.title.en : service.title.ar}
                      </p>
                    </div>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-[#8C7967] leading-relaxed mb-5">
                      {service.shortDesc[lang]}
                    </p>

                    {/* Quick Features Bullet Preview */}
                    <ul className="space-y-2 mb-6">
                      {service.features[lang].slice(0, 2).map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs text-[#252522]/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#A88B64] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions Footer */}
                  <div className="pt-4 border-t border-[#D8C6AE]/30 flex items-center justify-between gap-3">
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#252522] group-hover:text-[#A88B64] transition-colors focus-visible:outline-none"
                    >
                      <span>{t.services.viewDetails}</span>
                      {isRTL ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                    </Link>

                    <a
                      href={getWhatsAppLink(lang, `${t.hero.whatsappCta}: ${service.title[lang]}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full text-[#8C7967] hover:text-[#25D366] hover:bg-[#25D366]/10 transition-colors"
                      title={t.services.requestService}
                      aria-label={`${t.services.requestService} - ${service.title[lang]}`}
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Services Footer Button (if used on Home) */}
        {limit && showAllCta && (
          <div className="mt-14 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#252522] hover:bg-[#343430] text-[#F7F4EE] text-sm font-semibold shadow-md transition-all transform hover:-translate-y-0.5"
            >
              <span>{t.services.allServicesLink}</span>
              {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
