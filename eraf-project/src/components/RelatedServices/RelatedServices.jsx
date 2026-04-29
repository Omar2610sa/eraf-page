import NorthWestIcon from '@mui/icons-material/NorthWest';
import { Link } from "react-router-dom";
import Card from "../../components/Services/Card/Card";




const RelatedServices = ({ related }) => {


    return (
        <section className="container">
            {/* Title */}
            <div className="flex justify-between items-start md:items-end flex-col md:flex-row gap-6">
                <div className="flex flex-col gap-2">
                    <h2 className="text-primry text-[32px] md:text-[48px]">
                        خدمات ذات صلة
                    </h2>
                </div>

                <div>
                    <Link to="/الخدمات">
                        <button className="title-btn">
                            استكشف المزيد <NorthWestIcon />
                        </button>
                    </Link>
                </div>
            </div>

            {/* Content */}
            <div className="grid md:grid-cols-2 gap-10 mt-10">
                {related?.map((service) => (
                    <Card
                        key={service.id}
                        image={service.media}
                        title={service.title}
                        id={service.id}
                    />
                ))}
            </div>
        </section>
    )
}

export default RelatedServices;

