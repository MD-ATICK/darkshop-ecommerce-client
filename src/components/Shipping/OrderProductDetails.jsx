import React from 'react'
import SingleCart from '../cart/SingleCart'
import { useSelector } from 'react-redux'

function OrderProductDetails({ stock_product, stock_product_shops }) {

    const { worked } = useSelector(state => state.cart)


    return (
        <div>
            <h1 className='px-2 py-4 font-sans text-[18px] tracking-wide font-semibold text-teal-800'>Order Items ({stock_product.length})</h1>
            <div className='flex flex-col sm:gap-y-0 gap-y-3 rounded-t-lg overflow-hidden'>
                {
                    worked && stock_product.length > 0 && stock_product_shops.map((sps, i) => {
                        return <div key={i} className='bg-white shadow-sm  p-6 rounded-lg'>
                            <p className='text-[14px] tracking-wide text-stone-500 pb-3'>{sps.sellerId} ~ {sps.shopName}</p>
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
                {/* <div className='bg-white shadow-sm p-6 sm:rounded-none rounded-lg'>
                <p className='text-[14px] tracking-wide text-stone-500 pb-3'>Sultan Store</p>
                <div className='flex flex-col gap-y-3'>
                    {
                        cardedProducts.slice(0, 2).map((c, i) => {
                            return <SingleCart key={i} product={c} />
                        })
                    }
                </div>
            </div> */}
            </div>
        </div>
    )
}

export default OrderProductDetails