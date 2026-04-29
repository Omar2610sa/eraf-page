// Routes Pages 
import { lazy, Suspense } from "react";
const Home = lazy(() => import("../pages/Home/Home"))
const About = lazy(() => import("../pages/About/About"));
const Service = lazy(() => import("../pages/Services/Service"));
const Blogs = lazy(() => import("../pages/Blogs/Blogs"));
const BlogDetails = lazy(() => import("../pages/BlogDetails/BlogsDetails"));
const ServiceDetails = lazy(() => import("../pages/ServiceDetails/ServiceDetails"));
const ContactUs = lazy(() => import("../pages/ContactUs/ContactUs"));
const ScrollTop = lazy(() => import("../components/ScrollTop/ScrollTop"));
const Departments = lazy(() => import("../pages/Departments/Departments"));
const Terms = lazy(() => import("../pages/Terms/Terms"));
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy/PrivacyPolicy.jsx"));


const Error404 = lazy(() => import("../components/Error404/Error404"));
const SeverNotFound = lazy(() => import("../SeverNotFound/SeverNotFound"));
const JoinUs = lazy(() => import("../pages/JoinUs.jsx/JoinUs"));

const Loading = lazy(() => import("../components/Loading/Loading"));

// Routs Hook
import { Routes, Route } from "react-router-dom";
import SEO from "../components/SEO/SEO.jsx";

const AppRoutes = () => {
    return (
        <>
            <SEO />
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
                    <Route path="/server-not-found" element={<SeverNotFound />} />
                    <Route path="/المدونة" element={<Blogs />} />
                    <Route path="/إنضم-إلينا" element={<JoinUs />} />
                    <Route path="/الخدمات/:id" element={<ServiceDetails />} />
                    <Route path="/blog/:id" element={<BlogDetails />} />
                </Routes>
            </Suspense>
        </>
    )
}

export default AppRoutes
