import { useState, useCallback } from 'react'
import logo from '../../assets/images/eraf-Logo.png'
import LanguageIcon from '../../assets/images/icons/Language.png';
import MenuIcon from '../../assets/images/icons/menu.png';
import CloseIcon from '@mui/icons-material/Close';

import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = useCallback(() => {
        setIsMenuOpen(prev => !prev);
    }, []);

    return (
        <div className={'z-50 w-full bg-white sticky top-0 left-0 right-0 flex justify-between items-center px-8 py-4 shadow-primary '} dir='rtl'>

            <div className='flex justify-between items-center gap-3'>
                <div>
                    <Link to="/">
<img src={logo} width={"119px"} height={"60px"} alt='إراف' loading="lazy" />
                    </Link>
                </div>

                <nav className='hidden md:block'>
                    <ul className='navBarList flex'>
                        <li><Link to="/">الرئيسية</Link></li>
                        <li><Link to="/من-نحن">من نحن</Link></li>
                        <li><Link to="/الخدمات">الخدمات</Link></li>
                        <li><Link to="/الإدارات">الإدارات</Link></li>
                        <li><Link to="/المدونة">المدونة</Link></li>
                        <li><Link to="/إنضم-إلينا">إنضم إلينا</Link></li>
                    </ul>
                </nav>
            </div>

            <div className='flex justify-between items-center gap-4 md:gap-10'>
                <button className='flex justify-between items-center gap-2'>
<img src={LanguageIcon} className='md:ml-1' loading="lazy" />
                    <span className='hidden md:inline'>العربية</span>
                </button>
                <Link to="/تواصل-معانا">
                    <button className='primary-btn hidden lg:block'>
                        تواصل معانا
                    </button>
                </Link>

                <button className='md:hidden' onClick={toggleMenu}>
<img src={MenuIcon} loading="lazy" alt="menu" />
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
                className='fixed top-0 right-0 h-screen w-full bg-white md:hidden flex flex-col z-50'
                style={{
                    transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
                    transition: 'transform 0.35s ease',
                }}
                dir='rtl'
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

                {/* القائمة */}
                <div className='w-full flex flex-col items-end px-4 mt-10 font-semibold text-lg'>
                    <Link to="/" onClick={toggleMenu} className='p-6 w-full text-right border-b border-gray-200' >الرئيسية</Link>
                    <Link to="/من-نحن" onClick={toggleMenu} className='p-6 w-full text-right border-b border-gray-200' >من نحن</Link>
                    <Link to="/الخدمات" onClick={toggleMenu} className='p-6 w-full text-right border-b border-gray-200' >الخدمات</Link>
                    <Link to="/الإدارات" onClick={toggleMenu} className='p-6 w-full text-right border-b border-gray-200' >الإدارات</Link>
                    <Link to="/المدونة" onClick={toggleMenu} className='p-6 w-full text-right border-b border-gray-200' >المدونة</Link>
                    <Link to="/إنضم-إلينا" onClick={toggleMenu} className='p-6 w-full text-right border-b border-gray-200' >إنضم إلينا</Link>
                    <Link to="/تواصل-معانا" onClick={toggleMenu} className='p-6 w-full text-right' >تواصل معانا</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar