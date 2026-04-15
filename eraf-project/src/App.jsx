// Routes Pages 
import Home from "./pages/Home/Home"
import About from "./pages/About/About";
import Service from "./pages/Services/Service";
import Departments from "./pages/Departments/Departments";
import Terms from "./pages/Terms/Terms";
import PrivacyPolicy from "./pages/privacyPolicy/privacyPolicy"
import ContactUs from "./pages/ContactUs/ContactUs";
import Error404 from "./components/Error404/Error404";

// Routs Hook
import { Routes, Route } from "react-router-dom";
import ScrollTop from "./components/ScrollTop/ScrollTop";

const App = () => {
  return (
    <div dir="rtl" >
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/من-نحن" element={<About />} />
        <Route path="/الخدمات" element={<Service />} />
        <Route path="/الإدارات" element={<Departments />} />
        <Route path="/الشروط-والأحكام" element={<Terms />} />
        <Route path="/سياسة-الخصوصية" element={<PrivacyPolicy />} />
        <Route path="/تواصل-معانا" element={<ContactUs />} />
        <Route path="/404" element={<Error404 />} />

      </Routes>
    </div>
  )
}

export default App