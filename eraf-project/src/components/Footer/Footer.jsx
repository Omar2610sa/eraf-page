import logo from "../../assets/images/logo-white.png"
import tel from "../../assets/images/icons/call.png"
import email from "../../assets/images/icons/sms.png"
import location from "../../assets/images/icons/location.png"
import facebook from "../../assets/images/icons/ic_baseline-facebook.png"
import instagram from "../../assets/images/icons/ri_instagram-fill.png"
import snapchat from "../../assets/images/icons/jam_snapchat.png"
import tiktok from "../../assets/images/icons/lineicons_tiktok.png"


const Footer = () => {
    return (
        <footer className="bg-footer text-white">
            <div className=' flex flex-col gap-12 p-16'>

                {/* Top Footer Start */}
                <div className="flex justify-between items-start gap-12">

                    {/* 1 - Logo & Description */}
                    <div className="flex flex-col justify-center items-start gap-8 max-w-[316px]">
                        <img src={logo} alt="logo" />
                        <p className="text-sm leading-relaxed ">نقدّم خدمات رعاية صحية منزلية موثوقة باحترافية وجودة عالية، لنمنح مرضانا رعاية متكاملة داخل منازلهم بكل راحة وأمان.</p>
                    </div>

                    {/* 2 - Site Map */}
                    <div className="flex flex-col gap-8">
                        <h2 className="text-xl ">خريطة الموقع</h2>
                        <div className="flex justify-start items-start gap-10">
                            <div className="flex flex-col gap-6">
                                <a className=" cursor-pointer">الرئيسية</a>
                                <a className=" cursor-pointer ">من نحن</a>
                                <a className="cursor-pointer  ">خدماتنا</a>
                                <a className="cursor-pointer  ">الإدارات</a>
                            </div>
                            <div className="flex flex-col gap-6">
                                <a className="cursor-pointer ">المدونة</a>
                                <a className=" cursor-pointer">أنضم الينا</a>
                                <a className="cursor-pointer ">تواصل معنا</a>
                            </div>
                        </div>
                    </div>

                    {/* 3 - Contact Info */}
                    <div className="flex flex-col gap-8 ">
                        <h2 className="text-xl ">معلومات التواصل</h2>
                        <div className="flex flex-col gap-6">
                            <a className="flex items-center"><img src={tel} className="ml-2 w-4" alt="tel" />+966 0500012454</a>
                            <a className="flex items-center"><img src={email} className="ml-2 w-4" alt="tel" />info@araf.com</a>
                            <a className="flex items-center"><img src={location} className="ml-2 w-4" alt="tel" />الرياض، المملكة العربية السعودية</a>
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
                <div className="flex justify-between items-center ">
                    <p>جميع الحقوق محفوظة © شركة أراف للخدمات الصحية المنزلية 2026</p>
                    <div className="flex gap-8">
                        <a className="cursor-pointer">سياسة الخصوصية</a>
                        <a className="cursor-pointer">شروط الاستخدام</a>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer