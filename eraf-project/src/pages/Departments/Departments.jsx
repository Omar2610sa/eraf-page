import Navbar from "../../components/Navbar/Navbar"

import Footer from "../../components/Footer/Footer"

const Departments = () => {
    return (
        <div>
            <Navbar />
            <section className="container">
                {/* Title Start */}
                <div className='flex flex-col justify-center items-center text-center gap-4'>
                    <p className="text-title">شركاء النجاح</p>
                    <h2 className="text-primry text-[32px] md:text-[48px]">نفخر بثقة شركائنا</h2>
                    <p className='text-text '>شراكات تعكس التزامنا بالجودة والاحترافية في الرعاية الصحية المنزلية.</p>
                </div>
                {/* Title End */}

                {/* Cards */}
            </section>
            <Footer />

        </div>
    )
}

export default Departments