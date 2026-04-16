import { memo } from 'react';
import Card from "./Card/Card";
import NorthWestIcon from "@mui/icons-material/NorthWest";
import Error404 from "../../components/Error404/Error404"
import ServicesCards from "./ServicesCards";

import { Link } from "react-router-dom";


const Services = ({ services }) => {


    return (
        <section className="container bg-white">

            {/* Title */}
            <div className="flex justify-between items-start md:items-end flex-col md:flex-row gap-6">
                <div className="flex flex-col gap-2">
                    <p className="text-title">{services?.label}</p>
                    <h2 className="text-primry text-[32px] md:text-[48px]">
                        {services?.title}
                    </h2>
                    <p className="text-text text-[17px]">
                        {services?.description}                    </p>
                </div>

                <div>
                    <Link to="/الخدمات">
                        <button className="title-btn">
                            استكشف خدماتنا <NorthWestIcon />
                        </button>
                    </Link>
                </div>
            </div>

            {/* Content */}
            <ServicesCards services={services} />
        </section>
    );
};

export default memo(Services);
