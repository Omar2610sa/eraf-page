import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import { useLanguage } from "../../contexts/LanguageContext.jsx"
import { texts } from "../../utils/localization.js"

const PrivacyPolicy = () => {
    const { lang } = useLanguage()
    const t = texts[lang]

    return (
        <div>
            <Navbar />
            <section className="container">
                <div className=" mx-auto px-6 md:px-24" dir={lang === 'ar' ? 'rtl' : 'ltr'}>

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl font-bold  mb-8 text-gray-800">
                        {t.privacyPolicyTitle}
                    </h1>

                    {/* Intro */}
                    <p className=" leading-8 mb-10 text-gray-600">
                        {t.privacyPolicyIntro}
                    </p>

                    {/* 1 */}
                    <div className="mb-8">
                        <h2 className="font-semibold text-lg text-gray-800 mb-3">
                            {t.privacyPolicySection1Title}
                        </h2>
                        <p className="leading-8 text-gray-600 mb-3">
                            {t.privacyPolicySection1Content}
                        </p>

                        <ul className="list-disc pr-6 space-y-2 text-gray-600">
                            {t.privacyPolicySection1List?.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* 2 */}
                    <div className="mb-8">
                        <h2 className="font-semibold text-lg text-gray-800 mb-3">
                            {t.privacyPolicySection2Title}
                        </h2>

                        <ul className="list-disc pr-6 space-y-2 text-gray-600">
                            {t.privacyPolicySection2List?.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* 3 */}
                    <div className="mb-8">
                        <h2 className="font-semibold text-lg text-gray-800 mb-3">
                            {t.privacyPolicySection3Title}
                        </h2>
                        <p className="leading-8 text-gray-600">
                            {t.privacyPolicySection3Content}
                        </p>
                    </div>

                    {/* 4 */}
                    <div className="mb-8">
                        <h2 className="font-semibold text-lg text-gray-800 mb-3">
                            {t.privacyPolicySection4Title}
                        </h2>
                        <p className="leading-8 text-gray-600 mb-3">
                            {t.privacyPolicySection4Content}
                        </p>

                        <ul className="list-disc pr-6 space-y-2 text-gray-600">
                            {t.privacyPolicySection4List?.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* 5 */}
                    <div className="mb-8">
                        <h2 className="font-semibold text-lg text-gray-800 mb-3">
                            {t.privacyPolicySection5Title}
                        </h2>
                        <p className="leading-8 text-gray-600">
                            {t.privacyPolicySection5Content}
                        </p>
                    </div>

                    {/* 6 */}
                    <div className="mb-8">
                        <h2 className="font-semibold text-lg text-gray-800 mb-3">
                            {t.privacyPolicySection6Title}
                        </h2>
                        <p className="leading-8 text-gray-600">
                            {t.privacyPolicySection6Content}
                        </p>
                    </div>

                    {/* 7 */}
                    <div>
                        <h2 className="font-semibold text-lg text-gray-800 mb-3">
                            {t.privacyPolicySection7Title}
                        </h2>
                        <p className="leading-8 text-gray-600">
                            {t.privacyPolicySection7Content}
                        </p>
                    </div>

                </div>
            </section>
            <Footer />

        </div>
    )
}

export default PrivacyPolicy
