// Imports components
import Navbar from "../../components/Navbar/Navbar"
import Care from "../../components/Care/Care"
import Footer from "../../components/Footer/Footer"
import JoinUsForm from "../../components/JoinUsForm/JoinUsForm"
import { useLanguage } from "../../contexts/LanguageContext";
import { texts } from "../../utils/localization";

// Material Ui 
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

const JoinUs = () => {
    const { lang } = useLanguage();
    
    return (
        <div>
            <Navbar />
            <section className="container">
                {/* Title Start */}
                <div className={`flex flex-col justify-center items-center text-center gap-4 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                    <p className="text-title">{texts[lang].together}</p>
                    <h2 className="text-primry text-[32px] md:text-[48px]">{texts[lang].whyJoinUs}</h2>
                    <p className='text-[20px]'>
                        {texts[lang].joinUsDescription}
                    </p>
                </div>
                {/* Title End */}
                <Care />

                {/* Form */}
            </section>
                <JoinUsForm />
            <Footer />
        </div>
    )
}

export default JoinUs

