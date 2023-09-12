import React from 'react'
import LatestProductCo from './LatestProductCo';
import TopRatedProductsCo from './TopRatedProductsCo';
import DiscountProductCo from './DiscountProductCo';


function AllCategoryProducts({format_latest_products , format_topRated_products , format_discount_products ,product_fetch }) {

    const producstArray = [
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


    return (
        <div className=' w-full pb-8'>
            <div className=' max-w-7xl mx-auto px-4 flex flex-col gap-y-10 '>
                <div className='mt-8 flex justify-center items-center bg-[#159c9c]   w-full sm:h-[60px] h-[100px]'>
                    <h1 className='sm:text-[25px] text-[32px]  font-semibold text-[#0e4448] '> ALL TOP PRODUCTS</h1>
                </div>
                <div className='grid grid-cols-3 gap-x-8 gap-y-4 md-lg:grid-cols-1'>
                    <LatestProductCo format_latest_products={format_latest_products} product_fetch={product_fetch}/>
                    <TopRatedProductsCo format_topRated_products={format_topRated_products} product_fetch={product_fetch} />
                    <DiscountProductCo format_discount_products={format_discount_products} product_fetch={product_fetch} />
                </div>
            </div>
        </div>
    )
}

export default AllCategoryProducts