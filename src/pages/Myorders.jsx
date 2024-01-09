import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import { AiOutlineEye } from 'react-icons/ai'
import { FiFilter } from 'react-icons/fi'
import { TbArrowNarrowDown } from 'react-icons/tb'
import { BsArrowDown } from 'react-icons/bs'
import { IoIosArrowDown } from 'react-icons/io'
import { FaApplePay, FaUsers } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { customerOrderFetch, order_cancelled } from '../store/reducers/OrderReducer'
import api from '../api/api'
import { toast } from 'react-toastify'
import { ClipLoader } from 'react-spinners'


function Myorders() {

    const dispatch = useDispatch()

    const dsc_token = localStorage.getItem('dsc-token')
    const [payloading, setpayloading] = useState(false);
    const { orders, fetch } = useSelector(state => state.order)

    const payHanlder = async (_id) => {
        const token = localStorage.getItem('dsc-token')
        if (!_id || payloading) return toast.error('you want to access in another way.')
        setpayloading(true)
        const { data, status } = await api.post('/v8/order-paid', { orderId: _id }, { headers: { Authorization: `Bearer ${token}` } })
        if (status === 201) {
            dispatch(order_paid(_id))
            setpayloading(false)
            toast.success('this order paid successed.')
        } else if (status === 222) {
            setpayloading(false)
            dispatch(order_cancelled(_id))
            toast.error('sorry, order cancelled. page reload!')
        }
    }


    return (
        <Layout>
            <div className='sm:p-2 p-6'>
                <div className=' flex items-center justify-between pr-2 px-1'>
                    <h1 className=' text-[22px] tracking-wide font-[600] text-stone-900'>My Orders</h1>
                    <select name="" id="" className='bg-[#ebf0f0] px-4 py-3 rounded-md text-[13px] tracking-wide'>
                        <option value="">select order status</option>
                        <option value="pending">pending</option>
                        <option value="delivered">delivered</option>
                        <option value="cancelled">cancelled</option>
                        <option value="warehouse">warehouse</option>
                    </select>
                </div>
                <div className=' w-full mt-4 border-orange-500 overflow-x-scroll pb-4 rounded-lg'>
                    <div className=' min-w-[920px] overflow-hidden'>

                        <div className=' w-full flex  rounded-lg bg-[#09958521]  py-4 px-5 '>
                            <p className=' text-center  font-sans text-teal-800 font-[600] tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[0.4]'>No.</p>
                            <p className=' text-center  font-sans text-teal-800 font-[600] tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[2.7]'>Order Id</p>
                            <p className=' text-center  font-sans text-teal-800 font-[600] tracking-wider border-r pl-3 border-gray-100 text-[14px] '>Price</p>
                            <p className=' text-center  font-sans text-teal-800 font-[600] tracking-wider border-r pl-6 border-gray-100 text-[14px] flex-[0.8]'>Items</p>
                            <p className=' text-center  font-sans text-teal-800 font-[600] tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[1.1]'>Pay Status</p>
                            <p className=' text-center  font-sans text-teal-800 font-[600] tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[2]'>Order Status</p>
                            <p className=' text-center  font-sans text-teal-800 font-[600] tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[1.5]'>Order Date</p>
                            <p className=' text-center  font-sans text-teal-800 font-[600] tracking-wide text-[14px] pl-3 border-gray-300   flex-[2]'>Action</p>
                        </div>



                        <div className=' text-center mt-4 flex flex-col gap-y-0 rounded-2xl'>
                            {fetch && orders.map((o, i) => {
                                const { _id, customerId, products, productsPrice, shippingFee, order_payment_status, order_delivery_status, createdAt } = o

                                return <div className=' text-center duration-150 hover:bg-[#ebf0f0] pr-3  w-full rounded-xl flex items-center py-[14px]'>
                                    <p className=' text-center flex-[0.4]  text-stone-600  tracking-wider border-r pl-3 border-gray-100 text-[13px]'>{i + 1}.</p>
                                    <p className=' text-center flex-[2.7]  text-stone-600  tracking-wider border-r pl-3 border-gray-100 text-[12px]'>{_id}</p>
                                    <p className=' text-center  flex-[1.1] text-green-700 font-[500]  tracking-wide border-r pl-3 border-gray-100 text-[14px] '>${productsPrice + shippingFee}</p>
                                    <p className=' text-center  flex-[.4] text-teal-800  tracking-wider font-[600] border-r pl-3 border-gray-100 text-[15px] '>{products.length}</p>
                                    <p className={`text-center  flex-[1.6] font-[500] ${order_payment_status === 'paid' ? ' text-green-600' : 'text-red-500'} tracking-wide border-r pl-3 border-gray-100 text-[13px]`}>{order_payment_status}</p>
                                    {
                                        order_delivery_status === 'cancelled' ?
                                            <p className=' text-center flex-[1.6]  text-stone-700  tracking-wider border-r pl-0 border-gray-100 text-[13px]'><span className=' text-center  py-[5px] px-3 rounded-lg text-[13px] border-red-500 bg-[#f4d7ccdc] text-red-800'>{order_delivery_status}</span></p>
                                            :
                                            <p className=' text-center flex-[1.6]  text-stone-700  tracking-wider border-r pl-0 border-gray-100 text-[13px]'><span className=' text-center  py-[5px] px-3 rounded-lg text-[13px] border-green-500 bg-[#ccf4cddc] text-green-800'>{order_delivery_status}</span></p>
                                    }
                                    <p className=' text-center  flex-[2.1] text-stone-600  tracking-wide border-r pl-3 border-gray-100 text-[12px] '>{moment(createdAt).format('LL')}</p>
                                    <div className=' justify-center  text-center flex-[2] flex gap-x-2 items-center'>
                                        <button className='p-1 duration-150 hover:scale-105 px-2 font-[500] bg-[#0995852e] w-full text-teal-900 text-[13px] rounded-md'>view</button>
                                        {order_payment_status === 'unpaid' && order_delivery_status === 'pending' && <button onClick={() => payHanlder(_id)} className={`${payloading ? 'py-1 opacity-70' : 'py-0 opacity-100'} w-full duration-150 hover:scale-105 px-2 font-[500] bg-teal-800 text-white text-[12px] rounded-md flex items-center justify-center`}>{payloading ? <ClipLoader color='white' size={20} cssOverride={{ borderWidth: '4px' }} /> : <FaApplePay className='text-[28px]' />} </button>}
                                    </div>
                                </div>
                            })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Myorders