// Routes Pages 
import { lazy, Suspense } from "react";
import Home from "./pages/Home/Home"
import About from "./pages/About/About";
import Service from "./pages/Services/Service";
import Blogs from "./pages/Blogs/Blogs";
import BlogDetails from "./pages/BlogDetails/BlogsDetails";
import ContactUs from "./pages/ContactUs/ContactUs";
import ScrollTop from "./components/ScrollTop/ScrollTop";
// Routs Hook
import { Routes, Route } from "react-router-dom";

const Departments = lazy(() => import("./pages/Departments/Departments"));
const Terms = lazy(() => import("./pages/Terms/Terms"));
const PrivacyPolicy = lazy(() => import("./pages/privacyPolicy/privacyPolicy"));
const Error404 = lazy(() => import("./components/Error404/Error404"));
const JoinUs = lazy(() => import("./pages/JoinUs.jsx/JoinUs"));

import Loading from "./components/Loading/Loading";

const App = () => {
  return (
    <div dir="rtl" >
      <ScrollTop />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/من-نحن" element={<About />} />
          <Route path="/الخدمات" element={<Service />} />
          <Route path="/الإدارات" element={<Departments />} />
          <Route path="/الشروط-والأحكام" element={<Terms />} />
          <Route path="/سياسة-الخصوصية" element={<PrivacyPolicy />} />
          <Route path="/تواصل-معانا" element={<ContactUs />} />
          <Route path="/404" element={<Error404 />} />
          <Route path="/المدونة" element={<Blogs />} />
          <Route path="/إنضم-إلينا" element={<JoinUs />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Routes>
      </Suspense>
    </div>
  )
 }

 export default App
