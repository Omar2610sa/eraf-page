import BrandBox from "./BrandBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const Brands = ({ brands }) => {
    return (
        <section className="container bg-white">

            <div className="flex flex-col justify-center items-center text-center gap-4">
                <p className="text-title">{brands?.title}</p>
                <h2 className="text-primry text-[32px] md:text-[48px]">
                    {brands?.title}
                </h2>
                <p className="text-text">{brands?.description}</p>
            </div>

            <div className="mt-30">
                <Swiper
                    loop={true}
                    speed={2000}
                    autoplay={{
                        delay: 2500,
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