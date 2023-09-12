import React from 'react'

function SingleRelatedProduct({ product }) {
    const { name, image, price, discount } = product
    return (
        <div>
            <div className=' relative'>
                <Link to={`/product/details/${name.split(' ').join('-')}`} >
                    <img loading='lazy' src={image} className='  hover:shadow-lg  duration-200' alt="" />
                </Link>
                <div className='h-8 w-16 absolute top-4 left-4 rounded-full bg-teal-700 text-white font-[500] flex justify-center items-center'>
                    <p className='text-[14px]'>{discount}% OFF</p>
                </div>
                <button className=' h-10 w-10 hover:shadow-lg hover:bg-teal-800 absolute bottom-5 right-8 bg-teal-700 rounded-full flex justify-center items-center'>
                    <HiShoppingCart className=' text-white text-xl' />
                </button>
            </div>
            <p className='md:pt-2 md:pb-0 py-4 font-[600] font-sans sm:text-[14px] text-[16px] tracking-wide text-stone-700 pl-2'>{name}</p>
            <div className='flex items-center px-2 justify-between'>
                <p className='font-semibold sm:text-[16px] text-[24px] text-teal-700'>${price}</p>
            </div>
        </div>
    )
}

export default SingleRelatedProduct