import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import RelatedServices from "../../components/RelatedServices/RelatedServices";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import useFetch from "../../Hooks/useFetch/useFetch";


// Mock service images
import serviceImg1 from "../../assets/images/services/Image.png";
import Loading from "../../components/Loading/Loading";




const ServiceDetails = () => {

    const { id } = useParams();
    const { data: services, loading } = useFetch("/api/client/services");
    const { data: featuredServices } = useFetch(`/api/client/features/${id}`);

    if (loading) return <Loading />;

    console.log(featuredServices)



    return (
        <div>
            <Navbar />

            <section className="container">
                <div className="flex flex-col justify-center items-start">

                    {/* Title */}
                    <div className="flex flex-col justify-center items-start gap-6">


                    </div>

                    <h2 className="text-[40px]">
                        {featuredServices?.title}
                    </h2>

                    <img
                        src={featuredServices?.media?.media_url}
                        className="w-full my-10 md:h-[400px] object-cover rounded-2xl"
                        alt=""
                    />

                    {/* Description */}
                    <div className="px-4 py-6 relative">

                        <p
                            className="text-justify gap-8 leading-relaxed"
                        >
                            {featuredServices?.description}
                        </p>


                    </div>



                </div>
            </section>
            <RelatedServices related={featuredServices?.related} />
            <Footer />
        </div>
    );
};

export default ServiceDetails;

