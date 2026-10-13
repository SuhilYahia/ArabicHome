import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { BUSINESS_CONFIG } from '../config/business';
import { ShieldCheck, Mail, Phone } from 'lucide-react';

export const PrivacyPolicyPage = () => {
  const { t, lang, isRTL } = useLanguage();

  return (
    <main className="pt-24 pb-20 bg-[#F7F4EE]">
      {/* Banner */}
      <section className="bg-[#252522] text-[#F7F4EE] py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-12 h-12 rounded-2xl bg-white/10 text-[#A88B64] flex items-center justify-center mx-auto mb-4 border border-white/10">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F7F4EE] mb-3">
            {t.privacy.title}
          </h1>
          <p className="text-sm sm:text-base text-[#D8C6AE]/90 max-w-xl mx-auto">
            {t.privacy.subtitle}
          </p>
          <span className="inline-block mt-3 text-xs text-[#D8C6AE]/60">
            {t.privacy.lastUpdated}
          </span>
        </div>
      </section>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#D8C6AE]/40 shadow-xs space-y-8">
          <p className="text-sm sm:text-base text-[#8C7967] leading-relaxed border-b border-[#D8C6AE]/30 pb-6">
            {t.privacy.intro}
          </p>

          <div className="space-y-8">
            {t.privacy.sections.map((section, idx) => (
              <div key={idx} className="space-y-2">
                <h2 className="text-lg font-bold text-[#252522] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#A88B64]" />
                  <span>{section.title}</span>
                </h2>
                <p className="text-sm text-[#8C7967] leading-relaxed pl-4 rtl:pr-4 rtl:pl-0">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          {/* Contact Details box */}
          <div className="mt-10 p-6 rounded-2xl bg-[#F7F4EE] border border-[#D8C6AE]/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold text-[#8C7967] uppercase block mb-1">
                {isRTL ? 'مؤسسة المنزل العربي للمقاولات' : 'AL MANZIL AL ARABI DECOR'}
              </span>
              <p className="text-xs text-[#252522]">
                {t.brand.tagline}
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs font-semibold">
              <a
                href={BUSINESS_CONFIG.phone.telLink}
                className="flex items-center gap-1.5 text-[#252522] hover:text-[#A88B64]"
              >
                <Phone className="w-4 h-4 text-[#A88B64]" />
                <span dir="ltr">{BUSINESS_CONFIG.phone.display}</span>
              </a>

              <a
                href={BUSINESS_CONFIG.email.mailLink}
                className="flex items-center gap-1.5 text-[#252522] hover:text-[#A88B64]"
              >
                <Mail className="w-4 h-4 text-[#A88B64]" />
                <span>{BUSINESS_CONFIG.email.address}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
