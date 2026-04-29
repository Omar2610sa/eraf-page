

// Materinal UI
import NorthWestIcon from '@mui/icons-material/NorthWest';
import Card from "../../components/Blogs/Blog/Blog";
import { Link } from "react-router-dom";


const RelatedTopics = ({related}) => {
    return (
        <section className='container '>

            <div className='"  max-w-[350px]"'>

                {/* Title Start */}
                <div className="flex justify-between items-start md:items-end flex-col gap-6 md:flex-row ">
                    {/* Title Content */}
                    <div>
                        <h2 className="text-primry text-[32px] md:text-[48px]">مواضيع ذات صلة</h2>
                    </div>

                    {/* Title Btn */}
                    <Link to="/المدونة">
                        <button className="title-btn"> استكشف المزيد<NorthWestIcon /></button>
                    </Link>
                </div>

                {/* Content Start */}
                            {/* Content */}
            <div className="grid md:grid-cols-3 gap-10 mt-10">
                {related?.map((blogs) => (
                    <Card
                        key={blogs.id}
                        image={blogs.media}
                        title={blogs.title}
                        id={blogs.id}
                        label={blogs.label}
                    />
                ))}
            </div>
                {/* Content End */}
            </div>

        </section>
    )
}

export default RelatedTopics