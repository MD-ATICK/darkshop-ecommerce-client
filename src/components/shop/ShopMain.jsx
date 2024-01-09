import React, { useState } from 'react'
import { HiStar, HiFilter, HiOutlineStar } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import SingleFutureProduct from '../Future Products/SingleFutureProduct'
import { filterboxhanlder } from '../../store/reducers/webSmallControlsReducer';
import { useDispatch, useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners'
import { Link, useNavigate } from 'react-router-dom';

function ShopMain({ filter_fetch_load, searchv }) {

    const navigate = useNavigate()
    const { searchtext } = useSelector(state => state.controll)
    const { products, product_fetch } = useSelector(state => state.home)


    const dispatch = useDispatch()
    const [filterModalShow, setfilterModalShow] = useState(false);

    return (
        <div className='max-w-7xl w-full overflow-hidden pt-8 md:pt-0 pb-2 mx-auto flex '>


            <div className=' h-full p-2 w-full'>

                <div className=' w-full pb-7 pr-2 flex items-center justify-between'>
                    {
                        searchv ?
                            <p className=' md:text-[17px] text-[19px]  font-sans font-semibold tracking-wide text-stone-600'>Searching by <span className='text-[16px] font-sans text-white font-semibold tracking-wide px-2 bg-teal-700'>{searchv}</span> ({products.length})</p>
                            :
                            <div className='pl-2'>
                                <Link to={'/'} className='text-[35px] sm:text-[29px] pb-1 font-sans font-bold '>shopp <span className=' -ml-2 font-bold sm:text-[22px] text-[30px] text-teal-700'>.my</span></Link>
                                <span className=' font-[700] font-sans pl-2 tracking-wide sm:text-[22px] text-[30px] text-stone-600'>Collections</span>
                            </div>
                    }
                    <div className='flex items-center gap-x-3'>

                        <button onClick={() => navigate('/product')} className='sm:h-8 sm:w-8 h-10 w-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center duration-150 text-[17px] font-sans  font-[600] hover:underline cursor-pointer tracking-wide'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                            </svg>
                        </button>

                        <button onClick={() => dispatch(filterboxhanlder())} className='sm:h-8 sm:w-8 h-10 w-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center duration-150 text-[17px] font-sans  font-[600] hover:underline cursor-pointer tracking-wide'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                            </svg>
                        </button>
                    </div>
                </div>

                {filter_fetch_load ?
                    <div className='p-8 w-full flex justify-center flex-col items-center gap-y-6'>
                        <ClipLoader size={60} color='black' cssOverride={{ borderWidth: '5px' }} />
                        <p className='text-[14px] tracking-wide'>please wait ...</p>
                    </div> : products.length === 0 ?
                        <div className=' w-full p-6 pb-20 text-center'>
                            <p className=' tracking-wide flex items-center gap-x-3 flex-col gap-y-8'>
                                <img src="/no-results.png" className=' h-32 w-32' alt="" /> no product available.
                            </p>
                        </div>
                        :
                        <div id='all products' className="grid gap-6 grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
                            {
                                product_fetch && products.map((p, i) => {
                                    return <SingleFutureProduct key={i} product={p} size={300} />
                                })
                            }
                        </div>}
            </div>
        </div>
    )
}

export default ShopMain