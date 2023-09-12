import React, { useState } from 'react'
import { HiStar, HiFilter, HiOutlineStar } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import SingleFutureProduct from '../Future Products/SingleFutureProduct'

function ShopMain({ categoryes, cate_fetch, products, product_fetch }) {

    const [filterModalShow, setfilterModalShow] = useState(false);

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

    // const categoryes = [
    //     {
    //         name: 'T-shirt',
    //         image: 'https://fabrilife.com/image-gallery/6388945749713-square.jpg'
    //     },
    //     {
    //         name: 'Polo Pant',
    //         image: 'https://fabrilife.com/image-gallery/638741f4ba04f-square.jpg'
    //     },
    //     {
    //         name: 'Jacket',
    //         image: 'https://fabrilife.com/image-gallery/638741f4b169a-square.jpg'
    //     },
    //     {
    //         name: 'Jercy',
    //         image: 'https://fabrilife.com/image-gallery/61a794e1aa1f4-square.jpg'
    //     },
    //     {
    //         name: 'T-shirt',
    //         image: 'https://fabrilife.com/image-gallery/6388945749713-square.jpg'
    //     },
    //     {
    //         name: 'Polo Pant',
    //         image: 'https://fabrilife.com/image-gallery/638741f4ba04f-square.jpg'
    //     },
    //     {
    //         name: 'Jacket',
    //         image: 'https://fabrilife.com/image-gallery/638741f4b169a-square.jpg'
    //     },
    //     {
    //         name: 'Jercy',
    //         image: 'https://fabrilife.com/image-gallery/61a794e1aa1f4-square.jpg'
    //     },

    // ]

    return (
        <div className='max-w-7xl w-full overflow-hidden relative pt-8 pb-2 mx-auto flex '>
            <div className={`min-w-[330px] md:absolute bg-white border-2 duration-500 ${!filterModalShow && 'transform md:translate-x-[335px]'} border-[#f2f0f0] md:h-fit z-50 top-24 rounded-sm md:pt-6 right-0 flex h-full overflow-y-scroll  flex-col gap-y-8  px-6`}>
                <div>
                    <h1 className='  tracking-wide font-semibold text-[26px] '>Category</h1>
                    <div className='mt-4 ml-5 flex flex-col gap-y-3'>
                        {
                            cate_fetch && categoryes.map((c, i) => {
                                return <div key={i} className='flex items-center gap-x-4'>
                                    <input type="checkbox" id='category' />
                                    <label htmlFor="category" className=''>{c.name}</label>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div>
                    <h1 className='  tracking-wide font-semibold text-[26px] '>Price</h1>
                    <div className='mt-2 ml-6'>
                        <input type='range' />
                        <p className='text-[15px] text-teal-800 tracking-wide font-semibold'>$55 - $100</p>
                    </div>
                </div>
                <div className='pb-6'>
                    <h1 className='  tracking-wide font-semibold text-[26px] '>Ratings</h1>
                    <div className='mt-4'>
                        <div className=' flex items-center gap-x-2 py-1 px-8 rounded-2xl cursor-pointer w-fit'>
                            <HiOutlineStar className=' text-orange-600 text-[25px]' />
                            <HiOutlineStar className=' text-orange-600 text-[25px]' />
                            <HiOutlineStar className=' text-orange-600 text-[25px]' />
                            <HiOutlineStar className=' text-orange-600 text-[25px]' />
                            <HiOutlineStar className=' text-orange-600 text-[25px]' />
                        </div>
                        <div className=' flex items-center gap-x-2 py-1 px-8 rounded-2xl cursor-pointer mt-1 w-fit'>
                            <HiStar className=' text-orange-600 text-[25px]' />
                            <HiOutlineStar className=' text-orange-600 text-[25px]' />
                            <HiOutlineStar className=' text-orange-600 text-[25px]' />
                            <HiOutlineStar className=' text-orange-600 text-[25px]' />
                            <HiOutlineStar className=' text-orange-600 text-[25px]' />
                        </div>
                        <div className=' flex items-center gap-x-2 py-1 px-8 rounded-2xl cursor-pointer mt-1 w-fit'>
                            <HiStar className=' text-orange-600 text-[25px]' />
                            <HiStar className=' text-orange-600 text-[25px]' />
                            <HiOutlineStar className=' text-orange-600 text-[25px]' />
                            <HiOutlineStar className=' text-orange-600 text-[25px]' />
                            <HiOutlineStar className=' text-orange-600 text-[25px]' />
                        </div>
                        <div className=' flex items-center gap-x-2 py-1 px-8 rounded-2xl cursor-pointer mt-1 w-fit'>
                            <HiStar className=' text-orange-600 text-[25px]' />
                            <HiStar className=' text-orange-600 text-[25px]' />
                            <HiStar className=' text-orange-600 text-[25px]' />
                            <HiOutlineStar className=' text-orange-600 text-[25px]' />
                            <HiOutlineStar className=' text-orange-600 text-[25px]' />
                        </div>
                        <div className=' flex items-center gap-x-2 py-1 px-8 rounded-2xl cursor-pointer mt-1 w-fit'>
                            <HiStar className=' text-orange-600 text-[25px]' />
                            <HiStar className=' text-orange-600 text-[25px]' />
                            <HiStar className=' text-orange-600 text-[25px]' />
                            <HiStar className=' text-orange-600 text-[25px]' />
                            <HiOutlineStar className=' text-orange-600 text-[25px]' />
                        </div>
                        <div className=' flex items-center gap-x-2 py-1 px-8 rounded-2xl cursor-pointer mt-1 w-fit'>
                            <HiStar className=' text-orange-600 text-[25px]' />
                            <HiStar className=' text-orange-600 text-[25px]' />
                            <HiStar className=' text-orange-600 text-[25px]' />
                            <HiStar className=' text-orange-600 text-[25px]' />
                            <HiStar className=' text-orange-600 text-[25px]' />
                        </div>
                    </div>
                </div>
            </div>
            <div className=' h-full p-2 flex-grow'>
                <div className='h-[45px] mb-8 flex items-center md:gap-x-6 gap-x-12'>
                    <div className=' h-full w-full flex items-center md:justify-center justify-between'>
                        <input type="text" className=' w-full h-full bg-gray-300 rounded-lg shadow-sm shadow-gray-300 placeholder:text-stone-500 tracking-wide text-[14px] px-5' placeholder='product serarch....' />
                        <button className=' -ml-3  h-full rounded-xl flex justify-center items-center text-center md:px-3 px-8 bg-sky-600 font-[500] text-white'><BiSearch className='text-2xl' /></button>
                    </div>
                    <div className='flex items-center gap-x-3 h-full'>
                        <select name="" id="" className=' h-full bg-gray-300 px-4 text-[14px]'>
                            <option value="">Sort By</option>
                        </select>
                        <button onClick={() => setfilterModalShow(!filterModalShow)} className=' hidden h-full tracking-wide rounded-xl md:flex justify-center items-center gap-x-2 text-center md:px-5 px-8 bg-sky-600 text-white font-sans font-[600]'> <HiFilter />Filter</button>
                    </div>
                </div>
                <div className="grid gap-6 grid-cols-3 lg:grid-cols-2 sm:grid-cols-2">
                    {
                        product_fetch && products.map((p, i) => {
                            return <SingleFutureProduct key={i} product={p} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ShopMain