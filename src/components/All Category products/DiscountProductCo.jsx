import React from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

function DiscountProductCo({ format_discount_products, product_fetch }) {

    const producstArray = [
        [0, 1, 2, 9],
        [3, 4, 5, 6],
        [6, 7],
    ]

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        }
    }

    return (
        <div className=' w-full'>
            <div className=' flex items-center justify-between px-3'>
                <h1 className=' text-[24px] font-[600] tracking-wide flex items-center gap-x-2 font-sans'> Discount Products</h1>
                <div className='flex items-center gap-x-3'>
                    <button className=' bg-gray-200 p-1 text-[18px] rounded-md'>
                        <FiChevronLeft />
                    </button>
                    <button className=' bg-gray-200 p-1 text-[18px] rounded-md'>
                        <FiChevronRight />
                    </button>
                </div>
            </div>

            {/* >= carousel <= */}

            <div>

                {/* => kaj comming soon */}
                {
                    product_fetch &&
                    <Carousel
                        autoPlay={format_discount_products.length > 1 ? true : false}
                        infinite={true}
                        arrows={false}
                        showDots={false}
                        autoPlaySpeed={3000}
                        responsive={responsive}
                        renderButtonGroupOutside={true}
                    >
                        {
                            format_discount_products.map((p, i) => {
                                return <div key={i} className=' grid grid-flow-col grid-rows-4 gap-y-4 p-3 py-4'>
                                    {
                                        p.map((rp, i) => {
                                            const { _id, name, price, discount, avgRating, images } = rp
                                            return <Link to={`/product/details/${_id}`} key={i} className='flex gap-x-3'>
                                                <img loading='lazy' src={images[0]} className='w-[90px] ' alt="" />
                                                <div className='flex w-full flex-col gap-y-1'>
                                                    <p className='text-[15px] pt-1 font-sans font-[600] text-stone-600 tracking-wide'> {name}</p>
                                                    <div className='flex  items-center justify-between pr-5'>
                                                        <div>
                                                            <p className='text-[19px] font-semibold text-teal-700'>${price}</p>
                                                            <p className='text-[13px] font-[400] text-stone-600'><s className='pr-1'>(${Math.floor(price - (price * (discount / 100)))}) </s> (%{discount})</p>
                                                        </div>
                                                        <ReactStars
                                                            value={avgRating}
                                                            // onChange={ratingChanged}
                                                            size={18}
                                                            isHalf={true}
                                                            emptyIcon={<i className="far fa-star"></i>}
                                                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                            fullIcon={<i className="fa fa-star"></i>}
                                                            activeColor="#0989a0"
                                                        />
                                                    </div>
                                                </div>
                                            </Link>
                                        })
                                    }
                                </div>
                            })
                        }
                    </Carousel>
                }
            </div>

        </div>
    )
}

export default DiscountProductCo