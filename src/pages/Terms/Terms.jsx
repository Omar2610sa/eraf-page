import Navbar from "../../components/Navbar/Navbar"


import Footer from "../../components/Footer/Footer"

const Terms = () => {
    return (
        <section>
            <Navbar />

            <section className="bg-white container">
                <div className="x mx-auto px-6 md:px-24" dir="rtl">

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl font-bold text-right mb-8 text-gray-800">
                        شروط الاستخدام
                    </h1>

                    {/* Intro */}
                    <p className="text-right leading-8 mb-10 text-gray-600">
                        مرحبًا بك في موقع شركة إراف. باستخدامك لهذا الموقع، فإنك توافق على الالتزام بالشروط والأحكام التالية. يرجى قراءة هذه الشروط بعناية قبل استخدام الموقع.
                    </p>

                    {/* Section */}
                    <div className="mb-8">
                        <h2 className="font-semibold text-lg text-gray-800 mb-3">
                            1. قبول الشروط
                        </h2>
                        <p className="leading-8 text-gray-600">
                            إن دخولك إلى الموقع أو استخدامك لأي من خدماته يعني موافقتك الكاملة على الالتزام بشروط الاستخدام هذه، وفي حال عدم موافقتك على أي جزء منها، يُرجى عدم استخدام الموقع.
                        </p>
                    </div>

                    {/* Section */}
                    <div className="mb-8">
                        <h2 className="font-semibold text-lg text-gray-800 mb-3">
                            2. استخدام الموقع
                        </h2>
                        <p className="leading-8 text-gray-600 mb-3">
                            يُسمح باستخدام الموقع للأغراض المشروعة فقط، ويُمنع استخدامه بأي طريقة قد تؤدي إلى:
                        </p>

                        <ul className="list-disc pr-6 space-y-2 text-gray-600">
                            <li>انتهاك حقوق الموقع أو تعطيله أو التأثير على أدائه</li>
                            <li>إرسال بيانات أو ملفات ضارة أو فيروسات</li>
                            <li>إساءة استخدام نماذج التواصل أو إرسال معلومات مضللة</li>
                            <li>محاولة الوصول غير المصرح به إلى أنظمة الموقع أو بياناته</li>
                        </ul>
                    </div>

                    {/* Section */}
                    <div className="mb-8">
                        <h2 className="font-semibold text-lg text-gray-800 mb-3">
                            3. المحتوى والمعلومات
                        </h2>
                        <p className="leading-8 text-gray-600">
                            جميع المعلومات والمحتويات المعروضة على الموقع، بما في ذلك النصوص والصور والتصاميم والشعارات والخدمات، هي ملك لشركة إراف أو مرخصة لها، ولا يجوز نسخها أو إعادة استخدامها أو نشرها دون إذن مسبق.
                        </p>
                    </div>

                    {/* Section */}
                    <div className="mb-8">
                        <h2 className="font-semibold text-lg text-gray-800 mb-3">
                            4. دقة المعلومات
                        </h2>
                        <p className="leading-8 text-gray-600">
                            تحرص شركة إراف على أن تكون جميع المعلومات المعروضة دقيقة ومحدثة قدر الإمكان، ومع ذلك لا نضمن خلو المحتوى من الأخطاء أو اكتماله بشكل دائم، ونحتفظ بحق تعديل أو تحديث المحتوى في أي وقت دون إشعار مسبق.
                        </p>
                    </div>

                    {/* Section */}
                    <div className="mb-8">
                        <h2 className="font-semibold text-lg text-gray-800 mb-3">
                            5. الخدمات والمواعيد
                        </h2>
                        <p className="leading-8 text-gray-600">
                            أي طلب يتم تقديمه عبر الموقع للحصول على خدمة أو استفسار لا يعد تأكيدًا نهائيًا لتقديم الخدمة إلا بعد مراجعة الطلب والتواصل مع المستخدم من قبل فريق العمل.
                        </p>
                    </div>

                    {/* Section */}
                    <div className="mb-8">
                        <h2 className="font-semibold text-lg text-gray-800 mb-3">
                            6. المسؤولية
                        </h2>
                        <p className="leading-8 text-gray-600 mb-3">
                            نحن نسعى لتقديم تجربة استخدام موثوقة، إلا أننا لا نتحمل المسؤولية عن:
                        </p>

                        <ul className="list-disc pr-6 space-y-2 text-gray-600">
                            <li>أي أعطال فنية مؤقتة في الموقع</li>
                            <li>انقطاع الخدمة بسبب الصيانة أو التحديثات</li>
                            <li>أي استخدام غير صحيح للمعلومات الواردة في الموقع</li>
                            <li>أي أضرار غير مباشرة تنتج عن سوء استخدام الموقع</li>
                        </ul>
                    </div>

                    {/* Section */}
                    <div>
                        <h2 className="font-semibold text-lg text-gray-800 mb-3">
                            7. التعديلات على الشروط
                        </h2>
                        <p className="leading-8 text-gray-600">
                            تحتفظ شركة إراف بالحق في تعديل أو تحديث شروط الاستخدام في أي وقت، وتصبح التعديلات نافذة فور نشرها على هذه الصفحة، ويعد استمرارك في استخدام الموقع بعد التحديث موافقة ضمنية على الشروط المعدلة.
                        </p>
                    </div>

                </div>
           
            </section>
            <Footer />

        </section>
    )
}

export default Terms