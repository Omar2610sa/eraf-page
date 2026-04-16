import { useRef, useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import image from "../../assets/images/blogs/Image.png";

import calender from "../../assets/images/blogs/calendar-2.png";
import copy from "../../assets/images/icons/Facebook Container (4).png";
import insta from "../../assets/images/icons/Facebook Container (1).png";
import snap from "../../assets/images/icons/Facebook Container (2).png";
import tiktok from "../../assets/images/icons/Facebook Container (3).png";

const BlogDetails = () => {
const [copied, setCopied] = useState(false);
const textRef = useRef(null);

const handleCopy = async () => {
    if (!textRef.current) return;

    const text = textRef.current.innerText;

    try {
        await navigator.clipboard.writeText(text);

        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);

    } catch (err) {
        alert(err)
    }

};

    return (
        <div>
            <Navbar />

            <section className="container">
                <div className="flex flex-col justify-center items-start">

                    {/* Title */}
                    <div className="flex flex-col justify-center items-start gap-6">
                        <span className="py-3 px-4 bg-primry text-secondary rounded-xl text-[12px]">
                            مقالات تقنية
                        </span>

                        <p className="flex items-center text-[14px] text-lightGray">
                            <img className="w-5 h-5 ml-1" src={calender} alt="calender" />
                            1/1/2026
                        </p>
                    </div>

                    <h2 className="text-[40px]">
                        دليل الرعاية الصحية المنزلية لكبار السن
                    </h2>

                    <img src={image} className="w-full my-10 md:h-[600px] object-contain" alt="" />

                    {/* Description */}
                    <div className="px-4 py-6 relative">

                        <p
                            ref={textRef}
                            className="text-justify gap-8 leading-relaxed"
                        >
                            تُعد الرعاية الصحية المنزلية لكبار السن من الحلول المتكاملة التي أصبحت تحظى بأهمية كبيرة في الوقت الحالي، خاصة مع الحاجة المتزايدة إلى توفير رعاية طبية وإنسانية مستمرة داخل بيئة آمنة ومريحة. فمع التقدم في العمر، قد يواجه كبار السن تحديات صحية متعددة تتطلب متابعة دقيقة واهتمامًا خاصًا، سواء من الناحية الطبية أو النفسية أو الجسدية، وهو ما يجعل خدمات الرعاية الصحية المنزلية خيارًا مثاليًا يضمن لهم حياة أكثر راحة واستقرارًا داخل منازلهم وبين أفراد أسرهم.
                            في هذا الدليل الشامل، نستعرض كل ما تحتاج معرفته عن الرعاية الصحية المنزلية لكبار السن، بداية من مفهومها وأهميتها، مرورًا بأنواع الخدمات التي يمكن تقديمها داخل المنزل، وصولًا إلى أفضل الممارسات التي تضمن حصول المريض على أعلى مستوى من الرعاية والاهتمام. وتشمل هذه الخدمات المتابعة الدورية للحالة الصحية، قياس العلامات الحيوية مثل ضغط الدم ونسبة السكر ومستوى الأكسجين، تنظيم الأدوية وإعطاؤها في المواعيد المحددة، العناية بالحالات المزمنة، تقديم خدمات التمريض المنزلي، جلسات العلاج الطبيعي، والرعاية بعد العمليات الجراحية، بالإضافة إلى المساعدة في الأنشطة اليومية الأساسية مثل الحركة، التغذية، والنظافة الشخصية.
                            ولا تقتصر أهمية الرعاية المنزلية على الجانب الطبي فقط، بل تمتد لتشمل الجانب النفسي والاجتماعي أيضًا، حيث يحتاج كبار السن إلى بيئة داعمة تمنحهم الشعور بالأمان والطمأنينة والخصوصية، وتساعدهم على الحفاظ على كرامتهم واستقلاليتهم قدر الإمكان. كما أن وجود مقدم رعاية مؤهل داخل المنزل يسهم بشكل كبير في تقليل معدلات التوتر والقلق لدى الأسرة، ويمنحهم الثقة بأن أحبّاءهم يتلقون الرعاية اللازمة وفق أعلى معايير الجودة والاحترافية.
                            كما يناقش هذا المقال أهم المعايير التي يجب مراعاتها عند اختيار خدمة الرعاية الصحية المنزلية المناسبة، مثل كفاءة الفريق الطبي، خبرة مقدمي الرعاية، مستوى المتابعة الدورية، سرعة الاستجابة للحالات الطارئة، ومدى توافق الخطة العلاجية مع احتياجات المريض الفردية. بالإضافة إلى ذلك، سنسلط الضوء على الفوائد طويلة المدى للرعاية المنزلية، مثل تقليل الحاجة إلى التنقل المتكرر للمستشفيات، تقليل خطر العدوى، تحسين الحالة النفسية، وتعزيز فرص التعافي والاستقرار الصحي في بيئة مألوفة ومريحة.
                            إذا كنت تبحث عن أفضل الطرق للحفاظ على صحة وسلامة كبار السن داخل المنزل، فهذا الدليل يمنحك رؤية واضحة ومتكاملة تساعدك على فهم احتياجاتهم الحقيقية، واختيار نوع الرعاية الأنسب لهم، لضمان حياة أكثر راحة، كرامة، وأمانًا مع رعاية صحية موثوقة وشاملة تلبّي مختلف متطلباتهم اليومية والطبية.
                            ولا تقتصر أهمية الرعاية المنزلية على الجانب الطبي فقط، بل تمتد لتشمل الجانب النفسي والاجتماعي أيضًا، حيث يحتاج كبار السن إلى بيئة داعمة تمنحهم الشعور بالأمان والطمأنينة والخصوصية، وتساعدهم على الحفاظ على كرامتهم واستقلاليتهم قدر الإمكان. كما أن وجود مقدم رعاية مؤهل داخل المنزل يسهم بشكل كبير في تقليل معدلات التوتر والقلق لدى الأسرة، ويمنحهم الثقة بأن أحبّاءهم يتلقون الرعاية اللازمة وفق أعلى معايير الجودة والاحترافية.
                            كما يناقش هذا المقال أهم المعايير التي يجب مراعاتها عند اختيار خدمة الرعاية الصحية المنزلية المناسبة، مثل كفاءة الفريق الطبي، خبرة مقدمي الرعاية، مستوى المتابعة الدورية، سرعة الاستجابة للحالات الطارئة، ومدى توافق الخطة العلاجية مع احتياجات المريض الفردية. بالإضافة إلى ذلك، سنسلط الضوء على الفوائد طويلة المدى للرعاية المنزلية، مثل تقليل الحاجة إلى التنقل المتكرر للمستشفيات، تقليل خطر العدوى، تحسين الحالة النفسية، وتعزيز فرص التعافي والاستقرار الصحي في بيئة مألوفة ومريحة.

                            إذا كنت تبحث عن أفضل الطرق للحفاظ على صحة وسلامة كبار السن داخل المنزل، فهذا الدليل يمنحك رؤية واضحة ومتكاملة تساعدك على فهم احتياجاتهم الحقيقية، واختيار نوع الرعاية الأنسب لهم، لضمان حياة أكثر راحة، كرامة، وأمانًا مع رعاية صحية موثوقة وشاملة تلبّي مختلف متطلباتهم اليومية والطبية.

                        </p>

                        {/* Icons */}
                        <div className="hidden md:flex flex-col gap-6 absolute top-8 -right-10 ">

                            {/* COPY BUTTON WRAPPER */}
                            <div className="relative flex items-center">

                                <img
                                    className="w-14 h-14 md:w-10 md:h-10 cursor-pointer hover:scale-105 transition"
                                    src={copy}
                                    alt="copy"
                                    onClick={handleCopy}
                                />

                                {/* LABEL */}
                                {copied && (
                                    <div
                                        className="absolute right-full mr-3 px-3 py-1 text-sm rounded-md whitespace-nowrap shadow"
                                        style={{ backgroundColor: "rgba(232, 242, 245, 1)" }}
                                    >
                                        تم النسخ!
                                    </div>
                                )}
                            </div>

                            <img className="w-14 h-14 md:w-10 md:h-10" src={insta} alt="" />
                            <img className="w-14 h-14 md:w-10 md:h-10" src={snap} alt="" />
                            <img className="w-14 h-14 md:w-10 md:h-10" src={tiktok} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default BlogDetails;