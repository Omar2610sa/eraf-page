import AppRoutes from "./routes/AppRoutes";
import { HelmetProvider } from "react-helmet-async";
import { useLanguage } from "./contexts/LanguageContext.jsx";
import { useEffect } from "react";

const App = () => {
  const { lang } = useLanguage();
  const dir = lang === 'ar' ? 'rtl' : 'ltr';



    useEffect(() => {
        document.documentElement.dir = dir;
    }, [dir]);
  return (
    <HelmetProvider>
      <div >
        <AppRoutes />
      </div>
    </HelmetProvider>
  );
}

export default App

