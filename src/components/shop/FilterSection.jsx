import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterboxhanlder, fknock_hanlder, mainfilter, new_cate_ary, new_price, new_rating_ary } from '../../store/reducers/webSmallControlsReducer'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function FilterSection() {


    const { filterbox, cateAry, ratingAry, price } = useSelector(state => state.controll)
    const { categoryes, cate_fetch, products, product_fetch } = useSelector(state => state.home)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    // const [cateAry, setcateAry] = useState([]);
    // const [ratingAry, setratingAry] = useState([]);
    // const [price, setprice] = useState(''); // like = 500~1000

    const priceObj = [
        {
            id: 1,
            min: 500,
            max: 999
        },
        {
            id: 2,
            min: 1000,
            max: 1999
        },
        {
            id: 3,
            min: 2000,
            max: 4999
        },
        {
            id: 4,
            min: 200,
            max: 499
        },
        {
            id: 5,
            min: 99,
            max: 999
        },
        // {
        //     id: 4,
        //     min: 500,
        //     max: '<'
        // },
        // {
        //     id: 5,
        //     min: '<',
        //     max: 1000
        // },
    ]


    const ratinghanlder = (n) => {
        const find = ratingAry.find(r => r === n)
        if (!find) {
            dispatch(new_rating_ary([...ratingAry, n]))
            return;
        }
        
        const new_ratingAry = ratingAry.filter(r => r !== n)
        dispatch(new_rating_ary(new_ratingAry))
    }

    const categoryhanlder = (n) => {
        const find = cateAry.find(r => r === n)
        if (!find) {
            dispatch(new_cate_ary([...cateAry, n]))
            return;
        }

        const new_cateAry = cateAry.filter(r => r !== n)
        dispatch(new_cate_ary(new_cateAry))
    }

    const save_hanlder = () => {
        const format_category = cateAry.join('$') // surely cate ar jonne === ck rating_link and priceLink ase kina then '&' bosbe.
        const format_rating = ratingAry.join('$')

        // const search_link = search ? `search=${search}` : ''
        // const rating_link = format_rating ? `${search_link && '&'}rating=${format_rating}` : ''
        // const price_link = price && `${format_rating && '&' || search_link && '&'}min=${price.split('~')[0]}&max=${price.split('~')[1]}`
        // const category_link = format_category ? `${format_rating && '&' || search_link && '&' || price && '&'}category=${format_category}` : ''

        // const final_link = `/product?${search_link}${rating_link}${price_link}${category_link}`
        // navigate(final_link)
        dispatch(mainfilter({ category: format_category, price, rating: format_rating }))
        dispatch(fknock_hanlder())
        dispatch(filterboxhanlder())
    }



    return (
        <div className={`${filterbox ? '  w-full' : ' w-0 overflow-hidden'} duration-500  h-screen fixed bg-[#0000005f] z-[999] top-0 right-0`}>
            <div className={` ${filterbox ? 'w-[400px] p-4' : 'w-0 p-0'} whitespace-nowrap duration-300  pr-0 absolute bg-gray-100  shadow-lg right-0 top-0 h-screen`}>
                <button onClick={() => dispatch(filterboxhanlder())} className='h-10 w-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center duration-150 text-[17px] font-sans  font-[600] hover:underline cursor-pointer tracking-wide'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div id='category-filtering' className='pt-4'>
                    <p className=' font-sans font-semibold text-[16px] tracking-wide'>Select Category : </p>
                    <div className=' grid grid-cols-3 items-center gap-2 px-2 py-2 flex-wrap'>
                        {cate_fetch && categoryes.map((c, i) => {
                            const isFilterAdd = cateAry.find(r => r === c.slug)
                            return <button onClick={() => categoryhanlder(c.slug)} className={`${isFilterAdd && 'bg-black text-white'} py-2 px-1 border-2 rounded-lg border-black text-[14px] w-auto tracking-wide font-sans font-semibold hover:scale-105 duration-150`}>{c.name}</button>
                        })}
                    </div>
                </div>

                <div id='rating-filtering' className='pt-2'>
                    <p className='mt-2 font-sans font-semibold text-[16px] tracking-wide'>Select Rating : </p>
                    <div className='flex items-center gap-2 p-5 py-3 flex-wrap'>
                        {['0', 1, 2, 3, 4, 5].map(j => {
                            const isFilterAdd = ratingAry.find(r => r === j)
                            return <button onClick={() => ratinghanlder(j)} className={`${isFilterAdd && 'bg-stone-800 text-white'} py-[6px] px-4 flex gap-x-2 items-center border-2 rounded-lg border-black text-[15px] tracking-wide font-sans font-semibold hover:scale-105 duration-150`}>
                                {j}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" strokeWidth={1.5} stroke="orange" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>

                            </button>
                        })}
                    </div>
                </div>

                <div id='price-filtering' className='pt-3'>
                    <p className=' font-sans font-semibold text-[16px] tracking-wide'>Price Range : </p>
                    <div className='grid grid-cols-3 items-center gap-2 p-5 py-3 flex-wrap'>
                        {
                            priceObj.map(p => {
                                return <button onClick={() => price === `${p.min}~${p.max}` ? dispatch(new_price('')) : dispatch(new_price(`${p.min}~${p.max}`))} key={p.id} className={`${Number(price.split('~')[0]) === p.min && Number(price.split('~')[1]) === p.max && 'bg-black text-white'} py-2  w-full border-2 rounded-lg border-black text-[13px] tracking-wide font-[500] hover:scale-105 duration-150`} >{`${p.min}-${p.max}tk`}</button>
                            })
                        }
                    </div>
                </div>
                <button onClick={save_hanlder} className='py-3 px-4 mt-6 w-full font-sans tracking-wide text-[14px] font-semibold text-white bg-green-700 hover:bg-green-800 rounded-lg'>save</button>

            </div>
        </div>


    )
}

export default FilterSection