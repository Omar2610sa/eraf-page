// Route Link
import { Link } from "react-router-dom";



const Hero = ({ hero }) => {
    return (
        <div className="relative z-40 w-full md:h-[calc(100vh-92px)] h-[calc(80vh-92px)] overflow-hidden">

            <video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover z-30" src={hero?.media?.media_url} />

            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/50 z-30 "></div>

            <div className="relative z-40 h-full flex items-center justify-center text-center text-secondary">
                <div className="flex flex-col items-center justify-center gap-10 md:gap-10 px-6  max-w-[379px] md:max-w-[600px]">
                    <h1 className="font-bold text-[40px] md:text-[56px] font-bold leading-[1.4]">{hero?.title}</h1>

                    <p className="text-[16px] leading-relaxed">{hero?.description}</p>

                    <div className="flex gap-6 md:gap-4 ">
                        <Link to="/الخدمات">
                            <button className='primary-btn'>استكشف خدماتنا</button>
                        </Link>
                        <Link to="/تواصل-معانا">
                            <button className="secondary-btn">تواصل معنا</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero