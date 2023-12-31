import React from 'react'
import 'swiper/css'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import SingleFutureProduct from '../Future Products/SingleFutureProduct'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom'


function RelatedProducts({ relatedProds }) {

  const shopProducts = [
    {
      name: 'short pant', images: ['https://fabrilife.com/image-gallery/638741f4ba04f-square.jpg'], discount: 5, price: 500, avgRating: 4
    },
    {
      name: 'short pant', images: ['https://fabrilife.com/image-gallery/638741f4ba04f-square.jpg'], discount: 5, price: 500, avgRating: 4
    },
    {
      name: 'short pant', images: ['https://fabrilife.com/image-gallery/638741f4ba04f-square.jpg'], discount: 5, price: 500, avgRating: 4
    },
    {
      name: 'short pant', images: ['https://fabrilife.com/image-gallery/638741f4ba04f-square.jpg'], discount: 5, price: 500, avgRating: 4
    },
    {
      name: 'short pant', images: ['https://fabrilife.com/image-gallery/638741f4ba04f-square.jpg'], discount: 5, price: 500, avgRating: 4
    },
    {
      name: 'short pant', images: ['https://fabrilife.com/image-gallery/638741f4ba04f-square.jpg'], discount: 5, price: 500, avgRating: 4
    },
    {
      name: 'short pant', images: ['https://fabrilife.com/image-gallery/638741f4ba04f-square.jpg'], discount: 5, price: 500, avgRating: 4
    },
    {
      name: 'short pant', images: ['https://fabrilife.com/image-gallery/638741f4ba04f-square.jpg'], discount: 5, price: 500, avgRating: 4
    },
  ]

  return (
    <div className=' w-full pt-4'>
      <div className=' max-w-7xl mx-auto sm:px-2 px-4 pb-0 pt-0 sm:pt-0'>
        <p className=' w-full font-[700] px-5 pb-1 font-sans text-[25px] flex items-center gap-4 text-stone-700  border-teal-700'><span className='h-4 w-4 shadow-md mt-1 rounded-full bg-sky-600'></span>Related Products <span className='pt-1 text-teal-900'>({relatedProds.length})</span></p>
        <div className='py-4 px-5 sm:px-1 relative'>

          {/* left and right two white scene */}
          {/* <div className=' h-full w-[50px] bg-white z-50 absolute left-0 top-0'></div>
          <div className=' h-full w-[50px] bg-white z-50 absolute right-0 top-0'></div> */}
          {/* left and right two white scene end */}
          <div className=' w-full  border-purple-900'>
            <div className=' w-full overflow-x-scroll gap-x-5 flex  '>
              {relatedProds.map((p, i) => {
                const { images, _id, name, price } = p
                return <Link to={`/product/details/${name}~${_id}`} key={_id} className=' sm:min-w-[160px] pb-1 cursor-pointer min-w-[250px]'>
                  <img src={images[0]} className=' w-full max-w-[250px]' alt="" />
                  <p className=' font-sans pl-1 font-semibold text-[14px] text-stone-700 capitalize pt-2'>{name}</p>
                  <div className='flex items-center justify-between pr-2 py-2 -mt-1  gap-x-2'>
                    <p className='font-semibold sm:text-[23px] text-[26px] text-teal-700'>${p.price - (Math.floor(p.price * (p.discount / 100)))}</p>
                    {/* <p className='font-[400] sm:text-[12px] text-[13px] text-stone-500'> <s className='pr-1'>${price}</s> (%{discount})</p> */}
                    <div className=' pointer-events-none'>
                      <ReactStars
                        value={p.avgRating}
                        // onChange={ratingChanged}
                        size={19}
                        isHalf={false}
                        emptyIcon={<i className="far fa-star"></i>}
                        // halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#0989a0"
                      />
                    </div>

                  </div>
                </Link>
              })}
            </div>
          </div>


        </div>
      </div>
    </div >
  )
}

export default RelatedProducts