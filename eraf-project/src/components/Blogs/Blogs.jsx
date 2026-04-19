// Materinal UI
import NorthWestIcon from '@mui/icons-material/NorthWest';

import { useLanguage } from "../../contexts/LanguageContext.jsx";
import {  texts } from "../../utils/localization.js";

import Blog from './Blog/Blog';
import BlogsCards from './BlogsCards';

import { Link } from "react-router-dom";


const Blogs = ({ blogs }) => {
    const { lang } = useLanguage();


  return (
    <section className='bg-bgWhite'>
      <div className='container'>


          {/* Title Start */}
          <div className="flex justify-between items-start md:items-end flex-col md:flex-row gap-6">
            {/* Title Content */}
              <div className='flex flex-col'>
                <p className="text-title">{blogs?.label}</p>
                <h2 className="text-primry text-[32px] md:text-[48px]">{blogs?.title}</h2>
                <p className="text-text">{blogs?.description}</p>
              </div>


              {/* Title Btn */}
                <Link to="/المدونة">
                  <button className="title-btn"> {texts[lang].exploreBLogs}<NorthWestIcon /></button>
                </Link>
          </div>
          {/* Content Start */}
          <BlogsCards blogs={blogs} />
          {/* Content End */}
        </div>

    </section>
  )
}

export default Blogs