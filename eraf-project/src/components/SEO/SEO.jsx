import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, image }) => {
  const location = useLocation();
  const pathname = location.pathname;

  // Metadata map - unique per page (Arabic, SEO-friendly)
  const metadataMap = {
    '/': {
      title: 'إراف - خدمات الرعاية الصحية المنزلية',
      description: 'إراف تقدم رعاية صحية منزلية موثوقة باحترافية وجودة عالية لمرضانا داخل منازلهم براحة وأمان.',
      image: '/images/eraf-Logo.png'
    },
    '/من-نحن': {
      title: 'من نحن - شركة إراف للرعاية الصحية',
      description: 'تعرف على رؤيتنا وقيمنا وفريقنا في شركة إراف للخدمات الصحية المنزلية.',
      image: '/images/eraf-Logo.png'
    },
    '/الخدمات': {
      title: 'خدماتنا - إراف',
      description: 'اكتشف خدمات الرعاية الصحية المنزلية، التمريض، العلاج الطبيعي وأكثر مع إراف.',
      image: '/images/services/serv.jpg'
    },
    '/الإدارات': {
      title: 'الإدارات - إراف',
      description: 'تعرف على فريق إدارتنا وإدارات الشركة في إراف.',
      image: '/images/eraf-Logo.png'
    },
    '/المدونة': {
      title: 'المقالات - إراف',
      description: 'أحدث المقالات والنصائح الصحية من خبراء إراف.',
      image: '/images/blogs/Image.png'
    },
    '/تواصل-معانا': {
      title: 'تواصل معنا - إراف',
      description: 'اتصل بنا أو راسلنا للاستفسار عن خدمات الرعاية الصحية المنزلية.',
      image: '/images/eraf-Logo.png'
    },
    '/إنضم-إلينا': {
      title: 'إنضم إلينا - فرص عمل في إراف',
      description: 'انضم إلى فريق إراف وكن جزءاً من الرعاية الصحية الممتازة.',
      image: '/images/eraf-Logo.png'
    },
    '/الشروط-والأحكام': {
      title: 'الشروط والأحكام - إراف',
      description: 'شروط وأحكام استخدام خدمات إراف.',
      image: '/images/eraf-Logo.png'
    },
    '/سياسة-الخصوصية': {
      title: 'سياسة الخصوصية - إراف',
      description: 'سياسة خصوصية بيانات المستخدمين في إراف.',
      image: '/images/eraf-Logo.png'
    },
    '/404': {
      title: '404 - صفحة غير موجودة | إراف',
      description: 'الصفحة المطلوبة غير موجودة. العودة للرئيسية.',
      image: '/images/erroricon/Error404.png'
    },
    // Dynamic routes fallback
    '/الخدمات/:id': {
      title: 'تفاصيل الخدمة - إراف',
      description: 'معلومات مفصلة عن خدماتنا الصحية المنزلية.',
      image: '/images/services/serv.jpg'
    },
    '/blog/:id': {
      title: 'تفاصيل المقال - إراف',
      description: 'اقرأ المقال الكامل من مدونة إراف.',
      image: '/images/blogs/BlogsDetails.png'
    }
  };

  const pageMeta = metadataMap[pathname] || metadataMap['/'];
  const finalTitle = title ? `${title} - إراف` : pageMeta.title;
  const finalDesc = description || pageMeta.description;
  const finalImage = image || pageMeta.image;

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDesc} />
      {/* Open Graph */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDesc} />
      <meta property="og:image" content={`https://yourdomain.com${finalImage}`} /> {/* Update domain */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://yourdomain.com${pathname}`} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDesc} />
      <meta name="twitter:image" content={`https://yourdomain.com${finalImage}`} />
    </Helmet>
  );
};

export default SEO;
export { HelmetProvider };

