import React from 'react'
import SingleFutureProduct from '../Future Products/SingleFutureProduct'

function SellerShopProduct({ shopProds , shopname }) {

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
  ]

  return (
    <div className=' w-full px-3 sm:mt-4'>
      <p className=' w-full bg-gray-200 px-5 py-2 text-[15px] font-sans font-semibold tracking-wide flex items-center gap-3 text-black  border-teal-700'><span className='h-2 w-2 rounded-full bg-sky-600'></span>From the <span className=' -mx-1 font-sans text-[16px] font-semibold text-teal-700'>{shopname}</span> shop</p>
      <div className="grid gap-6 grid-cols-2 sm:pb-0 py-5">
        {
          shopProds.map((p, i) => {
            return <SingleFutureProduct key={i} product={p} />
          })
        }
      </div>
    </div>
  )
}

export default SellerShopProduct