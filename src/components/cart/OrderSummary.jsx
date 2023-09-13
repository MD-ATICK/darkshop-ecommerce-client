import React, { useEffect, useState } from 'react'
import { TbTruckDelivery } from 'react-icons/tb'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function OrderSummary({ stock_product, stock_product_shops }) {

  const navigate = useNavigate()
  const { carts, worked } = useSelector(state => state.cart)
  const [product_total_amount, setproduct_total_amount] = useState(0);

  const orderStepFristHanlder = () => {
    navigate('/shipping', { state: { access: true } })
  }

  useEffect(() => {
    let x = 0
    if (worked) {
      stock_product.map(sp => {
        const discounted_price = Math.floor((sp.price - (sp.price * (sp.discount / 100))) * sp.quantity)
        x += discounted_price
      })
      setproduct_total_amount(x)
    }
  }, [carts]);

  return (
    worked &&
    <div className='md:mb-8 md:px-1 flex-[0.38] '>
      <div className=' w-full flex flex-col gap-y-2 p-8 py-10 bg-white rounded-xl shadow-lg'>
        <h1 className='text-[25px] font-semibold tracking-[0.015em]'>Order Summary</h1>
        <div className='flex items-center justify-between pr-4'>
          <p className='text-[16px] text-stone-600 font-sans font-semibold tracking-wide'>{stock_product.length} Items </p>
          <p className='text-[18px] text-green-700 font-semibold tracking-wide'>${product_total_amount.toLocaleString()} </p>
        </div>
        <div className=' pr-4 flex items-center justify-between'>
          <p className='text-[15px] tracking-wide font-sans font-[600] flex items-center gap-x-2 text-green-700'><TbTruckDelivery className='text-[24px] text-green-700' /> Shipping Fee (65 x {stock_product_shops.length})</p>
          <p className='text-[16px] text-stone-500 font-semibold tracking-wide'>${(65 * stock_product_shops.length).toLocaleString()} </p>
        </div>

        <div className=' h-[45px] flex items-center justify-between gap-x-4 my-4'>
          <input type="text" className=' h-full text-[15px]  w-full tracking-wide border-2 border-gray-300 font-[600] font-sans rounded-lg px-4 placeholder:text-stone-400' placeholder='Enter cupoun code' />
          <button className=' h-full text-[14px] px-5 tracking-wide font-sans font-[600] bg-sky-600 text-white shadow-md rounded-lg duration-150 hover:scale-105'>Apply</button>
        </div>
        <div className=' pr-4 flex items-center justify-between'>
          <p className='text-[18px] tracking-wide font-sans font-[600] flex items-center gap-x-2 text-green-700'>SubTotal</p>
          <p className='text-[20px] text-stone-600 font-semibold tracking-wide'>${(product_total_amount + (65 * stock_product_shops.length)).toLocaleString()}</p>
        </div>
        {
          stock_product.length === 0 ?
            <button onClick={() => toast.error('pls add stock product cart.')} className=' mt-4 py-3 text-[14px] tracking-wide font-sans font-[600] bg-teal-700 opacity-60 text-white shadow-md rounded-lg duration-150 '>Process to Checkout ~ ${(product_total_amount + (65 * stock_product_shops.length)).toLocaleString()}</button>
            :
            <button onClick={() => orderStepFristHanlder()} className=' mt-4 py-3 text-[14px] tracking-wide font-sans font-[600] bg-teal-700 text-white shadow-md rounded-lg duration-150 hover:scale-105'>Process to Checkout ~ ${(product_total_amount + (65 * stock_product_shops.length)).toLocaleString()}</button>
        }
      </div>
    </div>
  )
}

export default OrderSummary