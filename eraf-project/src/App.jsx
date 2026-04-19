import AppRoutes from "./routes/AppRoutes";
import { HelmetProvider } from "react-helmet-async";
import { useLanguage } from "./contexts/LanguageContext.jsx";

const App = () => {
  const { lang } = useLanguage();
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  return (
    <HelmetProvider>
      <div dir={dir}>
        <AppRoutes />
      </div>
    </HelmetProvider>
  );
}

export default App

