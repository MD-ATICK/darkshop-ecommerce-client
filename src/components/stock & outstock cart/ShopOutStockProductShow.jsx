import React from 'react'
import SingleCart from '../cart/SingleCart'

function ShopOutStockProductShow({ out_stock_product, outstock_product_shops }) {
    return (
        <div>
            <p className='text-[15px] rounded-md shadow-sm mb-3 tracking-[0.025em] text-red-900 bg-[#e20f0f26] w-full py-1 pb-2 font-[600] px-6 font-sans'> Out of Stock Product : <span className=' font-serif text-red-900 font-[500] text-[28px] pl-1'>{out_stock_product.length}</span></p>
            {
                outstock_product_shops.map((outsps, i) => {
                    return <div key={i} className='bg-white shadow-sm  mt-2 p-4 px-6 rounded-lg'>
                        <div className=' w-full flex justify-between mb-2 items-center'>
                            <p className='text-[14px] tracking-wide text-stone-500 pb-3'>{outsps.sellerId} ~ {outsps.shopName}</p>
                            <button className=' flex items-center gap-x-2 py-2 text-[13px] font-sans tracking-wide text-gray-100 font-[600] px-3 rounded-md bg-sky-700'>  Quick message</button>
                        </div>
                        <div className='flex flex-col gap-y-3'>
                            {
                                out_stock_product.filter(sp => sp.sellerId === outsps.sellerId).map(rs => {
                                    return <SingleCart key={rs._id} product={rs} />
                                })
                            }
                        </div>
                    </div>

                })
            }
        </div>
    )
}

export default ShopOutStockProductShow