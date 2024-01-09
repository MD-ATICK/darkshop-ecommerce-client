import React from 'react'
import { AiFillProfile } from 'react-icons/ai'
import { GrSettingsOption } from 'react-icons/gr'
import { BiCart, BiLogOut, BiUser } from 'react-icons/bi'
import { MdDashboard, MdPassword } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { logout } from '../../store/reducers/AuthReducer'
import { toast } from 'react-toastify'

function LeftRouteSlide() {

   const navigate = useNavigate()
   const dispatch = useDispatch()

   const LogoutHanlder = () => {
      dispatch(logout())
      localStorage.removeItem('dsc-token')
      navigate('/')
      toast.success('account logout successed.')
   }


   return (
      <div>
         <div className='md:hidden h-full w-[350px] py-5 px-5'>
            <div>
               <Link to={'/'} className=' text-[15px] font-[500]' >Home <span className=' text-stone-400'>/</span></Link>
               <Link to={'/'} className=' text-[15px] font-[500] text-teal-700' > account</Link>
            </div>
            <h1 className=' pt-6 pb-8 text-[24px] text-stone-700 font-[600] tracking-wide'>My Account</h1>
            <div className=' w-full pl-4'>
               <div className='account flex flex-col gap-y-1'>
                  <NavLink to={'/dashboard'} className='flex items-center gap-x-3 py-3  px-4  rounded-md'>
                     <p><MdDashboard /></p>
                     <p className=' text-[15px] tracking-wide'>Dashboard</p>
                  </NavLink>
                  <NavLink to={'/profile'} className='flex items-center gap-x-3 py-3 text-stone-700 px-4 rounded-md'>
                     <p><BiUser /></p>
                     <p className=' text-[15px] tracking-wide'>Profile</p>
                  </NavLink>
                  <NavLink to={'/my-orders'} className='flex items-center gap-x-3 py-3 text-stone-700 px-4 rounded-md'>
                     <p><BiCart /></p>
                     <p className=' text-[15px] tracking-wide'>My orders</p>
                  </NavLink>
                  <NavLink to={'/change-password'} className='flex items-center gap-x-3 py-3 text-stone-700 px-4 rounded-md'>
                     <p><MdPassword /></p>
                     <p className=' text-[15px] tracking-wide'>Change Passoword</p>
                  </NavLink>
                  <NavLink to={'/chats'} className='flex items-center gap-x-3 py-3 text-stone-700 px-4 rounded-md'>
                     <p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                        </svg>
                     </p>
                     <p className=' text-[15px] tracking-wide'>Chats</p>
                  </NavLink>
                  <button onClick={LogoutHanlder} className='flex items-center gap-x-3 py-3 text-red-700 px-4 rounded-md'>
                     <p><BiLogOut /></p>
                     <p className=' text-[15px] tracking-wide'>Logout</p>
                  </button>

               </div>
            </div>
         </div>
         <div className='md:flex hidden slide2 h-[60px] shadow-lg shadow-black bg-gradient-to-r from-teal-700 to-teal-900 justify-evenly overflow-hidden py-1 w-full items-center fixed bottom-0 left-0'>
            <NavLink to={'/dashboard'} className='flex duration-200 text-white  flex-col items-center gap-x-3 py-1  px-4  rounded-md'>
               <p><MdDashboard className='text-[26px]' /></p>
               <p className=' text-[10px] tracking-wide'>D.Board</p>
            </NavLink>
            <NavLink to={'/profile'} className='flex duration-200 text-white  flex-col items-center gap-x-3 py-1  px-4  rounded-md'>
               <p><BiUser className='text-[26px]' /></p>
               <p className=' text-[10px] tracking-wide'>Profile</p>
            </NavLink>
            <NavLink to={'/my-orders'} className='flex duration-200 text-white  flex-col items-center gap-x-3 py-[2px]  px-4  rounded-md'>
               <p><BiCart className='text-[30px]' /></p>
               <p className=' text-[10px] tracking-wide'>My orders</p>
            </NavLink>
            <NavLink to={'/chats'} className='flex duration-200 text-white flex-col items-center gap-x-3 py-1  px-4  rounded-md'>
               <p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                  </svg>
               </p>
               <p className=' text-[10px] tracking-wide'>Chats</p>
            </NavLink>
            <NavLink to={'/change-password'} className='flex duration-200 text-white  flex-col items-center gap-x-3 py-1  px-4  rounded-md'>
               <p><MdPassword className='text-[26px]' /></p>
               <p className=' text-[10px] tracking-wide'>C.Password</p>
            </NavLink>
         </div>
      </div>
   )
}

export default LeftRouteSlide