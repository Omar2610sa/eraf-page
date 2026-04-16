import { memo } from 'react';
import { Link } from "react-router-dom";
import calender from "../../../assets/images/blogs/calendar-2.png";

const Blog = ({ id, image, label, title, description, date }) => {
    return (
        <Link to={`/blog/${id}`}>
            <div className='group p-5 bg-white rounded-2xl cursor-pointer'>

                {/* Image */}
                <div className='overflow-hidden rounded-xl'>
                    <img
                        className='w-full group-hover:scale-105 transition-transform duration-300'
                        src={image}
                        alt=""
                    />
                </div>

                {/* Content */}
                <div className='flex flex-col gap-5 justify-center items-start mt-6 max-w-[326px] md:max-w-[400px]'>

                    <span className='p-2 bg-primry text-secondary rounded-xl text-[12px]'>
                        {label}
                    </span>

                    <h3 className='text-[22px] group-hover:text-primry transition-colors duration-300'>
                        {title}
                    </h3>

                    <p className='text-lightGray text-[12px]'>
                        {description}
                    </p>

                    <p className="flex items-center text-[14px] text-lightGray">
                        <img className="w-5 h-5 ml-1" src={calender} alt="calender" loading="lazy" />
                        {date || "غير محدد"}
                    </p>

                </div>

            </div>
        </Link>
    );
};

export default memo(Blog);
