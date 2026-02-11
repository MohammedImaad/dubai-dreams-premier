import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'ar' | 'zh' | 'de';

interface Translations {
  nav: {
    properties: string;
    about: string;
    services: string;
    team: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    viewProperties: string;
    scheduleConsultation: string;
  };
  search: {
    propertyType: string;
    location: string;
    priceRange: string;
    search: string;
    allTypes: string;
    villas: string;
    apartments: string;
    penthouses: string;
    commercial: string;
    allLocations: string;
    allPrices: string;
  };
  featured: {
    title: string;
    subtitle: string;
    viewDetails: string;
    featured: string;
    bed: string;
    bath: string;
    sqft: string;
  };
  about: {
    title: string;
    subtitle: string;
    description1: string;
    description2: string;
    marketExpertise: string;
    marketExpertiseDesc: string;
    exclusiveNetwork: string;
    exclusiveNetworkDesc: string;
    confidentiality: string;
    confidentialityDesc: string;
    globalReach: string;
    globalReachDesc: string;
  };
  services: {
    title: string;
    subtitle: string;
    buyerConsultation: string;
    buyerConsultationDesc: string;
    sellerRepresentation: string;
    sellerRepresentationDesc: string;
    investmentAnalysis: string;
    investmentAnalysisDesc: string;
    offPlan: string;
    offPlanDesc: string;
    corporateRelocation: string;
    corporateRelocationDesc: string;
    propertyManagement: string;
    propertyManagementDesc: string;
  };
  team: {
    title: string;
    subtitle: string;
    ceo: string;
    salesDirector: string;
    seniorAgent: string;
    marketingHead: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
    testimonial1: string;
    author1: string;
    role1: string;
    testimonial2: string;
    author2: string;
    role2: string;
    testimonial3: string;
    author3: string;
    role3: string;
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
  bookCall: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    phone: string;
    preferredDate: string;
    preferredTime: string;
    message: string;
    submit: string;
    success: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    contact: string;
    followUs: string;
    rights: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      properties: 'Properties',
      about: 'About Us',
      services: 'Services',
      team: 'Our Team',
      contact: 'Contact Us',
    },
    hero: {
      title: 'Invest in Dubai Real Estate with Stark',
      subtitle: "Discover exclusive properties in Dubai's most prestigious locations. Expert guidance for discerning buyers and sellers.",
      viewProperties: 'View Properties',
      scheduleConsultation: 'Schedule Consultation',
    },
    search: {
      propertyType: 'Property Type',
      location: 'Location',
      priceRange: 'Price Range',
      search: 'Search',
      allTypes: 'All Types',
      villas: 'Villas',
      apartments: 'Apartments',
      penthouses: 'Penthouses',
      commercial: 'Commercial',
      allLocations: 'All Locations',
      allPrices: 'All Prices',
    },
    featured: {
      title: 'Featured Luxury Properties',
      subtitle: 'Handpicked exclusive properties offering the finest in Dubai luxury real estate',
      viewDetails: 'View Details',
      featured: 'Featured',
      bed: 'Bed',
      bath: 'Bath',
      sqft: 'sqft',
    },
    about: {
      title: 'About Stark Home Real Estate',
      subtitle: 'Your Trusted Partner in Luxury Real Estate',
      description1: "Stark Home Real Estate is Dubai's premier boutique agency specializing in luxury properties, exclusive developments, and high-net-worth clientele. With deep market expertise and unparalleled access to Dubai's finest properties, we deliver exceptional results.",
      description2: "Our team of certified RERA brokers combines international experience with local market knowledge. We understand that luxury property transactions require discretion, sophistication, and expert guidance at every stage.",
      marketExpertise: 'Market Expertise',
      marketExpertiseDesc: "10+ years in Dubai's luxury segment",
      exclusiveNetwork: 'Exclusive Network',
      exclusiveNetworkDesc: 'Direct access to prime properties',
      confidentiality: 'Confidentiality',
      confidentialityDesc: 'Strict privacy for all transactions',
      globalReach: 'Global Reach',
      globalReachDesc: 'International buyer connections',
    },
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive real estate solutions tailored to your needs',
      buyerConsultation: 'Buyer Consultation',
      buyerConsultationDesc: "Expert guidance navigating Dubai's luxury market. We conduct extensive property analysis, negotiate on your behalf, and ensure a seamless acquisition process.",
      sellerRepresentation: 'Seller Representation',
      sellerRepresentationDesc: "Strategic marketing and positioning of your luxury property. Our proven methods reach qualified buyers globally, maximize property value, and expedite sales.",
      investmentAnalysis: 'Investment Analysis',
      investmentAnalysisDesc: 'In-depth market research and ROI projections for property investments. We provide comprehensive data analysis and growth potential assessments.',
      offPlan: 'Off-Plan Development',
      offPlanDesc: "Exclusive access to Dubai's premier under-construction projects. Strategic pre-launch opportunities for early investors.",
      corporateRelocation: 'Corporate Relocation',
      corporateRelocationDesc: 'Seamless corporate housing solutions for executives. Flexible lease terms and comprehensive relocation services.',
      propertyManagement: 'Property Management',
      propertyManagementDesc: 'Full-service management of residential and commercial properties. Maximize returns while maintaining property standards.',
    },
    team: {
      title: 'Meet Our Team',
      subtitle: 'Experienced professionals dedicated to your success',
      ceo: 'CEO & Founder',
      salesDirector: 'Sales Director',
      seniorAgent: 'Senior Agent',
      marketingHead: 'Marketing Head',
    },
    testimonials: {
      title: 'Client Testimonials',
      subtitle: 'Hear from our satisfied clients who have trusted us with their luxury real estate journey',
      testimonial1: '"Stark Home found us the perfect villa in Emirates Hills. Their professionalism, market knowledge, and attention to detail made the entire process smooth and enjoyable."',
      author1: 'Michael Richardson',
      role1: 'Property Investor, London',
      testimonial2: '"As a first-time buyer in Dubai, I appreciated their expert guidance through every step. They negotiated an excellent price for our penthouse in Downtown Dubai."',
      author2: 'Sarah Al-Maktoum',
      role2: 'Business Executive, Dubai',
      testimonial3: '"Selling our Palm Jumeirah villa was effortless with their team. Their marketing strategy attracted serious international buyers."',
      author3: 'Alexander Petrov',
      role3: 'Entrepreneur, Moscow',
    },
    cta: {
      title: 'Ready to Find Your Luxury Home?',
      subtitle: "Let our expert team guide you through Dubai's most exclusive real estate opportunities",
      button: 'Schedule a Consultation Today',
    },
    bookCall: {
      title: 'Book a Call',
      subtitle: 'Schedule a consultation with our experts',
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      preferredDate: 'Preferred Date',
      preferredTime: 'Preferred Time',
      message: 'Message (Optional)',
      submit: 'Book Consultation',
      success: 'Thank you! We will contact you shortly.',
    },
    footer: {
      description: 'Your trusted partner in luxury real estate in Dubai, specializing in premium properties and exclusive developments.',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      followUs: 'Follow Us',
      rights: 'All rights reserved.',
    },
  },
  ar: {
    nav: {
      properties: 'العقارات',
      about: 'من نحن',
      services: 'خدماتنا',
      team: 'فريقنا',
      contact: 'اتصل بنا',
    },
    hero: {
      title: 'استثمر في عقارات دبي مع ستارك',
      subtitle: 'اكتشف العقارات الحصرية في أرقى مواقع دبي. إرشاد متخصص للمشترين والبائعين المميزين.',
      viewProperties: 'عرض العقارات',
      scheduleConsultation: 'حجز استشارة',
    },
    search: {
      propertyType: 'نوع العقار',
      location: 'الموقع',
      priceRange: 'نطاق السعر',
      search: 'بحث',
      allTypes: 'جميع الأنواع',
      villas: 'فلل',
      apartments: 'شقق',
      penthouses: 'بنتهاوس',
      commercial: 'تجاري',
      allLocations: 'جميع المواقع',
      allPrices: 'جميع الأسعار',
    },
    featured: {
      title: 'عقارات فاخرة مميزة',
      subtitle: 'عقارات حصرية مختارة بعناية تقدم أفضل ما في العقارات الفاخرة في دبي',
      viewDetails: 'عرض التفاصيل',
      featured: 'مميز',
      bed: 'غرفة',
      bath: 'حمام',
      sqft: 'قدم²',
    },
    about: {
      title: 'عن ستارك هوم العقارية',
      subtitle: 'شريكك الموثوق في العقارات الفاخرة',
      description1: 'ستارك هوم العقارية هي وكالة بوتيك رائدة في دبي متخصصة في العقارات الفاخرة والتطويرات الحصرية وخدمة العملاء ذوي الثروات العالية.',
      description2: 'يجمع فريقنا من الوسطاء المعتمدين من ريرا بين الخبرة الدولية والمعرفة المحلية بالسوق.',
      marketExpertise: 'خبرة السوق',
      marketExpertiseDesc: '10+ سنوات في قطاع الفخامة في دبي',
      exclusiveNetwork: 'شبكة حصرية',
      exclusiveNetworkDesc: 'وصول مباشر للعقارات الرئيسية',
      confidentiality: 'السرية',
      confidentialityDesc: 'خصوصية تامة لجميع المعاملات',
      globalReach: 'الانتشار العالمي',
      globalReachDesc: 'اتصالات مع مشترين دوليين',
    },
    services: {
      title: 'خدماتنا',
      subtitle: 'حلول عقارية شاملة مصممة لاحتياجاتك',
      buyerConsultation: 'استشارة المشترين',
      buyerConsultationDesc: 'إرشاد متخصص في التنقل بسوق دبي الفاخر. نجري تحليلاً شاملاً للعقارات ونتفاوض نيابة عنك.',
      sellerRepresentation: 'تمثيل البائعين',
      sellerRepresentationDesc: 'تسويق استراتيجي وتموضع لعقارك الفاخر. أساليبنا المثبتة تصل للمشترين المؤهلين عالمياً.',
      investmentAnalysis: 'تحليل الاستثمار',
      investmentAnalysisDesc: 'بحث متعمق في السوق وتوقعات العائد على الاستثمار. تحليل شامل للبيانات وتقييم إمكانات النمو.',
      offPlan: 'التطوير على الخريطة',
      offPlanDesc: 'وصول حصري لمشاريع دبي الرائدة قيد الإنشاء. فرص ما قبل الإطلاق للمستثمرين المبكرين.',
      corporateRelocation: 'نقل الشركات',
      corporateRelocationDesc: 'حلول سكنية سلسة للمديرين التنفيذيين. شروط إيجار مرنة وخدمات نقل شاملة.',
      propertyManagement: 'إدارة العقارات',
      propertyManagementDesc: 'إدارة شاملة للعقارات السكنية والتجارية. تعظيم العوائد مع الحفاظ على معايير العقار.',
    },
    team: {
      title: 'تعرف على فريقنا',
      subtitle: 'محترفون ذوو خبرة ملتزمون بنجاحك',
      ceo: 'الرئيس التنفيذي والمؤسس',
      salesDirector: 'مدير المبيعات',
      seniorAgent: 'وكيل أول',
      marketingHead: 'رئيس التسويق',
    },
    testimonials: {
      title: 'آراء العملاء',
      subtitle: 'استمع إلى عملائنا الراضين الذين وثقوا بنا في رحلتهم العقارية الفاخرة',
      testimonial1: '"وجدت ستارك هوم لنا الفيلا المثالية في إمارات هيلز. احترافيتهم ومعرفتهم بالسوق واهتمامهم بالتفاصيل جعل العملية سلسة وممتعة."',
      author1: 'مايكل ريتشاردسون',
      role1: 'مستثمر عقاري، لندن',
      testimonial2: '"كمشتري لأول مرة في دبي، قدّرت إرشادهم المتخصص في كل خطوة. تفاوضوا على سعر ممتاز لبنتهاوسنا في وسط مدينة دبي."',
      author2: 'سارة المكتوم',
      role2: 'مديرة تنفيذية، دبي',
      testimonial3: '"كان بيع فيلتنا في نخلة جميرا سهلاً مع فريقهم. استراتيجيتهم التسويقية جذبت مشترين دوليين جادين."',
      author3: 'ألكسندر بيتروف',
      role3: 'رائد أعمال، موسكو',
    },
    cta: {
      title: 'هل أنت مستعد لإيجاد منزلك الفاخر؟',
      subtitle: 'دع فريقنا المتخصص يرشدك خلال أكثر فرص العقارات حصرية في دبي',
      button: 'احجز استشارة اليوم',
    },
    bookCall: {
      title: 'احجز مكالمة',
      subtitle: 'حدد موعداً للاستشارة مع خبرائنا',
      name: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      phone: 'رقم الهاتف',
      preferredDate: 'التاريخ المفضل',
      preferredTime: 'الوقت المفضل',
      message: 'رسالة (اختياري)',
      submit: 'احجز الاستشارة',
      success: 'شكراً لك! سنتواصل معك قريباً.',
    },
    footer: {
      description: 'شريكك الموثوق في العقارات الفاخرة في دبي، متخصصون في العقارات المميزة والتطويرات الحصرية.',
      quickLinks: 'روابط سريعة',
      contact: 'اتصل بنا',
      followUs: 'تابعنا',
      rights: 'جميع الحقوق محفوظة.',
    },
  },
  zh: {
    nav: {
      properties: '房产',
      about: '关于我们',
      services: '服务',
      team: '我们的团队',
      contact: '联系我们',
    },
    hero: {
      title: '与Stark一起投资迪拜房地产',
      subtitle: '探索迪拜最负盛名地段的独家房产。为挑剔的买家和卖家提供专业指导。',
      viewProperties: '查看房产',
      scheduleConsultation: '预约咨询',
    },
    search: {
      propertyType: '房产类型',
      location: '位置',
      priceRange: '价格范围',
      search: '搜索',
      allTypes: '所有类型',
      villas: '别墅',
      apartments: '公寓',
      penthouses: '顶层公寓',
      commercial: '商业',
      allLocations: '所有位置',
      allPrices: '所有价格',
    },
    featured: {
      title: '精选豪华房产',
      subtitle: '精心挑选的独家房产，提供迪拜豪华房地产的顶级体验',
      viewDetails: '查看详情',
      featured: '精选',
      bed: '卧室',
      bath: '浴室',
      sqft: '平方英尺',
    },
    about: {
      title: '关于斯塔克家园房地产',
      subtitle: '您在豪华房地产领域值得信赖的合作伙伴',
      description1: '斯塔克家园房地产是迪拜首屈一指的精品代理机构，专注于豪华房产、独家开发项目和高净值客户服务。凭借深厚的市场专业知识和无与伦比的迪拜顶级房产资源，我们提供卓越的成果。',
      description2: '我们的RERA认证经纪人团队将国际经验与本地市场知识相结合。我们深知豪华房产交易需要谨慎、精致和专业的指导。',
      marketExpertise: '市场专业知识',
      marketExpertiseDesc: '迪拜豪华市场10年以上经验',
      exclusiveNetwork: '独家网络',
      exclusiveNetworkDesc: '直接接触优质房产',
      confidentiality: '保密性',
      confidentialityDesc: '所有交易严格保密',
      globalReach: '全球覆盖',
      globalReachDesc: '国际买家网络',
    },
    services: {
      title: '我们的服务',
      subtitle: '根据您的需求量身定制的综合房地产解决方案',
      buyerConsultation: '买家咨询',
      buyerConsultationDesc: '专业指导您驾驭迪拜豪华市场。我们进行全面的房产分析，代表您进行谈判，确保无缝的收购过程。',
      sellerRepresentation: '卖家代理',
      sellerRepresentationDesc: '对您的豪华房产进行战略营销和定位。我们久经验证的方法触达全球合格买家，最大化房产价值。',
      investmentAnalysis: '投资分析',
      investmentAnalysisDesc: '深入的市场研究和房产投资回报预测。我们提供全面的数据分析和增长潜力评估。',
      offPlan: '期房开发',
      offPlanDesc: '独家获取迪拜顶级在建项目。为早期投资者提供战略性预售机会。',
      corporateRelocation: '企业搬迁',
      corporateRelocationDesc: '为高管提供无缝的企业住房解决方案。灵活的租赁条款和全面的搬迁服务。',
      propertyManagement: '物业管理',
      propertyManagementDesc: '住宅和商业物业的全方位管理。在保持物业标准的同时最大化回报。',
    },
    team: {
      title: '认识我们的团队',
      subtitle: '致力于您成功的资深专业人士',
      ceo: '首席执行官兼创始人',
      salesDirector: '销售总监',
      seniorAgent: '高级代理',
      marketingHead: '市场总监',
    },
    testimonials: {
      title: '客户评价',
      subtitle: '听听信任我们豪华房地产之旅的满意客户的心声',
      testimonial1: '"斯塔克家园为我们在阿联酋山找到了完美的别墅。他们的专业精神、市场知识和对细节的关注使整个过程顺利愉快。"',
      author1: '迈克尔·理查森',
      role1: '房产投资者，伦敦',
      testimonial2: '"作为迪拜的首次购房者，我非常感谢他们在每一步的专业指导。他们为我们在迪拜市中心的顶层公寓谈判了优惠的价格。"',
      author2: '萨拉·阿勒马克图姆',
      role2: '商业高管，迪拜',
      testimonial3: '"通过他们的团队，出售我们在棕榈岛的别墅轻而易举。他们的营销策略吸引了认真的国际买家。"',
      author3: '亚历山大·彼得罗夫',
      role3: '企业家，莫斯科',
    },
    cta: {
      title: '准备好寻找您的豪华住宅了吗？',
      subtitle: '让我们的专家团队引导您了解迪拜最独家的房地产机会',
      button: '今天预约咨询',
    },
    bookCall: {
      title: '预约电话',
      subtitle: '与我们的专家预约咨询',
      name: '全名',
      email: '电子邮件地址',
      phone: '电话号码',
      preferredDate: '首选日期',
      preferredTime: '首选时间',
      message: '留言（可选）',
      submit: '预约咨询',
      success: '谢谢！我们将尽快与您联系。',
    },
    footer: {
      description: '您在迪拜豪华房地产领域值得信赖的合作伙伴，专注于高端房产和独家开发项目。',
      quickLinks: '快速链接',
      contact: '联系方式',
      followUs: '关注我们',
      rights: '版权所有。',
    },
  },
  de: {
    nav: {
      properties: 'Immobilien',
      about: 'Über Uns',
      services: 'Dienstleistungen',
      team: 'Unser Team',
      contact: 'Kontakt',
    },
    hero: {
      title: 'Investieren Sie in Dubai Immobilien mit Stark',
      subtitle: 'Entdecken Sie exklusive Immobilien in Dubais prestigeträchtigsten Lagen. Fachkundige Beratung für anspruchsvolle Käufer und Verkäufer.',
      viewProperties: 'Immobilien Ansehen',
      scheduleConsultation: 'Beratung Vereinbaren',
    },
    search: {
      propertyType: 'Immobilientyp',
      location: 'Standort',
      priceRange: 'Preisbereich',
      search: 'Suchen',
      allTypes: 'Alle Typen',
      villas: 'Villen',
      apartments: 'Apartments',
      penthouses: 'Penthäuser',
      commercial: 'Gewerblich',
      allLocations: 'Alle Standorte',
      allPrices: 'Alle Preise',
    },
    featured: {
      title: 'Ausgewählte Luxusimmobilien',
      subtitle: 'Handverlesene exklusive Immobilien, die das Beste des Dubais Luxus-Immobilienmarktes bieten',
      viewDetails: 'Details Ansehen',
      featured: 'Ausgewählt',
      bed: 'Schlafz.',
      bath: 'Bad',
      sqft: 'qm',
    },
    about: {
      title: 'Über Stark Home Immobilien',
      subtitle: 'Ihr vertrauenswürdiger Partner für Luxusimmobilien',
      description1: 'Stark Home Immobilien ist Dubais führende Boutique-Agentur, spezialisiert auf Luxusimmobilien, exklusive Entwicklungen und vermögende Kunden. Mit tiefgreifender Marktexpertise und unvergleichlichem Zugang zu Dubais besten Immobilien liefern wir außergewöhnliche Ergebnisse.',
      description2: 'Unser Team aus zertifizierten RERA-Maklern verbindet internationale Erfahrung mit lokalem Marktwissen. Wir verstehen, dass Luxusimmobilientransaktionen Diskretion, Raffinesse und fachkundige Beratung erfordern.',
      marketExpertise: 'Marktexpertise',
      marketExpertiseDesc: '10+ Jahre im Dubais Luxussegment',
      exclusiveNetwork: 'Exklusives Netzwerk',
      exclusiveNetworkDesc: 'Direkter Zugang zu Premiumimmobilien',
      confidentiality: 'Vertraulichkeit',
      confidentialityDesc: 'Strenge Privatsphäre bei allen Transaktionen',
      globalReach: 'Globale Reichweite',
      globalReachDesc: 'Internationale Käuferverbindungen',
    },
    services: {
      title: 'Unsere Dienstleistungen',
      subtitle: 'Umfassende Immobilienlösungen, maßgeschneidert für Ihre Bedürfnisse',
      buyerConsultation: 'Käuferberatung',
      buyerConsultationDesc: 'Fachkundige Beratung beim Navigieren des Dubai-Luxusmarktes. Wir führen umfassende Immobilienanalysen durch und verhandeln in Ihrem Namen.',
      sellerRepresentation: 'Verkäufervertretung',
      sellerRepresentationDesc: 'Strategisches Marketing und Positionierung Ihrer Luxusimmobilie. Unsere bewährten Methoden erreichen qualifizierte Käufer weltweit.',
      investmentAnalysis: 'Investitionsanalyse',
      investmentAnalysisDesc: 'Tiefgehende Marktforschung und ROI-Prognosen für Immobilieninvestitionen. Umfassende Datenanalyse und Wachstumspotenzial-Bewertungen.',
      offPlan: 'Off-Plan-Entwicklung',
      offPlanDesc: 'Exklusiver Zugang zu Dubais führenden Bauprojekten. Strategische Vorverkaufsmöglichkeiten für Frühinvestoren.',
      corporateRelocation: 'Firmenumzug',
      corporateRelocationDesc: 'Nahtlose Unternehmensunterkunftslösungen für Führungskräfte. Flexible Mietbedingungen und umfassende Umzugsdienste.',
      propertyManagement: 'Immobilienverwaltung',
      propertyManagementDesc: 'Vollservice-Verwaltung von Wohn- und Gewerbeimmobilien. Maximierung der Renditen bei Aufrechterhaltung der Immobilienstandards.',
    },
    team: {
      title: 'Lernen Sie Unser Team Kennen',
      subtitle: 'Erfahrene Fachleute, die sich Ihrem Erfolg widmen',
      ceo: 'CEO & Gründer',
      salesDirector: 'Vertriebsleiter',
      seniorAgent: 'Senior Agent',
      marketingHead: 'Marketingleiter',
    },
    testimonials: {
      title: 'Kundenstimmen',
      subtitle: 'Hören Sie von unseren zufriedenen Kunden, die uns ihre Luxus-Immobilienreise anvertraut haben',
      testimonial1: '"Stark Home hat uns die perfekte Villa in Emirates Hills gefunden. Ihre Professionalität, Marktkenntnisse und Liebe zum Detail machten den gesamten Prozess reibungslos und angenehm."',
      author1: 'Michael Richardson',
      role1: 'Immobilieninvestor, London',
      testimonial2: '"Als Erstkäufer in Dubai schätzte ich ihre fachkundige Beratung bei jedem Schritt. Sie haben einen ausgezeichneten Preis für unser Penthouse in Downtown Dubai ausgehandelt."',
      author2: 'Sarah Al-Maktoum',
      role2: 'Geschäftsführerin, Dubai',
      testimonial3: '"Der Verkauf unserer Palm Jumeirah Villa war mit ihrem Team mühelos. Ihre Marketingstrategie zog ernsthafte internationale Käufer an."',
      author3: 'Alexander Petrov',
      role3: 'Unternehmer, Moskau',
    },
    cta: {
      title: 'Bereit, Ihr Luxushaus zu Finden?',
      subtitle: 'Lassen Sie unser Expertenteam Sie durch Dubais exklusivste Immobilienmöglichkeiten führen',
      button: 'Vereinbaren Sie Heute eine Beratung',
    },
    bookCall: {
      title: 'Gespräch Buchen',
      subtitle: 'Vereinbaren Sie eine Beratung mit unseren Experten',
      name: 'Vollständiger Name',
      email: 'E-Mail-Adresse',
      phone: 'Telefonnummer',
      preferredDate: 'Bevorzugtes Datum',
      preferredTime: 'Bevorzugte Zeit',
      message: 'Nachricht (Optional)',
      submit: 'Beratung Buchen',
      success: 'Vielen Dank! Wir werden Sie in Kürze kontaktieren.',
    },
    footer: {
      description: 'Ihr vertrauenswürdiger Partner für Luxusimmobilien in Dubai, spezialisiert auf Premiumimmobilien und exklusive Entwicklungen.',
      quickLinks: 'Schnelllinks',
      contact: 'Kontakt',
      followUs: 'Folgen Sie Uns',
      rights: 'Alle Rechte vorbehalten.',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  
  const isRTL = language === 'ar';
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language], isRTL }}>
      <div dir={isRTL ? 'rtl' : 'ltr'}>
        {children}
      </div>
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
