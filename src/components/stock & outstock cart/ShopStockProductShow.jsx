import React from 'react'
import SingleCart from '../cart/SingleCart'

function ShopStockProductShow({ stock_product, stock_product_shops }) {

    console.log({ stock_product, stock_product_shops })

    return (
        <div>
            <p className='text-[16px] rounded-md shadow-sm mb-3  tracking-[0.025em] text-green-700 bg-[#1eeb212b] w-full py-1 pb-2 font-[600] px-6 font-sans'> Stock Product : <span className=' font-serif text-green-700 font-[500] text-[28px] pl-1'>{stock_product.length}</span></p>
            {
                stock_product_shops.map((sps, i) => {
                    return <div key={i} className='bg-white shadow-sm  mt-2 p-4 px-6 rounded-lg'>
                        <p className='text-[14px] tracking-wide text-stone-500 pb-3'>{sps.sellerId?._id || sps.sellerId} ~ {sps.shopName}</p>
                        <div className='flex flex-col gap-y-3'>
                            {
                                stock_product.filter(sp => sp.sellerId === sps.sellerId).map(rs => {
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

export default ShopStockProductShow