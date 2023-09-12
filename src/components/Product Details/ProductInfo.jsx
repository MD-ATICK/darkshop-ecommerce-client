import React from 'react'
import { HiStar, HiFilter, HiOutlineStar } from 'react-icons/hi'
import { AiFillHeart, AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai'
import Carousel from 'react-multi-carousel'


function ProductInfo() {

  const products = [
    {
      name: 'Long Sleeve causa Shirt for man',
      image: 'https://fabrilife.com/image-gallery/6388945749713-square.jpg',
      discount: 8,
      price: 899,
      avarageRatings: 4
    },
    {
      name: 'Long Sleeve causa Shirt for man and pant more.',
      image: 'https://fabrilife.com/image-gallery/638741f4ba04f-square.jpg',
      discount: 15,
      price: 1599,
      avarageRatings: 3
    },
    {
      name: 'Long Sleeve causa Shirt for man',
      image: 'https://fabrilife.com/image-gallery/638741f4b169a-square.jpg',
      discount: 9,
      price: 299,
      avarageRatings: 1
    },
    {
      name: 'Long Sleeve causa Shirt for man',
      image: 'https://fabrilife.com/image-gallery/6388945749713-square.jpg',
      discount: 8,
      price: 899,
      avarageRatings: 4
    },
    {
      name: 'Long Sleeve causa Shirt for man and pant if more skillable.',
      image: 'https://fabrilife.com/image-gallery/638741f4ba04f-square.jpg',
      discount: 15,
      price: 1599,
      avarageRatings: 3
    },
    {
      name: 'Long Sleeve causa Shirt for man',
      image: 'https://fabrilife.com/image-gallery/638741f4b169a-square.jpg',
      discount: 9,
      price: 299,
      avarageRatings: 1
    },
    {
      name: 'Long Sleeve causa Shirt for man',
      image: 'https://fabrilife.com/image-gallery/6388945749713-square.jpg',
      discount: 8,
      price: 899,
      avarageRatings: 4
    },
    {
      name: 'Long Sleeve causa Shirt for man and pant if more skillable.',
      image: 'https://fabrilife.com/image-gallery/638741f4ba04f-square.jpg',
      discount: 15,
      price: 1599,
      avarageRatings: 3
    },
    {
      name: 'Long Sleeve causa Shirt for man',
      image: 'https://fabrilife.com/image-gallery/638741f4b169a-square.jpg',
      discount: 9,
      price: 299,
      avarageRatings: 1
    },

  ]

  const p1 = products[0]

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

  return (
    <div className=' w-full sm:mt-2 mt-6 '>
      <div className=' max-w-7xl mx-auto p-3 gap-y-8 flex md:flex-col flex-row'>
        {/* left */}
        <div className='left md:w-full w-[600px] h-fit border-sky-600 sm:px-0 px-4 flex flex-col'>
          <img src={p1.image} className=' w-full h-[500px] object-cover hover:scale-105 duration-200' alt="" />
          <div className='mt-6'>
            <Carousel
              autoPlay={true}
              autoPlaySpeed={2000}
              infinite={true}
              arrows={true}
              showDots={false}
              responsive={responsive}
            >
              {products.map((n, i) => {
                return <div key={i} className='p-1'>
                  <img key={i} src={n.image} className=' hover:scale-105 duration-200 cursor-pointer' alt="" />
                </div>
              })}
            </Carousel>
          </div>
        </div>
        {/* left end */}


        {/* right */}
        <div className='right w-full border-purple-500 flex flex-col sm:gap-y-2 gap-y-4 sm:px-1 px-8'>
          <h1 className=' font-sans sm:text-[25px] text-[32px] font-[700] tracking-wide text-stone-600'>{p1.name}</h1>
          <div className='flex items-center gap-x-3'>
            <div className='flex items-center'>
              <p><HiStar className=' text-yellow-500 sm:text-[18px] text-[22px]' /></p>
              <p><HiStar className=' text-yellow-500 sm:text-[18px] text-[22px]' /></p>
              <p><HiStar className=' text-yellow-500 sm:text-[18px] text-[22px]' /></p>
              <p><HiStar className=' text-yellow-500 sm:text-[18px] text-[22px]' /></p>
              <p><HiStar className=' text-yellow-500 sm:text-[18px] text-[22px]' /></p>
            </div>
            <p className=' text-teal-700 tracking-wide text-[14px] '>(23 reviews)</p>
          </div>
          <div className='flex items-center gap-x-3'>
            <h1 className=' font-sans sm:text-[30px] text-[34px] font-[700] tracking-wide text-orange-600'>${p1.price}</h1>
            <h1 className=' font-sans sm:text-[24px] text-[27px] font-[700] tracking-wide text-stone-400'><s>$6999 </s> (-15$)</h1>
          </div>
          <p className=' text-[13px] leading-[1.3rem] tracking-wide text-stone-500'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi et aliquam nam quaerat quod quas facilis repellendus rem accusantium tempore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aut ipsum nostrum, fugiat fuga exercitationem voluptatibus accusantium maiores recusandae, ea laudantium pariatur omnis nisi a. Possimus fugiat officiis quae repellat!
          </p>
          <div className=' flex sm:gap-x-5 gap-x-6 py-5 pb-14 border-b-2'>
            <div className='flex items-center bg-gray-300'>
              <button className='text-[19px] tracking-wide sm:px-x px-5  text-black  duration-150 hover:scale-105'>-</button>
              <p className='py-[2px] text-[18px] px-2  font-[500]'>5</p>
              <button className='text-[19px] tracking-wide sm:px-x px-5   text-black  duration-150 hover:scale-105'>+</button>
            </div>
            <button className='text-[14px] tracking-wide py-3 sm:px-4 px-6 bg-teal-700 shadow-md font-[500] text-white rounded-md duration-150 hover:scale-105'>Add to card</button>
            <button className='text-[22px] tracking-wide py-3 px-[14px] bg-sky-600 shadow-md font-[500] text-white rounded-lg duration-150 hover:scale-105'><AiFillHeart /></button>
          </div>
          {/* ar porer onso */}
          <div className='flex flex-col gap-y-6'>
            <div className='flex items-center gap-x-10'>
              <h1 className=' font-sans text-[24px] font-[700] tracking-wide text-stone-800'>Available</h1>
              <p className='text-[15px] text-green-700 tracking-wide font-[600]'>In Stock (1)</p>
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
      </div>
    </div>
  )
}

export default ProductInfo