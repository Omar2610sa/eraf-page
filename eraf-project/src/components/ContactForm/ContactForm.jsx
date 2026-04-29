import { useState } from "react";
import { useNavigate } from "react-router-dom";

import map from "../../assets/images/Map.png";
import cloud from "../../assets/images/icons/cloud icon.png";

import { showSuccessAlert } from "../../components/Alerts/Alrets";
import { useLanguage } from "../../contexts/LanguageContext";
import { texts } from "../../utils/localization";

import api from "../../API/Axios/Axios";

// useFetch
import useFetch from "../../Hooks/useFetch/useFetch";

import Select from "react-select";

const ContactForm = () => {
    const navigate = useNavigate();
    const { lang } = useLanguage();

    const { data: countryData } = useFetch("/api/general/countries");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        country: null,
        attachment: null,
        attachmentId: null,
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

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

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (file && file.type !== "application/pdf") {
            setErrors((prev) => ({ ...prev, attachment: texts[lang].pdfOnly }));
            setFormData((prev) => ({ ...prev, attachment: null }));
            e.target.value = "";
            return;
        }

        if (file) {
            setFormData((prev) => ({
                ...prev,
                attachment: file,
            }));
            setErrors((prev) => ({ ...prev, attachment: "" }));

            // Upload immediately
            await uploadFileImmediately(file);
        }
    };

    const uploadFileImmediately = async (file) => {
        const uploadData = new FormData();
        uploadData.append("file", file);
        uploadData.append("model", "contact");

        try {
            const response = await api.post("/api/general/attachments", uploadData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            const id = response?.data?.id ?? response?.data?.data?.id;
            if (!id) throw new Error("Invalid attachment response");

            setFormData((prev) => ({
                ...prev,
                attachment: file,
                attachmentId: id,
            }));
            setErrors((prev) => ({ ...prev, attachment: "" }));
        } catch (error) {
            setErrors((prev) => ({
                ...prev,
                attachment: error.message || texts[lang].uploadFailed,
            }));
            setFormData((prev) => ({ ...prev, attachment: null }));
            e.target.value = "";
        }
    };

    const handleCountryChange = (selectedOption) => {
        setFormData((prev) => ({
            ...prev,
            country: selectedOption,
        }));
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = texts[lang].fillName;



        if (!formData.phone.trim()) {
            newErrors.phone = texts[lang].fillPhone;
        } else if (!/^\d+$/.test(formData.phone.trim())) {
            newErrors.phone = texts[lang].numbersOnly;
        }
        if (!formData.message.trim()) newErrors.message = texts[lang].fillMessage;

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const uploadFile = async () => {
        if (formData.attachmentId) return formData.attachmentId;

        if (!formData.attachment) return null;

        const uploadData = new FormData();
        uploadData.append("file", formData.attachment);
        uploadData.append("model", "contact");

        try {
            const response = await api.post("/api/general/attachments", uploadData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            const id = response?.data?.id ?? response?.data?.data?.id;
            if (!id) throw new Error("Invalid attachment response");

            return id;
        } catch {
            throw new Error(texts[lang].uploadFailed);
        }
    };

    const submitContact = async (attachmentId) => {
        const payload = {
            name: formData.name,
            phone: formData.phone,
            message: formData.message,
            phone_code: formData.country?.value || "",
        };

        // Only add attachment_id if file was uploaded
        if (attachmentId) {
            payload.attachment_id = attachmentId;
        }

        await api.post("/api/client/contact", payload);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        setIsSubmitting(true);

        try {
            // File is already uploaded, just get the ID
            const attachmentId = formData.attachmentId;

            await submitContact(attachmentId);

            showSuccessAlert(
                texts[lang].messageReceived,
                texts[lang].teamWillContact,
                () => navigate("/")
            );

            setFormData({
                name: "",
                phone: "",
                message: "",
                country: null,
                attachment: null,
                attachmentId: null,
            });
        } catch (error) {
            const message = error?.response?.data?.message || error.message || texts[lang].contactFailed;
        } finally {
            setIsSubmitting(false);
        }
    };

    const textDir = lang === 'ar' ? 'text-right' : 'text-left';

    const options = countryData
        ? countryData.map((country) => ({
            value: country.phone_code,
            label: (
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <img src={country.flag} width="20" alt={country.name} />
                    ({country.phone_code})
                </div>
            )
        }))
        : [];

    const customSelectStyles = {
        control: (base) => ({
            ...base,
            backgroundColor: "rgb(245, 245, 245)",
            cursor: "pointer",
            border: "none",
            outline: 'none'
        }),

        dropdownIndicator: (base) => ({
            ...base,
            color: "rgb(107, 114, 128)",
        }),
        clearIndicator: (base) => ({
            ...base,
        }),
        menuList: (base) => ({
            ...base,
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isSelected ? "rgb(20, 184, 166)" : state.isFocused ? "rgb(240, 253, 250)" : "white",
            color: state.isSelected ? "white" : "black",
            cursor: "pointer",
            fontSize: "14px",
        }),
    };

    return (
        <section className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* FORM */}
                <div className="bg-contactForm rounded-3xl shadow-lg p-8">

                    <h3 className={`text-2xl font-bold ${textDir} mb-8`}>
                        {texts[lang].sendMessage}
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-6">

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



                        {/* PHONE */}
                        <div className={textDir}>
                            <label className="block mb-2">{texts[lang].phoneLabel}</label>

                            <div className="relative bg-[rgb(245, 245, 245)]">
                                <div className="absolute left-0 top-0 h-full flex items-center border-r border-gray-300 rounded-l-lg">
                                    <Select
                                        options={options}
                                        value={formData.country}
                                        onChange={handleCountryChange}
                                        placeholder={texts[lang].selectCountry}
                                        isSearchable={false}
                                        isClearable={false}
                                        styles={customSelectStyles}
                                        components={{
                                            IndicatorSeparator: () => null,
                                        }}
                                        className="w-36"
                                    />
                                </div>
                                <input
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className={`w-full pl-32 pr-4 py-3 border rounded-lg ${textDir}
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

                        {/* MESSAGE */}
                        <div className={textDir}>
                            <label className="block mb-2">{texts[lang].messageLabel}</label>

                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                rows="6"
                                className={`w-full px-4 py-3 border rounded-lg resize-none ${textDir}
                                            ${errors.message ? "border-red-500" : "border-gray-300"}`}
                                placeholder={texts[lang].messagePlaceholder}
                            />

                            {errors.message && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.message}
                                </p>
                            )}
                        </div>

                        {/* File */}
                        <label className={`block text-sm font-medium text-gray-700 mb-2 ${textDir}`}>
                            {texts[lang].uploadFilesOptional}
                        </label>

                        {formData.attachment ? (
                            <div className={`bg-teal-50 border-2 border-teal-200 rounded-lg p-4 ${textDir}`}>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center text-white text-xs font-bold">
                                            PDF
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-800">
                                                {formData.attachment.name}
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                {(formData.attachment.size / 1024).toFixed(2)} KB
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setFormData((prev) => ({
                                                ...prev,
                                                attachment: null,
                                                attachmentId: null,
                                            }));
                                            setErrors((prev) => ({ ...prev, attachment: "" }));
                                        }}
                                        className="text-red-500 hover:text-red-700 font-medium text-sm"
                                    >
                                        ✕ {texts[lang].remove}
                                    </button>
                                </div>
                                {formData.attachmentId && (
                                    <p className="text-xs text-teal-600 mt-2">
                                        ✓ {texts[lang].uploaded}
                                    </p>
                                )}
                            </div>
                        ) : (
                            <label className="flex items-center justify-center gap-2 px-4 py-8 md:py-20 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-teal-500 hover:bg-teal-50 transition">

                                <div className={`flex flex-col justify-center items-center gap-2 ${textDir}`}>
                                    <img src={cloud} className="w-5 h-5" alt="upload" />
                                    <span className="text-sm text-gray-600">
                                        {texts[lang].clickToUpload}
                                    </span>
                                    <p className="text-xs text-gray-500">
                                        {texts[lang].pdfOnly}
                                    </p>
                                </div>

                                <input
                                    type="file"
                                    accept=".pdf"
                                    onChange={handleFileChange}
                                    className="hidden"
                                />
                            </label>
                        )}

                        {errors.attachment && (
                            <p className={`text-red-500 text-xs mt-1 ${textDir}`}>
                                {errors.attachment}
                            </p>
                        )}

                        {/* SUBMIT */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-primry text-white py-3 rounded-full hover:bg-white cursor-pointer hover:text-primry duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? texts[lang].sending : texts[lang].submit}
                        </button>

                    </form>
                </div>

                {/* Image */}
                <div className="rounded-3xl overflow-hidden">
                    <img src={map} className="w-full md:h-full object-cover" alt="map" />
                </div>

            </div>
        </section>
    );
};

export default ContactForm;