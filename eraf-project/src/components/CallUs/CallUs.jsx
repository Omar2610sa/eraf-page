// Materinal UI
import NorthWestIcon from '@mui/icons-material/NorthWest';
const CallUs = () => {
    return (
        <section className='bg-gradient-to-r from-[#606769] to-[#299FB6]'>
            {/* Content Start */}
            <div className='container max-w-4xl'>
                <div className='flex flex-col justify-center items-center gap-10 text-center '>

                    <h2 className='text-[56px] text-white'>جاهزون لتقديم الرعاية الصحية التي تستحقها بكل احترافية واهتمام</h2>
                    <p className=' text-white text-2xl'>نوفّر لك خدمات رعاية صحية منزلية موثوقة، من خلال فريق طبي مؤهل وتجربة رعاية متكاملة تضمن الراحة، الأمان، والجودة العالية داخل منزلك.</p>
                    <div>
                        <button className="title-btn cursor-pointer">استكشف خدماتنا <NorthWestIcon /></button>
                    </div>
                </div>
            </div>
            {/* Content End */}
        </section>
    )
}

export default CallUs