// Images Imports
import mainImage from "../../assets/images/about/Images (1).png"


// Materinal UI
import NorthWestIcon from '@mui/icons-material/NorthWest';
const AboutUs = () => {
    return (
        <section className="bg-bgWhite ">
            <div className='container flex flex-col md:flex-row justify-between items-center gap-[97px] '>
                {/* Content Start */}
                <div className="flex flex-col justify-center items-start gap-[40px]">
                    <div className="flex flex-col justify-center items-start gap-[16px]">

                        <p className="text-title">من نحن... </p>
                        <h2 className="text-primry text-[48px]">ما نقدمه لك</h2>
                        <p>إراف شركة متخصصة في تقديم خدمات الرعاية الصحية المنزلية، نوفر رعاية موثوقة واحترافية للمستفيدين في منازلهم، مع فريق طبي مؤهل وتقنيات حديثة لضمان أعلى معايير الجودة والأمان.</p>
                    </div>
                    <button className='primary-btn'>تعرف علينا <NorthWestIcon /></button>
                </div>
                {/* Content End */}

                {/* Image Start */}
                <div>
                    <img src={mainImage} width={"1336px"} height={"466px"} alt="About Us" />
                </div>
                {/* Image End */}
            </div>
        </section>

    )
}

export default AboutUs