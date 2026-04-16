
// Materinal UI
import NorthWestIcon from '@mui/icons-material/NorthWest';

const Card = ({ image, title }) => {
    return (
        <div className="flex flex-col gap-12">
            {/* Image Start */}
            <div>
                <img src={image} loading="lazy" alt="" />
            </div>
            {/* Image End */}

            {/* Content Start */}
            <div className="flex justify-between items-center">
                <h3 className="text-2xl font-[600]">{title}</h3>
                <button className="w-12 h-12 md:w-8 md:h-8 rounded-full outline p-5 outline-outline  flex items-center justify-center cursor-pointer hover:outline-none hover:bg-third duration-300 ">
                    <NorthWestIcon  />
                </button>            </div>
            {/* Content End */}
        </div>
    )
}

export default Card