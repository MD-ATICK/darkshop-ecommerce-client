import React from 'react'
import { BiSolidSend} from 'react-icons/bi'

function Footer() {
  return (
    <div className="w-full bg-gray-200  ">
      <div className=' max-w-7xl mx-auto py-20 md:px-7 md:py-10 px-4 flex gap-y-5 flex-wrap '>
        <div className=" w-[370px] border-black">
          <p className='text-[39px] font-sans font-bold '>shopp <span className=' -ml-2 font-bold text-[40px] text-teal-700'>.my</span></p>
          <div className='mt-6 flex flex-col gap-y-2'>
            <p className='text-[13.5px] tracking-wide text-stone-500'>Address : Lichubagan, Rugunia , Chittagong.</p>
            <p className='text-[14px] tracking-wide text-stone-500'>Phone : +880125685685</p>
            <p className='text-[14px] tracking-wide text-stone-500'>Email : atick.business.info@gmail.com</p>
          </div>
        </div>
        <div className=" w-[230px] border-black">
          <h1 className=' text-[23px] font-bold font-sans '>UseFul Links</h1>
          <ul className=' list-none flex flex-col gap-y-2 mt-4'>
            <p className='text-[14px] tracking-wide text-stone-500 underline cursor-pointer hover:text-stone-700'>About Us</p>
            <p className='text-[14px] tracking-wide text-stone-500 underline cursor-pointer hover:text-stone-700'>About Our Shop</p>
            <p className='text-[14px] tracking-wide text-stone-500 underline cursor-pointer hover:text-stone-700'>Secure Shoping</p>
            <p className='text-[14px] tracking-wide text-stone-500 underline cursor-pointer hover:text-stone-700'>Delivery imformation Us</p>
            <p className='text-[14px] tracking-wide text-stone-500 underline cursor-pointer hover:text-stone-700'>Privacy Policy</p>
            <p className='text-[14px] tracking-wide text-stone-500 underline cursor-pointer hover:text-stone-700'>Our Sitemap</p>
          </ul>
        </div>
        <div className=" w-[230px] border">
          <ul className=' list-none flex flex-col gap-y-2 mt-4'>
            <p className='text-[14px] tracking-wide text-stone-500 hover:text-stone-700'>About Us</p>
            <p className='text-[14px] tracking-wide text-stone-500 hover:text-stone-700'>About Our Shop</p>
            <p className='text-[14px] tracking-wide text-stone-500 hover:text-stone-700'>Secure Shoping</p>
            <p className='text-[14px] tracking-wide text-stone-500 hover:text-stone-700'>Delivery imformation Us</p>
            <p className='text-[14px] tracking-wide text-stone-500 hover:text-stone-700'>Privacy Policy</p>
            <p className='text-[14px] tracking-wide text-stone-500 hover:text-stone-700'>Our Sitemap</p>

          </ul>
        </div>
        <div className=" w-[400px] border flex flex-col gap-y-5 md:mt-6">
          <h1 className=' text-[23px] font-bold tracking-wide font-sans '>Join Our Newsletter Now</h1>
          <p className='text-[13px] tracking-wide text-stone-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum sed optio eius soluta facilis dolores?</p>
          <div className='h-[45px] md:my-2 my-5 flex relative items-center'>
            <input type="text" className=' h-full rounded-lg  text-[14px] tracking-wide placeholder:text-stone-500 px-5' placeholder='Enter your email' />
            <button className='h-14 w-14 rounded-lg bg-teal-700 shadow-md absolute top-1/2 -translate-y-1/2 xs:right-2 right-16 flex justify-center items-center'><BiSolidSend  className='text-white text-3xl' /></button>
          </div>
          <div className='flex items-center gap-x-4'>
            <p className='h-10 w-10 text-white bg-sky-600 rounded-full flex items-center justify-center'>x</p>
            <p className='h-10 w-10 text-white bg-sky-600 rounded-full flex items-center justify-center'>x</p>
            <p className='h-10 w-10 text-white bg-sky-600 rounded-full flex items-center justify-center'>x</p>
            <p className='h-10 w-10 text-white bg-sky-600 rounded-full flex items-center justify-center'>x</p>
          </div>
        </div>
      </div>
      <div className=' w-full bg-teal-800 text-center flex items-center justify-center h-[60px]'>
        <p className='text-[14px] tracking-wide text-gray-50'>Copyright &copy; 2023 all rights reserved by the gorverment. </p>
      </div>
    </div>
  )
}

export default Footer