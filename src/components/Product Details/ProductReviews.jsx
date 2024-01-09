import React, { useEffect, useState } from 'react'
import { HiStar, HiFilter, HiOutlineStar } from 'react-icons/hi'
import EachReviews from './EachReviews';
import ReactStars from "react-rating-stars-component";
import { MdClose } from 'react-icons/md'
import { toast } from 'react-toastify';
import axios from 'axios'
import { ScaleLoader } from 'react-spinners'
import api from '../../api/api';
import { useLocation, useNavigate } from 'react-router-dom';
import { useInsertionEffect } from 'react';
import { useDispatch } from 'react-redux';
import { add_review } from '../../store/reducers/ReviewReducer';

function ProductReviews({ prodReviews, sellerid, productid }) {


  const [activeTap, setactiveTap] = useState(0);
  const [reviewModalShow, setreviewModalShow] = useState(false);
  const [postLoad, setpostLoad] = useState(false);

  const [totalRating, settotalRating] = useState(0);

  const [rating, setrating] = useState(0);
  const [content, setcontent] = useState('');
  const [images, setimages] = useState([]);

  const c = (totalRating / prodReviews.length).toFixed(1)

  const [imageLoading, setimageLoading] = useState(false);
  const token = localStorage.getItem('dsc-token')
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()

  const ImagesHanlder = (e) => {
    const files = Array.from(e.target.files)
    if (files.length === 0) return;
    setimageLoading(true)
    files.map(async (file) => {
      const form = new FormData()
      form.append('image', file)
      const { data: uploadData, status: uploadStatus } = await axios.post('https://api.imgbb.com/1/upload?key=57c12ab1dfd1e175a03c87dbdc436f90', form)
      if (uploadStatus === 200) {
        return setimages(prev => [...prev, uploadData.data.url])
      }
    })
    setimageLoading(false)
  }


  const reviewSubmitHanlder = async () => {
    try {
      setpostLoad(true)
      if (!token) return navigate('/login', { state: { backurl: window.location.href } })
      const { data, status } = await api.post('/v5/review/post', { rating, content, images, sellerid, productid }, { headers: { Authorization: `Bearer ${token}` } })
      if (status === 201) {
        toast.success('successed.')
        dispatch(add_review(data.review))
        setpostLoad(false)
        setreviewModalShow(false)
      }
    } catch (error) {
      setpostLoad(false)
      console.log('error', error)
    }
  }

  useEffect(() => {
    settotalRating(0)
    prodReviews.map(pr => settotalRating(prev => prev += pr.rating))
  }, [prodReviews]);

  const j = Math.ceil(((totalRating / prodReviews.length).toFixed(1) / 5) * 100)
  const a = j + '%'


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
            <div className='flex md:flex-col gap-y-6 sm:gap-x-1 gap-x-20 py-8'>
              <div className='left flex flex-col gap-y-1 px-3'>
                <p className='sm:text-[35px] text-[50px] font-bold font-sans text-stone-800'>{(totalRating / prodReviews.length).toFixed(1)} <span className='sm:text-[17px] text-[20px] font-semibold font-sans text-stone-400 -m-2'>/5</span></p>
                <div className='flex items-center gap-x-3'>
                  <div className=' h-[12px] bg-gray-200 w-[200px] rounded-full overflow-hidden relative'>
                    <p style={{ width: a }} className={`absolute top-0 left-0 h-full bg-yellow-500`}></p>
                  </div>
                  <p>{Math.ceil(((totalRating / prodReviews.length).toFixed(1) / 5) * 100)}%</p>
                </div>
                <p className='text-[16px] font-sans tracking-wide font-semibold mt-4 text-stone-500'>Total ratings <span className='text-[18px] font-semibold text-teal-800'>{totalRating} </span></p>
              </div>
              <div className="right md:pl-4">
                <div className='flex sm:pt-0 -mt-[2px] pt-2 items-center sm:gap-x-2  gap-x-4'>
                  <div className='flex items-center sm:gap-x-[1px] gap-x-1'>
                    <p className='flex items-center gap-x-1 font-semibold text-stone-500 text-xl'> 5 <HiStar className='sm:text-[16px] text-[22px] text-yellow-500' /></p>

                  </div>
                  <div className='flex items-center gap-x-2'>
                    <div className=' h-[10px] bg-gray-200 w-[120px] rounded-full overflow-hidden relative'>
                      <p className=' absolute top-0 left-0 h-full  w-[70%] bg-yellow-500'></p>
                    </div>
                    <p className=' text-[13px] text-stone-500 font-[500]'>70%</p>
                  </div>
                </div>
                <div className='flex sm:pt-0 -mt-[2px] pt-2 items-center gap-x-4'>
                  <div className='flex items-center sm:gap-x-[1px] gap-x-1'>
                    <p className='flex items-center gap-x-1 font-semibold text-stone-500 text-xl'> 4 <HiStar className='sm:text-[16px] text-[22px] text-yellow-500' /></p>

                  </div>
                  <div className='flex items-center gap-x-2'>
                    <div className=' h-[10px] bg-gray-200 w-[120px] rounded-full overflow-hidden relative'>
                      <p className=' absolute top-0 left-0 h-full  w-[70%] bg-yellow-500'></p>
                    </div>
                    <p className=' text-[13px] text-stone-500 font-[500]'>70%</p>
                  </div>
                </div>
                <div className='flex sm:pt-0 -mt-[2px] pt-2 items-center gap-x-4'>
                  <div className='flex items-center sm:gap-x-[1px] gap-x-1'>
                    <p className='flex items-center gap-x-1 font-semibold text-stone-500 text-xl'> 3 <HiStar className='sm:text-[16px] text-[22px] text-yellow-500' /></p>

                  </div>
                  <div className='flex items-center gap-x-2'>
                    <div className=' h-[10px] bg-gray-200 w-[120px] rounded-full overflow-hidden relative'>
                      <p className=' absolute top-0 left-0 h-full  w-[70%] bg-yellow-500'></p>
                    </div>
                    <p className=' text-[13px] text-stone-500 font-[500]'>70%</p>
                  </div>
                </div>
                <div className='flex sm:pt-0 -mt-[2px] pt-2 items-center gap-x-4'>
                  <div className='flex items-center sm:gap-x-[1px] gap-x-1'>
                    <p className='flex items-center gap-x-1 font-semibold text-stone-500 text-xl'> 2 <HiStar className='sm:text-[16px] text-[22px] text-yellow-500' /></p>

                  </div>
                  <div className='flex items-center gap-x-2'>
                    <div className=' h-[10px] bg-gray-200 w-[120px] rounded-full overflow-hidden relative'>
                      <p className=' absolute top-0 left-0 h-full  w-[70%] bg-yellow-500'></p>
                    </div>
                    <p className=' text-[13px] text-stone-500 font-[500]'>70%</p>
                  </div>
                </div>
                <div className='flex sm:pt-0 -mt-[2px] pt-2 items-center gap-x-4'>
                  <div className='flex items-center sm:gap-x-[1px] gap-x-1'>
                    <p className='flex items-center gap-x-1 font-semibold text-stone-500 text-xl'> 1 <HiStar className='sm:text-[16px] text-[22px] text-yellow-500' /></p>

                  </div>
                  <div className='flex items-center gap-x-2'>
                    <div className=' h-[10px] bg-gray-200 w-[120px] rounded-full overflow-hidden relative'>
                      <p className=' absolute top-0 left-0 h-full  w-[70%] bg-yellow-500'></p>
                    </div>
                    <p className=' text-[13px] text-stone-500 font-[500]'>70%</p>
                  </div>
                </div>

              </div>
            </div>
            <div className='py-3 sm:px-4'>
              <p className=' font-sans tracking-wide text-[17px] font-[600]'>Products Reviews (<span className=' text-teal-800 font-sans'>{prodReviews.length}</span>)</p>
              <div className=' w-full flex flex-col gap-y-8 p-6 sm:px-0 px-4 pr-8'>
                {
                  prodReviews.map((review, r) => {
                    return <EachReviews key={r} review={review} />
                  })
                }
              </div>
              <button className='mt-4 w-full pr-12 text-[14px]  underline text-stone-600 hover:text-black text-right flex justify-end'>view more</button>
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
        <div id='review box' onClick={(e) => {
          setreviewModalShow(false)
        }} className=' z-50 fixed p-3 flex justify-center items-center top-0 left-0 h-screen w-full bg-[#070707a9]'>
          <div onClick={(e) => e.stopPropagation()} className=' review relative box sm:w-full w-[400px] bg-white p-6 rounded-md shadow-md'>
            <p className='pb-1 text-[14px] tracking-wide text-stone-600'>Hi , <span className='bg-teal-700 px-1 text-white'>Borhan</span></p>
            <div className=''>
              <ReactStars
                value={rating}
                onChange={(e) => setrating(e)}
                size={40}
                isHalf={false}
                activeColor="#ffd700"
              />

            </div>
            <textarea value={content} onChange={(e) => setcontent(e.target.value)} name="" id="" cols="0" rows="5" className='mt-1 w-full border-2 outline-none border-teal-700 rounded-lg p-2 placeholder:text-stone-500 text-[14px] tracking-wide' placeholder='enter your feedback ....'></textarea>
            <div className='py-2'>
              <p className='text-[15px] pb-2 tracking-wide text-stone-600'>+ upload images</p>
              <div id="review_images" className='grid grid-cols-4 items-center gap-2'>
                {images.length > 0 && images.map((img, i) => {
                  return <img key={i} className='h-[80px] w-[80px] rounded-lg shadow-md' src={img} alt="" />
                })}
                <div>
                  <input onChange={ImagesHanlder} id='images' multiple type="file" className=' hidden' />
                  <label htmlFor='images' className='flex cursor-pointer justify-center items-center h-[80px] w-[80px] bg-gray-300 rounded-lg shadow-lg'>
                    <p className=' text-stone-700 text-lg'> {imageLoading ? <ScaleLoader /> : '+'} </p>
                  </label>
                </div>
              </div>
            </div>
            <button onClick={reviewSubmitHanlder} className=' mt-6 shadow-md hover:scale-105 duration-200 w-full bg-teal-700 rounded-lg py-3 text-[13px] tracking-wide text-white'> {postLoad ? <ScaleLoader /> : 'send feedback'} </button>
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