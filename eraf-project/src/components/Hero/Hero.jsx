import video from "../../assets/images/8539170-hd_1366_720_25fps.mp4"

const Hero = () => {
    return (
        <div className="relative w-full pt-[134px] h-screen overflow-hidden">

            <video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover">
                <source src={video} />
            </video>

            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/90"></div>

            <div className="relative -top-45 h-screen flex items-center justify-center text-center text-secondary">
                <div className="flex flex-col items-center justify-center gap-10 md:gap-10 px-6  max-w-[379px] md:max-w-[600px]">
                    <h1 className="font-bold text-[40px] md:text-[56px] font-bold leading-[1.4]">رعاية منزلية متكاملة بموثوقية وجودة عالية</h1>

                    <p className="text-[16px] leading-relaxed">نوفر خدمات رعاية صحية متكاملة في منزلك مع فريق متخصص يضمن متابعة دقيقة وراحة المرضى، باستخدام أحدث التقنيات والممارسات الطبية لضمان جودة وسلامة الخدمة</p>

                    <div className="flex gap-6 md:gap-4 ">
                        <button className='primary-btn'>استكشف خدماتنا</button>
                        <button className="secondary-btn">تواصل معنا</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero