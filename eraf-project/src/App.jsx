// Routes Pages 
import Home from "./pages/Home/Home"
import About from "./pages/About/About";
import Service from "./pages/Services/Service";
import Departments from "./pages/Departments/Departments";
import Terms from "./pages/Terms/Terms";


// Routs Hook
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div dir="rtl" >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/من-نحن" element={<About />} />
        <Route path="/Services" element={<Service />} />
        <Route path="/Departments" element={<Departments />} />
        <Route path="/الشروط-والأحكام" element={<Terms />} />
        <Route path="/سياسة-الخصوصية" element={<privacy />} />
      </Routes>
    </div>
  )
}

export default App