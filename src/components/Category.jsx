import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Category({ categoryes, cate_fetch }) {

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
        mobiletablet: {
            breakpoint: { max: 991, min: 464 },
            items: 4,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3,
        }
    }

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
        <div className=' max-w-7xl mx-auto px-4 pt-6'>
            <div className="w-full border-black">
                <div className='mb-8 md:mb-5 flex justify-center items-center bg-[#159c9c]   w-full sm:h-[55px] h-[70px]'>
                    <h1 className='sm:text-[23px] text-[27px]  font-semibold text-[#0e4448] '> EIDS NEW CATEGORY</h1>
                </div>
                <div className='md:hidden'>
                    {
                        cate_fetch && categoryes.length > 0 &&
                        <Carousel
                            autoPlay={true}
                            infinite={true}
                            arrows={true}
                            showDots={true}
                            autoPlaySpeed={2000}
                            responsive={responsive}
                            dotListClass="jys"
                        >
                            {
                                categoryes.map((c, i) => {
                                    return <div to={c.slug} key={i} className=' relative px-3 border-black '>
                                        <Link to={c.slug}>
                                            <img src={c.image} className=' h-[220px] overflow-hidden w-full object-cover hover:scale-105 duration-200' alt="" />
                                        </Link>
                                        <p className=' absolute top-0 left-1/2 transform rounded-b-xl py-1 w-[150px] text-center bg-[#f2f2f2] -translate-x-1/2 text-gray-white'>{c.name}</p>
                                    </div>
                                })
                            }
                        </Carousel>
                    }
                </div>
                <div className=" md:grid grid-cols-3 xs:grid-cols-2 gap-2 gap-y-4 hidden">
                    {
                        cate_fetch && categoryes.length > 0 && categoryes.map((c, i) => {
                            return <div to={c.slug} key={i} className=' relative px-2 border-black '>
                                <img src={c.image} className=' hover:scale-105 w-full h-[170px] object-cover duration-200' alt="" />
                                <p className=' absolute top-0 left-1/2 transform rounded-b-xl py-[3px] text-[14px] font-sans font-[500] w-[140px] text-center bg-[#f2f2f2] -translate-x-1/2 text-gray-white'>{c.name}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Category