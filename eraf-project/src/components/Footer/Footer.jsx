import logo from "../../assets/images/logo-white.png"
import tel from "../../assets/images/icons/call.png"
import email from "../../assets/images/icons/sms.png"
import location from "../../assets/images/icons/location.png"
import facebook from "../../assets/images/icons/ic_baseline-facebook.png"
import instagram from "../../assets/images/icons/ri_instagram-fill.png"
import snapchat from "../../assets/images/icons/jam_snapchat.png"
import tiktok from "../../assets/images/icons/lineicons_tiktok.png"



import { memo } from 'react';
// Route Link
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="bg-footer text-white">
            <div className=' flex flex-col gap-12 p-10 md:p-16'>

                {/* Top Footer Start */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-12">

                    {/* 1 - Logo & Description */}
                    <div className="flex flex-col justify-center items-start gap-8 max-w-[316px]">
                        <Link to="/">
                        <img src={logo} alt="logo" />
                        </Link>
                        <p className="text-sm leading-relaxed ">نقدّم خدمات رعاية صحية منزلية موثوقة باحترافية وجودة عالية، لنمنح مرضانا رعاية متكاملة داخل منازلهم بكل راحة وأمان.</p>
                    </div>

                    {/* 2 - Site Map */}
                    <div className="flex flex-col gap-8">
                        <h2 className="text-xl ">خريطة الموقع</h2>
                        <div className="flex justify-start items-start gap-10">
                            <div className="flex flex-col gap-6">
                                <Link to="/" className=" cursor-pointer">الرئيسية</Link>
                                <Link to="/من-نحن" className=" cursor-pointer ">من نحن</Link>
                                <Link to="/الخدمات" className="cursor-pointer  ">خدماتنا</Link>
                                <Link to="/الإدارات" className="cursor-pointer  ">الإدارات</Link>
                            </div>
                            <div className="flex flex-col gap-6">
                                <Link to="/المدونة" className="cursor-pointer ">المدونة</Link>
                                <Link to="/إنضم-إلينا" className=" cursor-pointer">أنضم الينا</Link>
                                <Link to="/تواصل-معانا" className="cursor-pointer ">تواصل معنا</Link>
                            </div>
                        </div>
                    </div>

                    {/* 3 - Contact Info */}
                    <div className="flex flex-col gap-8 ">
                        <h2 className="text-xl ">معلومات التواصل</h2>
                        <div className="flex flex-col gap-6">
<img src={tel} className="ml-2 w-4" alt="phone" loading="lazy" />+966 0500012454
<img src={email} className="ml-2 w-4" alt="email" loading="lazy" />info@araf.com
<img src={location} className="ml-2 w-4" alt="location" loading="lazy" />الرياض، المملكة العربية السعودية
                        </div>
                    </div>

                    {/* 4 - Social Media */}
                    <div className="flex flex-col gap-8">
                        <h2 className="text-xl ">تابعنا علي</h2>
                        <div className="flex justify-between items-center gap-5">
                            {/* Icons */}
                            <img className="w-6 h-6" src={facebook} alt="facebook" />
                            <img className="w-6 h-6" src={instagram} alt="instagram" />
                            <img className="w-6 h-6" src={snapchat} alt="snapchat" />
                            <img className="w-6 h-6" src={tiktok} alt="tiktok" />
                        </div>
                    </div>

                </div>
                {/* Top Footer End */}

                <hr />

                {/* Bottom Footer */}
                <div className="flex flex-col-reverse md:flex-row justify-between gap-5 md:items-start ">
                    <p>جميع الحقوق محفوظة © شركة أراف للخدمات الصحية المنزلية 2026</p>
                    <div className="flex gap-8">
                        <Link to="/سياسة-الخصوصية" className="cursor-pointer">سياسة الخصوصية</Link>
                        <Link to="/الشروط-والأحكام" className="cursor-pointer">شروط الاستخدام</Link>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default memo(Footer)
