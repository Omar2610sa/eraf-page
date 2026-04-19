import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import Doctors from "../../assets/images/Doctors.png";
import saudi from "../../assets/images/Saudia.png";
import cloud from "../../assets/images/icons/cloud icon.png";

import { showSuccessAlert } from "../../components/Alerts/Alrets";
import { useLanguage } from "../../contexts/LanguageContext";
import { texts } from "../../utils/localization";

const JoinUsForm = () => {
    const navigate = useNavigate();
    const { lang } = useLanguage();

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: "",
        attachments: null,
    });

    const [errors, setErrors] = useState({});

    const country = {
        name: "Saudi Arabia",
        code: texts[lang].saudiCode,
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));
    };

    const handleFileChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            attachments: e.target.files,
        }));
    };
    
    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = texts[lang].fillName;

        if (!formData.phone.trim()) {
            newErrors.phone = texts[lang].fillPhone;
        } else if (!/^\d+$/.test(formData.phone.trim())) {
            newErrors.phone = texts[lang].numbersOnly;
        } else if (formData.phone.trim().length !== 9) {
            newErrors.phone = texts[lang].phoneNineDigits;
        }

        if (!formData.message.trim()) newErrors.message = texts[lang].fillJob;

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            showSuccessAlert(
                texts[lang].requestReceived,
                texts[lang].teamWillContact,
                () => navigate("/")
            );

            setFormData({
                name: "",
                phone: "",
                message: "",
                attachments: null,
            });
        }
    };
    
    const textDir = lang === 'ar' ? 'text-right' : 'text-left';
    
    return (
        <section className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* FORM */}
                <div className="bg-contactForm rounded-3xl shadow-lg p-8">

                    <h3 className={`text-2xl font-bold ${textDir} mb-8`}>
                        {texts[lang].applyNow}
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* PHONE */}
                        <div className={textDir}>
                            <label className="block mb-2">{texts[lang].phoneLabel}</label>

                            <div className="relative">
                                <div className="absolute left-3 top-1/2 -translate-y-1/2 border-r-1 py-1 pr-2 border-gray-300 flex flex-row-reverse items-center gap-2">
                                    <img src={saudi} className="w-5 h-5" alt="saudi" />
                                    <span>{country.code}</span>
                                </div>
                                <input
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className={`w-full pl-20 pr-4 py-3 border rounded-lg ${textDir}
                                                      ${errors.phone ? "border-red-500" : "border-gray-300"}`}
                                    placeholder={texts[lang].phonePlaceholder}
                                />
                            </div>

                            {errors.phone && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.phone}
                                </p>
                            )}
                        </div>
                        
                        {/* NAME */}
                        <div className={textDir}>
                            <label className="block mb-2">{texts[lang].nameLabel}</label>

                            <input
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-3 border rounded-lg ${textDir}
                                                  ${errors.name ? "border-red-500" : "border-gray-300"}`}
                                placeholder={texts[lang].namePlaceholder}
                            />

                            {errors.name && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.name}
                                </p>
                            )}
                        </div>
                        
                        {/* MESSAGE */}
                        <div className={textDir}>
                            <label className="block mb-2">{texts[lang].jobTitleLabel}</label>

                            <input
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-3 border rounded-lg resize-none ${textDir}
                                                ${errors.message ? "border-red-500" : "border-gray-300"}`}
                                placeholder={texts[lang].jobPlaceholder}
                            />

                            {errors.message && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.message}
                                </p>
                            )}
                        </div>
                        
                        {/* File */}
                        <label className={`block text-sm font-medium text-gray-700 mb-2 ${textDir}`}>
                            {texts[lang].uploadCvPdf}
                        </label>

                        <label className="flex items-center justify-center gap-2 px-4 py-8 md:py-20 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-teal-500 hover:bg-teal-50 transition">

                            <div className={`flex flex-col justify-center items-center gap-2 ${textDir}`}>
                                <img src={cloud} className="w-5 h-5" alt="" />
                                <span className="text-sm text-gray-600">
                                    {texts[lang].clickToUpload}
                                </span>
                                <p className="text-xs text-gray-500">
                                    {texts[lang].multipleFiles}
                                </p>
                            </div>

                            <input
                                type="file"
                                multiple
                                onChange={handleFileChange}
                                className="hidden"
                            />
                        </label>

                        {/* SUBMIT */}
                        <button
                            type="submit"
                            className="w-full bg-primry text-white py-3 rounded-full hover:bg-white cursor-pointer hover:text-primry duration-300"
                        >
                            {texts[lang].submit}
                        </button>

                    </form>
                </div>

                {/* MAP */}
                <div className="rounded-3xl overflow-hidden">
                    <img src={Doctors} className="w-full md:h-[800px] object-cover" alt="map" />
                </div>

            </div>
        </section>
    )
}

export default JoinUsForm

