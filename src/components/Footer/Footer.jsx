import logo from "../../assets/images/logo-white.png"
import tel from "../../assets/images/icons/call.png"
import email from "../../assets/images/icons/sms.png"
import location from "../../assets/images/icons/location.png"
import facebook from "../../assets/images/icons/ic_baseline-facebook.png"
import instagram from "../../assets/images/icons/ri_instagram-fill.png"
import snapchat from "../../assets/images/icons/jam_snapchat.png"
import tiktok from "../../assets/images/icons/lineicons_tiktok.png"

import logoos from "../../assets/images/logooos.png"


import { memo } from 'react';
//
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext.jsx";
import { texts } from "../../utils/localization.js";

const Footer = () => {
    const { lang } = useLanguage();

    return (
        <footer className="bg-footer text-white ">
            <div className='container relative overflow-hidden'>
                {/* background pattern */}
                <div
                    className="absolute inset-0 pointer-events-none opacity-10 bg-repeat-y md:bg-repeat-x bg-[length:390px] md:bg-[300px]"
                    style={{
                        backgroundImage: `url(${logoos})`,
                        backgroundPosition: "center",
                    }}
                />
                <div className=' flex flex-col gap-12 p-10 md:p-16'>

                    {/* Top Footer Start */}
                    <div className="flex flex-col md:flex-row justify-between items-start gap-10">

                        {/* 1 - Logo & Description */}
                        <div data-aos="fade-down" className="flex flex-col justify-center items-start gap-8 max-w-[316px]">
                            <Link to="/">
                                <img src={logo} alt="logo" />
                            </Link>
                            <p className="text-sm leading-relaxed ">{texts[lang].companyDescription || 'نقدّم خدمات رعاية صحية منزلية موثوقة باحترافية وجودة عالية، لنمنح مرضانا رعاية متكاملة داخل منازلهم بكل راحة وأمان.'}</p>
                        </div>

                        {/* 2 - Site Map */}
                        <div data-aos="fade-down" className="flex flex-col gap-8">
                            <h2 className="text-xl ">{texts[lang].siteMap || 'خريطة الموقع'}</h2>
                            <div className="flex justify-start items-start gap-10">
                                <div className="flex flex-col gap-6">
                                    <Link to="/" className=" cursor-pointer">{texts[lang].home}</Link>
                                    <Link to="/من-نحن" className=" cursor-pointer ">{texts[lang].about}</Link>
                                    <Link to="/الخدمات" className="cursor-pointer  ">{texts[lang].services}</Link>
                                    <Link to="/الإدارات" className="cursor-pointer  ">{texts[lang].departments}</Link>
                                </div>
                                <div className="flex flex-col gap-6">
                                    <Link to="/المدونة" className="cursor-pointer ">{texts[lang].blog}</Link>
                                    <Link to="/إنضم-إلينا" className=" cursor-pointer">{texts[lang].join}</Link>
                                    <Link to="/تواصل-معانا" className="cursor-pointer ">{texts[lang].contact}</Link>
                                </div>
                            </div>
                        </div>

                        {/* 3 - Contact Info */}
                        <div data-aos="fade-down" className="flex flex-col gap-8 ">
                            <h2 className="text-xl ">{texts[lang].contactInfo || 'معلومات التواصل'}</h2>
                            <div className="flex flex-col gap-6">
                                <div className="flex">
                                    <img src={tel} className="ml-2 w-6 h-6" alt="phone" loading="lazy" />
                                    +966 0500012454
                                </div>
                                <div className="flex">
                                    <img src={email} className="ml-2 w-6 h-6" alt="email" loading="lazy" />info@araf.com
                                </div>
                                <div className="flex">
                                    <img src={location} className="ml-2 w-6 h-6" alt="location" loading="lazy" />الرياض، المملكة العربية السعودية
                                </div>
                            </div>
                        </div>

                        {/* 4 - Social Media */}
                        <div data-aos="fade-down" className="flex flex-col gap-8">
                            <h2 className="text-xl ">{texts[lang].followUs || 'تابعنا علي'}</h2>
                            <div className="flex justify-between items-center gap-5">
                                {/* Icons */}
                                <img className="w-7 h-7" src={facebook} alt="facebook" />
                                <img className="w-7 h-7" src={instagram} alt="instagram" />
                                <img className="w-7 h-7" src={snapchat} alt="snapchat" />
                                <img className="w-7 h-7" src={tiktok} alt="tiktok" />
                            </div>
                        </div>

                    </div>
                    {/* Top Footer End */}

                    <hr />

                    {/* Bottom Footer */}
                    <div className="flex flex-col-reverse md:flex-row justify-between gap-5 md:items-start ">
                        <p data-aos="fade-right">{texts[lang].copyright || 'جميع الحقوق محفوظة © شركة أراف للخدمات الصحية المنزلية 2026'}</p>
                        <div data-aos="fade-left" className="flex gap-8">
                            <Link to="/سياسة-الخصوصية" className="cursor-pointer">{texts[lang].privacy || 'سياسة الخصوصية'}</Link>
                            <Link to="/الشروط-والأحكام" className="cursor-pointer">{texts[lang].terms || 'شروط الاستخدام'}</Link>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default memo(Footer)

