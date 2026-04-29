import { useState, useCallback, useEffect } from 'react'
import { useLanguage } from '../../contexts/LanguageContext.jsx';
import { texts } from '../../utils/localization.js';
import logo from '../../assets/images/eraf-Logo.png'
import LanguageIcon from '../../assets/images/icons/Language.png';
import MenuIcon from '../../assets/images/icons/menu.png';
import CloseIcon from '@mui/icons-material/Close';

import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { lang, toggleLang } = useLanguage();

    const toggleMenu = useCallback(() => {
        setIsMenuOpen(prev => !prev);
    }, []);

    const navDir = lang === 'ar' ? 'rtl' : 'ltr';

    const languageText = lang === 'ar' ? texts.en.english : texts.ar.arabic;

    useEffect(() => {
        document.documentElement.dir = navDir;
    }, [navDir]);

    return (
        <div className='bg-white shadow-primary sticky top-0 left-0 right-0 z-50 '>

            <div className={'w-full  container  flex justify-between items-center py-4  '}>

                <div className='flex justify-between items-center  gap-3'>
                    <div>
                        <Link to="/">
                            <img src={logo} width={"119px"} height={"60px"} alt='إراف' loading="lazy" />
                        </Link>
                    </div>

                    <nav className='hidden md:block'>
                        <ul className={`navBarList flex `}>
                            <li><Link to="/">{texts[lang].home}</Link></li>
                            <li><Link to="/من-نحن">{texts[lang].about}</Link></li>
                            <li><Link to="/الخدمات">{texts[lang].services}</Link></li>
                            <li><Link to="/الإدارات">{texts[lang].departments}</Link></li>
                            <li><Link to="/المدونة">{texts[lang].blog}</Link></li>
                            <li><Link to="/إنضم-إلينا">{texts[lang].join}</Link></li>
                        </ul>
                    </nav>
                </div>

                <div className='flex justify-between items-center gap-4 md:gap-10'>
                    <button className='flex items-center gap-2 cursor-pointer' onClick={toggleLang}>
                        <img src={LanguageIcon} className='w-6 h-6 md:ml-1 object-contain' width={24} height={24} loading="lazy" alt="language" />
                        <span className='hidden md:inline'>{languageText}</span>
                    </button>
                    <Link to="/تواصل-معانا">
                        <button className='primary-btn hidden lg:block'>
                            {texts[lang].contact}
                        </button>
                    </Link>

                    <button className='md:hidden' onClick={toggleMenu}>
                        <img src={MenuIcon} className="w-6 h-6 object-contain" width={24} height={24} loading="lazy" alt="menu" />
                    </button>
                </div>

                {/* Overlay */}
                <div
                    className='fixed inset-0 bg-black md:hidden z-40'
                    style={{
                        opacity: isMenuOpen ? 0.3 : 0,
                        pointerEvents: isMenuOpen ? 'auto' : 'none',
                        transition: 'opacity 0.3s ease'
                    }}
                    onClick={toggleMenu}
                />

                {/* Mobile Menu */}
                <div
                    className={`fixed top-0 ${lang === 'ar' ? 'left-0' : 'right-0'} h-screen w-full bg-white md:hidden flex flex-col z-50`}
                    style={{
                        transform: isMenuOpen
                            ? 'translateX(0)'
                            : lang === 'ar'
                                ? 'translateX(-100%)'
                                : 'translateX(100%)',
                        transition: 'transform 0.35s ease',
                    }}
                >
                    {/* Header - Gradient */}
                    <div
                        className='relative w-full flex items-center justify-center flex-shrink-0'
                        style={{
                            background: 'linear-gradient(180deg, #E9FBFF 0%, #FBFBFB 100%)',
                            height: '131px',
                        }}
                    >
                        <img src={logo} width={"150px"} height={"56px"} alt='إراف' />

                        <button
                            onClick={toggleMenu}
                            className='absolute left-4 top-6 flex items-center justify-center rounded-full'
                            style={{ background: '#014755', width: '32px', height: '32px' }}
                        >
                            <CloseIcon style={{ color: 'white', fontSize: '24px' }} />
                        </button>
                    </div>

                    {/* Menu */}
                    <div className={`w-full flex flex-col ${navDir === 'rtl' ? 'items-end' : 'items-start'} px-4 mt-10 font-semibold text-lg`}>
                        <Link to="/" onClick={toggleMenu} className={`p-6 w-full ${navDir === 'rtl' ? 'text-right border-b border-gray-200' : 'text-left border-b border-gray-200'}`} >{texts[lang].home}</Link>
                        <Link to="/من-نحن" onClick={toggleMenu} className={`p-6 w-full ${navDir === 'rtl' ? 'text-right border-b border-gray-200' : 'text-left border-b border-gray-200'}`} >{texts[lang].about}</Link>
                        <Link to="/الخدمات" onClick={toggleMenu} className={`p-6 w-full ${navDir === 'rtl' ? 'text-right border-b border-gray-200' : 'text-left border-b border-gray-200'}`} >{texts[lang].services}</Link>
                        <Link to="/الإدارات" onClick={toggleMenu} className={`p-6 w-full ${navDir === 'rtl' ? 'text-right border-b border-gray-200' : 'text-left border-b border-gray-200'}`} >{texts[lang].departments}</Link>
                        <Link to="/المدونة" onClick={toggleMenu} className={`p-6 w-full ${navDir === 'rtl' ? 'text-right border-b border-gray-200' : 'text-left border-b border-gray-200'}`} >{texts[lang].blog}</Link>
                        <Link to="/إنضم-إلينا" onClick={toggleMenu} className={`p-6 w-full ${navDir === 'rtl' ? 'text-right border-b border-gray-200' : 'text-left border-b border-gray-200'}`} >{texts[lang].join}</Link>
                        <Link to="/تواصل-معانا" onClick={toggleMenu} className={`p-6 w-full ${navDir === 'rtl' ? 'text-right' : 'text-left'}`} >{texts[lang].contact}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar

