import React from 'react'
import SingleFutureProduct from './SingleFutureProduct'
import { useSelector } from 'react-redux'

function FutureProducts({ future_products, product_fetch }) {


    // const futureProducts = [
    //     {
    //         name: 'Long Sleeve causa Shirt for man',
    //         image: 'https://fabrilife.com/image-gallery/6388945749713-square.jpg',
    //         discount: 8,
    //         price: 899,
    //         avarageRatings: 4
    //     },
    //     {
    //         name: 'Long Sleeve causa Shirt for man and pant more.',
    //         image: 'https://fabrilife.com/image-gallery/638741f4ba04f-square.jpg',
    //         discount: 15,
    //         price: 1599,
    //         avarageRatings: 3
    //     },
    //     {
    //         name: 'Long Sleeve causa Shirt for man',
    //         image: 'https://fabrilife.com/image-gallery/638741f4b169a-square.jpg',
    //         discount: 9,
    //         price: 299,
    //         avarageRatings: 1
    //     },
    //     {
    //         name: 'Long Sleeve causa Shirt for man',
    //         image: 'https://fabrilife.com/image-gallery/6388945749713-square.jpg',
    //         discount: 8,
    //         price: 899,
    //         avarageRatings: 4
    //     },
    //     {
    //         name: 'Long Sleeve causa Shirt for man and pant if more skillable.',
    //         image: 'https://fabrilife.com/image-gallery/638741f4ba04f-square.jpg',
    //         discount: 15,
    //         price: 1599,
    //         avarageRatings: 3
    //     },
    //     {
    //         name: 'Long Sleeve causa Shirt for man',
    //         image: 'https://fabrilife.com/image-gallery/638741f4b169a-square.jpg',
    //         discount: 9,
    //         price: 299,
    //         avarageRatings: 1
    //     },
    //     {
    //         name: 'Long Sleeve causa Shirt for man',
    //         image: 'https://fabrilife.com/image-gallery/6388945749713-square.jpg',
    //         discount: 8,
    //         price: 899,
    //         avarageRatings: 4
    //     },
    //     {
    //         name: 'Long Sleeve causa Shirt for man and pant if more skillable.',
    //         image: 'https://fabrilife.com/image-gallery/638741f4ba04f-square.jpg',
    //         discount: 15,
    //         price: 1599,
    //         avarageRatings: 3
    //     },
    //     {
    //         name: 'Long Sleeve causa Shirt for man',
    //         image: 'https://fabrilife.com/image-gallery/638741f4b169a-square.jpg',
    //         discount: 9,
    //         price: 299,
    //         avarageRatings: 1
    //     },

    // ]

    return (
        <div className=' w-full'>
            <div className=" max-w-7xl px-4 mx-auto sm:pt-4 py-8">
                <div className='mt-8 flex justify-center items-center bg-[#159c9c]   w-full sm:h-[60px] h-[100px]'>
                    <h1 className='sm:text-[25px] text-[32px]  font-semibold text-[#0e4448] '> FUTURED PRODUCTS</h1>
                </div>
                <div className="grid py-8 gap-6 grid-cols-4 lg:grid-cols-4 md-lg:grid-cols-3 md:grid-cols-2">
                    {
                        product_fetch ? future_products.map((p, i) => {
                            return <SingleFutureProduct key={i} product={p} />
                        }) :
                            <p className=' w-[90vw] text-center'>Loading ...</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default FutureProducts 