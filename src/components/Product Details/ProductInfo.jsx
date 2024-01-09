import React, { useEffect, useState } from 'react'
import { HiStar, HiFilter, HiOutlineStar } from 'react-icons/hi'
import { AiFillHeart, AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai'
import Carousel from 'react-multi-carousel'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from '../../api/api'
import { ClipLoader, ScaleLoader } from 'react-spinners'


function ProductInfo({ singleProd, rl }) {

  const { _id, name, price, description, shopName, sellerId, stock, images, discount } = singleProd
  const [showImg, setshowImg] = useState('');
  const [quantity, setquantity] = useState(1);
  const token = localStorage.getItem('dsc-token')
  const navigate = useNavigate()
  const [load, setload] = useState(false);


  console.log('✅ sellleId', sellerId)

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    }
  }

  const send_message = async () => {
    setload(true)
    const { data, status } = await api.post('/v6/chat/create-chat', { oppositeUser: sellerId }, { headers: { Authorization: `Bearer ${token}` } })
    if (status === 201) {
      console.log(data)
      setload(false)
      toast.success('succesffully chat post api worked.')
      navigate(`/chats/${data.chat._id}`, { state: data.chat })
    }
  }


  useEffect(() => {
    setshowImg(images[0])
  }, [singleProd]);


  const addTocartHandler = () => {
    if (stock === 0) return toast.error('that product is out of stock.')
    const carts = localStorage.getItem('carts')
    const pcarts = JSON.parse(carts)
    if (!carts || pcarts.length === 0) {
      return localStorage.setItem('carts', JSON.stringify([{ ...singleProd, quantity }]))
    }
    const find = pcarts.find(pc => pc._id === singleProd._id)
    if (find) return toast.error('cart already added.')
    localStorage.setItem('carts', JSON.stringify([...pcarts, { ...singleProd, quantity }]))
    toast.success('card added successed.')
  }

  return (
    <div className=' w-full sm:mt-2 mt-6 '>
      <div className=' max-w-7xl mx-auto p-3 gap-y-8 grid grid-cols-2 md:grid-cols-1'>
        {/* left */}
        <div className='left md:w-full h-fit border-sky-600 sm:px-0 px-4 flex flex-col'>
          <img src={showImg} className=' w-full max-h-[600px] object-cover hover:shadow-lg  duration-200' alt="" />
          <div className='mt-6'>
            <Carousel
              autoPlay={true}
              autoPlaySpeed={2000}
              infinite={true}
              arrows={true}
              showDots={false}
              responsive={responsive}
            >
              {images.map((img, i) => {
                return <div onClick={() => setshowImg(img)} key={i} className='p-1'>
                  <img key={i} src={img} className=' hover:scale-105 duration-200 cursor-pointer' alt="" />
                </div>
              })}
            </Carousel>
          </div>
        </div>
        {/* left end */}


        {/* right */}
        <div className='right w-full border-purple-500 flex flex-col sm:gap-y-2 gap-y-4 sm:px-1 px-8'>
          <h1 className=' font-sans sm:text-[25px] text-[30px] font-[700] tracking-wide text-stone-600'>{name}</h1>
          <div className='flex items-center gap-x-3'>
            <div className='flex items-center'>
              <p><HiStar className=' text-yellow-500 sm:text-[18px] text-[22px]' /></p>
              <p><HiStar className=' text-yellow-500 sm:text-[18px] text-[22px]' /></p>
              <p><HiStar className=' text-yellow-500 sm:text-[18px] text-[22px]' /></p>
              <p><HiStar className=' text-yellow-500 sm:text-[18px] text-[22px]' /></p>
              <p><HiStar className=' text-yellow-500 sm:text-[18px] text-[22px]' /></p>
            </div>
            <p className=' text-teal-700 tracking-wide text-[14px] '>({rl} reviews)</p>
          </div>
          <div className='flex items-center gap-x-3 -mt-3'>
            <h1 className=' font-sans sm:text-[30px] text-[30px] font-[700] tracking-wide text-orange-600'>${(price - (price * discount / 100)).toFixed(2)}</h1>
            <h1 className=' font-sans sm:text-[24px] text-[24px] font-[700] tracking-wide text-stone-400'><s>${price} </s> (-{discount}%)</h1>
          </div>
          <p className=' text-[14px] leading-[1.3rem] tracking-wide text-stone-500'>{description}   Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, hic omnis ab repellat officia fugiat reiciendis quisquam repudiandae ea! Ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae reprehenderit optio perspiciatis iusto omnis voluptatum modi nesciunt? Laudantium, eum doloribus.       </p>
          <div className='mt-2 flex items-center gap-x-4'>
            <button className='py-2 px-4 border-2 rounded-md border-black text-[18px] tracking-wide font-sans font-semibold hover:scale-105 duration-150'>MD</button>
            <button className='py-2 px-4 border-2 rounded-md border-black text-[18px] tracking-wide font-sans font-semibold hover:scale-105 duration-150'>LG</button>
            <button className='py-2 px-4 border-2 rounded-md border-black text-[18px] tracking-wide font-sans font-semibold hover:scale-105 duration-150'>XS</button>
            <button className='py-2 px-4 border-2 rounded-md border-black text-[18px] tracking-wide font-sans font-semibold hover:scale-105 duration-150 bg-black shadow-md text-white'>XL</button>
            <button className='py-2 px-4 border-2 rounded-md border-black text-[18px] tracking-wide font-sans font-semibold hover:scale-105 duration-150'>2XL</button>
            <button className='py-2 px-4 border-2 rounded-md border-black text-[18px] tracking-wide font-sans font-semibold hover:scale-105 duration-150'>3XL</button>
          </div>
          <div className='mt-3 flex items-center gap-x-3'>
            <h1 className='text-[18px] tracking-wide font-sans font-semibold'>Choose Your Color :</h1>
            <div className='mt-1 flex items-center gap-x-3'>
              <button className='h-6 w-6 border-gray-800 cursor-pointer  rounded-full bg-sky-600 shadow-md'></button>
              <button className='h-6 w-6 border-gray-800 cursor-pointer outline-[3px] outline-stone-500 outline outline-offset-2 rounded-full bg-red-600 shadow-md'></button>
              <button className='h-6 w-6 border-gray-800 cursor-pointer  rounded-full bg-purple-800 shadow-md'></button>
              <button className='h-6 w-6 border-gray-800 cursor-pointer  rounded-full bg-gray-300 shadow-lg'></button>
              <button className='h-6 w-6 border-gray-800 cursor-pointer  rounded-full bg-teal-800 shadow-md'></button>
            </div>
          </div>
          <div className=' flex sm:gap-x-5 gap-x-8 py-5  pt-3'>
            <div className='flex items-center bg-gray-300'>
              <button className='text-[19px] tracking-wide sm:px-x px-5  text-black  duration-150 hover:scale-105' onClick={() => quantity > 1 && setquantity(prev => prev -= 1)}>-</button>
              <p className='py-[2px] text-[18px] px-2  font-[500]'>{quantity}</p>
              <button className='text-[19px] tracking-wide sm:px-x px-5   text-black  duration-150 hover:scale-105' onClick={() => quantity < 6 && setquantity(prev => prev += 1)}>+</button>
            </div>
            <button id='add to cart button' onClick={addTocartHandler} className='text-[14px] flex items-center gap-x-2 tracking-wide py-3 sm:px-4 px-6 bg-teal-700 shadow-md font-[500] text-white duration-150 hover:scale-105'>Add to card <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            </button>
            {/* <button className='text-[22px] tracking-wide py-3 px-[14px] bg-sky-600 shadow-md font-[500] text-white rounded-lg duration-150 hover:scale-105'><AiFillHeart /></button> */}
          </div>

          <div className="flex items-center justify-between px-4 gap-x-6 bg-gray-200">

            <Link id='seller info and direct message system' to={`/seller-profile/${sellerId._id}`} className=' py-3 px-4 pr-8 cursor-pointer  flex gap-x-4 items-center'>
              <img className=' h-12 w-12 rounded-full shadow-md' src={sellerId?.avatar || 'https://e7.pngegg.com/pngimages/136/22/png-clipart-user-profile-computer-icons-girl-customer-avatar-angle-heroes-thumbnail.png'} alt="" />
              <div className='flex flex-grow justify-between items-center'>
                <div >
                  <p className=' font-sans text-[15px] font-semibold tracking-wide'>{shopName} (shop)</p>
                  <p className='text-[14px] tracking-wide text-stone-600'><span className=' font-sans text-[16px] font-semibold'>3.2k</span> followers</p>
                </div>
              </div>
            </Link>
            <button onClick={token && send_message} className='text-[16px] font-sans font-semibold tracking-wide p-2 px-3 rounded-md bg-sky-600 text-white shadow-sm hover:scale-110 duration-150'>
             { load ?
               <ClipLoader color='white' cssOverride={{ borderWidth : '4px'}} /> :
               'send message'
             }
            </button>
          </div>

          {/* ar porer onso */}
          <div className='flex flex-col gap-y-6'>
            <div className='flex items-center gap-x-10'>
              <h1 className=' font-sans text-[24px] font-[700] tracking-wide text-stone-800'>{stock > 0 ? 'available' : 'unavialable'}</h1>
              {
                stock === 0 ?
                  <p className='text-[18px] font-sans font-[700] text-orange-700 tracking-wide '>Out of Stock ({0})</p>
                  :
                  <p className='text-[18px] font-sans font-[700] text-green-700 tracking-wide '>In Stock ({stock})</p>
              }
            </div>
            <div className='flex items-center gap-x-14'>
              <h1 className=' font-sans text-[22px] font-[700] tracking-wide text-stone-800'>Share On</h1>
              <div className='flex items-center gap-x-3'>
                <p className='h-10 w-10 rounded-md flex justify-center items-center shadow-md bg-teal-700 text-white'>x</p>
                <p className='h-10 w-10 rounded-md flex justify-center items-center shadow-md bg-teal-700 text-white'>x</p>
                <p className='h-10 w-10 rounded-md flex justify-center items-center shadow-md bg-teal-700 text-white'>x</p>
                <p className='h-10 w-10 rounded-md flex justify-center items-center shadow-md bg-teal-700 text-white'>x</p>
              </div>
            </div>
          </div>
        </div>
        {/* right end */}
      </div >
    </div >
  )
}

export default ProductInfo