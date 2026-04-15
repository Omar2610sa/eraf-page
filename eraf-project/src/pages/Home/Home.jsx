import AboutUs from "../../components/AboutUs/AboutUs"
import Hero from "../../components/Hero/Hero"
import Navbar from "../../components/Navbar/Navbar"
import Services from "../../components/Services/Services"
import Vision from "../../components/Vision/Vision"
import Blogs from "../../components/Blogs/Blogs"
import Brands from "../../components/Brands/Brands"
import CallUs from "../../components/CallUs/CallUs"
import Footer from "../../components/Footer/Footer"
import useFetch from "@/Hooks/useFetch/useFetch";

const Home = () => {
    const { data: home, error } = useFetch("/api/client/home");

    if (error) return <Error404 />;

    return (
        <div>
            <Navbar />
            <Hero hero={home?.hero} />
            <Services services={home?.services} />
            <AboutUs about={home?.about} />
            <Vision vision={home?.partners} />
            <Blogs blogs={home?.blogs} />
            <Brands brands={home?.partners} />
            <CallUs callUs={home?.banner} />
            <Footer />
        </div>
    )
}

export default Home