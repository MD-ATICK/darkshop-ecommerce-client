import React from 'react'
import Layout from './Layout'
import { FaApplePay, FaUsers } from 'react-icons/fa'
import { SiShopee } from 'react-icons/si'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import ApexCharts from 'apexcharts'

function Dashboard() {
    
    return (
        <Layout>
            <div className='p-6 sm:py-2 h-full bg-white'>
                <div className=' grid sm:grid-cols-2 grid-cols-3 gap-4'>
                    <div className='flex bg-[#ebf0f0]  rounded-2xl items-center justify-between px-10 md:px-8 py-6'>
                        <div >
                            <h1 className=' md:text-[22px] text-[35px] font-semibold text-[#1c9446]'>$12,500</h1>
                            <p className='text-[13px] tracking-wide text-stone-500'>Total Sales</p>
                        </div>
                        <p className='h-10 w-10 bg-[#0de07638] rounded-full flex items-center justify-center'><FaApplePay className='text-[25px]' /></p>
                    </div>

                    <div className='flex bg-[#ebf0f0]  rounded-2xl items-center justify-between px-10 py-6'>
                        <div >
                            <h1 className=' md:text-[22px] text-[35px] font-semibold text-[#047c97ce]'>58</h1>
                            <p className='text-[13px] tracking-wide text-stone-500'>Total Sellers</p>
                        </div>
                        <p className='h-10 w-10 bg-[#0d7ae038] rounded-full flex items-center justify-center'><FaUsers className='text-[20px]' /></p>
                    </div>
                    <div className='flex bg-[#ebf0f0]  rounded-2xl items-center justify-between px-10 py-6'>
                        <div >
                            <h1 className=' md:text-[22px] text-[35px] font-semibold text-[#da842e]'>06</h1>
                            <p className='text-[13px] tracking-wide text-stone-500'>Orders</p>
                        </div>
                        <p className='h-10 w-10 bg-[#c7531d48] rounded-full flex items-center justify-center'><AiOutlineShoppingCart className='text-[20px]' /></p>
                    </div>
                </div>
            </div>
            <div className="charts">
                <div className="leftCharts">

                </div>
            </div>
        </Layout>
    )
}

export default Dashboard
