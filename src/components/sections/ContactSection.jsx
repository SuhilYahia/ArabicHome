import React, { useState } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../../config/business';
import { SERVICES_DATA } from '../../data/services';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Sparkles, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Clock,
  ExternalLink
} from 'lucide-react';

export const ContactSection = () => {
  const { t, lang, isRTL } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    preference: 'whatsapp',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t.contact.validation.nameRequired;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = t.contact.validation.nameMin;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t.contact.validation.phoneRequired;
    } else {
      // Basic phone format validation for digits
      const cleaned = formData.phone.replace(/[\s-]/g, '');
      if (!/^(05|\+?9665|5)\d{7,8}$/.test(cleaned) && cleaned.length < 8) {
        newErrors.phone = t.contact.validation.phoneInvalid;
      }
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.contact.validation.emailInvalid;
    }

    if (!formData.service) {
      newErrors.service = t.contact.validation.serviceRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Build structured inquiry text for WhatsApp
    const serviceObj = SERVICES_DATA.find((s) => s.id === formData.service);
    const serviceName = serviceObj ? serviceObj.title[lang] : formData.service;

    const summaryMessage = lang === 'ar'
      ? `السلام عليكم، أرغب بطلب استشارة وخدمة من مؤسسة المنزل العربي للمقاولات:\n\n👤 *الاسم:* ${formData.name}\n📱 *رقم الجوال:* ${formData.phone}\n${formData.email ? `✉️ *البريد:* ${formData.email}\n` : ''}🛠️ *الخدمة المطلوبة:* ${serviceName}\n💬 *طريقة التواصل المفضلة:* ${formData.preference === 'whatsapp' ? 'واتساب' : formData.preference === 'phone' ? 'اتصال هاتفي' : 'البريد الإلكتروني'}\n${formData.message ? `📝 *تفاصيل الاستفسار:* ${formData.message}` : ''}`
      : `Hello, I would like to inquire about services from AL MANZIL AL ARABI DECOR:\n\n👤 *Name:* ${formData.name}\n📱 *Phone:* ${formData.phone}\n${formData.email ? `✉️ *Email:* ${formData.email}\n` : ''}🛠️ *Requested Service:* ${serviceName}\n💬 *Preferred Contact:* ${formData.preference}\n${formData.message ? `📝 *Project Details:* ${formData.message}` : ''}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({
        url: getWhatsAppLink(lang, summaryMessage),
      });

      // Automatically open the WhatsApp link in a new tab
      window.open(getWhatsAppLink(lang, summaryMessage), '_blank', 'noopener,noreferrer');
    }, 400);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      preference: 'whatsapp',
      message: '',
    });
    setErrors({});
  };

  return (
    <section id="contact-section" className="py-20 lg:py-28 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D8C6AE]/30 text-[#8C7967] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#A88B64]" />
            <span>{t.contact.sectionBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#252522] tracking-tight">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#8C7967] leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Direct Contact Cards Column (spans 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#F7F4EE] border border-[#D8C6AE]/40 space-y-6">
              <h3 className="text-xl font-bold text-[#252522]">
                {t.contact.directContact}
              </h3>
              <p className="text-xs sm:text-sm text-[#8C7967] leading-relaxed">
                {t.hero.description}
              </p>

              {/* Verified Contact Details List */}
              <div className="space-y-4 pt-2">
                {/* Phone */}
                <a
                  href={BUSINESS_CONFIG.phone.telLink}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#D8C6AE]/30 hover:border-[#A88B64] hover:shadow-md transition-all group"
                >
                  <span className="w-11 h-11 rounded-xl bg-[#F7F4EE] flex items-center justify-center text-[#A88B64] group-hover:bg-[#A88B64] group-hover:text-white transition-colors shrink-0">
                    <Phone className="w-5 h-5" />
                  </span>
                  <div>
                    <span className="text-xs text-[#8C7967] block">
                      {t.contact.phoneLabel}
                    </span>
                    <span dir="ltr" className="text-base font-bold text-[#252522]">
                      {BUSINESS_CONFIG.phone.display}
                    </span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={getWhatsAppLink(lang)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#D8C6AE]/30 hover:border-[#25D366] hover:shadow-md transition-all group"
                >
                  <span className="w-11 h-11 rounded-xl bg-[#25D366]/15 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </span>
                  <div>
                    <span className="text-xs text-[#8C7967] block">
                      {t.contact.whatsappLabel}
                    </span>
                    <span dir="ltr" className="text-base font-bold text-[#252522]">
                      {BUSINESS_CONFIG.phone.display}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={BUSINESS_CONFIG.email.mailLink}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#D8C6AE]/30 hover:border-[#A88B64] hover:shadow-md transition-all group"
                >
                  <span className="w-11 h-11 rounded-xl bg-[#F7F4EE] flex items-center justify-center text-[#A88B64] group-hover:bg-[#A88B64] group-hover:text-white transition-colors shrink-0">
                    <Mail className="w-5 h-5" />
                  </span>
                  <div className="overflow-hidden">
                    <span className="text-xs text-[#8C7967] block">
                      {t.contact.emailLabel}
                    </span>
                    <span dir="ltr" className="text-xs sm:text-sm font-semibold text-[#252522] truncate block">
                      {BUSINESS_CONFIG.email.address}
                    </span>
                  </div>
                </a>
              </div>

              {/* Prompt statement */}
              <div className="pt-4 border-t border-[#D8C6AE]/30 text-xs text-[#8C7967] leading-relaxed">
                <span className="font-semibold text-[#252522] block mb-1">
                  {lang === 'ar' ? 'مؤسسة المنزل العربي للمقاولات' : 'AL MANZIL AL ARABI DECOR'}
                </span>
                {t.brand.tagline}
              </div>
            </div>
          </div>

          {/* Interactive Form Column (spans 7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#F7F4EE] p-8 sm:p-10 rounded-3xl border border-[#D8C6AE]/40 shadow-xs">
              <h3 className="text-xl sm:text-2xl font-bold text-[#252522] mb-1">
                {t.contact.formTitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#8C7967] mb-8">
                {t.contact.formSubtitle}
              </p>

              {submittedData ? (
                /* Success Feedback State */
                <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#A88B64]/40 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-[#252522]">
                    {t.contact.feedback.successTitle}
                  </h4>
                  <p className="text-sm text-[#8C7967] max-w-md mx-auto leading-relaxed">
                    {t.contact.feedback.successMessage}
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={submittedData.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white text-sm font-semibold shadow-md transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>{t.contact.feedback.openWhatsAppNow}</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-3 rounded-full border border-[#D8C6AE] text-xs font-semibold text-[#8C7967] hover:text-[#252522] hover:bg-[#F7F4EE] transition-colors"
                    >
                      {t.contact.feedback.tryAgain}
                    </button>
                  </div>
                </div>
              ) : (
                /* The Inquiry Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Name & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-[#252522] mb-1.5">
                        {t.contact.fields.name} <span className="text-[#A88B64]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t.contact.fields.namePlaceholder}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#252522] placeholder:text-[#8C7967]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A88B64] transition-colors ${
                          errors.name ? 'border-red-400 bg-red-50/20' : 'border-[#D8C6AE]/60 hover:border-[#A88B64]'
                        }`}
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-semibold text-[#252522] mb-1.5">
                        {t.contact.fields.phone} <span className="text-[#A88B64]">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        dir="ltr"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={t.contact.fields.phonePlaceholder}
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#252522] placeholder:text-[#8C7967]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A88B64] transition-colors ${
                          errors.phone ? 'border-red-400 bg-red-50/20' : 'border-[#D8C6AE]/60 hover:border-[#A88B64]'
                        }`}
                      />
                      {errors.phone && (
                        <p id="phone-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email & Requested Service Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email (Optional) */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-[#252522] mb-1.5">
                        {t.contact.fields.email}
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        dir="ltr"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t.contact.fields.emailPlaceholder}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#252522] placeholder:text-[#8C7967]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A88B64] transition-colors ${
                          errors.email ? 'border-red-400 bg-red-50/20' : 'border-[#D8C6AE]/60 hover:border-[#A88B64]'
                        }`}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Requested Service */}
                    <div>
                      <label htmlFor="contact-service" className="block text-xs font-semibold text-[#252522] mb-1.5">
                        {t.contact.fields.service} <span className="text-[#A88B64]">*</span>
                      </label>
                      <select
                        id="contact-service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        aria-invalid={!!errors.service}
                        aria-describedby={errors.service ? 'service-error' : undefined}
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#252522] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A88B64] transition-colors cursor-pointer ${
                          errors.service ? 'border-red-400 bg-red-50/20' : 'border-[#D8C6AE]/60 hover:border-[#A88B64]'
                        }`}
                      >
                        <option value="">{t.contact.fields.servicePlaceholder}</option>
                        {SERVICES_DATA.map((srv) => (
                          <option key={srv.id} value={srv.id}>
                            {srv.title[lang]}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p id="service-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.service}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Preferred Contact Method */}
                  <div>
                    <label className="block text-xs font-semibold text-[#252522] mb-2">
                      {t.contact.fields.contactPreference}
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: 'whatsapp', label: t.contact.fields.contactOptions.whatsapp },
                        { id: 'phone', label: t.contact.fields.contactOptions.phone },
                        { id: 'email', label: t.contact.fields.contactOptions.email },
                      ].map((pref) => (
                        <label
                          key={pref.id}
                          className={`flex items-center justify-center p-2.5 rounded-xl border text-xs font-medium cursor-pointer transition-all ${
                            formData.preference === pref.id
                              ? 'bg-[#252522] text-[#F7F4EE] border-[#252522]'
                              : 'bg-white border-[#D8C6AE]/60 text-[#8C7967] hover:border-[#A88B64]'
                          }`}
                        >
                          <input
                            type="radio"
                            name="preference"
                            value={pref.id}
                            checked={formData.preference === pref.id}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <span>{pref.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-[#252522] mb-1.5">
                      {t.contact.fields.message}
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t.contact.fields.messagePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#D8C6AE]/60 text-sm text-[#252522] placeholder:text-[#8C7967]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A88B64] transition-colors resize-none hover:border-[#A88B64]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-2xl bg-[#A88B64] hover:bg-[#8C704D] text-white text-sm sm:text-base font-semibold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    {isSubmitting ? (
                      <span>{t.contact.fields.submitting}</span>
                    ) : (
                      <>
                        <MessageCircle className="w-5 h-5 fill-white/20" />
                        <span>{t.contact.fields.submitBtn}</span>
                      </>
                    )}
                  </button>

                  {/* Transparency Note */}
                  <p className="text-[11px] text-[#8C7967] text-center leading-relaxed">
                    {t.contact.transparencyNote}
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
