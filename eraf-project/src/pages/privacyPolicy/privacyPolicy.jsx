
import Navbar from "../../components/Navbar/Navbar"

import Footer from "../../components/Footer/Footer"




const PrivacyPolicy = () => {
    return (
        <div>
            <Navbar />
            <section className="bg-white container">
                <div className=" mx-auto px-6 md:px-24" dir="rtl">

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl font-bold text-right mb-8 text-gray-800">
                        سياسة الخصوصية
                    </h1>

                    {/* Intro */}
                    <p className="text-right leading-8 mb-10 text-gray-600">
                        في شركة إراف، نلتزم بحماية خصوصية جميع زوار ومستخدمي الموقع، ونعمل على ضمان سرية وأمان البيانات الشخصية التي يتم جمعها من خلال استخدامك لموقعنا الإلكتروني أو عند التواصل معنا عبر النماذج المتاحة.
                    </p>

                    {/* 1 */}
                    <div className="mb-8">
                        <h2 className="font-semibold text-lg text-gray-800 mb-3">
                            1. جمع المعلومات
                        </h2>
                        <p className="leading-8 text-gray-600 mb-3">
                            قد نقوم بجمع بعض المعلومات الشخصية عند استخدامك للموقع أو عند تعبئة النماذج، وتشمل على سبيل المثال لا الحصر:
                        </p>

                        <ul className="list-disc pr-6 space-y-2 text-gray-600">
                            <li>الاسم الكامل</li>
                            <li>رقم الجوال</li>
                            <li>البريد الإلكتروني</li>
                            <li>المدينة أو العنوان (عند الحاجة)</li>
                            <li>الرسائل أو الاستفسارات المرسلة عبر نموذج التواصل</li>
                            <li>الملفات أو المرفقات التي يتم رفعها من خلال الموقع</li>
                        </ul>
                    </div>

                    {/* 2 */}
                    <div className="mb-8">
                        <h2 className="font-semibold text-lg text-gray-800 mb-3">
                            2. كيفية استخدام المعلومات
                        </h2>

                        <ul className="list-disc pr-6 space-y-2 text-gray-600">
                            <li>الرد على الاستفسارات والطلبات المقدمة عبر الموقع</li>
                            <li>تقديم خدمات الرعاية الصحية المنزلية بشكل أكثر كفاءة</li>
                            <li>تحسين تجربة المستخدم داخل الموقع</li>
                            <li>التواصل مع المستخدم بشأن الخدمات أو المواعيد أو المتابعة</li>
                            <li>تطوير وتحسين المحتوى والخدمات المقدمة</li>
                        </ul>
                    </div>

                    {/* 3 */}
                    <div className="mb-8">
                        <h2 className="font-semibold text-lg text-gray-800 mb-3">
                            3. حماية البيانات
                        </h2>
                        <p className="leading-8 text-gray-600">
                            نلتزم باتخاذ جميع الإجراءات الفنية والتنظيمية المناسبة لحماية بيانات المستخدمين من الوصول غير المصرح به أو الاستخدام أو التعديل أو الإفصاح غير القانوني.
                        </p>
                    </div>

                    {/* 4 */}
                    <div className="mb-8">
                        <h2 className="font-semibold text-lg text-gray-800 mb-3">
                            4. مشاركة المعلومات
                        </h2>
                        <p className="leading-8 text-gray-600 mb-3">
                            لا نقوم ببيع أو تأجير أو مشاركة البيانات الشخصية الخاصة بالمستخدمين مع أي طرف ثالث إلا في الحالات التالية:
                        </p>

                        <ul className="list-disc pr-6 space-y-2 text-gray-600">
                            <li>عند وجود موافقة صريحة من المستخدم</li>
                            <li>إذا كان ذلك مطلوبًا بموجب الأنظمة والقوانين المعمول بها</li>
                            <li>عند الحاجة لتقديم الخدمة من خلال جهات أو مزودي خدمة معتمدين</li>
                        </ul>
                    </div>

                    {/* 5 */}
                    <div className="mb-8">
                        <h2 className="font-semibold text-lg text-gray-800 mb-3">
                            5. ملفات تعريف الارتباط (Cookies)
                        </h2>
                        <p className="leading-8 text-gray-600">
                            قد يستخدم الموقع ملفات تعريف الارتباط لتحسين تجربة التصفح وتحليل أداء الموقع، ويمكن للمستخدم التحكم في إعدادات المتصفح لتعطيلها إذا رغب في ذلك.
                        </p>
                    </div>

                    {/* 6 */}
                    <div className="mb-8">
                        <h2 className="font-semibold text-lg text-gray-800 mb-3">
                            6. الروابط الخارجية
                        </h2>
                        <p className="leading-8 text-gray-600">
                            قد يحتوي الموقع على روابط لمواقع خارجية، ونحن غير مسؤولين عن سياسات الخصوصية أو محتوى تلك المواقع، لذا يُنصح بالاطلاع على سياسات الخصوصية الخاصة بها عند زيارتها.
                        </p>
                    </div>

                    {/* 7 */}
                    <div>
                        <h2 className="font-semibold text-lg text-gray-800 mb-3">
                            7. تحديث سياسة الخصوصية
                        </h2>
                        <p className="leading-8 text-gray-600">
                            تحتفظ شركة إراف بالحق في تعديل أو تحديث سياسة الخصوصية في أي وقت بما يتناسب مع متطلبات العمل أو التحديثات القانونية، ويتم نشر أي تعديلات على هذه الصفحة، ويعد استمرارك في استخدام الموقع موافقة على التحديثات.
                        </p>
                    </div>

                </div>
            </section>
            <Footer />

        </div>
    )
}

export default PrivacyPolicy