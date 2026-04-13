
// Materinal UI
import NorthWestIcon from '@mui/icons-material/NorthWest';

const Card = ({ image, title }) => {
    return (
        <div className="flex flex-col gap-[32px]">
            {/* Image Start */}
            <div>
                <img src={image} alt="" />
            </div>
            {/* Image End */}

            {/* Content Start */}
            <div className="flex justify-between items-center">
                <h3 className="text-2xl font-[600]">{title}</h3>
                <button className="w-8 h-8 rounded-full border border-b-title flex items-center justify-center cursor-pointer hover:border-none hover:bg-third hover:duration-300">
                    <NorthWestIcon  />
                </button>            </div>
            {/* Content End */}
        </div>
    )
}

export default Card