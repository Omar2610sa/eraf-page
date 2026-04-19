// Imports components
import Navbar from "../../components/Navbar/Navbar"
import AboutUs from "../../components/AboutUs/AboutUs"
import CallUs from "../../components/CallUs/CallUs"
import Services from "../../components/Services/Services"
import Brands from "../../components/Brands/Brands"
import Vision from "../../components/Vision/Vision"
import Error404 from "../../components/Error404/Error404"
import Loading from "../../components/Loading/Loading"

import Footer from "../../components/Footer/Footer"
import Care from '../../components/Care/Care'

// Import Hooks
import useFetch from "../../Hooks/useFetch/useFetch";

const About = () => {
        const { data: about, error, loading } = useFetch("/api/client/about");
    
        if (error) return <Error404 /> ;
        if (loading) return <Loading />;

    return (
        <div>
            <Navbar />
            <AboutUs about={about?.about} />
            <Vision vision={about?.partners} />
            <Care care={about?.why_choose_us} />
            <Services services={about?.services} />
            <Brands brands={about?.partners} />
            <CallUs callUs={about?.banner} />
            <Footer />

        </div>
    )
}

export default About

