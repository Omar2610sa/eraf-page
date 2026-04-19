export const getLocalizedText = (item, field, lang) => {
  const localizedField = `${field}_${lang}`;
  return item?.[localizedField] || item?.[field] || '';
};

export const texts = {
  ar: {
    home: 'الرئيسية',
    about: 'من نحن',
    services: 'الخدمات',
    departments: 'الإدارات',
    blog: 'المدونة',
    join: 'إنضم إلينا',
    contact: 'تواصل معانا',
    exploreServices: 'استكشف خدماتنا',
    exploreBLogs: 'استكشف المقالات',
    contactUs: 'تواصل معنا',
    knowMore: 'تعرف علينا',
    arabic: 'العربية',
    english: 'English',
    siteMap: 'خريطة الموقع',
    contactInfo: 'معلومات التواصل',
    followUs: 'تابعنا علي',
    copyright: 'جميع الحقوق محفوظة © شركة أراف للخدمات الصحية المنزلية 2026',
    privacy: 'سياسة الخصوصية',
    terms: 'شروط الاستخدام',
    companyDescription: 'نقدّم خدمات رعاية صحية منزلية موثوقة باحترافية وجودة عالية، لنمنح مرضانا رعاية متكاملة داخل منازلهم بكل راحة وأمان.',
    whyJoinTOUs: 'هل تريد الانضمام لفريقنا؟',
    whyJoinTOUsDescription: 'نبحث دائماً عن المواهب المتميزة للانضمام إلى فريقنا'
  },
  en: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    departments: 'Departments',
    blog: 'Blog',
    join: 'Join Us',
    contact: 'Contact Us',
    exploreServices: 'Explore Our Services',
    exploreBLogs: 'Explore Our Blogs',
    contactUs: 'Contact Us',
    knowMore: 'Know More',
    arabic: 'Arabic',
    english: 'English',
    siteMap: 'Site Map',
    contactInfo: 'Contact Information',
    followUs: 'Follow Us',
    copyright: 'All Rights Reserved © Araf Home Healthcare Services 2026',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    companyDescription: 'We provide reliable home healthcare services with professionalism and high quality, to give our patients comprehensive care inside their homes with comfort and safety.',
    whyJoinTOUs: 'Do you want to join our team?',
    whyJoinTOUsDescription: 'We are always looking for outstanding talent to join our team'
  }
};

