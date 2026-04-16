// Materinal UI
import NorthWestIcon from '@mui/icons-material/NorthWest';



import Blog from './Blog/Blog';
import BlogsCards from './BlogsCards';



const Blogs = ({blogs}) => {


  return (
    <section className='bg-bgWhite'>
      <div className='container'>

        <div className='" flex justify-between items-start flex-col gap-6 max-w-[350px]"'>

          {/* Title Start */}
          <div className="flex justify-between items-start flex-col gap-6">
            {/* Title Content */}
            <div className="flex flex-col gap-2">
              <p className="text-title">المدونة</p>
              <h2 className="text-primry text-[32px] md:text-[48px]">{blogs?.title}</h2>
              <p className="text-text">{blogs?.description}</p>
            </div>

            {/* Title Btn */}
            <div className="">
              <button className="title-btn"> استكشف المقالات<NorthWestIcon /></button>
            </div>
          </div>

          {/* Content Start */}
          <BlogsCards blogs={blogs} />
          {/* Content End */}
        </div>
      </div>

    </section>
  )
}

export default Blogs