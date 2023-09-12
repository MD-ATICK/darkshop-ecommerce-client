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
                  <NavLink to={'/settings'} className='flex items-center gap-x-3 py-3 text-stone-700 px-4 rounded-md'>
                     <p><GrSettingsOption className='' /></p>
                     <p className=' text-[15px] tracking-wide'>Settings</p>
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
               <p><MdDashboard className='text-[20px]' /></p>
               <p className=' text-[10px] tracking-wide'>D.Board</p>
            </NavLink>
            <NavLink to={'/profile'} className='flex duration-200 text-white  flex-col items-center gap-x-3 py-1  px-4  rounded-md'>
               <p><BiUser className='text-[20px]' /></p>
               <p className=' text-[10px] tracking-wide'>Profile</p>
            </NavLink>
            <NavLink to={'/my-orders'} className='flex duration-200 text-white  flex-col items-center gap-x-3 py-1  px-4  rounded-md'>
               <p><BiCart className='text-[20px]' /></p>
               <p className=' text-[10px] tracking-wide'>My orders</p>
            </NavLink>
            <NavLink to={'/change-password'} className='flex duration-200 text-white  flex-col items-center gap-x-3 py-1  px-4  rounded-md'>
               <p><MdPassword className='text-[20px]' /></p>
               <p className=' text-[10px] tracking-wide'>C.Password</p>
            </NavLink>
            <NavLink to={'/settings'} className='flex duration-200 text-white flex-col items-center gap-x-3 py-1  px-4  rounded-md'>
               <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
               </svg>
               </p>
               <p className=' text-[10px] tracking-wide'>Settings</p>
            </NavLink>
         </div>
      </div>
   )
}

export default LeftRouteSlide