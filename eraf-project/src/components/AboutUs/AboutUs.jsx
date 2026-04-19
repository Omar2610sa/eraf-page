import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext.jsx";
import { getLocalizedText, texts } from "../../utils/localization.js";

import checkIcon from "../../assets/images/icons/Icon Container check (4).png";

// Hooks imports
import useFetch from "../../Hooks/useFetch/useFetch";

// Material UI
import NorthWestIcon from "@mui/icons-material/NorthWest";

const AboutUs = ({ about }) => {
    const { lang } = useLanguage();
    const { data: AboutData } = useFetch("/api/client/features/11");

    const label = getLocalizedText(about, 'label', lang);
    const title = getLocalizedText(about, 'title', lang);
    const description = getLocalizedText(about, 'description', lang);
    const aboutDataTitle = getLocalizedText(AboutData, 'title', lang);
    const aboutDataDescription = getLocalizedText(AboutData, 'description', lang);

    return (
        <section className="bg-bgWhite">
            <div className="container flex flex-col md:flex-row justify-between items-center gap-25">

                {/* Content Start */}
                <div className="flex flex-col justify-center items-start gap-[40px] mb-10">
                    <div className="flex flex-col justify-center items-start gap-[16px]">
                        <p className="text-title">{label}</p>
                        <h2 className="text-primry text-[48px]">{title}</h2>
                        <p>{description}</p>
                    </div>

                    <Link to="/من-نحن">
                        <button className="primary-btn flex items-center gap-2">
                            {texts[lang].knowMore} <NorthWestIcon />
                        </button>
                    </Link>
                </div>
                {/* Content End */}

                {/* Image + Label Start */}
                <div className="relative">

                    <img
                        src={about?.media?.media_url}
                        width={"1300px"}
                        height={"600px"}
                        alt="About Us"
                    />

                    {/* Label */}
                    <div className="absolute max-w-fit -top-16 left-4 md:top-6 md:-right-24 z-20 flex items-center gap-2.5 border border-border rounded-2xl px-4 py-2 bg-white  animate-slide-up">

                        {/* Icon */}
                        <div className="w-6 h-6 flex items-center justify-center  rounded-full">
                            <img src={checkIcon} alt="icon" />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col items-center">
                            <span className="text-primr text-[14px] font-semibold">
                                {aboutDataTitle}
                            </span>
                            <p className="text-[12px] text-gray">
                                {aboutDataDescription}
                            </p>
                        </div>
                    </div>

                </div>
                {/* Image + Label End */}

            </div>
        </section>
    );
};

export default AboutUs;

