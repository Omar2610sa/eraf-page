import React from 'react'
import logo from '../../assets/images/eraf-Logo.png'


// Material Ui imports
import LanguageIcon from '@mui/icons-material/Language';





const Navbar = () => {
    return (
        <div className={'z-10 w-full bg-white fixed top-0 left-0 right-0 flex justify-between items-center px-8 py-4 shadow-primary '} dir='rtl'>

            {/* Logo & Nav bar */}
            <div className='flex justify-between items-center gap-3'>

                {/* Logo */}
                <div>
                    <img src={logo} width={"119px"} height={"60px"} alt='إراف' />
                </div>
                {/* === Logo === */}

                {/* Nav Bar list */}
                <nav className=''>
                    <ul className='navBarList flex '>
                        <li><a href="">الرئيسية</a></li>
                        <li><a href="">من نحن</a></li>
                        <li><a href="">الخدمات</a></li>
                        <li><a href="">الإدارات</a></li>
                        <li><a href="">المدونة</a></li>
                        <li><a href="">إنضم إلينا</a></li>
                    </ul>
                </nav>
                {/* === Nav Bar list === */}
            </div>

            {/* === Logo & Nav bar === */}

            {/* Language & Contact Btns */}
            <div className='flex justify-between gap-10'>
                <button className=''>
                    <LanguageIcon className='ml-1' />
                    العربية
                </button>
                <button className='primary-btn'>
                    تواصل معانا
                </button>
            </div>
            {/* === Language & Contact Btns === */}
        </div>
    )
}

export default Navbar