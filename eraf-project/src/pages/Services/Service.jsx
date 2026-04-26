import { useState, useCallback, memo } from "react";
import { useLanguage } from "../../contexts/LanguageContext.jsx";
import { getLocalizedText } from "../../utils/localization.js";
import Navbar from "../../components/Navbar/Navbar";
import ServicesCards from "../../components/Services/ServicesCards";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Loading/Loading";
import useFetch from "../../Hooks/useFetch/useFetch";

// MUI
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme, createTheme } from "@mui/material/styles";

// Theme (hoisted static)
const themeConfig = createTheme({
    palette: {
        primary: {
            main: "rgba(1, 122, 155, 1)",
        },
    },
});

const Service = () => {
    const { data: services, loading } = useFetch("/api/client/services");

    const { lang } = useLanguage();

    const [page, setPage] = useState(1);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const handleChange = useCallback((event, value) => {
        setPage(value);
    }, []);

    const itemsPerPage = 8;

    const paginatedServices = {
        ...services,
        features: services?.features?.slice((page - 1) * itemsPerPage, page * itemsPerPage) || []
    };

    const totalPages = Math.ceil((services?.features?.length || 0) / itemsPerPage);

    const label = getLocalizedText(services?.data, 'label', lang);
    const title = getLocalizedText(services?.data, 'title', lang);
    const description = getLocalizedText(services?.data, 'description', lang);

    console.log(services);
    if (loading) return <Loading />;

return (
        <main>
            <Navbar />

            <section className="container">

                {/* Title */}
                <div className="flex flex-col justify-center items-center text-center gap-4">
                    <p className="text-title">{label}</p>
                    <h2 className="text-primry text-[32px] md:text-[48px]">
                        {title}
                    </h2>
                    <p className="text-[20px]">
                        {description}
                    </p>
                </div>

                {/* Cards */}
                <ServicesCards services={paginatedServices} page={page} />

                {/* Pagination */}
                <div className="flex justify-center items-center mt-20" >
                    <Stack spacing={1}>
                        <ThemeProvider theme={themeConfig}>

                            <Pagination
                                page={page}
                                onChange={handleChange}
                                count={totalPages}
                                size="large"
                                color="primary"
                                siblingCount={isMobile ? 0 : 1}
                            />

                        </ThemeProvider>
                    </Stack>
                </div>

            </section>

            <Footer />
        </main>
    );
};


export default memo(Service);

