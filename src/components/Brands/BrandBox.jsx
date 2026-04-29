

const BrandBox = ({image}) => {
    return (
        <div className='py-4 p-8 md:px-8 md:py-4 rounded-2xl border border-borderGray flex justify-center items-center '>
            <img src={image} className='w-25 h-20 object-contain' width={100} height={80} loading="lazy" alt="brand" />
        </div>
    )
}

export default BrandBox