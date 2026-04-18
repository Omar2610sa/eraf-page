import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import map from "../../assets/images/Map.png";
import saudi from "../../assets/images/Saudia.png";
import cloud from "../../assets/images/icons/cloud icon.png";

import { showSuccessAlert } from "../../components/Alerts/Alrets";

const ContactForm = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: "",
        attachments: null,
    });

    const [errors, setErrors] = useState({});

    const country = {
        name: "Saudi Arabia",
        code: "966+",
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

        if (!formData.name.trim()) newErrors.name = "املأ الاسم";

        if (!formData.phone.trim()) {
            newErrors.phone = "املأ الهاتف";
        } else if (!/^\d+$/.test(formData.phone)) {
            newErrors.phone = "أدخل أرقام فقط";
        } else if (formData.phone.trim().length !== 9) {
            newErrors.phone = "يجب أن يكون الرقم 9 أرقام بالضبط";
        }

        if (!formData.message.trim()) newErrors.message = "املأ الرسالة";

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {

            showSuccessAlert(
                "لقد تلقينا رسالتك",
                "فريقنا سوف يتواصل معك قريباً",
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

    return (
        <section className="container">



            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* FORM */}
                <div className="bg-contactForm rounded-3xl shadow-lg p-8">

                    <h3 className="text-2xl font-bold text-right mb-8">
                        أرسل لنا رسالة
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* NAME */}
                        <div className="text-right">
                            <label className="block mb-2">الاسم</label>

                            <input
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-3 border rounded-lg text-right
                                            ${errors.name ? "border-red-500" : "border-gray-300"}`}
                                placeholder="أدخل اسمك"
                            />

                            {errors.name && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        {/* PHONE */}
                        <div className="text-right">
                            <label className="block mb-2">الهاتف</label>

                            <div className="relative">
                                <div className="absolute left-3 top-1/2 -translate-y-1/2 border-r-1 py-3 pr-2 border-gray-300 flex flex-row-reverse items-center gap-2">
                                    <img src={saudi} className="w-5 h-5" alt="saudi" />
                                    <span>{country.code}</span>
                                </div>
                                <input
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className={`w-full pl-20 pr-4 py-3 border rounded-lg text-right
                                                ${errors.phone ? "border-red-500" : "border-gray-300"}`}
                                    placeholder="أدخل رقم الهاتف"
                                />
                            </div>

                            {errors.phone && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.phone}
                                </p>
                            )}
                        </div>

                        {/* MESSAGE */}
                        <div className="text-right">
                            <label className="block mb-2">الرسالة</label>

                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                rows="6"
                                className={`w-full px-4 py-3 border rounded-lg resize-none text-right
                                            ${errors.message ? "border-red-500" : "border-gray-300"}`}
                                placeholder="اكتب رسالتك"
                            />

                            {errors.message && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.message}
                                </p>
                            )}
                        </div>
                        {/* File */}
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            إرفاق ملفات (اختياري)
                        </label>

                        <label className="flex items-center justify-center gap-2 py-8  border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-teal-500 hover:bg-teal-50 transition">

                            <div className="flex flex-col justify-center items-center gap-2">
                                <img src={cloud} className="w-5 h-5" alt="" />
                                <span className="text-sm text-gray-600">
                                    اضغط لرفع ملفات
                                </span>
                                <p className="text-xs text-gray-500">
                                    بإمكانك ارفاق عدة ملفات
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
                            إرسال
                        </button>

                    </form>
                </div>

                {/* MAP */}
                <div className="rounded-3xl overflow-hidden ">
                    <img src={map} className="w-full md:h-full object-cover" alt="map" />
                </div>

            </div>
        </section>
    );
};

export default ContactForm;