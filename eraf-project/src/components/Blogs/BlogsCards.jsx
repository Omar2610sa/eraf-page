import Blog from "./Blog/Blog"

const BlogsCards = ({ blogs }) => {
    return (
        <div>
            <div className='grid md:grid-cols-3 gap-[24px] my-5'>
                {
                    blogs?.features.map((card) => {
                        return <Blog key={card.id} id={card.id} image={card?.media} label={card?.label} title={card?.title} description={card?.description} date={card?.date} />
                    })

                }
            </div>
        </div>
    )
}

export default BlogsCards