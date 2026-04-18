// Imports components
import Navbar from "../../components/Navbar/Navbar"
import BlogsCards from "../../components/Blogs/BlogsCards"
import Footer from "../../components/Footer/Footer"
// Imports Hooks
import useFetch from "@/Hooks/useFetch/useFetch";
import { useState, useCallback } from "react";

// Material Ui
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import { ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme, createTheme } from "@mui/material/styles";

const Blogs = () => {
    const { data: blogs } = useFetch("/api/client/blogs");

    const [page, setPage] = useState(1);
    const [activeFilter, setActiveFilter] = useState("all");

    // Pagination theme and responsiveness
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const handleChange = useCallback((event, value) => {
        setPage(value);
    }, []);

    const handleFilter = useCallback((filter) => {
        setActiveFilter(filter);
        setPage(1);
    }, []);

    const itemsPerPage = 9;

    const themeConfig = createTheme({
        palette: {
            primary: {
                main: "rgba(1, 122, 155, 1)",
            },
        },
    });

    const labelMap = {
        tech: "مقالات تقنية",
        company: "اخبار الشركة",
        updates: "أخر المستجدات"
    };

    const expectedLabel = labelMap[activeFilter];
    const filteredFeatures = expectedLabel
        ? (blogs?.features?.filter(card => card.label === expectedLabel) || [])
        : blogs?.features || [];

    const paginatedFeatures = filteredFeatures.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
    );

    const filteredBlogs = {
        ...blogs,
        features: paginatedFeatures
    };


    return (
        <div className="bg-BlogsBgColor">
            <Navbar />
            <section className='container '>
                {/* Title Start */}
                <div className="flex flex-col justify-center items-center gap-10">

                    <div className='flex flex-col justify-center items-center text-center gap-4'>
                        <p className="text-title">{blogs?.data?.label}</p>
                        <h2 className="text-primry text-[32px] md:text-[48px]">{blogs?.data?.title}</h2>
                        <p className='text-[20px]'>{blogs?.data?.description}</p>
                    </div>
                    {/* Filters Btns */}
                    <div className="flex gap-6 mb-20">
                        <button
                            onClick={() => handleFilter("all")}
                            className={`px-4 py-3 border text-[18px]  border-borderLightGray text-gray rounded-lg hover:border-gray cursor-pointer transition-all ${activeFilter === "all" ? "bg-primry text-white" : ""}`}
                        >
                            الكل
                        </button>

                        <button
                            onClick={() => handleFilter("tech")}
                            className={`px-4 py-3 border text-[18px]  border-borderLightGray text-gray rounded-lg hover:border-gray cursor-pointer transition-all ${activeFilter === "tech" ? "bg-primry text-white" : ""}`}
                        >
                            مقالات تقنية
                        </button>

                        <button
                            onClick={() => handleFilter("company")}
                            className={`px-4 py-3 border text-[18px]  border-borderLightGray text-gray rounded-lg hover:border-gray cursor-pointer transition-all ${activeFilter === "company" ? "bg-primry text-white" : ""}`}
                        >
                            اخبار الشركة
                        </button>

                        <button
                            onClick={() => handleFilter("updates")}
                            className={`hidden md:flex px-4 py-3 border text-[18px]  border-borderLightGray text-gray rounded-lg hover:border-gray cursor-pointer transition-all ${activeFilter === "updates" ? "bg-primry text-white" : ""}`}
                        >
                            أخر المستجدات
                        </button>
                    </div>
                </div>
                {/* Title End */}
                {/* Content Start */}
                <BlogsCards blogs={filteredBlogs} />
                {/* Content End */}
                {/* Toggle Btns */}

                {/* Toggles btns */}
                <div className="flex justify-center items-center mt-20" dir="ltr">
                    <Stack spacing={1}>
                        <ThemeProvider theme={themeConfig}>

                            {(() => {
                                const totalPages = Math.ceil(filteredFeatures.length / itemsPerPage);
                                return (
                                    <Pagination
                                        page={page}
                                        onChange={handleChange}
                                        count={totalPages}
                                        size="large"
                                        color="primary"
                                        siblingCount={isMobile ? 0 : 1}
                                    />
                                );
                            })()}

                        </ThemeProvider>
                    </Stack>
                </div>

            </section>


            <Footer />

        </div>
    )
}

export default Blogs
