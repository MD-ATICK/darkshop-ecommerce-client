import React, { useState } from 'react'
import SingleFutureProduct from '../Future Products/SingleFutureProduct'
import { BsMessenger } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function SPcontent({ temp_prods }) {

  const [activeTap, setactiveTap] = useState(0);

  return (
    <div className='pb-28 max-w-7xl mx-auto md:flex-col flex h-auto'>
      <div id='leftside' className="max-w-[600px]">
        <div className=' w-full h-[250px] relative bg-sky-600'>
          <img className='h-[270px] absolute -bottom-20 left-[50%] -translate-x-1/2 shadow-lg aspect-square rounded-full border-[8px] border-white' src="https://m.media-amazon.com/images/I/41ti9DrhjvL._AC_UY1100_.jpg" alt="" />
        </div>
        <div className=' w-full text-center mt-[90px]'>
          <p className=' font-sans tracking-wide font-[700] text-[18px]'>Sakib Khan <span className='text-[13px] font-[400px] text-teal-800 tracking-normal'>(5 reviews)</span></p>
          <div className=' flex justify-center gap-x-2 mt-1'>
            <p className=' font-sans text-[15px] justify-center tracking-wide font-semibold flex items-center gap-x-1'>3k Followers
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
            </p>
            <button className='text-[13px] tracking-wide bg-orange-300 hover:bg-orange-400 rounded-md shadow-md text-white px-4 py-2 font-sans font-semibold'>Follow +</button>
            <Link to={'/chats/jdkfjdjf'} className='text-[13px] cursor-pointer tracking-wide bg-sky-600 hover:bg-orange-400 rounded-md shadow-md text-white py-[6px] px-2 font-sans font-semibold'>
              <BsMessenger className='text-[20px]' />
            </Link>
          </div>
          <p className='text-[13px] tracking-wide text-stone-600 p-6'>Lorem ipsu animi maiores beatae a, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique quaerat quasi in nesciunt sint! Facilis? hasib jjekane sekane doke pore inventore sed ullam aut, neque unde? Inventore, voluptatibus.</p>
        </div>
        <div className=' p-8 py-2 flex flex-col gap-y-2'>
          <div className='flex items-center gap-x-2'>
            <p className=' font-sans tracking-wide font-semibold text-[16px]'> Shop Name : </p>
            <p className=' font-sans tracking-wide font-[700] text-[18px]'>Borhan Taillers </p>
          </div>
          <div className='flex items-center gap-x-2'>
            <p className=' font-sans tracking-wide font-semibold text-[16px]'> Shop Number : </p>
            <p className=' font-sans tracking-wide font-[700] text-[18px]'>+880182951065 </p>
          </div>
          <div className='flex items-center gap-x-2'>
            <p className=' font-sans tracking-wide font-semibold text-[16px]'> Addresss : </p>
            <p className=' font-sans tracking-wide font-[700] text-[18px]'> Rungunia , Lichubagan , chittagong </p>
          </div>
        </div>
        <div className='p-4 py-6'>
          <p className=' font-sans text-teal-900 text-[18px] tracking-wide font-[700]'>All Reviews (21)</p>
          <div id='main scroll div' className='py-5 w-[400px]  overflow-x-scroll'>
            <div className=' w-full px-1 flex items-center gap-x-3'>
              <div className='p-4 min-w-[250px]  h-[200px] rounded-lg bg-gray-200'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-x-2'>
                    <img className='h-6 w-6  rounded-full shadow-md object-cover' src="https://www.styleex.com.bd/images/detailed/229/c308cefd425cd0a20a3d4881e20ec2ca.jpeg" alt="" />
                    <p className='text-[14px] font-sans tracking-wide font-semibold'>Borhan</p>
                  </div>
                  <p className='text-[13px] tracking-wide'>21/21/23</p>
                </div>
                <p>xxxxx</p>
                <p className='text-[12px] tracking-wide'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, qui corrupti. Est architecto fugiat, a consequuntur quasi doloribus inventore unde!</p>
              </div>
              <div className='p-4 min-w-[250px]  h-[200px] rounded-lg bg-gray-200'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-x-2'>
                    <img className='h-6 w-6  rounded-full shadow-md object-cover' src="https://www.styleex.com.bd/images/detailed/229/c308cefd425cd0a20a3d4881e20ec2ca.jpeg" alt="" />
                    <p className='text-[14px] font-sans tracking-wide font-semibold'>Borhan</p>
                  </div>
                  <p className='text-[13px] tracking-wide'>21/21/23</p>
                </div>
                <p>xxxxx</p>
                <p className='text-[12px] tracking-wide'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, qui corrupti. Est architecto fugiat, a consequuntur quasi doloribus inventore unde!</p>
              </div>
              <div className='p-4 min-w-[250px]  h-[200px] rounded-lg bg-gray-200'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-x-2'>
                    <img className='h-6 w-6  rounded-full shadow-md object-cover' src="https://www.styleex.com.bd/images/detailed/229/c308cefd425cd0a20a3d4881e20ec2ca.jpeg" alt="" />
                    <p className='text-[14px] font-sans tracking-wide font-semibold'>Borhan</p>
                  </div>
                  <p className='text-[13px] tracking-wide'>21/21/23</p>
                </div>
                <p>xxxxx</p>
                <p className='text-[12px] tracking-wide'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, qui corrupti. Est architecto fugiat, a consequuntur quasi doloribus inventore unde!</p>
              </div>

            </div>
          </div>
        </div>
        <div className=' w-full pl-5 pr-8'>
          <button className=' w-full font-sans text-[15px] tracking-wide font-semibold rounded-md py-3 hover:shadow-lg bg-sky-600 text-white'>Send a Feedback</button>
        </div>
      </div>
      <div id="rightside" className=' md:mt-6 x flex-grow md:px-2 px-10 py-2'>
        <div className=' pt-3 pb-5'>
          <div className='relative flex items-center  w-full '>
            <button onClick={() => setactiveTap(0)} className=' py-[14px] text-[14px] text-black tracking-wide font-semibold text-center w-full bg-[#14656159]'>Shop Products</button>
            <button onClick={() => setactiveTap(1)} className=' py-[14px] text-[14px] text-black font-semibold tracking-wide text-center w-full bg-[#14656159]'>Most Reviewed Prods</button>
            <button className={` absolute font-semibold top-0 left-0 transform ${activeTap === 0 ? 'translate-x-[0px]' : ' translate-x-[100%]'}  duration-500 w-1/2 bg-teal-700 text-center text-white text-[14px] font-[400] tracking-wide py-[14px]`}>{activeTap === 0 ? 'All Products' : 'Most Reviewed Prods'}</button>
          </div>

        </div>

        <div className='grid md:grid-cols-2 grid-cols-3 gap-5'>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(r => {
            return <SingleFutureProduct key={r} product={temp_prods} size={300} />
          })}
        </div>
      </div>
    </div>
  )
}

export default SPcontent