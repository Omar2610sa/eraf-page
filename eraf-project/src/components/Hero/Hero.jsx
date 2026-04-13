import video from "../../assets/images/8539170-hd_1366_720_25fps.mp4"
const Hero = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden ">

            <video autoPlay muted loop className="  w-full h-screen  object-cover">
                <source src={video} />
            </video>
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/80 "></div>
            {/* === Overlay === */}

            {/* content */}
            <div className="absolute inset-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center  text-secondary flex flex-col items-center justify-center gap-6">
                <h1 className="text-[56px] font-bold ">رعاية منزلية متكاملة بموثوقية وجودة عالية</h1>

                <p className=" ">نوفر خدمات رعاية صحية متكاملة في منزلك مع فريق متخصص يضمن متابعة دقيقة وراحة المرضى، باستخدام أحدث التقنيات والممارسات الطبية لضمان جودة وسلامة الخدمة</p>

                {/* Btns */}
                <div className="flex gap-4">
                    <button className="secondary-btn">تواصل معنا</button>
                    <button className='primary-btn'>استكشف خدماتنا</button>
                </div>
            </div>
            {/* === content === */}
        </div>
    )
}

export default Hero