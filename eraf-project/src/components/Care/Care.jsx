import Card from "./Card.jsx"

import Icon1 from "../../assets/images/icons/Icon Container.png"
import Icon2 from "../../assets/images/icons/Icon Container (3).png"
import Icon3 from "../../assets/images/icons/Icon Container (1).png"
import Icon4 from "../../assets/images/icons/Icon Container (2).png"

const Care = ({care}) => {

    const cardContent = [{
        number: "01",
        icon: Icon1,
        title: ' رعاية موثوقة',
        description: "خدمات صحية منزلية آمنة وموثوقة لجميع عملائنا.",
    },
    {
        number: "02",
        icon: Icon2,
        title: ' جودة وأمان أولويتنا',
        description: "نلتزم بأعلى معايير الجودة والسلامة في كل خدمة.",
    },
    {
        number: "03",
        icon: Icon3,
        title: ' تواصل دائم وسريع',
        description: "استجابة فعالة وسريعة لجميع احتياجات المرضى وعائلاتهم.",
    },
    {
        number: "04",
        icon: Icon4,
        title: ' تطوير مستمر',
        description: "نحرص على تطوير خدماتنا باستمرار باستخدام أحدث التقنيات الطبية",
    },]
    return (
        <section className="container flex flex-col gap-8">
            {/* Title Start */}
            <div className='flex flex-col justify-center items-center text-center gap-4 '>
                <p className="text-title">{care?.label}</p>
                <h2 className="text-primry text-[32px] md:text-[48px]">{care?.title}</h2>
                <p className=''>{care?.description}</p>
            </div>
            {/* Title End */}
            {/* Cards Content Start */}
            <div className="grid md:grid-cols-4 justify-center gap-10  md:gap-8">
                {/* Card */}
                {
                    cardContent.map((card, index) => {
                        return <Card key={index} id={card.number} icon={card.icon} title={card.title} description={card.description} />
                    })
                }
            </div>
            {/* Cards Content End */}
        </section>
    )
}

export default Care