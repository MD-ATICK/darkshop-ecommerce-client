import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import api from '../../api/api';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import { placeOrderFetch } from '../../store/reducers/OrderReducer';
import Loader from '../Loader/Loader';

function OrderDetails({ stock_product, stock_product_shops, shipping_address }) {

    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { createdOrder, fetch } = useSelector(state => state.order)
    const { carts, worked } = useSelector(state => state.cart)
    const [product_total_amount, setproduct_total_amount] = useState(0);
    const shipping_cost = 65 * stock_product_shops.length
    const [orderLoading, setorderLoading] = useState(false);


    const PlaceOrderHanlder = async () => {
        if (!shipping_address) return toast.error('not allow without give all details.')

        setorderLoading(true)
        dispatch(placeOrderFetch({
            products: stock_product,
            shops: stock_product_shops,
            shippingFee: shipping_cost,
            shippingInfo: shipping_address,
            productsPrice: product_total_amount,
            navigate
        }))
        setorderLoading(false)
    }

    useEffect(() => {
        let x = 0
        if (!location.state) {
            navigate('/cart')
            toast.error('you cross our displane pls maintain it.')
        } else {
            if (worked) {
                stock_product.map(sp => {
                    const discounted_price = Math.floor((sp.price - (sp.price * (sp.discount / 100))) * sp.quantity)
                    x += discounted_price
                })
                setproduct_total_amount(x)
            }
        }
    }, [carts]);

    return (
        worked && orderLoading ? <Loader />
            :
            <div className=' md:w-full w-[650px] shadow-md sm:rounded-none sm:rounded-b-xl rounded-xl border-orange-600 bg-white p-8'>
                <h1 className=' font-sans text-[22px] tracking-wide font-[600]'>Order Summury</h1>
                <div className=' mt-4 flex flex-col gap-y-3'>
                    <div className='flex items-center justify-between pr-2'>
                        <p className='text-[17px] tracking-wide font-sans font-[500]'>Items total</p>
                        <p className='text-[22px] text-green-700 font-[600] pr-1 '>{stock_product.length} </p>
                    </div>
                    <div className='flex items-center justify-between pr-2'>
                        <p className='text-[17px] tracking-wide font-sans font-[500]'>Delivary Fee</p>
                        <p className='text-[17px] text-green-700 font-[500] '>${65 * stock_product_shops.length} </p>
                    </div>
                    <div className='flex items-center justify-between pr-2'>
                        <p className='text-[17px] tracking-wide font-sans font-[500]'>Total Payment</p>
                        <p className='text-[18px] text-green-700 font-[500] '>${product_total_amount.toLocaleString()} </p>
                    </div>
                    <div className='flex items-center border-t border-stone-500 mt-3 justify-between pr-2 pt-1'>
                        <p className='text-[20px] tracking-wide font-sans font-[700]'>SubTotal </p>
                        <p className='text-[20px] text-green-700 font-[600] '>${(product_total_amount + shipping_cost).toLocaleString()} </p>
                    </div>
                </div>
                <button onClick={PlaceOrderHanlder} disabled={shipping_address ? false : true} className={`mt-8 mb-3 py-3 text-[14px] ${shipping_address ? 'text-white' : ' opacity-60 text-gray-200'} tracking-wide  font-sans font-[600] bg-teal-700 shadow-lg rounded-lg duration-150 hover:scale-105 w-full`}>Place Order</button>
            </div>
    )
}

export default OrderDetails