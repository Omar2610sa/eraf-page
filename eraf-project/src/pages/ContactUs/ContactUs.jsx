

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ContactForm from "../../components/ContactForm/ContactForm";


import facebook from "../../assets/images/icons/Facebook Container.png"
import insta from "../../assets/images/icons/Facebook Container (1).png"
import snap from "../../assets/images/icons/Facebook Container (2).png"
import tiktok from "../../assets/images/icons/Facebook Container (3).png"

import tel from "../../assets/images/icons/call clay.png"
// import sms from "../../assets/images/icons/call clay.png"
// import tel from "../../assets/images/icons/call clay.png"

const ContactUs = () => {


    return (
        <div>
            
            <Navbar />
            <section className='container'>
                {/* Title Start */}
                <div className='flex flex-col justify-center items-center text-center gap-4'>
                    <p className="text-title">تواصل معنا</p>
                    <h2 className="text-primry text-[32px] md:text-[48px]">احصل على دعمنا مباشرة</h2>
                    <p className='text-[20px]'>فريقنا جاهز للرد على استفساراتك وتقديم خدمات رعاية صحية منزلية موثوقة وبأعلى جودة.</p>
                </div>
                {/* Title End */}

                <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-6 my-20">
                    {/* COl 1 */}
                    <div className="flex flex-col justify-between items-start gap-12 md:gap-6" >
                        <h3 className="text-[26px]">معلومات الاتصال</h3>
                        <div className="flex flex-col justify-center items-start gap-6">
                            <p className="flex justify-between items-center flex-row-reverse">info@araf.com<img className="w-6 h-6 ml-6" src={tel} alt="" /></p>
                            <p className="flex justify-between items-center flex-row-reverse ml-6">+966 0500012454<img className="w-6 h-6 ml-6" src={tel} alt="" /></p>
                            <p className="flex justify-between items-center flex-row-reverse ml-6">الرياض ، المملكة العربية السعودية ، حي الملك فهد<img className="w-6 h-6 ml-6" src={tel} alt="" /></p>
                        </div>
                    </div>
                    {/* Col 2 */}
                    <div className="flex flex-col justify-between items-start gap-12 md:gap-6">
                        <h3 className="text-[26px]">تابعنا  علي وسائل التواصل </h3>
                        <div className="flex justify-between items-center gap-4">
                            <img className="w-16 h-16 md:w-12 md:h-12" src={facebook} alt="" />
                            <img className="w-16 h-16 md:w-12 md:h-12" src={insta} alt="" />
                            <img className="w-16 h-16 md:w-12 md:h-12" src={snap} alt="" />
                            <img className="w-16 h-16 md:w-12 md:h-12" src={tiktok} alt="" />
                        </div>
                    </div>
                </div>

            </section>
            <ContactForm />
            <Footer />
        </div>
    );
};

export default ContactUs;