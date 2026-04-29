import { useRef, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import RelatedTopics from "../../components/RelatedTopics/RelatedTopics";
import Footer from "../../components/Footer/Footer";

import image from "../../assets/images/blogs/Image.png";

import calender from "../../assets/images/blogs/calendar-2.png";
import copy from "../../assets/images/icons/Facebook Container (4).png";
import insta from "../../assets/images/icons/Facebook Container (1).png";
import snap from "../../assets/images/icons/Facebook Container (2).png";
import tiktok from "../../assets/images/icons/Facebook Container (3).png";

// Mock service images
import Loading from "../../components/Loading/Loading";

// Import Hooks
import useFetch from "../../Hooks/useFetch/useFetch";


import { Link } from "react-router-dom";

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
    const { id } = useParams();
    const { data: featuredServices, loading } = useFetch(`/api/client/features/${id}`);
    if (loading) return <Loading />;

    console.log(featuredServices)

    return (
        <div>
            <Navbar />

            <section className="container">
                <div className="flex flex-col justify-center items-start">

                    {/* Title */}
                    <div className="flex flex-col justify-center items-start gap-6">
                        <span className="py-3 px-4 bg-primry text-secondary rounded-xl text-[12px]">
                            {featuredServices?.label}
                        </span>

                        <p className="flex items-center text-[14px] text-lightGray">
                            <img className="w-5 h-5 ml-1" src={calender} alt="calender" />
                            1/1/2026
                        </p>
                    </div>

                    <h2 className="text-[40px]">
                        {featuredServices?.title}
                    </h2>

                    <img src={featuredServices?.media?.media_url} className="w-full my-10 md:h-[600px] object-contain" alt="" />

                    {/* Description */}
                    <div className="px-4 py-6 relative">

                        <p
                            className="text-justify gap-8 leading-relaxed"
                        >
                            {featuredServices?.description}

                        </p>

                        {/* Icons */}
                        
                    </div>


                </div>
            </section>
            <RelatedTopics related={featuredServices?.related} />
            <Footer />
        </div>
    );
};

export default BlogDetails;



// <div className="hidden md:flex flex-col gap-6 absolute top-8 -right-10 ">

//                             {/* COPY BUTTON WRAPPER */}
//                             <div className="relative flex items-center">

//                                 <img
//                                     className="w-14 h-14 md:w-10 md:h-10 cursor-pointer hover:scale-105 transition"
//                                     src={copy}
//                                     alt="copy"
//                                     onClick={handleCopy}
//                                 />

//                                 {/* LABEL */}
//                                 {copied && (
//                                     <div
//                                         className="absolute right-full mr-3 px-3 py-1 text-sm rounded-md whitespace-nowrap shadow"
//                                         style={{ backgroundColor: "rgba(232, 242, 245, 1)" }}
//                                     >
//                                         تم النسخ!
//                                     </div>
//                                 )}

//                             </div>

//                             <img className="w-14 h-14 md:w-10 md:h-10" src={insta} alt="" />
//                             <img className="w-14 h-14 md:w-10 md:h-10" src={snap} alt="" />
//                             <img className="w-14 h-14 md:w-10 md:h-10" src={tiktok} alt="" />
//                         </div>