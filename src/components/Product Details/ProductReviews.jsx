import React, { useState } from 'react'
import { HiStar, HiFilter, HiOutlineStar } from 'react-icons/hi'
import EachReviews from './EachReviews';
import ReactStars from "react-rating-stars-component";
import { MdClose } from 'react-icons/md'

function ProductReviews() {

  const [activeTap, setactiveTap] = useState(0);
  const [reviewModalShow, setreviewModalShow] = useState(false);

  return (
    <div className=' relative px-3'>
      <div className='relative flex items-center '>
        <button onClick={() => setactiveTap(0)} className=' py-[8px] text-[14px] tracking-wide text-center sm:w-[160px] w-[250px] bg-gray-200'>Reviwes</button>
        <button onClick={() => setactiveTap(1)} className=' py-[8px] text-[14px] tracking-wide text-center sm:w-[160px] w-[250px] bg-gray-200'>Description</button>
        <button className={` absolute top-0 left-0 transform ${activeTap === 0 ? 'translate-x-[0px]' : 'sm:translate-x-[160px] translate-x-[250px]'}  duration-500 sm:w-[160px] w-[250px] bg-teal-700 text-center text-white text-[14px] font-[400] tracking-wide py-[8px]`}>{activeTap === 0 ? 'Reviews' : 'Description'}</button>
      </div>

      {
        activeTap === 0 ?
          <div className=' '>
            <div className='flex sm:gap-x-1 gap-x-20 py-8'>
              <div className='left flex flex-col gap-y-1 px-3'>
                <p className='sm:text-[35px] text-[50px] font-bold font-sans text-stone-800'>4.5 <span className='sm:text-[17px] text-[20px] font-semibold font-sans text-stone-400 -m-2'>/5</span></p>
                <div className='flex items-center sm:gap-x-[1px] gap-x-1'>
                  <p><HiStar className='sm:text-[25px] text-[40px] text-yellow-500' /></p>
                  <p><HiStar className='sm:text-[25px] text-[40px] text-yellow-500' /></p>
                  <p><HiStar className='sm:text-[25px] text-[40px] text-yellow-500' /></p>
                  <p><HiStar className='sm:text-[25px] text-[40px] text-yellow-500' /></p>
                  <p><HiOutlineStar className='sm:text-[25px] text-[40px] text-yellow-500' /></p>
                </div>
                <p className='text-[13px] tracking-wide text-stone-500'>total 21 ratings</p>
              </div>
              <div className="right">
                <div className='flex sm:pt-0 -mt-[2px] pt-2 items-center sm:gap-x-2  gap-x-4'>
                  <div className='flex items-center sm:gap-x-[1px] gap-x-1'>
                    <p><HiStar className='sm:text-[16px] text-[22px] text-yellow-500' /></p>
                    <p><HiStar className='sm:text-[16px] text-[22px] text-yellow-500' /></p>
                    <p><HiStar className='sm:text-[16px] text-[22px] text-yellow-500' /></p>
                    <p><HiStar className='sm:text-[16px] text-[22px] text-yellow-500' /></p>
                    <p><HiStar className='sm:text-[16px] text-[22px] text-yellow-500' /></p>
                  </div>
                  <div className='flex items-center gap-x-2'>
                    <div className=' h-[13px] bg-gray-200 w-[70px] relative'>
                      <p className=' absolute top-0 left-0 h-full w-[70%] bg-yellow-500'></p>
                    </div>
                    <p className=' text-[13px] text-stone-500 font-[500]'>4/5</p>
                  </div>
                </div>
                <div className='flex sm:pt-0 -mt-[2px] pt-2 items-center gap-x-4'>
                  <div className='flex items-center sm:gap-x-[1px] gap-x-1'>
                    <p><HiStar className='sm:text-[16px] text-[22px] text-yellow-500' /></p>
                    <p><HiStar className='sm:text-[16px] text-[22px] text-yellow-500' /></p>
                    <p><HiStar className='sm:text-[16px] text-[22px] text-yellow-500' /></p>
                    <p><HiStar className='sm:text-[16px] text-[22px] text-yellow-500' /></p>
                    <p><HiOutlineStar className='sm:text-[16px] text-[22px] text-yellow-500' /></p>
                  </div>
                  <p>range</p>
                </div>
                <div className='flex sm:pt-0 -mt-[2px] pt-2 items-center gap-x-4'>
                  <div className='flex items-center sm:gap-x-[1px] gap-x-1'>
                    <p><HiStar className='sm:text-[16px] text-[22px] text-yellow-500' /></p>
                    <p><HiStar className='sm:text-[16px] text-[22px] text-yellow-500' /></p>
                    <p><HiStar className='sm:text-[16px] text-[22px] text-yellow-500' /></p>
                    <p><HiOutlineStar className='sm:text-[16px] text-[22px] text-yellow-500' /></p>
                    <p><HiOutlineStar className='sm:text-[16px] text-[22px] text-yellow-500' /></p>
                  </div>
                  <p>range</p>
                </div>
                <div className='flex sm:pt-0 -mt-[2px] pt-2 items-center gap-x-4'>
                  <div className='flex items-center sm:gap-x-[1px] gap-x-1'>
                    <p><HiStar className='sm:text-[16px] text-[22px] text-yellow-500' /></p>
                    <p><HiStar className='sm:text-[16px] text-[22px] text-yellow-500' /></p>
                    <p><HiOutlineStar className='sm:text-[16px] text-[22px] text-yellow-500' /></p>
                    <p><HiOutlineStar className='sm:text-[16px] text-[22px] text-yellow-500' /></p>
                    <p><HiOutlineStar className='sm:text-[16px] text-[22px] text-yellow-500' /></p>
                  </div>
                  <p>range</p>
                </div>
                <div className='flex sm:pt-0 -mt-[2px] pt-2 items-center gap-x-4'>
                  <div className='flex items-center sm:gap-x-[1px] gap-x-1'>
                    <p><HiStar className='sm:text-[16px] text-[22px] text-yellow-500' /></p>
                    <p><HiOutlineStar className='sm:text-[16px] text-[22px] text-yellow-500' /></p>
                    <p><HiOutlineStar className='sm:text-[16px] text-[22px] text-yellow-500' /></p>
                    <p><HiOutlineStar className='sm:text-[16px] text-[22px] text-yellow-500' /></p>
                    <p><HiOutlineStar className='sm:text-[16px] text-[22px] text-yellow-500' /></p>
                  </div>
                  <p>range</p>
                </div>
                <div className='flex sm:pt-0 -mt-[2px] pt-2 items-center gap-x-4'>
                  <div className='flex items-center sm:gap-x-[1px] gap-x-1'>
                    <p><HiOutlineStar className='sm:text-[16px] text-[22px] text-yellow-500' /></p>
                    <p><HiOutlineStar className='sm:text-[16px] text-[22px] text-yellow-500' /></p>
                    <p><HiOutlineStar className='sm:text-[16px] text-[22px] text-yellow-500' /></p>
                    <p><HiOutlineStar className='sm:text-[16px] text-[22px] text-yellow-500' /></p>
                    <p><HiOutlineStar className='sm:text-[16px] text-[22px] text-yellow-500' /></p>
                  </div>
                  <p>range</p>
                </div>
              </div>
            </div>
            <div className='py-3 sm:px-4'>
              <p className=' font-sans tracking-wide text-[17px] font-[600]'>Products Reviews (<span className=' text-teal-800 font-sans'>30</span>)</p>
              <div className=' w-full flex flex-col gap-y-8 p-6 sm:px-0 pr-8'>
                {
                  [1, 2, 3, 4, 5, 6, 7].map((r) => {
                    return <EachReviews key={r} />
                  })
                }
              </div>
              <button className=' w-full pr-12 text-[14px]  underline text-stone-600 hover:text-black text-right flex justify-end'>view more</button>
            </div>
            <div className='px-6 sm:px-6 pr-20 py-6'>
              <button onClick={() => setreviewModalShow(true)} className='py-2 text-center  shadow-md duration-200 hover:scale-105 bg-teal-700 text-white w-full text-[14px] tracking-wide' >send a review</button>
            </div>
          </div>
          :
          <div className=' p-4 flex flex-col gap-y-0 w-full pr-20'>
            <p className='text-[14px] tracking-wide'>Make by : Clikon choth.</p>
            <p className='text-[14px] tracking-wide'>Maked Time : 2 days.</p>
            <p className='pt-4 text-[13px] tracking-wide'>Description : Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam eius ducimus ratione quo ea doloribus dolore, beatae minus non esse! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas numquam possimus unde eveniet, nisi voluptatum doloremque rem expedita pariatur minima impedit officia fugit illum magnam dolor! Deserunt accusamus similique eaque!</p>
          </div>
      }
      {
        reviewModalShow &&
        <div onClick={(e) => {
          e.stopPropagation()
          setreviewModalShow(false)
        }} className=' z-50 fixed p-3 flex justify-center items-center top-0 left-0 h-screen w-full bg-[#070707a9]'>
          <div className=' review relative box sm:w-full w-[400px] bg-white p-6 rounded-md shadow-md'>
            <p className='pb-1 text-[14px] tracking-wide text-stone-600'>Hi , <span className='bg-teal-700 px-1 text-white'>Borhan</span></p>
            <ReactStars
              value={1}
              onChange={() => console.log('changeing')}
              size={40}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#0989a0"
            />
            <textarea name="" id="" cols="0" rows="5" className='mt-1 w-full border-2 outline-none border-teal-700 rounded-lg p-2 placeholder:text-stone-500 text-[14px] tracking-wide' placeholder='enter your feedback ....'></textarea>
            <button className=' mt-6 shadow-md hover:scale-105 duration-200 w-full bg-teal-700 rounded-lg py-3 text-[13px] tracking-wide text-white'>send feedback</button>
            <button onClick={() => setreviewModalShow(false)} className=' h-10 w-10 absolute top-4 right-4 bg-teal-700 rounded-full text-white flex justify-center items-center text-[20px] '>
              <MdClose />
            </button>
          </div>
        </div>
      }
    </div>
  )
}

export default ProductReviews