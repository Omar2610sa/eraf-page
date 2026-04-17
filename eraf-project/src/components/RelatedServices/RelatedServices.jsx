import NorthWestIcon from '@mui/icons-material/NorthWest';
import { Link } from "react-router-dom";
import Card from "../../components/Services/Card/Card";

// Mock service images for Card
import serviceImg1 from "../../assets/images/services/Image.png";
import serviceImg3 from "../../assets/images/services/Image (2).png";
import serviceImg4 from "../../assets/images/services/Image (3).png";

// Mock data - TODO: Replace with useFetch('/api/services') when API ready (features array)
const mockServices = [
  {
    id: "1",
    title: "الرعاية الصحية المنزلية",
    media: serviceImg1
  },
  {
    id: "2",
    title: "التمريض المنزلي",
    media: serviceImg3
  },
  {
    id: "3",
    title: "العلاج الطبيعي",
    media: serviceImg4
  },

];

const RelatedServices = ({ currentId }) => {
    // Filter out current if provided, take first 4 for cols-2
    const relatedServices = mockServices
        .filter(s => !currentId || s.id !== currentId)
        .slice(0, 4);

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
                {relatedServices.map((service) => (
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

