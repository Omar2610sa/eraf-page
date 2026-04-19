import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ContactForm from "../../components/ContactForm/ContactForm";
import Loading from "../../components/Loading/Loading";

import { getLocalizedText, texts } from "../../utils/localization";

import { useLanguage } from "../../contexts/LanguageContext";

import facebook from "../../assets/images/icons/Facebook Container.png";
import insta from "../../assets/images/icons/Facebook Container (1).png";
import snap from "../../assets/images/icons/Facebook Container (2).png";
import tiktok from "../../assets/images/icons/Facebook Container (3).png";
import tel from "../../assets/images/icons/call clay.png";
import mail from "../../assets/images/icons/sms clay.png";
import loc from "../../assets/images/icons/location clay.png";

import useFetch from "../../Hooks/useFetch/useFetch";

const ContactUs = () => {
    const { lang } = useLanguage();
    const { data: contact, loading } = useFetch("/api/client/contact-us", [lang]);

    if (loading) return <Loading />;

    const data = contact?.data;

    const label = getLocalizedText(data, 'label', lang);
    const title = getLocalizedText(data, 'title', lang);
    const description = getLocalizedText(data, 'description', lang);

    const textDir = lang === 'ar' ? 'flex-row-reverse' : 'flex-row';

    return (
        <main>
            <Navbar />

            <section className='container'>
                <div className='flex flex-col justify-center items-center text-center gap-4'>
                    <p className="text-title">{label}</p>
                    <h2 className="text-primry text-[32px] md:text-[48px]">{title}</h2>
                    <p className='text-[20px]'>{description}</p>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-6 my-20">

                    <div className="flex flex-col  gap-12 md:gap-6">
                        <h3 className="text-[26px]">{texts[lang].contactInfo}</h3>

                        <div className="flex flex-col items-start gap-6">
                            <p className={`flex ${textDir} items-center`}>
                                info@araf.com
                                <img className="w-6 h-6 ml-6" src={mail} />
                            </p>

                            <p className={`flex ${textDir} items-center`}>
                                +966 0500012454
                                <img className="w-6 h-6 ml-6" src={tel} />
                            </p>

                            <p className={`flex ${textDir} items-center`}>
                                {texts[lang].riyadhAddress}
                                <img className="w-6 h-6 ml-6" src={loc} />
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-12 md:gap-6">
                        <h3 className="text-[26px]">{texts[lang].followUs}</h3>

                        <div className="flex gap-4">
                            <img src={facebook} className="w-12 h-12" />
                            <img src={insta} className="w-12 h-12" />
                            <img src={snap} className="w-12 h-12" />
                            <img src={tiktok} className="w-12 h-12" />
                        </div>
                    </div>

                </div>
            </section>

            <ContactForm />
            <Footer />
        </main>
    );
};

export default ContactUs;

