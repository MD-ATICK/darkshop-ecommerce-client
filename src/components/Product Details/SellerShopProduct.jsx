import React from 'react'
import SingleFutureProduct from '../Future Products/SingleFutureProduct'

function SellerShopProduct() {

  const shopProducts = [
    {
      name : 'short pant', images : ['https://fabrilife.com/image-gallery/638741f4ba04f-square.jpg'], discount : 5, price : 500, avgRating  :4
    } ,
    {
      name : 'short pant', images : ['https://fabrilife.com/image-gallery/638741f4ba04f-square.jpg'], discount : 5, price : 500, avgRating  :4
    } ,
    {
      name : 'short pant', images : ['https://fabrilife.com/image-gallery/638741f4ba04f-square.jpg'], discount : 5, price : 500, avgRating  :4
    } ,
    {
      name : 'short pant', images : ['https://fabrilife.com/image-gallery/638741f4ba04f-square.jpg'], discount : 5, price : 500, avgRating  :4
    } ,
    {
      name : 'short pant', images : ['https://fabrilife.com/image-gallery/638741f4ba04f-square.jpg'], discount : 5, price : 500, avgRating  :4
    } ,
    {
      name : 'short pant', images : ['https://fabrilife.com/image-gallery/638741f4ba04f-square.jpg'], discount : 5, price : 500, avgRating  :4
    } ,
  ]
 
  return (
    <div className=' w-full px-3 sm:mt-4'>
      <p className=' w-full bg-gray-200 px-5 py-2 text-[14px] tracking-wide flex items-center gap-3 text-black  border-teal-700'><span className='h-2 w-2 rounded-full bg-sky-600'></span>From the Mafia Mals shop</p>
      <div className="grid gap-6 grid-cols-2 sm:pb-0 py-5">
        {
          shopProducts.map((p, i) => {
            return <SingleFutureProduct key={i} product={p} />
          })
        }
      </div>
    </div>
  )
}

export default SellerShopProduct