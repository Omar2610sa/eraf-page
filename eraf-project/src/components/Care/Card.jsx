import leafIcon from "../../assets/images/icons/Badge Background.png"


const Card = ({ title, id, icon, description }) => {
    return (
        <div className="shadow-primary px-4 md:px-2 py-10 rounded-md relative">
            <div className="absolute right-0 top-0">
                <img src={leafIcon} alt="" className="relative" />
                <p className="absolute top-2 right-0.5 flex items-center justify-center z-10 text-white font-bold font-bold">
                    {id}
                </p>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-4">
                <div>
                    <img className="w-14 h-14" src={icon} alt="" />
                </div>
                <h3 className="text-[20px]">{title}</h3>
                <p className="text-[18px]">{description}</p>
            </div>
        </div>
    )
}

export default Card