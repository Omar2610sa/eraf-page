import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"


import ErrorIcon from "../../assets/images/erroricon/Error404.png"

import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <main>

            <Navbar />
            <section className="container">
                <div className='flex flex-col justify-center items-center gap-12 text-center '> 
                    <div>
                        <img src={ErrorIcon} className="w-[300px] h-[150px] object-contain md:w-[480px] md:h-[200px]" alt="شعار خطأ 404" loading="lazy" />
                    </div>
                    <h2 className='text-2xl md:text-4xl'>عذرًا، الصفحة غير موجودة</h2>
                    <p className='  text-[17px] '>يبدو أن الرابط الذي تحاول الوصول إليه غير صحيح أو أن الصفحة قد تم نقلها أو حذفها.لا تقلق، يمكنك العودة إلى الصفحة الرئيسية ومتابعة تصفح خدماتنا بكل سهولة.</p>
                    <Link to="/">
                        <div>
                            <button className="primary-btn  cursor-pointer font-semibold ">العودة للرئيسية</button>
                        </div>
                    </Link>
                </div>
            </section>

            <Footer />

        </main>
    )
}

export default Error404