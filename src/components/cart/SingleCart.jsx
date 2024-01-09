import React from 'react'
import { Link } from 'react-router-dom'
import { decrement_quantity, delete_cart, increment_quantity } from '../../store/reducers/CartReducer'
import { useDispatch } from 'react-redux'

function SingleCart({ product }) {

  const dispatch = useDispatch()

  return (
    <div className='flex items-center justify-between pr-4 gap-x-6'>
      <Link to={`/product/details/${product.name}~${product._id}`} >
        <div className='flex items-center gap-x-4'>
          <img src={product.images[0]} className='h-[80px]' alt="" />
          <div className='flex flex-col  justify-between '>
            <div>
              <p className='text-[15px] font-sans font-[500] pb-1 tracking-wide text-stone-700'>{product.name}</p>
              <p className='text-[12px] tracking-wide text-teal-800'><span className=' text-stone-500'>Brand</span> : {product.shopName}</p>
            </div>
            <div className='flex items-center pt-1 gap-x-2'>
              <p className='text-[14px] font-[400] text-orange-600'>${Math.floor(product.price - (product.price * (product.discount / 100)))}</p>
              <p className='text-[13px] font-[400] tracking-wide text-stone-400'>
                <s>${product.price}</s>
                <span>({product.discount}%)</span>
              </p>
            </div>
          </div>
        </div>
      </Link>
      <div className='flex flex-col gap-y-2 '>
        <div className='flex items-center bg-gray-300'>
          <button onClick={() => dispatch(decrement_quantity(product._id))} className='text-[15px] tracking-wide py-[0] px-3   text-black  duration-150 hover:scale-105'>-</button>
          <p className='py-[2px] text-[15px] px-1   font-[500]'>{product.quantity}</p>
          <button onClick={() => dispatch(increment_quantity(product._id))} className='text-[15px] tracking-wide py-[0] px-3   text-black  duration-150 hover:scale-105'>+</button>
        </div>
        <button onClick={() => dispatch(delete_cart(product._id))} className='text-[13px] tracking-wide py-1 px-3 bg-teal-700 shadow-md text-white rounded-md duration-150 hover:scale-105'>Delete</button>
      </div>
    </div>
  )
}

export default SingleCart