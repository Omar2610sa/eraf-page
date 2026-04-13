// Materinal UI
import NorthWestIcon from '@mui/icons-material/NorthWest';

// Imports Image
import blogImage1 from "../../assets/images/blogs/Image (3_2).png"
import blogImage2 from "../../assets/images/blogs/Image.png"
import blogImage3 from "../../assets/images/blogs/Image (3_2) (1).png"


import Blog from './Blog/Blog';



const Blogs = () => {

  const blogCards = [{
    image: blogImage1,
    label: "مقالات تقنية",
    title: "دليل الرعاية الصحية المنزلية لكبار السن",
    description: "تعرف على أهم خطوات رعاية كبار السن في المنزل، وكيفية توفير بيئة آمنة ومريحة تدعم صحتهم اليومية.",
    date: "1 ابريل 2026",
  }, {
    image: blogImage2,
    label: "اخبار الشركة",
    title: "متى تحتاج إلى خدمات التمريض المنزلي؟",
    description:"اكتشف الحالات التي تتطلب رعاية تمريضية منزلية، وكيف تساهم هذه الخدمة في تحسين راحة المريض وجودة الرعاية.",
    date: "1 ابريل 2026",
  }, {
    image: blogImage3,
    label: "مقالات تقنية",
    title: "نصائح للتعافي الآمن بعد العمليات في المنزل",
    description: "تعرّف على أهم الإرشادات التي تساعد على التعافي بعد العمليات الجراحية، وتدعم الرعاية الآمنة داخل المنزل.",
    date: "1 ابريل 2026",
  },]

  return (
    <section className='bg-bgWhite -mt-48'>
      <div className='container flex flex-col justify-center gap-18'>

        {/* Title Start */}
        <div className="flex justify-between items-end">
          {/* Title Content */}
          <div className="flex flex-col gap-2">
            <p className="text-title">المدونة</p>
            <h2 className="text-primry text-[48px]">آخر الأخبار والمقالات الصحية</h2>
            <p className="text-gray">آخر الأخبار والمقالات الصحية</p>
          </div>

          {/* Title Btn */}
          <div className="">
            <button className="title-btn"> استكشف المقالات<NorthWestIcon /></button>
          </div>
        </div>

        {/* Content Start */}
        <div className='grid grid-cols-3 gap-[24px] my-5'>
          {
            blogCards.map((card, index) => {
              return <Blog key={index} image={card.image} label={card.label} title={card.title} description={card.description} date={card.date} />
            })
          }
        </div>
        {/* Content End */}
      </div>

    </section>
  )
}

export default Blogs