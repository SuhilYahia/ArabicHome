import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { SERVICES_DATA } from '../data/services';
import { getWhatsAppLink, BUSINESS_CONFIG } from '../config/business';
import { 
  ArrowLeft, 
  ArrowRight, 
  MessageCircle, 
  Phone, 
  CheckCircle2, 
  Sparkles, 
  Building2, 
  Layers 
} from 'lucide-react';

export const ServiceDetailPage = () => {
  const { slug } = useParams();
  const { t, lang, isRTL } = useLanguage();

  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Related services (exclude current)
  const relatedServices = SERVICES_DATA.filter((s) => s.id !== service.id).slice(0, 3);

  const customWhatsAppMsg = lang === 'ar'
    ? `السلام عليكم، أود الاستفسار عن خدمة (${service.title.ar}) من مؤسسة المنزل العربي للمقاولات.`
    : `Hello, I would like to inquire regarding (${service.title.en}) from AL MANZIL AL ARABI DECOR.`;

  return (
    <main className="pt-24 bg-[#F7F4EE]">
      {/* Service Hero Banner */}
      <section className="relative bg-[#252522] text-[#F7F4EE] py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={service.image}
            alt={service.title[lang]}
            className="w-full h-full object-cover object-center opacity-30 filter brightness-75 scale-105"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#252522] via-[#252522]/80 to-[#252522]/90" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-[#D8C6AE]/70 mb-6">
            <Link to="/" className="hover:text-white transition-colors">
              {t.nav.home}
            </Link>
            <span>/</span>
            <Link to="/services" className="hover:text-white transition-colors">
              {t.nav.services}
            </Link>
            <span>/</span>
            <span className="text-[#A88B64] font-medium">{service.title[lang]}</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#D8C6AE] text-xs font-semibold tracking-wider uppercase mb-4 border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-[#A88B64]" />
            <span>{isRTL ? 'خدمة متخصصة' : 'Specialized Service'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F7F4EE] mb-4">
            {service.title[lang]}
          </h1>

          <p className="text-lg sm:text-xl text-[#A88B64] font-medium max-w-2xl leading-relaxed mb-8">
            {service.tagline[lang]}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={getWhatsAppLink(lang, customWhatsAppMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#A88B64] hover:bg-[#8C704D] text-white text-sm font-semibold shadow-md transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>{t.services.requestService}</span>
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-[#F7F4EE] border border-white/20 text-sm font-medium transition-all"
            >
              <span>{t.hero.secondaryCta}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Details Grid */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Main Details (spans 8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Overview & High-Res Image */}
            <div className="space-y-6">
              <div className="rounded-3xl overflow-hidden aspect-[16/10] bg-[#252522] border border-[#D8C6AE]/40 shadow-xl">
                <img
                  src={service.image}
                  alt={service.title[lang]}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#D8C6AE]/40 shadow-xs space-y-4">
                <h2 className="text-2xl font-bold text-[#252522]">
                  {isRTL ? `تفاصيل تنفيذ ${service.title.ar}` : `Overview of ${service.title.en}`}
                </h2>
                <p className="text-sm sm:text-base text-[#8C7967] leading-relaxed">
                  {service.fullDesc[lang]}
                </p>
              </div>
            </div>

            {/* Key Features & Specifications */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#D8C6AE]/40 shadow-xs space-y-6">
              <div className="flex items-center gap-3">
                <span className="p-2.5 rounded-xl bg-[#F7F4EE] text-[#A88B64]">
                  <Layers className="w-5 h-5" />
                </span>
                <h3 className="text-xl font-bold text-[#252522]">
                  {t.services.keyFeatures}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {service.features[lang].map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-[#F7F4EE] border border-[#D8C6AE]/30">
                    <CheckCircle2 className="w-4 h-4 text-[#A88B64] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#252522]/90 leading-relaxed font-medium">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Applications */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#D8C6AE]/40 shadow-xs space-y-6">
              <div className="flex items-center gap-3">
                <span className="p-2.5 rounded-xl bg-[#F7F4EE] text-[#A88B64]">
                  <Building2 className="w-5 h-5" />
                </span>
                <h3 className="text-xl font-bold text-[#252522]">
                  {t.services.applications}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {service.applications[lang].map((app, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[#F7F4EE] border border-[#D8C6AE]/30 text-center">
                    <span className="text-xs sm:text-sm font-semibold text-[#252522]">
                      {app}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sticky Sidebar (spans 4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            {/* Quick Contact Card */}
            <div className="bg-[#252522] text-[#F7F4EE] p-8 rounded-3xl border border-white/10 shadow-xl space-y-6 sticky top-28">
              <span className="text-xs font-semibold text-[#A88B64] tracking-wider uppercase block">
                {isRTL ? 'طلب تسعير ومعاينة' : 'Request Consultation & Estimate'}
              </span>

              <h4 className="text-xl font-bold text-[#F7F4EE] leading-tight">
                {isRTL ? 'جاهزون لمناقشة تفاصيل مشروعك' : 'Ready to Discuss Your Space?'}
              </h4>

              <p className="text-xs text-[#D8C6AE]/80 leading-relaxed">
                {t.brand.tagline}
              </p>

              <div className="space-y-3 pt-2">
                <a
                  href={getWhatsAppLink(lang, customWhatsAppMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-[#A88B64] hover:bg-[#8C704D] text-white text-sm font-semibold transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-white/20" />
                  <span>{t.services.requestService}</span>
                </a>

                <a
                  href={BUSINESS_CONFIG.phone.telLink}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl border border-white/20 hover:border-white/40 text-[#F7F4EE] text-sm font-medium transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#A88B64]" />
                  <span dir="ltr">{BUSINESS_CONFIG.phone.display}</span>
                </a>
              </div>

              <div className="pt-4 border-t border-white/10 text-[11px] text-[#D8C6AE]/60 leading-relaxed">
                {BUSINESS_CONFIG.email.address}
              </div>
            </div>
          </div>

        </div>

        {/* Related Services Carousel/Grid */}
        <div className="mt-20 pt-16 border-t border-[#D8C6AE]/40">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#252522]">
              {t.services.relatedServices}
            </h3>
            <Link
              to="/services"
              className="text-xs font-semibold text-[#A88B64] hover:underline inline-flex items-center gap-1"
            >
              <span>{t.services.allServicesLink}</span>
              {isRTL ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <Link
                key={rel.id}
                to={`/services/${rel.slug}`}
                className="group bg-white rounded-3xl overflow-hidden border border-[#D8C6AE]/40 p-5 shadow-xs hover:shadow-lg hover:border-[#A88B64] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-4 bg-[#252522]">
                    <img
                      src={rel.image}
                      alt={rel.title[lang]}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <h4 className="text-base font-bold text-[#252522] group-hover:text-[#A88B64] transition-colors mb-1">
                    {rel.title[lang]}
                  </h4>
                  <p className="text-xs text-[#8C7967] line-clamp-2">
                    {rel.shortDesc[lang]}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#D8C6AE]/30 flex items-center justify-between text-xs font-semibold text-[#252522] group-hover:text-[#A88B64]">
                  <span>{t.services.viewDetails}</span>
                  {isRTL ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                </div>
              </Link>
            ))}
          </div>
        </div>

      </section>
    </main>
  );
};
