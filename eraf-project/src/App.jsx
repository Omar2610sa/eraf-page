import AppRoutes from "./routes/AppRoutes";
import { HelmetProvider } from "react-helmet-async";
import { useLanguage } from "./contexts/LanguageContext.jsx";
import { useEffect } from "react";

import whatsApp from "./assets/images/icons/Button.png"
const App = () => {
  const { lang } = useLanguage();
  const dir = lang === 'ar' ? 'rtl' : 'ltr';



  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);
  return (
    <HelmetProvider>
      <div >

        <AppRoutes className="relative"/>
        <a href="https://wa.me/+9660500012454" className="fixed bottom-5 right-1 z-50">
          <img src={whatsApp} className="w-14 h-14" alt={whatsApp} />
        </a>
      </div>
    </HelmetProvider>
  );
}

export default App

