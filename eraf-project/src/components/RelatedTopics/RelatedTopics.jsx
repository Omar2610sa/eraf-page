

// Materinal UI
import NorthWestIcon from '@mui/icons-material/NorthWest';
import calender from "../../assets/images/blogs/calendar-2.png";
import image from "../../assets/images/blogs/BlogsDetails.png";

import { Link } from "react-router-dom";


const RelatedTopics = () => {
    return (
        <section className='container '>

            <div className='"  max-w-[350px]"'>

                {/* Title Start */}
                <div className="flex justify-between items-start md:items-end flex-col gap-6 md:flex-row ">
                    {/* Title Content */}
                    <div>
                        <h2 className="text-primry text-[32px] md:text-[48px]">مواضيع ذات صلة</h2>
                    </div>

                    {/* Title Btn */}
                    <Link to="/المدونة">
                        <button className="title-btn"> استكشف المزيد<NorthWestIcon /></button>
                    </Link>
                </div>

                {/* Content Start */}
                <div className='grid md:grid-cols-3 gap-[24px] mt-12'>
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

                            <h3 className='text-[22px] group-hover:text-primry transition-colors duration-300'>
                                دليل الرعاية الصحية المنزلية
                                لكبار السن
                            </h3>

                            <p className='text-lightGray text-[12px]'>
                                تعرف على أهم خطوات رعاية كبار السن في المنزل، وكيفية توفير بيئة آمنة ومريحة تدعم صحتهم اليومية.
                            </p>

                            <p className="flex items-center text-[14px] text-lightGray">
                                <img className="w-5 h-5 ml-1" src={calender} alt="calender" loading="lazy" />
                                غير محدد
                            </p>

                        </div>

                    </div>
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

                            <h3 className='text-[22px] group-hover:text-primry transition-colors duration-300'>
                                دليل الرعاية الصحية المنزلية
                                لكبار السن
                            </h3>

                            <p className='text-lightGray text-[12px]'>
                                تعرف على أهم خطوات رعاية كبار السن في المنزل، وكيفية توفير بيئة آمنة ومريحة تدعم صحتهم اليومية.
                            </p>

                            <p className="flex items-center text-[14px] text-lightGray">
                                <img className="w-5 h-5 ml-1" src={calender} alt="calender" loading="lazy" />
                                غير محدد
                            </p>

                        </div>

                    </div>
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

                            <h3 className='text-[22px] group-hover:text-primry transition-colors duration-300'>
                                دليل الرعاية الصحية المنزلية
                                لكبار السن
                            </h3>

                            <p className='text-lightGray text-[12px]'>
                                تعرف على أهم خطوات رعاية كبار السن في المنزل، وكيفية توفير بيئة آمنة ومريحة تدعم صحتهم اليومية.
                            </p>

                            <p className="flex items-center text-[14px] text-lightGray">
                                <img className="w-5 h-5 ml-1" src={calender} alt="calender" loading="lazy" />
                                غير محدد
                            </p>

                        </div>

                    </div>
                </div>
                {/* Content End */}
            </div>

        </section>
    )
}

export default RelatedTopics