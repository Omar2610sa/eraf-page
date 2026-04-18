import { Link } from "react-router-dom";

import checkIcon from "../../assets/images/icons/Icon Container check (4).png";


// Material UI
import NorthWestIcon from "@mui/icons-material/NorthWest";

const AboutUs = ({ about }) => {
    return (
        <section className="bg-bgWhite">
            <div className="container flex flex-col md:flex-row justify-between items-center gap-[97px]">

                {/* Content Start */}
                <div className="flex flex-col justify-center items-start gap-[40px]">
                    <div className="flex flex-col justify-center items-start gap-[16px]">
                        <p className="text-title">{about?.label}</p>
                        <h2 className="text-primry text-[48px]">{about?.title}</h2>
                        <p>{about?.description}</p>
                    </div>

                    <Link to="/من-نحن">
                        <button className="primary-btn flex items-center gap-2">
                            تعرف علينا <NorthWestIcon />
                        </button>
                    </Link>
                </div>
                {/* Content End */}

                {/* Image + Label Start */}
                <div className="relative">

                    <img
                        src={about?.media?.media_url}
                        width={"1300px"}
                        height={"600px"}
                        alt="About Us"
                    />

                    {/* Label */}
                    <div className="absolute max-w-[130px] -top-16 left-4 md:top-6 md:-right-24 z-20 flex items-center gap-2.5 border border-border rounded-2xl px-4 py-2 bg-white  animate-slide-up">

                        {/* Icon */}
                        <div className="w-6 h-6 flex items-center justify-center  rounded-full">
                            <img src={checkIcon} alt="icon" />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col items-center">
                            <span className="text-primr text-[14px] font-semibold">
                                +5
                            </span>
                            <p className="text-[12px] text-gray">
                                سنوات خبرة
                            </p>
                        </div>

                    </div>

                </div>
                {/* Image + Label End */}

            </div>
        </section>
    );
};

export default AboutUs;