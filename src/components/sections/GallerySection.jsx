import React, { useState } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { GALLERY_CATEGORIES, PROJECTS_DATA } from '../../data/projects';
import { Lightbox } from '../common/Lightbox';
import { Sparkles, Maximize2, Info, Layers } from 'lucide-react';

export const GallerySection = () => {
  const { t, lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = activeCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="gallery-section" className="py-20 lg:py-28 bg-[#FFFFFF] border-y border-[#D8C6AE]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D8C6AE]/30 text-[#8C7967] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#A88B64]" />
            <span>{t.gallery.sectionBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#252522] tracking-tight">
            {t.gallery.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#8C7967] leading-relaxed">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Transparent Inspiration Disclaimer Alert */}
        <div className="max-w-4xl mx-auto mb-10 p-4 rounded-2xl bg-[#F7F4EE] border border-[#D8C6AE]/50 flex items-start gap-3 text-xs sm:text-sm text-[#8C7967] leading-relaxed">
          <Info className="w-5 h-5 text-[#A88B64] shrink-0 mt-0.5" />
          <p>{t.gallery.disclaimer}</p>
        </div>

        {/* Filter Categories Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 no-scrollbar">
          {GALLERY_CATEGORIES.map((cat) => {
            const active = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A88B64] ${
                  active
                    ? 'bg-[#252522] text-[#F7F4EE] shadow-md'
                    : 'bg-[#F7F4EE] text-[#8C7967] hover:bg-[#D8C6AE]/30 hover:text-[#252522]'
                }`}
              >
                {cat.label[lang]}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedItem(item);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`${t.gallery.viewImage}: ${item.title[lang]}`}
              className="group relative rounded-3xl overflow-hidden bg-[#252522] border border-[#D8C6AE]/40 cursor-pointer shadow-xs hover:shadow-2xl transition-all duration-300 focus-visible:ring-4 focus-visible:ring-[#A88B64]"
            >
              {/* Image Frame */}
              <div className={`w-full ${item.aspect || 'aspect-[4/3]'} overflow-hidden`}>
                <img
                  src={item.image}
                  alt={item.title[lang]}
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Hover Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#252522]/95 via-[#252522]/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {/* Expand Icon Badge */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
                <Maximize2 className="w-4 h-4 text-[#D8C6AE]" />
              </div>

              {/* Bottom Details Content */}
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white">
                <h3 className="text-base sm:text-lg font-bold text-[#F7F4EE] leading-snug group-hover:text-[#D8C6AE] transition-colors">
                  {item.title[lang]}
                </h3>

                <p className="text-xs text-[#D8C6AE]/80 mt-1 line-clamp-1">
                  {item.subtitle[lang]}
                </p>

                {item.materials && (
                  <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-medium text-white/70 bg-white/10 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/10">
                    <Layers className="w-3 h-3 text-[#A88B64]" />
                    <span>{item.materials[lang]}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Accessible Lightbox Modal */}
      {selectedItem && (
        <Lightbox
          item={selectedItem}
          items={filteredItems}
          onClose={() => setSelectedItem(null)}
          onSelect={(newItem) => setSelectedItem(newItem)}
        />
      )}
    </section>
  );
};
