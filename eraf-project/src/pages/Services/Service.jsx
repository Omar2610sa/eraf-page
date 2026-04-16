// Imports components
import Navbar from "../../components/Navbar/Navbar";
import ServicesCards from "../../components/Services/ServicesCards";
import Footer from "../../components/Footer/Footer";

// Hooks
import { useState } from "react";
import useFetch from "@/Hooks/useFetch/useFetch";

// MUI
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

// Theme
const themeConfig = createTheme({
    palette: {
        primary: {
            main: "rgba(1, 122, 155, 1)",
        },
    },
});

const Service = () => {
    const { data: services } = useFetch("/api/client/services");

    const [page, setPage] = useState(1);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const handleChange = (event, value) => {
        setPage(value);

        
        // console.log("Current page:", value);
    };

    return (
        <div>
            <Navbar />

            <section className="container">

                {/* Title */}
                <div className="flex flex-col justify-center items-center text-center gap-4">
                    <p className="text-title">{services?.data?.label}</p>
                    <h2 className="text-primry text-[32px] md:text-[48px]">
                        {services?.data?.title}
                    </h2>
                    <p className="text-[20px]">
                        {services?.data?.description}
                    </p>
                </div>

                {/* Cards */}
                <ServicesCards services={services} page={page} />

                {/* Pagination */}
                <div className="flex justify-center items-center mt-20" dir="ltr">
                    <Stack spacing={1}>
                        <ThemeProvider theme={themeConfig}>

                            <Pagination
                                page={page}
                                onChange={handleChange}
                                count={13}
                                size="large"
                                color="primary"
                                siblingCount={isMobile ? 0 : 1}
                            />

                        </ThemeProvider>
                    </Stack>
                </div>

            </section>

            <Footer />
        </div>
    );
};

export default Service;