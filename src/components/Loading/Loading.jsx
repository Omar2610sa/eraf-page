import { OrbitProgress } from "react-loading-indicators";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

// Language
import { useLanguage } from "../../contexts/LanguageContext.jsx";
import { texts } from "../../utils/localization.js";

const Loading = () => {
    const { lang } = useLanguage();
  return (
    <>
    <Navbar />
    <div className="w-full h-screen flex justify-center items-center">
        <OrbitProgress dense color="rgba(1, 71, 85, 1)" size="medium" text={texts[lang].loading} textColor="" />
    </div>
    </>
  )
}

export default Loading