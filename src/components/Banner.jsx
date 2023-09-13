import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Link } from 'react-router-dom'

function Banner() {

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
            <div className=" max-w-7xl mx-auto px-3 overflow-hidden sm:pt-0 sm:pb-2 py-10">

                <Carousel
                    autoPlay={true}
                    infinite={true}
                    arrows={true}
                    showDots={true}
                    autoPlaySpeed={3000}
                    responsive={responsive}
                >
                    {
                        [1, 2, 3, 4, 5, 6, 7].map((img, i) => {
                            return <Link className='lg-md:h-[440px] xl:[800px]' key={i}>
                                <img src={`./banner/${img}.jpg`} className=' sm:h-[200px] shadow-lg object-cover' alt="" />
                            </Link>
                        })
                    }
                </Carousel>
            </div>
        </div>
    )
}

export default Banner