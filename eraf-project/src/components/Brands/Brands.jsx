import { useLanguage } from "../../contexts/LanguageContext.jsx";
import { getLocalizedText } from "../../utils/localization.js";
import BrandBox from "./BrandBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const Brands = ({ brands }) => {
    const { lang } = useLanguage();
    const title = getLocalizedText(brands, 'title', lang);
    const description = getLocalizedText(brands, 'description', lang);
    return (
        <section className="container bg-white">

            <div className="flex flex-col justify-center items-center text-center gap-4">
                <p className="text-title">{title}</p>
                <h2 className="text-primry text-[32px] md:text-[48px]">
                    {title}
                </h2>
                <p className="text-text">{description}</p>
            </div>

            <div className="mt-30">
                <Swiper
                    loop={true}
                    speed={600}
                    autoplay={{
                        delay: 800,
                        disableOnInteraction: false,
                    }}
                    slidesPerView={4}
                    spaceBetween={16}
                    modules={[Autoplay]}
                    breakpoints={{
                        320: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                >
                    {brands?.features?.map((brand, index) => (
                        <SwiperSlide key={index}>
                            <BrandBox image={brand?.media} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Brands;

