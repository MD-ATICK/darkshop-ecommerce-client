import React from 'react'
import { Link } from 'react-router-dom'

function ShortBanner({ routeChange }) {

    return (
        <div className=' w-full  bg-gray-600 shadow-lg'>
            <div className=' max-w-7xl mx-auto bg-[url(https://t4.ftcdn.net/jpg/03/83/21/83/360_F_383218302_smPIe6zWcaa6UnSCmNqjchz9CMZVfbON.jpg)] bg-[#05050579] bg-blend-multiply sm:h-[180px] h-[420px]   bg-cover bg-no-repeat relative bg-right-top'>
                <div className=' absolute left-[45%] top-[40%] -translate-y-1/2 -translate-x-1/2 transform flex justify-center items-center gap-y-2 flex-col'>
                    <p className=' text-center text-white text-[42px] sm:text-[28px] font-sans font-bold '>shopp <span className=' -ml-2 font-bold sm:text-[28px] text-[45px] text-teal-600'>.my</span>~ {routeChange[routeChange.length - 1].name}</p>
                    <p className=' text-center'>
                        {routeChange.map((r, i) => {
                            return <Link className=' text-white  ' key={i} to={r.path} > <span className='underline text-[16px] tracking-wide font-sans font-[600]'>{r.name}</span> {routeChange.length - 1 !== i && ' > '}</Link>
                        })}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ShortBanner