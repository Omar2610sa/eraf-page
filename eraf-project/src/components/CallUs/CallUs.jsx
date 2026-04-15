// Materinal UI
import NorthWestIcon from '@mui/icons-material/NorthWest';
const CallUs = ({ callUs }) => {
    return (
        <section className='bg-gradient-to-r from-[#606769] to-[#299FB6]'>
            {/* Content Start */}
            <div className='container max-w-4xl'>
                <div className='flex flex-col justify-center items-center gap-10 text-center '>

                    <h2 className='text-[32px] md:text-[56px] text-white'>{callUs?.title}</h2>
                    <p className=' text-white text-[17px] md:text-2xl'>{callUs?.description}</p>
                    <div>
                        <button className="callUs-btn  cursor-pointer font-semibold ">تواصل معنا<NorthWestIcon /></button>
                    </div>
                </div>
            </div>
            {/* Content End */}
        </section>
    )
}

export default CallUs