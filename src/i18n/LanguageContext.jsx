import React, { createContext, useContext, useState, useEffect } from 'react';
import { ar } from './ar';
import { en } from './en';

const LanguageContext = createContext();

const STORAGE_KEY = 'almanzil_lang_pref';

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'en' || saved === 'ar') {
        return saved;
      }
    } catch {
      // ignore storage access error
    }
    return 'ar'; // Default language is Arabic
  });

  const isRTL = lang === 'ar';
  const t = lang === 'ar' ? ar : en;

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }

    // Update document element attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';

    // Update title dynamically if needed
    if (lang === 'ar') {
      document.title = 'مؤسسة المنزل العربي للمقاولات | تشطيبات وديكورات راقية';
    } else {
      document.title = 'AL MANZIL AL ARABI DECOR | Luxury Interior & Decoration';
    }
  }, [lang, isRTL]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const setLanguage = (newLang) => {
    if (newLang === 'ar' || newLang === 'en') {
      setLang(newLang);
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, isRTL, t, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
