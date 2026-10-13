export const BUSINESS_CONFIG = {
  brandName: {
    ar: 'مؤسسة المنزل العربي للمقاولات',
    en: 'AL MANZIL AL ARABI DECOR',
  },
  tagline: {
    ar: 'نمنح المساحات جمالها، ونرتقي بالتفاصيل.',
    en: 'Beautiful Spaces. Exceptional Details.',
  },
  description: {
    ar: 'حلول متكاملة في الديكورات والتشطيبات والترميم، تجمع بين جمال التصميم والعناية بالتفاصيل لتمنح كل مساحة طابعها الخاص.',
    en: 'Discover thoughtful decoration, finishing, and renovation solutions designed to bring elegance, character, and attention to detail to every space.',
  },
  phone: {
    display: '0552519783',
    international: '+966552519783',
    telLink: 'tel:+966552519783',
  },
  whatsapp: {
    number: '966552519783',
    defaultMessage: {
      ar: 'السلام عليكم، أرغب في الاستفسار عن خدمات مؤسسة المنزل العربي للمقاولات.',
      en: 'Hello, I would like to inquire about the services of AL MANZIL AL ARABI DECOR.',
    },
  },
  email: {
    address: 'arabichome.contracting@gmail.com',
    mailLink: 'mailto:arabichome.contracting@gmail.com',
  },
};

/**
 * Generates a valid WhatsApp URL with encoded message
 * @param {string} lang - 'ar' or 'en'
 * @param {string} [customText] - optional custom inquiry text
 */
export const getWhatsAppLink = (lang = 'ar', customText = null) => {
  const message = customText || BUSINESS_CONFIG.whatsapp.defaultMessage[lang] || BUSINESS_CONFIG.whatsapp.defaultMessage.ar;
  return `https://wa.me/${BUSINESS_CONFIG.whatsapp.number}?text=${encodeURIComponent(message)}`;
};
