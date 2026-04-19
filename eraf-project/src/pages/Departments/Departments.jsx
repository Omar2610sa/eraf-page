import Navbar from "../../components/Navbar/Navbar"
import Card from "./Card"
import CallUs from "../../components/CallUs/CallUs"
import Footer from "../../components/Footer/Footer"
import Loading from "../../components/Loading/Loading"
// Test Image
import img from "../../assets/borads/Image (3_2).png"
// Import Hooks
import useFetch from "@/Hooks/useFetch/useFetch";

const Departments = () => {

    const intital = [
        {
            image: img,
            title: "أحمد عثمان",
            description: "مدير إدارة المتابعة",
        },
        {
            image: img,
            title: "أحمد عثمان",
            description: "مدير إدارة المتابعة",
        },
        {
            image: img,
            title: "أحمد عثمان",
            description: "مدير إدارة المتابعة",
        },
        {
            image: img,
            title: "أحمد عثمان",
            description: "مدير إدارة المتابعة",
        },
        {
            image: img,
            title: "أحمد عثمان",
            description: "مدير إدارة المتابعة",
        },
        {
            image: img,
            title: "أحمد عثمان",
            description: "مدير إدارة المتابعة",
        },
        {
            image: img,
            title: "أحمد عثمان",
            description: "مدير إدارة المتابعة",
        },
        {
            image: img,
            title: "أحمد عثمان",
            description: "مدير إدارة المتابعة",
        },
        {
            image: img,
            title: "أحمد عثمان",
            description: "مدير إدارة المتابعة",
        },
    ]

    const { data: boards, error, loading } = useFetch("/api/client/boards");

    if (error) return <Error404 />;
        if (loading) return <Loading />;

    return (
        <div>
            <Navbar />
            <section className="container flex flex-col gap-6">
                {/* Title Start */}
                <div className='flex flex-col justify-center items-center text-center gap-4'>
                    <p className="text-title">{boards?.data?.label}</p>
                    <h2 className="text-primry text-[32px] md:text-[48px]">{boards?.data?.title}</h2>
                    <p className='text-text '>{boards?.data?.description}</p>
                </div>
                {/* Title End */}

                {/* Cards */}
                <div className='grid md:grid-cols-3 gap-6 mt-6'>
                {
                    intital.map((card, index) => {
                        return <Card key={index} image={card.image} title={card.title} description={card.description} />;
                    })
                }
                </div>
            </section>
            <CallUs />
            <Footer />

        </div>
    )
}

export default Departments