// Imports components
import Navbar from "../../components/Navbar/Navbar"

import ServicesCards from "../../components/Services/ServicesCards"



import Footer from "../../components/Footer/Footer"


// Imports Hooks
import useFetch from "@/Hooks/useFetch/useFetch";


// Material Ui
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "rgba(1, 122, 155, 1)",
        },
    },
});

const Service = () => {
    const { data: services, } = useFetch("/api/client/services");

    console.log(services?.features)
    return (
        <div>

            <Navbar />
            <section className="container">
                {/* Title Start */}
                <div className='flex flex-col justify-center items-center text-center gap-4'>
                    <p className="text-title">{services?.data?.label}</p>
                    <h2 className="text-primry text-[32px] md:text-[48px]">{services?.data?.title}</h2>
                    <p className='text-[20px]'>{services?.data?.description}</p>
                </div>
                {/* Title End */}
                <ServicesCards services={services} />

                {/* Toggles btns */}
                <div className="flex justify-center items-center mt-20" dir="ltr" >
                    <Stack spacing={1}>
                        <ThemeProvider theme={theme}>
                            <Pagination count={13} size="large"  color="primary" />
                        </ThemeProvider>

                    </Stack>
                </div>

            </section >
            <Footer />
        </div >

    )
}

export default Service