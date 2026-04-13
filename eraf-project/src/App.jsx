import AboutUs from "./components/AboutUs/AboutUs"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Services from "./components/Services/Services"
import Vision from "./components/Vision/Vision"
import Blogs from "./components/Blogs/Blogs"
import Brands from "./components/Brands/Brands"
import CallUs from "./components/CallUs/CallUs"
import Footer from "./components/Footer/Footer"
const App = () => {
  return (
    <div dir="rtl" >
      <Navbar />
      <Hero />
      <Services />
      <AboutUs />
      <Vision />
      <Blogs />
      <Brands />
      <CallUs />
      <Footer />
    </div>
  )
}

export default App