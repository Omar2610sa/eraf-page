import { useLanguage } from "../../contexts/LanguageContext.jsx";
import { getLocalizedText, texts } from "../../utils/localization.js";
import Card from "./Card.jsx"

import Icon1 from "../../assets/images/icons/Icon Container.png"
import Icon2 from "../../assets/images/icons/Icon Container (3).png"
import Icon3 from "../../assets/images/icons/Icon Container (1).png"
import Icon4 from "../../assets/images/icons/Icon Container (2).png"

const Care = ({care}) => {
    const { lang } = useLanguage();

    const label = getLocalizedText(care, 'label', lang);
    const title = getLocalizedText(care, 'title', lang);
    const description = getLocalizedText(care, 'description', lang);

    const cardContent = [{
        number: "01",
        icon: Icon1,
        title: texts[lang].reliableCare,
        description: texts[lang].safeServices,
    },
    {
        number: "02",
        icon: Icon2,
        title: texts[lang].qualitySafety,
        description: texts[lang].highStandards,
    },
    {
        number: "03",
        icon: Icon3,
        title: texts[lang].constantCommunication,
        description: texts[lang].quickResponse,
    },
    {
        number: "04",
        icon: Icon4,
        title: texts[lang].continuousDevelopment,
        description: texts[lang].latestTech,
    },]
    return (
        <section className="container flex flex-col gap-8">
            {/* Title Start */}
            <div className={`flex flex-col justify-center items-center text-center gap-4 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                <p className="text-title">{label}</p>
                <h2 className="text-primry text-[32px] md:text-[48px]">{title}</h2>
                <p className=''> {description}</p>
            </div>
            {/* Title End */}
            {/* Cards Content Start */}
            <div data-aos="zoom-in-up" className="grid md:grid-cols-4 justify-center gap-10  md:gap-8">
                {/* Card */}
                {
                    cardContent.map((card, index) => {
                        return <Card key={index} id={card.number} icon={card.icon} title={card.title} description={card.description} />
                    })
                }
            </div>
            {/* Cards Content End */}
        </section>
    )
}

export default Care
