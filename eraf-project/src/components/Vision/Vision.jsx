// Image Imports
import frameImage from '../../assets/images/vision/image.png'
import eyeFrame from "../../assets/images/vision/Eye Scan.png"
import targetIcon from "../../assets/images/vision/Frame.png"

// Hooks imports
import useFetch from "../../Hooks/useFetch/useFetch";
import { useLanguage } from "../../contexts/LanguageContext.jsx";
import { getLocalizedText } from "../../utils/localization.js";

const Vision = ({vision}) => {
    const { lang } = useLanguage();
    const { data: visionData } = useFetch("/api/client/features/12");

    const label = getLocalizedText(vision, 'label', lang);
    const title = getLocalizedText(vision, 'title', lang);
    const description = getLocalizedText(vision, 'description', lang);
    const visionDataTitle = getLocalizedText(visionData, 'title', lang);
    const visionDataDescription = getLocalizedText(visionData, 'description', lang);
    const relatedTitle = getLocalizedText(visionData?.related?.[0], 'title', lang);
    const relatedDescription = getLocalizedText(visionData?.related?.[0], 'description', lang);

    return (
        <section className='container'>
            {/* Title Start */}
            <div className='flex flex-col justify-center items-center text-center gap-4'>
                <p className="text-title">{label}</p>
                <h2 className="text-primry text-[32px] md:text-[48px]">{title}</h2>
                <p className='text-[20px]'>{description}</p>
            </div>
            {/* Title End */}
            {/* Image Content Start */}
            <div className='relative min-h-[650px] py-8'>
                <img className='absolute inset-0 z-0 w-full h-full object-contain' src={frameImage} alt="" loading="eager" />

                <div className='relative z-10 flex flex-col gap-24 md:gap-28 h-full'>
                    {/* Card 1 Start */}
                    <div className='flex justify-start animate-slide-up'>
                        <div className='mt-42 md:mt-24 flex w-[220px] md:w-[400px] p-2 gap-2 md:p-6 md:gap-6 items-start bg-white rounded-xl shadow-lg'>
                            {/* Icon */}
                            <div>
                                <img className="w-16 h-16 object-contain" src={eyeFrame} alt="eyeFrame" loading="eager" />
                            </div>
                            {/* Content */}
                            <div className='flex flex-col justify-center items-start gap-2'>
                                <h3 className='font-bold text-gray-900 md:text-2xl'>{visionDataTitle}</h3>
                                <p className="text-[10px] md:text-[16px]">{visionDataDescription}</p>
                            </div>
                        </div>
                    </div>
                    {/* Card 1 End */}

                    {/* Card 2 Start */}
                    <div className='flex justify-end animate-slide-down'>
                        <div className='flex w-[220px] md:w-[400px] p-2 gap-2 md:p-6 md:gap-6 items-start bg-white rounded-xl shadow-lg'>
                            {/* Icon */}
                            <div>
                                <img className="w-16 h-16 object-contain" src={targetIcon} alt="targetIcon" loading="eager" />
                            </div>
                            {/* Content */}
                            <div className='flex flex-col justify-center items-start gap-2'>
                                <h3 className='font-bold text-gray-900 md:text-2xl'>{relatedTitle}</h3>
                                <p className="text-[10px] md:text-[16px]">{relatedDescription}</p>
                            </div>
                        </div>
                    </div>
                    {/* Card 2 End */}
                </div>
            </div>
            {/* Image Content End */}
        </section>
    )
}

export default Vision

