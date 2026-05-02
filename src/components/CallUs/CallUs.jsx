// Materinal UI
import NorthWestIcon from '@mui/icons-material/NorthWest';


import { useLanguage } from "../../contexts/LanguageContext.jsx";
import { texts } from "../../utils/localization.js";

// Route Link
import { Link } from "react-router-dom";

const CallUs = ({ callUs }) => {
    const { lang } = useLanguage();

    return (
        <section className='relative bg-gradient-to-r from-[#606769] to-[#299FB6]'>

            {/* <!-- Circular "Left" --> */}
            <div class="absolute left-0  flex flex-col items-end gap-2  pointer-events-none select-none">
                <div class="w-14 h-14 md:w-22 md:h-22 rounded-full bg-white/20 animate-opacity-light" />
                <div class="w-12 h-12 md:w-20 md:h-20 rounded-full bg-white/15 -mt-8 ml-10 md:-mt-10 md:ml-14 animate-opacity-light-2" />
                <div class="w-10 h-10 md:w-18 md:h-18 rounded-full bg-white/10 -mt-6 ml-18 md:-mt-12 md:ml-24 animate-opacity-light" />
                <div class="w-8 h-8 md:w-16 md:h-16 rounded-full bg-white/10 -mt-6 ml-24 md:-mt-10 md:ml-32 animate-opacity-light-2" />
            </div>

            {/* <!-- Circular "Right" --> */}
            <div class="absolute right-0   flex flex-col items-start gap-2  pointer-events-none select-none">
                <div class="w-14 h-14 md:w-22 md:h-22 rounded-full bg-white/20 animate-opacity-light" />
                <div class="w-12 h-12 md:w-20 md:h-20 rounded-full bg-white/15 -mt-8 mr-10 md:-mt-10 md:mr-14 animate-opacity-light-2" />
                <div class="w-10 h-10 md:w-18 md:h-18 rounded-full bg-white/10 -mt-6 mr-18 md:-mt-12 md:mr-24 animate-opacity-light" />
                <div class="w-8 h-8 md:w-16 md:h-16 rounded-full bg-white/10 -mt-6 mr-24  md:-mt-10 md:mr-32 animate-opacity-light-2" />
            </div>
            {/* Content Start */}
            <div data-aos="fade-up" className='pt-28 md:pt-10 container max-w-4xl'>
                <div className='flex flex-col justify-center items-center gap-10 text-center '>

                    <h2 className='text-[32px] md:text-[56px] text-white'>{callUs?.title || texts[lang].whyJoinTOUs}</h2>
                    <p className=' text-white text-[17px] md:text-2xl'>{callUs?.description || texts[lang].whyJoinTOUsDescription}</p>
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