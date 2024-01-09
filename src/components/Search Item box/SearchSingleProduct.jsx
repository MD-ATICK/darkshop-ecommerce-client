import React from 'react'
import { Link } from 'react-router-dom'

function SearchSingleProduct({ ssp }) {

    const { images, name, price, _id } = ssp

    return (
        <Link to={`/product/details/${name}~${_id}`} className='flex gap-x-3 hover:bg-gray-100 rounded-lg p-2 cursor-pointer px-3'>
            <img className=' h-10 w-10 shadow-md' src={images[0]} alt="" />
            <div className='-mt-1'>
                <p className='text-[16px] tracking-wide font-sans'>{name}</p>
                <p className=' font-[500] text-[15px] font-sans text-red-600'>{price} tk</p>
            </div>
        </Link>
    )
}

export default SearchSingleProduct