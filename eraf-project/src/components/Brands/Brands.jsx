import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

import BrandBox from "./BrandBox"
import image1 from "../../assets/images/brands/Logo.png"
import image2 from "../../assets/images/brands/cc9868ac42b7bd60a2cbac4c6cefdf13e0477e3f.png"
import image3 from "../../assets/images/brands/d092f6ea2e1d820b60dd901fbe5ff97a4aae1d13.png"
import image4 from "../../assets/images/brands/Logo Frame (1).png"
import image5 from "../../assets/images/brands/Logo Frame (2).png"
import image6 from "../../assets/images/brands/Logo Frame (3).png"
import image7 from "../../assets/images/brands/Logo Frame (4).png"

const brandImages = [
    { image: image1 },
    { image: image2 },
    { image: image3 },
    { image: image4 },
    { image: image5 },
    { image: image6 },
    { image: image7 },
]

const Brands = () => {
    return (
        <section className='container bg-white'>
            {/* Title Start */}
            <div className='flex flex-col justify-center items-center text-center gap-4'>
                <p className="text-title">شركاء النجاح</p>
                <h2 className="text-primry text-[32px] md:text-[48px]">نفخر بثقة شركائنا</h2>
                <p className='text-text '>شراكات تعكس التزامنا بالجودة والاحترافية في الرعاية الصحية المنزلية.</p>
            </div>
            {/* Title End */}

            {/* Swiper Start */}
            <div className="mt-30">
                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    speed={2000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    slidesPerView={4}
                    spaceBetween={16}
                    breakpoints={{
                        320: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                >
                    {brandImages.map((card, index) => (
                        <SwiperSlide key={index}>
                            <BrandBox image={card.image} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {/* Swiper End */}
        </section>
    )
}

export default Brands