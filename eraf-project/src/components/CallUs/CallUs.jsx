// Materinal UI
import NorthWestIcon from '@mui/icons-material/NorthWest';

// Route Link
import { Link } from "react-router-dom";

const CallUs = ({ callUs }) => {
    return (
        <section className='bg-gradient-to-r from-[#606769] to-[#299FB6]'>
            {/* Content Start */}
            <div className='container max-w-4xl'>
                <div className='flex flex-col justify-center items-center gap-10 text-center '>

                    <h2 className='text-[32px] md:text-[56px] text-white'>{callUs?.title || "هل تريد الانضمام لفريقنا؟"}</h2>
                    <p className=' text-white text-[17px] md:text-2xl'>{callUs?.description || "نبحث دائماً عن المواهب المتميزة للانضمام إلى فريقنا"}</p>
                    <div>
                        {
                            callUs ?
                                <Link to="/تواصل-معانا">

                                    <button className="callUs-btn  cursor-pointer font-semibold ">تواصل معانا<NorthWestIcon /></button>
                                </Link>

                                :
                                <Link to="/إنضم-إلينا">

                                    <button className="callUs-btn  cursor-pointer font-semibold ">إنضم الينا<NorthWestIcon /></button>
                                </Link>

                        }
                    </div>
                </div>
            </div>
            {/* Content End */}
        </section>
    )
}

export default CallUs