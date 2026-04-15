import React, { useState } from 'react'
import logo from '../../assets/images/eraf-Logo.png'
import LanguageIcon from '../../assets/images/icons/Language.png';
import MenuIcon from '../../assets/images/icons/menu.png';
import CloseIcon from '@mui/icons-material/Close';


// Route Link
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className={'z-50 w-full bg-white sticky top-0 left-0 right-0 flex justify-between items-center px-8 py-4 shadow-primary '} dir='rtl'>

            <div className='flex justify-between items-center gap-3'>
                <div>
                    <img src={logo} width={"119px"} height={"60px"} alt='إراف' />
                </div>

                <nav className='hidden md:block'>
                    <ul className='navBarList flex'>
                        <li><Link to="/">الرئيسية</Link></li>
                        <li><Link to="/من-نحن">من نحن</Link></li>
                        <li><Link to="/الخدمات">الخدمات</Link></li>
                        <li><Link to="/الإدارات">الإدارات</Link></li>
                        <li><Link to={""}>المدونة</Link></li>
                        <li><Link to={""}>إنضم إلينا</Link></li>
                    </ul>
                </nav>
            </div>

            <div className='flex justify-between items-center gap-4 md:gap-10'>
                <button className='flex justify-between items-center gap-2'>
                    <img src={LanguageIcon} className='md:ml-1' />
                    <span className='hidden md:inline'>العربية</span>
                </button>
                <Link to="/تواصل-معانا">
                <button className='primary-btn hidden lg:block'>
                    تواصل معانا
                </button>
                </Link>

                <button
                    className='md:hidden'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <CloseIcon /> : <img src={MenuIcon} />}
                </button>
            </div>

            {isMenuOpen && (
                <div className='fixed top-20 left-0 right-0 bg-white w-full h-screen md:hidden flex flex-col items-start pt-8'>
                    <div className='w-full flex flex-col items-start mr-12 mt-12'>
                        <Link to="/" onClick={() => setIsMenuOpen(false)} className='text-lg py-6 w-full  border-b border-gray-200'>الرئيسية</Link>
                        <Link to="/من-نحن" onClick={() => setIsMenuOpen(false)} className='text-lg py-6 w-full  border-b border-gray-200'>من نحن</Link>
                        <Link to="/الخدمات" onClick={() => setIsMenuOpen(false)} className='text-lg py-6 w-full  border-b border-gray-200'>الخدمات</Link>
                        <Link to="/Departments" onClick={() => setIsMenuOpen(false)} className='text-lg py-6 w-full  border-b border-gray-200'>الإدارات</Link>
                        <Link to="" onClick={() => setIsMenuOpen(false)} className='text-lg py-6 w-full  border-b border-gray-200'>المدونة</Link>
                        <Link to="" onClick={() => setIsMenuOpen(false)} className='text-lg py-6 w-full  border-b border-gray-200'>إنضم إلينا</Link>
                        <Link to="/تواصل-معانا" onClick={() => setIsMenuOpen(false)} className='text-lg py-6 w-full '>تواصل معانا</Link>

                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar