import { createContext, useContext, useState, useEffect } from 'react';

 const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('lang') || 'ar';
        }
        return 'ar';
    });

    useEffect(() => {
        const root = document.documentElement;
        root.dir = lang === 'ar' ? 'rtl' : 'ltr';
        root.lang = lang;
        localStorage.setItem('lang', lang);
    }, [lang]);

    const toggleLang = () => {
        setLang(prev => prev === 'ar' ? 'en' : 'ar');
    };

    return (
        <LanguageContext.Provider value={{ lang, toggleLang }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within LanguageProvider');
    }
    return context;
};

