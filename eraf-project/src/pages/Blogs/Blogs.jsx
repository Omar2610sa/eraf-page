// Imports components
import Navbar from "../../components/Navbar/Navbar"
import BlogsCards from "../../components/Blogs/BlogsCards"
import Footer from "../../components/Footer/Footer"

// Material Ui 
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

// Imports Hooks
import useFetch from "@/Hooks/useFetch/useFetch";

// Material Ui
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


import { createTheme, ThemeProvider } from "@mui/material/styles";

const Blogs = () => {
    const { data: blogs, } = useFetch("/api/client/blogs");
    const theme = createTheme({
        palette: {
            primary: {
                main: "rgba(1, 122, 155, 1)",
            },
        },
    });

    return (
        <div>
            <Navbar />
            <section className='container'>
                {/* Title Start */}
                <div className="flex flex-col justify-center items-center gap-10">

                    <div className='flex flex-col justify-center items-center text-center gap-4'>
                        <p className="text-title">{blogs?.data?.label}</p>
                        <h2 className="text-primry text-[32px] md:text-[48px]">{blogs?.data?.title}</h2>
                        <p className='text-[20px]'>{blogs?.data?.description}</p>
                    </div>
                    <div>
                        <ToggleButtonGroup
                            className="flex gap-6"
                            exclusive
                        >
                            <ToggleButton
                                value="all"
                                className="!px-4 !py-1 !border !text-[18px] font-semibold !border-[#E6E6E6] !text-[#7A7A7A] !rounded-lg data-[selected=true]:!bg-[#014755] data-[selected=true]:!text-white"
                            >
                                الكل
                            </ToggleButton>

                            <ToggleButton
                                value="tech"
                                className="!px-4 !py-1 !border !text-[18px] font-semibold !border-[#E6E6E6] !text-[#7A7A7A] !rounded-lg data-[selected=true]:!bg-[#014755] data-[selected=true]:!text-white"
                            >
                                مقالات تقنية
                            </ToggleButton>

                            <ToggleButton
                                value="company"
                                className="!px-4 !py-1 !border !text-[18px] font-semibold !border-[#E6E6E6] !text-[#7A7A7A] !rounded-lg data-[selected=true]:!bg-[#014755] data-[selected=true]:!text-white"
                            >
                                اخبار الشركة
                            </ToggleButton>

                            <ToggleButton
                                value="updates"
                                className="!px-4 !py-1 !border !text-[18px] font-semibold !border-[#E6E6E6] !text-[#7A7A7A] !rounded-lg data-[selected=true]:!bg-[#014755] data-[selected=true]:!text-white"
                            >
                                أخر المستجدات
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </div>
                {/* Title End */}
                {/* Content Start */}
                <BlogsCards blogs={blogs} />
                {/* Content End */}
                {/* Toggle Btns */}

                {/* Toggles btns */}
                <div className="flex justify-center items-center mt-20" dir="ltr" >
                    <Stack spacing={1}>
                        <ThemeProvider theme={theme}>
                            <Pagination count={13} size="large" color="primary" />
                        </ThemeProvider>

                    </Stack>
                </div>

            </section>


            <Footer />

        </div>
    )
}

export default Blogs