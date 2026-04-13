import AboutUs from "./components/AboutUs/AboutUs"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Services from "./components/Services/Services"
import Vision from "./components/Vision/Vision"

const App = () => {
  return (
    <div dir="rtl" >
      <Navbar />
      <Hero />
      <Services />
      <AboutUs />
      <Vision />
    </div>
  )
}

export default App