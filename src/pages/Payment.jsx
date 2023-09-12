import React, { useState } from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Footer from '../components/Footer'
import api from '../api/api'

function Payment() {

    const navigate = useNavigate()
    const location = useLocation()
    console.log({ location })
    // const { orderId, products, price } = location.state

    const [paymentMethod, setpaymentMethod] = useState(null);
    const [loading, setloading] = useState(false);

    const payHanlder = async () => {
        const token = localStorage.getItem('dsc-token')
        if (!location.state) return toast.error('you want to access in another way.')
        setloading(true)
        const { data, status } = await api.post('/order/order-paid', { orderId: location.state.orderId }, { headers: { Authorization: `Bearer ${token}` } })
        console.log(data)
        if (status === 201) {
            setloading(false)
            navigate('/')
            toast.success('this order paid successed.')
        } else if (status === 222) {
            setloading(false)
            toast.error(data.error)
        }
    }

    return (
        <>
            <Header />
            <div className=' w-full bg-gray-200 md:py-6 py-20'>
                {
                    loading &&
                    <p className=' p-4'>loading...</p>
                }
                <div className=' max-w-7xl mx-auto px-2 flex md:flex-col-reverse justify-between'>
                    <div className="left md:pt-6 md:px-2 w-full  border-black ">
                        <div className=' h-[100px] flex items-center pt-2 gap-x-3'>
                            <button onClick={() => setpaymentMethod({ name: 'Stripe Pay', image: '/payment/stripe.png' })} className={` h-full p-4 flex flex-col gap-y-1 items-center justify-center w-[110px] rounded-md outline-[3px] bg-white ${paymentMethod && paymentMethod.name === 'Stripe Pay' && ' outline-[3px] shadow-lg outline outline-sky-600'}`}>
                                <img src="/payment/stripe.png" className=' h-full' alt="" />
                                <p className=' text-[13px] tracking-wide'>Stripe</p>
                            </button>
                            <button onClick={() => setpaymentMethod({ name: 'Bkash Pay', image: '/payment/bkash.png' })} className={` h-full p-4 flex flex-col gap-y-1 items-center justify-center w-[110px] rounded-md bg-[#fff] ${paymentMethod && paymentMethod.name === 'Bkash Pay' && ' outline-[3px] shadow-lg outline outline-sky-600'}`}>
                                <img src="/payment/bkash.png" className=' h-full' alt="" />
                                <p className=' text-[13px] tracking-wide'>Bkash</p>
                            </button>
                            <button onClick={() => setpaymentMethod({ name: 'Nogod Pay', image: '/payment/nogot.png' })} className={` h-full p-4 flex flex-col gap-y-1 items-center justify-center w-[110px] rounded-md bg-[#fff] ${paymentMethod && paymentMethod.name === 'Nogod Pay' && ' outline-[3px] shadow-lg outline outline-sky-600'}`}>
                                <img src="/payment/nogot.png" className=' h-full' alt="" />
                                <p className=' text-[13px] tracking-wide'>Nogot</p>
                            </button>
                            <button onClick={() => setpaymentMethod({ name: 'Rocket Pay', image: '/payment/roket.png' })} className={` h-full p-4 flex flex-col gap-y-1 items-center justify-center w-[110px] rounded-md bg-[#fff] ${paymentMethod && paymentMethod.name === 'Rocket Pay' && ' outline-[3px] shadow-lg outline outline-sky-600'}`}>
                                <img src="/payment/roket.png" className=' h-full' alt="" />
                                <p className=' text-[13px] tracking-wide'>Rocket</p>
                            </button>
                        </div>
                        {
                            paymentMethod &&
                            <button onClick={payHanlder} className=' px-10 py-3 mt-12 rounded-lg bg-teal-700 shadow-lg duration-150 hover:scale-105 text-white text-[14px] tracking-wide font-sans font-semibold flex items-center gap-x-4'>{paymentMethod.name}<p className='p-1 rounded-md bg-white opacity-95'> <img src={paymentMethod.image} className='h-6 w-6' /> </p> </button>
                        }
                        {/* <button className=' opacity-50 px-10 py-3 mt-12 rounded-lg bg-teal-800 shadow-lg duration-150 hover:scale-105 text-white text-[14px] tracking-wide font-sans font-semibold flex items-center gap-x-4'>Bkash Pay <p className='p-1 rounded-md bg-white opacity-95'> <img src='/payment/bkash.png' className='h-6 w-6' /> </p> </button> */}
                    </div>
                    <div className="right w-full md:px-1 pl-[150px]">
                        <div className=' bg-white p-8 2 rounded-lg shadow-md'>
                            <h1 className='font-[600] tracking-wide text-[22px] text-teal-800 pb-2'>Order Summary</h1>
                            <div className='flex items-center pt-2 justify-between'>
                                <p className=' font-sans tracking-wide font-[500]'>Order items</p>
                                <p className=' font-sans tracking-wide font-[500]'>{location.state ? location.state.products.length : '----'}</p>
                            </div>
                            <div className='flex items-center pt-2 justify-between'>
                                <p className=' font-sans tracking-wide font-[500]'>Price (shipping fee included)</p>
                                <p className=' font-sans tracking-wide font-[500]'>${location.state ? location.state.price : '----'}</p>
                            </div>
                            <div className='flex items-center pt-2 justify-between'>
                                <p className=' font-sans tracking-wide font-[500]'>Discount Copoun code</p>
                                <p className=' font-sans tracking-wide font-[500]'>----</p>
                            </div>
                            <div className='flex border-t border-stone-400 pt-3 mt-2 items-center justify-between'>
                                <p className=' font-sans tracking-wide font-[600] text-[18px]'>SubTotal</p>
                                <p className=' tracking-wide font-[600] text-green-800 text-[20px]'>${location.state ? location.state.price : '----'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Payment