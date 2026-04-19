
// Materinal UI
import NorthWestIcon from '@mui/icons-material/NorthWest';
import { Link } from "react-router-dom";
import { useLanguage } from "../../../contexts/LanguageContext.jsx";
import { getLocalizedText } from "../../../utils/localization.js";

const Card = ({ image, title, id }) => {
    const { lang } = useLanguage();

    const localizedTitle = getLocalizedText({ title }, 'title', lang);

    return (
        <div className="flex flex-col gap-12">
            {/* Image Start */}
            <div className="w-full h-[250px] overflow-hidden rounded-xl">
                <img src={image} className="w-full h-full object-cover" width="400" height="250" loading="lazy" alt="" />
            </div>
            {/* Image End */}

            {/* Content Start */}
            <div className="flex justify-between items-center">
                <h3 className="text-2xl font-[600]">{localizedTitle}</h3>
                <Link to={`/الخدمات/${id}`}>
                    <button className="w-12 h-12 md:w-8 md:h-8 rounded-full outline p-5 outline-outline  flex items-center justify-center cursor-pointer hover:outline-none hover:bg-third duration-300 ">
                        <NorthWestIcon  />
                    </button>
                </Link>
            </div>
            {/* Content End */}
        </div>
    )
}

export default Card

