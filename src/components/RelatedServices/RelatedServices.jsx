import NorthWestIcon from '@mui/icons-material/NorthWest';
import { Link } from "react-router-dom";
import Card from "../../components/Services/Card/Card";

import { useLanguage } from "../../contexts/LanguageContext.jsx";
import { texts } from "../../utils/localization.js";


const RelatedServices = ({ related }) => {

    const { lang } = useLanguage();


    return (
        <section className="container">
            {/* Title */}
            <div className="flex justify-between items-start md:items-end flex-col md:flex-row gap-6">
                <div className="flex flex-col gap-2">
                    <h2 className="text-primry text-[32px] md:text-[48px]">
                        {texts[lang].relatedTopics}
                    </h2>
                </div>

                <div>
                    <Link to="/الخدمات">
                        <button className="title-btn">
                            {texts[lang].discoverMore}<NorthWestIcon />
                        </button>
                    </Link>
                </div>
            </div>

            {/* Content */}
            <div className="grid md:grid-cols-2 gap-10 mt-10">
                {related?.map((service) => (
                    <Card
                        key={service.id}
                        image={service.media}
                        title={service.title}
                        id={service.id}
                    />
                ))}
            </div>
        </section>
    )
}

export default RelatedServices;

