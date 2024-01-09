import React, { useEffect } from 'react'
import ReactStars from "react-rating-stars-component";
import { HiMail, HiShoppingCart } from 'react-icons/hi'
import { Link, useNavigate } from 'react-router-dom';
import { AiFillDelete, AiFillHeart, AiOutlineDelete, AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { add_wishlist, get_wishlist } from '../../store/reducers/WishlistReducer'
import { toast } from 'react-toastify'
import { add_cart } from '../../store/reducers/CartReducer';
import { ClipLoader } from 'react-spinners';


// N :- ata shope o single product hisabe use kora hoiyaace.

function SingleFutureProduct({ product, size }) {

    const { customer, fetch, status } = useSelector(state => state.auth)
    const { wishlists } = useSelector(state => state.wishlist)
    const { carts } = useSelector(state => state.cart)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { _id, name, images, discount, price, avgRating } = product

    const is_wish_have = wishlists.find(w => w._id === product._id)
    const is_cart_have = carts.find(c => c._id === product._id)


    const wishlist_hanlder = () => {
        if (is_wish_have) return toast.error('this wishlist already added you before.')
        dispatch(add_wishlist(product))
    }

    const cart_hanlder = () => {
        if (product.stock === 0) return toast.error('sorry, product is out of stock.')
        if (fetch && !customer) {
            navigate('/login')
            return toast.error(' pls login for access all services.!')
        }
        if (is_cart_have) return toast.error('this cart already added you before.')
        dispatch(add_cart(product))
    }


    return (
        <div>
            <div className={`relative aspect-square w-full`}>
                <div className='' onClick={() => navigate(`/product/details/${name}~${_id}`)} >
                    <div className=' h-full w-full bg-gray-100 absolute top-0 left-0 flex justify-center items-center'> <ClipLoader size={50} color='black' cssOverride={{ borderWidth: '5px' }} /> </div>
                    <img loading='lazy' src={images[0]} className=' absolute top-0 left-0 h-full w-full  hover:shadow-lg  object-cover duration-200' alt="" />
                </div>

                <div className='h-8 w-16 absolute top-4 left-4 rounded-full bg-teal-700 text-white font-[500] flex justify-center items-center'>
                    <p className='text-[12px]'>{discount}% OFF</p>
                </div>
                <div className='absolute bottom-4 right-5 flex items-center gap-x-3'>
                    <button onClick={wishlist_hanlder} className={`h-10 w-10 hover:shadow-lg ${is_wish_have ? ' bg-gradient-to-r from-stone-500 to-stone-700' : 'hover:bg-teal-900  bg-gradient-to-r from-teal-700 to-teal-800'} rounded-full flex justify-center items-center`}>
                        <AiFillHeart className=' text-white text-xl' />
                    </button>
                    <button onClick={cart_hanlder} className={`h-10 w-10 ${is_cart_have ? 'bg-gradient-to-r from-stone-500 to-stone-700' : 'hover:bg-teal-900  bg-gradient-to-r from-teal-700 to-teal-800'}  rounded-full flex justify-center items-center`}>
                        <HiShoppingCart className=' text-white text-xl' />
                    </button>

                </div>
            </div>
            <p className='md:pt-2 md:pb-0 py-4 font-[500] font-sans sm:text-[14px] text-[16px] tracking-wide capitalize text-stone-700 pl-2'>{name}</p>
            <div className='flex items-center px-2 sm:mt-0 -mt-2 justify-between'>
                <div className='flex items-center flex-col  gap-x-2'>
                    <p className='font-semibold sm:text-[22px] text-[26px] text-teal-700'>${price - (Math.floor(price * (discount / 100)))}</p>
                    {/* <p className='font-[400] sm:text-[12px] text-[13px] text-stone-500'> <s className='pr-1'>${price}</s> (%{discount})</p> */}
                </div>
                <div className=' pointer-events-none'>

                    <ReactStars
                        value={avgRating}
                        // onChange={ratingChanged}
                        size={18}
                        isHalf={false}
                        emptyIcon={<i className="far fa-star"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#0989a0"
                    />
                </div>
            </div>
        </div>
    )
}

export default SingleFutureProduct