import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import { useLanguage } from "../../contexts/LanguageContext.jsx"
import { texts } from "../../utils/localization.js"

const Terms = () => {
    const { lang } = useLanguage()
    const t = texts[lang]

    return (
        <section>
            <Navbar />

            <section className="bg-white container">
                <div className="x mx-auto px-6 md:px-24" dir={lang === 'ar' ? 'rtl' : 'ltr'}>

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl font-bold  mb-8 text-gray-800">
                        {t.termsTitle}
                    </h1>

                    {/* Intro */}
                    <p className=" leading-8 mb-10 text-gray-600">
                        {t.termsIntro}
                    </p>

                    {/* Section 1 */}
                    <div className="mb-8">
                        <h2 className="font-semibold text-lg text-gray-800 mb-3">
                            {t.termsSection1Title}
                        </h2>
                        <p className="leading-8 text-gray-600">
                            {t.termsSection1Content}
                        </p>
                    </div>

                    {/* Section 2 */}
                    <div className="mb-8">
                        <h2 className="font-semibold text-lg text-gray-800 mb-3">
                            {t.termsSection2Title}
                        </h2>
                        <p className="leading-8 text-gray-600 mb-3">
                            {t.termsSection2Content}
                        </p>

                        <ul className="list-disc pr-6 space-y-2 text-gray-600">
                            {t.termsSection2List?.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Section 3 */}
                    <div className="mb-8">
                        <h2 className="font-semibold text-lg text-gray-800 mb-3">
                            {t.termsSection3Title}
                        </h2>
                        <p className="leading-8 text-gray-600">
                            {t.termsSection3Content}
                        </p>
                    </div>

                    {/* Section 4 */}
                    <div className="mb-8">
                        <h2 className="font-semibold text-lg text-gray-800 mb-3">
                            {t.termsSection4Title}
                        </h2>
                        <p className="leading-8 text-gray-600">
                            {t.termsSection4Content}
                        </p>
                    </div>

                    {/* Section 5 */}
                    <div className="mb-8">
                        <h2 className="font-semibold text-lg text-gray-800 mb-3">
                            {t.termsSection5Title}
                        </h2>
                        <p className="leading-8 text-gray-600">
                            {t.termsSection5Content}
                        </p>
                    </div>

                    {/* Section 6 */}
                    <div className="mb-8">
                        <h2 className="font-semibold text-lg text-gray-800 mb-3">
                            {t.termsSection6Title}
                        </h2>
                        <p className="leading-8 text-gray-600 mb-3">
                            {t.termsSection6Content}
                        </p>

                        <ul className="list-disc pr-6 space-y-2 text-gray-600">
                            {t.termsSection6List?.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Section 7 */}
                    <div>
                        <h2 className="font-semibold text-lg text-gray-800 mb-3">
                            {t.termsSection7Title}
                        </h2>
                        <p className="leading-8 text-gray-600">
                            {t.termsSection7Content}
                        </p>
                    </div>

                </div>
           
            </section>
            <Footer />

        </section>
    )
}


export default Terms
