import leafIcon from "../../assets/images/icons/Badge Background.png"
import { useLanguage } from "../../contexts/LanguageContext.jsx";
import { getLocalizedText } from "../../utils/localization.js";

const Card = ({ title, id, icon, description }) => {
    const { lang } = useLanguage();
    const localizedTitle = getLocalizedText({ title }, 'title', lang);
    const localizedDescription = getLocalizedText({ description }, 'description', lang);

    return (
        <div className="shadow-primary py-3   rounded-md relative">
            <div className="absolute right-0 top-0">
                <img src={leafIcon} alt="badge" className="relative object-contain" loading="lazy" />
                <p className="absolute top-2 right-0.5 flex items-center justify-center z-10 text-white  font-bold">
                    {id}
                </p>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-4 px-2 mt-6">
                <div>
                    <img className="w-14 h-14 object-contain" src={icon} alt="" width={56} height={56} loading="lazy" />
                </div>
                <h3 className="text-[20px]">{localizedTitle}</h3>
                <p className="text-[18px]">{localizedDescription}</p>
            </div>
        </div>
    )
}

export default Card

