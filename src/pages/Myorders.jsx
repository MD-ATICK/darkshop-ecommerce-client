import React from 'react'
import Layout from './Layout'
import { AiOutlineEye } from 'react-icons/ai'
import { FiFilter } from 'react-icons/fi'
import { TbArrowNarrowDown } from 'react-icons/tb'
import { BsArrowDown } from 'react-icons/bs'
import { IoIosArrowDown } from 'react-icons/io'
import { FaApplePay, FaUsers } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import moment from 'moment'


function Myorders() {


    const { orders, fetch } = useSelector(state => state.order)

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
                            <p className=' text-center  font-sans text-teal-800 font-[600] tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[3]'>Order Id</p>
                            <p className=' text-center  font-sans text-teal-800 font-[600] tracking-wider border-r pl-3 border-gray-100 text-[14px] '>Price</p>
                            <p className=' text-center  font-sans text-teal-800 font-[600] tracking-wider border-r pl-6 border-gray-100 text-[14px] flex-[0.4]'>Items</p>
                            <p className=' text-center  font-sans text-teal-800 font-[600] tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[1.6]'>Pay Status</p>
                            <p className=' text-center  font-sans text-teal-800 font-[600] tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[1.8]'>Order Status</p>
                            <p className=' text-center  font-sans text-teal-800 font-[600] tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[1.5]'>Order Date</p>
                            <p className=' text-center  font-sans text-teal-800 font-[600] tracking-wide text-[14px] pl-3 border-gray-300   flex-[2]'>Action</p>
                        </div>



                        <div className=' text-center mt-4 flex flex-col gap-y-0 rounded-2xl'>
                            {fetch && orders.map((o, i) => {
                                const { _id, customerId, products, productsPrice, shippingFee, order_payment_status, order_delivery_status , createdAt} = o

                                return <div className=' text-center duration-150 hover:bg-[#ebf0f0]  w-full rounded-xl flex items-center py-[14px]'>
                                    <p className=' text-center flex-[0.4]  text-stone-600  tracking-wider border-r pl-3 border-gray-100 text-[13px]'>{i}.</p>
                                    <p className=' text-center flex-[2.7]  text-stone-600  tracking-wider border-r pl-3 border-gray-100 text-[12px]'>{_id}</p>
                                    <p className=' text-center  flex-[1.1] text-stone-600  tracking-wider border-r pl-3 border-gray-100 text-[13px] '>${productsPrice + shippingFee}</p>
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
                                        {order_payment_status === 'unpaid' && order_delivery_status === 'cancelled' && <button className=' w-full duration-150 hover:scale-105 px-2 font-[500] bg-teal-800 text-white text-[12px] rounded-md flex items-center justify-center'><FaApplePay className='text-[28px]' /> </button>}
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