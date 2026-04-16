import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import { useNavigate } from "react-router-dom";

import ServerIcon from "../assets/images/erroricon/Decorative Vectors.png"

const SeverNotFound = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Navbar />
            <section className="container">
                <div className='flex flex-col justify-center items-center gap-12 text-center '>
                    <div>
                        <img src={ServerIcon} className="w-[300px] h-[150px] object-contain md:w-[480px] md:h-[200px]" />
                    </div>
                    <h2 className='text-2xl md:text-4xl'>الخدمة غير متاحة حاليًا</h2>
                    <p className='  text-[17px] '>نعتذر، الخدمة التي تحاول الوصول إليها غير متوفرة مؤقتًا بسبب أعمال الصيانة أو الضغط على الخادم. يرجى المحاولة مرة أخرى بعد قليل.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => navigate('/')}
                            className="px-6 py-3 font-semibold primary-btn"
                        >
                            العودة للرئيسية
                        </button>


                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default SeverNotFound;
