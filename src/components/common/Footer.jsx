import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import { BrandLogo } from './BrandLogo';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../../config/business';
import { SERVICES_DATA } from '../../data/services';
import { Phone, Mail, MessageCircle, ArrowUp, ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  const { t, lang, isRTL } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { to: '/', label: t.nav.home },
    { to: '/about', label: t.nav.about },
    { to: '/services', label: t.nav.services },
    { to: '/projects', label: t.nav.work },
    { to: '/contact', label: t.nav.contact },
  ];

  return (
    <footer className="bg-[#252522] text-[#F7F4EE] pt-16 pb-12 border-t border-[#343430]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand & Mission column (spans 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo variant="dark" />
            <p className="text-sm text-[#D8C6AE]/80 leading-relaxed max-w-md pt-2">
              {t.footer.description}
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={getWhatsAppLink(lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A88B64] hover:bg-[#C2A882] text-white text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
                <span>{t.nav.whatsapp}</span>
              </a>

              <a
                href={BUSINESS_CONFIG.phone.telLink}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 text-[#D8C6AE] hover:text-white hover:border-white/40 text-xs font-medium transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#A88B64]" />
                <span dir="ltr">{BUSINESS_CONFIG.phone.display}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider text-[#A88B64] uppercase">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-[#D8C6AE]/70 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/privacy"
                  className="text-sm text-[#D8C6AE]/70 hover:text-white transition-colors"
                >
                  {t.footer.privacyLink}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links (columns) */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-sm font-semibold tracking-wider text-[#A88B64] uppercase">
              {t.footer.servicesTitle}
            </h3>
            <ul className="space-y-2">
              {SERVICES_DATA.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-xs text-[#D8C6AE]/70 hover:text-white transition-colors block line-clamp-1"
                  >
                    {service.title[lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider text-[#A88B64] uppercase">
              {t.footer.contactTitle}
            </h3>
            <div className="space-y-3 text-xs text-[#D8C6AE]/80">
              <a
                href={BUSINESS_CONFIG.phone.telLink}
                className="flex items-center gap-2 hover:text-white transition-colors group"
              >
                <span className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#A88B64] group-hover:bg-[#A88B64] group-hover:text-white transition-colors shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </span>
                <span dir="ltr" className="font-medium text-sm text-[#F7F4EE]">
                  {BUSINESS_CONFIG.phone.display}
                </span>
              </a>

              <a
                href={BUSINESS_CONFIG.email.mailLink}
                className="flex items-center gap-2 hover:text-white transition-colors group break-all"
              >
                <span className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#A88B64] group-hover:bg-[#A88B64] group-hover:text-white transition-colors shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </span>
                <span dir="ltr" className="text-xs text-[#D8C6AE]/90">
                  {BUSINESS_CONFIG.email.address}
                </span>
              </a>

              <div className="pt-2 text-[11px] text-[#D8C6AE]/60 leading-relaxed">
                {t.brand.tagline}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D8C6AE]/60">
          <p>{t.footer.rights}</p>

          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">
              {t.footer.privacyLink}
            </Link>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-[#A88B64] hover:text-[#C2A882] transition-colors cursor-pointer"
              aria-label={t.footer.backToTop}
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
