import React from 'react'
import { GiAutoRepair } from 'react-icons/gi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { changeScreenShow, delete_wishlist } from '../../store/reducers/WishlistReducer'
import { Link } from 'react-router-dom'
import { add_cart } from '../../store/reducers/CartReducer'
import { toast } from 'react-toastify'

function SingleWishlistCard({ product }) {

    const dispatch = useDispatch()
    const { carts } = useSelector(state => state.cart)
    const { fetch, customer } = useSelector(state => state.auth)
    const is_cart_find = carts.find(p => p._id === product._id)

    return (
        <div className=' w-full bg-white p-2'>
            <Link onClick={() => dispatch(changeScreenShow(false))} to={`/product/details/${product._id}`} className='flex gap-x-4 pb-3 border-b border-gray-300'>
                <img className='h-[80px]' src={product.images[0]} alt="" />
                <p className='text-[15px] font-sans font-[500] whitespace-normal  tracking-wide text-black'>{product.name} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, debitis?</p>
            </Link>
            <div className='flex items-center justify-between px-2 border-b border-gray-300'>
                <p className=' font-sans text-[15px] py-2 font-[500]'>Price</p>
                <p className=' font-sans text-[16px] text-teal-700 font-[500]'>${product.price}</p>
            </div>
            <div className='flex items-center justify-between pt-3 px-2'>
                <p className=' font-sans text-[15px] font-[500] flex items-center gap-x-2'><GiAutoRepair className='text-stone-500 text-[20px]' /> Action</p>
                <div className='h-[30px] flex gap-x-3 items-center'>
                    <button onClick={() => {
                        if (product.stock === 0) return toast.error('sorry, product is out of stock')
                        if (!customer) return toast.error('login frist to add cart.')
                        if (is_cart_find) return toast.error('this carts already added.')
                        dispatch(add_cart(product))
                        toast.success('carted successed.')
                    }} className={`h-full ${is_cart_find ? ' bg-stone-600' : 'bg-sky-500'} px-3 text-white font-sans text-[15px]`}>Add to cart</button>
                    <button onClick={() => dispatch(delete_wishlist(product._id))} className=' h-full bg-teal-700 px-2 text-white'>
                        <RiDeleteBin6Line className='text-[17px]' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SingleWishlistCard