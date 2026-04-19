// Materinal UI
import NorthWestIcon from '@mui/icons-material/NorthWest';


import { useLanguage } from "../../contexts/LanguageContext.jsx";
import { texts } from "../../utils/localization.js";

// Route Link
import { Link } from "react-router-dom";

const CallUs = ({ callUs }) => {
        const { lang } = useLanguage();
    
    return (
        <section className='bg-gradient-to-r from-[#606769] to-[#299FB6]'>
            {/* Content Start */}
            <div className='container max-w-4xl'>
                <div className='flex flex-col justify-center items-center gap-10 text-center '>

                    <h2 className='text-[32px] md:text-[56px] text-white'>{callUs?.title || texts[lang].whyJoinTOUs }</h2>
                    <p className=' text-white text-[17px] md:text-2xl'>{callUs?.description || texts[lang].whyJoinTOUsDescription }</p>
                    <div>
                        {
                            callUs ?
                                <Link to="/تواصل-معانا">

                                    <button className="callUs-btn  cursor-pointer font-semibold ">{texts[lang].contactUs}<NorthWestIcon /></button>
                                </Link>

                                :
                                <Link to="/إنضم-إلينا">

                                    <button className="callUs-btn  cursor-pointer font-semibold ">{texts[lang].join}<NorthWestIcon /></button>
                                </Link>

                        }
                    </div>
                </div>
            </div>
            {/* Content End */}
        </section>
    )
}

export default CallUs