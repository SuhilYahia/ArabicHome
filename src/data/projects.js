export const GALLERY_CATEGORIES = [
  { id: 'all', label: { ar: 'جميع الأعمال', en: 'All Work' } },
  { id: 'decor', label: { ar: 'الديكورات', en: 'Decoration' } },
  { id: 'parquet', label: { ar: 'الباركيه', en: 'Flooring' } },
  { id: 'wallpaper', label: { ar: 'ورق الجدران', en: 'Wallpaper' } },
  { id: 'painting', label: { ar: 'الدهانات', en: 'Painting' } },
  { id: 'gypsum-board', label: { ar: 'الجبس بورد', en: 'Gypsum Board' } },
  { id: 'marble-alt', label: { ar: 'بديل الرخام', en: 'Marble Alternatives' } },
  { id: 'stone-panels', label: { ar: 'الصفائح الحجرية', en: 'Stone Panels' } },
  { id: 'chipboard-alt', label: { ar: 'بديل الشيبورد', en: 'Chipboard Alternative' } },
  { id: 'renovation', label: { ar: 'الترميم', en: 'Renovation' } },
];

export const PROJECTS_DATA = [
  {
    id: 1,
    category: 'decor',
    title: {
      ar: 'تصميم صالة معيشة معاصرة مع إضاءة دافئة',
      en: 'Contemporary Living Lounge with Warm Ambient Light',
    },
    subtitle: {
      ar: 'تناغم معماري يجمع بين الأسطح الناعمة والظلال المدروسة',
      en: 'Architectural harmony uniting smooth textures and calculated shadows',
    },
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    aspect: 'aspect-[4/3]',
    materials: { ar: 'خشب، إضاءة مخفية، جبس فلات', en: 'Wood, Concealed LED, Flush Gypsum' }
  },
  {
    id: 2,
    category: 'marble-alt',
    title: {
      ar: 'جدار تلفاز من بديل الرخام الكلكتا مع أرفف مخفية',
      en: 'Calacatta Marble Alternative TV Wall with Concealed Shelving',
    },
    subtitle: {
      ar: 'عروق ذهبية ورمادية متدفقة بانعكاس زجاجي ناعم',
      en: 'Flowing gold and grey veining with subtle glass-like luster',
    },
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    aspect: 'aspect-[16/10]',
    materials: { ar: 'ألواح بديل الرخام UV، شريط إضاءة 3000K', en: 'UV Marble Sheets, 3000K Linear LED' }
  },
  {
    id: 3,
    category: 'parquet',
    title: {
      ar: 'أرضية باركيه خشب البلوط الطبيعي بنمط هيرنغبون',
      en: 'Natural Oak Parquet in Classic Herringbone Pattern',
    },
    subtitle: {
      ar: 'إحساس أصيل بالدفء والفخامة في صالة الاستقبال',
      en: 'Authentic sense of warmth and understated luxury in guest lounge',
    },
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1200&q=80',
    aspect: 'aspect-[4/3]',
    materials: { ar: 'باركيه ألماني مقاوم للماء، عازل صوتي', en: 'Moisture-proof Parquet, Acoustic Underlay' }
  },
  {
    id: 4,
    category: 'stone-panels',
    title: {
      ar: 'تكسية جدارية بصفائح حجرية رمادية ذات ملمس بارز',
      en: 'Textured Slate Flexible Stone Veneer Accent Cladding',
    },
    subtitle: {
      ar: 'عمق جيولوجي عضوي يعكس روح الطبيعة داخل المكان',
      en: 'Organic geological depth infusing raw nature into interior architecture',
    },
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    aspect: 'aspect-[16/11]',
    materials: { ar: 'صفائح حجرية طبيعية رفيعة، إضاءة رأسية', en: 'Ultra-thin Stone Veneer, Grazing Downlights' }
  },
  {
    id: 5,
    category: 'gypsum-board',
    title: {
      ar: 'سقف جبس بورد مستوي بمسارات ماجنتيك لايت',
      en: 'Flush Minimalist Gypsum Ceiling with Magnetic Tracks',
    },
    subtitle: {
      ar: 'بساطة هندسية مع دمج فتحات التكييف الطولية والإنارة',
      en: 'Geometric purity integrating linear diffusers and recessed tracks',
    },
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
    aspect: 'aspect-[4/3]',
    materials: { ar: 'جبسوم بورد فلات، بروفايل شادو لاين', en: 'Flush Gypsum Board, Shadow-line Reveal' }
  },
  {
    id: 6,
    category: 'chipboard-alt',
    title: {
      ar: 'فاصل جداري بشرائح مضلعة من بديل الشيبورد',
      en: 'Fluted Acoustic Timber-Alternative Spatial Partition',
    },
    subtitle: {
      ar: 'تقسيم ذكي للمساحات مع الاحتفاظ باتساع المكان وتدفقه',
      en: 'Tactile division preserving spatial breath and light transmission',
    },
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
    aspect: 'aspect-[16/10]',
    materials: { ar: 'شرائح خشبية مضلعة بديل الشيبورد، لون جوزي', en: 'WPC Fluted Slat Panel, Warm Walnut Finish' }
  },
  {
    id: 7,
    category: 'wallpaper',
    title: {
      ar: 'ورق جدران نسيجي محايد في جناح النوم الرئيسي',
      en: 'Textured Linen Wallpaper in Master Bedroom Suite',
    },
    subtitle: {
      ar: 'ملمس ناعم وخلفية هادئة تعزز الاسترخاء والهدوء',
      en: 'Subtle textile relief enhancing bedroom serenity and relaxation',
    },
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    aspect: 'aspect-[4/3]',
    materials: { ar: 'ورق جدران فينيل قابل للمسح، نسيج كتاني', en: 'Washable Vinyl Wallpaper, Linen Texture' }
  },
  {
    id: 8,
    category: 'painting',
    title: {
      ar: 'دهانات مطفية دافئة بلون الشوفان والعاج',
      en: 'Warm Ultra-Matte Interior Paint in Oat & Ivory Hue',
    },
    subtitle: {
      ar: 'أسطح حريرية موحدة تخلو من اللمعان المزعج وانعكاسات الضوء',
      en: 'Uniform velvety surfaces absorbing harsh glare with soft comfort',
    },
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80',
    aspect: 'aspect-[16/11]',
    materials: { ar: 'دهان مائي بدون رائحة، طبقات تأسيس ومعجون ناعم', en: 'Low-VOC Matte Paint, Ultra-fine Skim Coat' }
  },
  {
    id: 9,
    category: 'renovation',
    title: {
      ar: 'تجديد وترميم شامل لفيلا سكنية حديثة',
      en: 'Comprehensive Renovation for Modern Residential Villa',
    },
    subtitle: {
      ar: 'إعادة معالجة الواجهات الخارجية والتشطيبات الداخلية بالكامل',
      en: 'Upgraded exterior envelope and fully modernized interior spaces',
    },
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    aspect: 'aspect-[4/3]',
    materials: { ar: 'معالجة شقوق، عوازل حرارية، تكسيات حديثة', en: 'Masonry Restoration, Facade Coating, Modern Finishes' }
  }
];
