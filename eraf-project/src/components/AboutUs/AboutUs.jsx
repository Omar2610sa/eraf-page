import { Link } from "react-router-dom";

// Materinal UI
import NorthWestIcon from '@mui/icons-material/NorthWest';
const AboutUs = ({about}) => {
    return (
        <section className="bg-bgWhite ">
            <div className='container flex flex-col md:flex-row justify-between items-center gap-[97px] '>
                {/* Content Start */}
                <div className="flex flex-col justify-center items-start gap-[40px]">
                    <div className="flex flex-col justify-center items-start gap-[16px]">

                        <p className="text-title">{about?.label}</p>
                        <h2 className="text-primry text-[48px]">{about?.title}</h2>
                        <p>{about?.description}</p>
                    </div>
                    <Link to="/من-نحن">
                    <button className='primary-btn'>تعرف علينا <NorthWestIcon /></button>
                    </Link>
                </div>
                {/* Content End */}

                {/* Image Start */}
                <div>
                    <img src={about?.media?.media_url} width={"1336px"} height={"466px"} alt="About Us" />
                </div>
                {/* Image End */}
            </div>
        </section>

    )
}

export default AboutUs