import { memo } from 'react';
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext.jsx";
import { getLocalizedText, texts } from "../../utils/localization.js";
import Card from "./Card/Card";
import NorthWestIcon from "@mui/icons-material/NorthWest";
import Error404 from "../../components/Error404/Error404"
import ServicesCards from "./ServicesCards";


const Services = ({ services }) => {
    const { lang } = useLanguage();

    const label = getLocalizedText(services, 'label', lang);
    const title = getLocalizedText(services, 'title', lang);
    const description = getLocalizedText(services, 'description', lang);

    return (
        <section className="container bg-white">

            {/* Title */}
            <div className="flex justify-between items-start md:items-end flex-col md:flex-row gap-6">
                <div className="flex flex-col gap-2">
                    <p className="text-title">{label}</p>
                    <h2 className="text-primry text-[32px] md:text-[48px]">
                        {title}
                    </h2>
                    <p className="text-text text-[17px]">
                        {description}
                    </p>
                </div>

                <div>
                    <Link to="/الخدمات">
                        <button className="title-btn">
                            {texts[lang].exploreServices} <NorthWestIcon />
                        </button>
                    </Link>
                </div>
            </div>

            {/* Content */}
            <ServicesCards services={services} />
        </section>
    );
};

export default memo(Services);

