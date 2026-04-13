import Card from "./Card/Card"
import serviceImage1 from "../../assets/images/services/Image.png"
import serviceImage2 from "../../assets/images/services/Image (1).png"
import serviceImage3 from "../../assets/images/services/Image (2).png"
import serviceImage4 from "../../assets/images/services/Image (3).png"


// Materinal UI
import NorthWestIcon from '@mui/icons-material/NorthWest';

const Services = () => {
    const cardContent = [{
        image: serviceImage1,
        title: "رعاية كبار السن"
    }, {
        image: serviceImage2,
        title: "التمريض المنزلي"
    }, {
        image: serviceImage3,
        title: "إعادة التأهيل بعد الحوادث"
    }, {
        image: serviceImage4,
        title: "العلاج التنفسي المنزلي"
    }
    ]

    return (
        <section className=" container">
            {/* Title Start */}
            <div className="flex justify-between items-end">
                {/* Title Content */}
                <div className="flex flex-col gap-2">
                    <p className="text-title">خدمتنا</p>
                    <h2 className="text-primry text-[48px]">رعاية صحية منزلية متكاملة</h2>
                    <p className="text-gray"> نقدم خدمات رعاية منزلية احترافية مع فريق طبي مؤهل وتقنيات حديثة لضمان جودة وأمان أعلى</p>
                </div>

                {/* Title Btn */}
                <div className="">
                    <button className="title-btn">استكشف خدماتنا <NorthWestIcon /></button>
                </div>
            </div>
            {/* Title End */}

            {/* Content Start */}
            <div className="grid grid-cols-2 gap-10 my-10">
                {
                    cardContent.map((card, index) => {
                        return <Card key={index} image={card.image} title={card.title} />
                    })
                }
            </div>
            {/* Content End */}
        </section>
    )
}

export default Services