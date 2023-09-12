import React from 'react'
import { HiStar } from 'react-icons/hi'

function EachReviews() {
    return (
        <div className='eachReviews'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-x-1'>
                    <p><HiStar className='text-[22px] text-yellow-500' /></p>
                    <p><HiStar className='text-[22px] text-yellow-500' /></p>
                    <p><HiStar className='text-[22px] text-yellow-500' /></p>
                    <p><HiStar className='text-[22px] text-yellow-500' /></p>
                    <p><HiStar className='text-[22px] text-yellow-500' /></p>
                </div>
                <p className='text-[14px] tracking-wide text-stone-500'>07 Jun 2023</p>
            </div>
            <div className='flex items-center py-1 gap-x-3'>
                <img className='h-4 w-4  rounded-full' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" />
                <p className='text-[14px] font-sans font-[600] tracking-wide text-stone-600 '>Borhan Uddin</p>
            </div>
            <div className="description pt-1">
                <p className='text-[13px] tracking-wide leading-[1.25rem] text-stone-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi autem ea culpa voluptates omnis sapiente, odio consectetur reiciendis vel at laborum, dolorum ullam! Dolorum minus doloremque eveniet totam aliquid nesciunt iure repudiandae et, sint dicta, omnis id, dolore nemo deleniti quidem iusto. Officia doloremque, ipsam consequuntur temporibus reprehenderit nemo recusandae!</p>
            </div>
        </div>
    )
}

export default EachReviews