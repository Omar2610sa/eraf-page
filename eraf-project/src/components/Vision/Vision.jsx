// Image Imports
import frameImage from '../../assets/images/vision/image.png'
import eyeFrame from "../../assets/images/vision/Eye Scan.png"
import targetIcon from "../../assets/images/vision/Frame.png"


const Vision = () => {
    return (
        <section className='container'>
            {/* Title Start */}
            <div className='flex flex-col justify-center items-center gap-4'>
                <p className="text-title">رؤيتنا ورسالتنا</p>
                <h2 className="text-primry text-[48px]">صحتك في أيدٍ أمينة</h2>
                <p>نسعى في أراف لتقديم خدمات رعاية صحية منزلية متكاملة، تهتم بجودة الرعاية وسلامة المرضى مع توفير تجربة مريحة وموثوقة للعائلات.</p>
            </div>
            {/* Title End */}
            {/* Image Content Start */}
            <div className='relative -top-36'>
                <img className='flex justify-center items-center '  src={frameImage} alt="" />
                {/* Card 1 Start */}
                <div className='absolute top-[250px] left-[641px] w-[400px] p-6 gap-6 flex  justify-between items-center bg-white rounded-xl w-[320px] shadow-lg'>
                    {/* Icon */}
                    <div className=''>
                        <img src={eyeFrame} alt="eyeFrame" />
                    </div>
                    {/* Content */}
                    <div className='flex flex-col justify-center items-start gap-2 '>
                        <h3 className='font-bold text-gray-900  text-2xl'>رؤيتنا</h3>
                        <p className=''>أن نكون الرائدين في الرعاية الصحية المنزلية مع ضمان رضا المرضى.</p>
                    </div>
                </div>
                {/* Card 1 End */}

                {/* Card 2 Start */}
                <div className='absolute top-[445px] -left-[55px]  w-[400px] p-6 gap-6 flex  justify-between items-center bg-white rounded-xl w-[320px] shadow-lg'>
                    {/* Icon */}
                    <div>
                        <img src={targetIcon} alt="targetIcon" />
                    </div>
                    {/* Content */}
                    <div className='flex flex-col justify-center items-start gap-2 '>
                        <h3 className='font-bold text-gray-900  text-2xl'>رسالتنا</h3>
                        <p className=''>تقديم رعاية احترافية تجمع بين الخبرة والاهتمام الشخصي لكل مريض.</p>
                    </div>
                </div>
                {/* Card 2 End */}
            </div>
            {/* Image Content End */}
        </section>
    )
}

export default Vision