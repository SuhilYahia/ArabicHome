import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import { BrandLogo } from './BrandLogo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../../config/business';
import { Phone, MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar = () => {
  const { t, lang, isRTL } = useLanguage();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Detect scroll to toggle transparent vs solid background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { to: '/', label: t.nav.home },
    { to: '/about', label: t.nav.about },
    { to: '/services', label: t.nav.services },
    { to: '/projects', label: t.nav.work },
    { to: '/contact', label: t.nav.contact },
  ];

  const isCurrent = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F7F4EE]/95 backdrop-blur-md shadow-sm border-b border-[#D8C6AE]/40 py-3.5'
            : 'bg-gradient-to-b from-[#252522]/70 via-[#252522]/30 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <BrandLogo variant={isScrolled ? 'light' : 'dark'} />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const active = isCurrent(link.to);
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                      active
                        ? isScrolled
                          ? 'bg-[#252522] text-[#F7F4EE] shadow-xs'
                          : 'bg-white/20 text-white backdrop-blur-xs font-semibold'
                        : isScrolled
                          ? 'text-[#252522] hover:text-[#A88B64] hover:bg-[#D8C6AE]/20'
                          : 'text-[#F7F4EE]/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Cluster: Language Switcher, WhatsApp & Phone */}
            <div className="hidden sm:flex items-center gap-3">
              <LanguageSwitcher isDarkBg={!isScrolled} />

              {/* Call Link */}
              <a
                href={BUSINESS_CONFIG.phone.telLink}
                className={`hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                  isScrolled
                    ? 'border-[#D8C6AE] text-[#252522] hover:bg-[#D8C6AE]/30'
                    : 'border-white/30 text-white hover:bg-white/10'
                }`}
                title={t.nav.callUs}
              >
                <Phone className="w-3.5 h-3.5 text-[#A88B64]" />
                <span dir="ltr">{BUSINESS_CONFIG.phone.display}</span>
              </a>

              {/* WhatsApp Action Button */}
              <a
                href={getWhatsAppLink(lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-[#A88B64] hover:bg-[#8C704D] text-white shadow-sm transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>{t.nav.whatsapp}</span>
              </a>
            </div>

            {/* Mobile Menu & Language Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <LanguageSwitcher isDarkBg={!isScrolled} compact />

              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className={`p-2 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A88B64] ${
                  isScrolled
                    ? 'text-[#252522] hover:bg-[#D8C6AE]/30'
                    : 'text-white hover:bg-white/10'
                }`}
                aria-label={t.nav.openMenu}
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs lg:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer Panel */}
      <div
        className={`fixed top-0 bottom-0 z-50 w-full sm:max-w-sm bg-[#F7F4EE] shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-in-out lg:hidden ${
          isRTL ? 'right-0' : 'left-0'
        } ${
          mobileMenuOpen
            ? 'translate-x-0'
            : isRTL
              ? 'translate-x-full'
              : '-translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation drawer"
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#D8C6AE]/40 flex items-center justify-between">
          <BrandLogo variant="light" />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-full text-[#252522] hover:bg-[#D8C6AE]/30 transition-colors focus-visible:ring-2 focus-visible:ring-[#A88B64]"
            aria-label={t.nav.closeMenu}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Drawer Navigation Links */}
        <div className="px-5 py-6 flex-1 overflow-y-auto space-y-1">
          {navLinks.map((link) => {
            const active = isCurrent(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  active
                    ? 'bg-[#252522] text-[#F7F4EE] font-semibold shadow-xs'
                    : 'text-[#252522] hover:bg-[#D8C6AE]/20 hover:text-[#A88B64]'
                }`}
              >
                <span>{link.label}</span>
                <ArrowUpRight className={`w-4 h-4 opacity-50 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
              </Link>
            );
          })}
        </div>

        {/* Drawer Footer Actions */}
        <div className="p-5 border-t border-[#D8C6AE]/40 bg-[#FFFFFF]/70 space-y-3">
          <div className="flex items-center justify-between pb-2">
            <span className="text-xs font-medium text-[#8C7967]">{t.contact.directContact}</span>
            <LanguageSwitcher />
          </div>

          <a
            href={BUSINESS_CONFIG.phone.telLink}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-[#D8C6AE] text-sm font-semibold text-[#252522] hover:bg-[#D8C6AE]/20 transition-colors"
          >
            <Phone className="w-4 h-4 text-[#A88B64]" />
            <span dir="ltr">{BUSINESS_CONFIG.phone.display}</span>
          </a>

          <a
            href={getWhatsAppLink(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#A88B64] hover:bg-[#8C704D] text-white text-sm font-semibold shadow-sm transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>{t.hero.whatsappCta}</span>
          </a>
        </div>
      </div>
    </>
  );
};
