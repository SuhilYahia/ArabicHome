import React, { useEffect } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { X, ChevronLeft, ChevronRight, Layers } from 'lucide-react';

export const Lightbox = ({ item, items, onClose, onSelect }) => {
  const { lang, t, isRTL } = useLanguage();

  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        if (isRTL) handlePrev();
        else handleNext();
      } else if (e.key === 'ArrowLeft') {
        if (isRTL) handleNext();
        else handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [item, items, isRTL]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    onSelect(items[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onSelect(items[prevIndex]);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 transition-all"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 sm:top-6 right-4 sm:right-6 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all focus-visible:ring-2 focus-visible:ring-[#A88B64]"
        aria-label={t.gallery.closeLightbox}
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation arrows */}
      {items.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              isRTL ? handleNext() : handlePrev();
            }}
            className="absolute left-3 sm:left-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all focus-visible:ring-2 focus-visible:ring-[#A88B64]"
            aria-label={t.gallery.prevImage}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              isRTL ? handlePrev() : handleNext();
            }}
            className="absolute right-3 sm:right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all focus-visible:ring-2 focus-visible:ring-[#A88B64]"
            aria-label={t.gallery.nextImage}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Content Container */}
      <div
        className="relative max-w-5xl max-h-[90vh] w-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative overflow-hidden rounded-2xl bg-[#252522] shadow-2xl border border-white/10 max-h-[75vh]">
          <img
            src={item.image}
            alt={item.title[lang]}
            className="w-full h-auto max-h-[75vh] object-contain block select-none"
            loading="eager"
          />
        </div>

        {/* Caption & Material Specs */}
        <div className="mt-4 w-full max-w-3xl text-center sm:text-start flex flex-col sm:flex-row items-center justify-between gap-3 px-2 text-white">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-[#F7F4EE]">
              {item.title[lang]}
            </h3>
            <p className="text-xs sm:text-sm text-[#D8C6AE]/80 mt-0.5">
              {item.subtitle[lang]}
            </p>
          </div>

          {item.materials && (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 text-xs text-[#D8C6AE] shrink-0 border border-white/10">
              <Layers className="w-3.5 h-3.5 text-[#A88B64]" />
              <span>{item.materials[lang]}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
