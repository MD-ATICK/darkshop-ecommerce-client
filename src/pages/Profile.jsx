import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import { MdLocationPin, MdCall, MdOutlineMail } from 'react-icons/md'
import { BsFillBuildingsFill } from 'react-icons/bs'
import { BiEdit, BiLogOut, BiLogoFlutter, BiText } from 'react-icons/bi'
import { GrSystem } from 'react-icons/gr'
import { FiEdit } from 'react-icons/fi'
import { logout } from '../store/reducers/AuthReducer'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Profile() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [logoutModal, setlogoutModal] = useState(false);

    const LogoutHanlder = () => {
        dispatch(logout())
        localStorage.removeItem('dsc-token')
        navigate('/')
        toast.success('account logout successed.')
    }


    useEffect(() => {
        setlogoutModal(false)
    }, []);

    return (
        <Layout>
            <div onClick={() => setlogoutModal(false)}>
                <div onClick={(e) => e.stopPropagation()} className='p-6 md:pb-20 h-full overflow-y-scroll'>
                    <div className='flex items-center justify-between pb-4'>
                        <h1 className=' text-[22px] tracking-wide font-[600] text-stone-900'>My Profile</h1>
                        <div className=' relative'>
                            <button onClick={() => setlogoutModal(!logoutModal)} className=' absolute -top-6 right-0 flex z-20 duration-150 mb-1 hover:shadow-lg items-center bg-[#d27a7a]  gap-x-3 py-3 text-white px-6 rounded-xl'>
                                <p><BiLogOut /></p>
                                <p className=' text-[14px] tracking-wide'>Logout</p>
                            </button>

                            <button onClick={LogoutHanlder} className={`absolute duration-300 right-0 -top-5 transform ${logoutModal && ' block translate-y-12'} text-white bg-green-600 opacity-50 hover:opacity-100 py-2 text-[13px] tracking-wide px-6 rounded-lg shadow-md hover:shadow-lg`}>sure?</button>
                        </div>
                    </div>
                    <div className='md:pl-2 pl-16 py-3 flex md:items-center md:flex-col gap-x-32 gap-y-5'>
                        <div className="left  relative h-[260px] overflow-hidden  w-[260px]">
                            <img src="/banner/card.jpg" className=' duration-200 hover:shadow-lg h-full object-cover w-full rounded-full' alt="" />
                            <button className=' absolute bottom-4 border-[5px] border-white right-4 z-30 h-12 w-12 bg-[#ebf0f0] rounded-full flex justify-center items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                                </svg>

                            </button>
                        </div>
                        <div className="right flex-grow w-full flex-[0.5] py-4">
                            <div className='flex flex-col gap-y-4'>
                                <div className='flex rounded-md w-full  items-center gap-x-3'>
                                    <p> <BiLogoFlutter className=' text-[21px] text-teal-700' /></p>
                                    <p className='text-[15px] sm:text-[14px] tracking-wide'>Muhammad Atick</p>
                                </div>
                                <div className='flex rounded-md w-full  items-center gap-x-3'>
                                    <p><MdOutlineMail className=' text-[21px] text-teal-700' /></p>
                                    <p className='text-[15px] sm:text-[14px] tracking-wide'>atickvai8666@gmail.com</p>
                                </div>
                                <div className='flex rounded-md w-full  items-center gap-x-3'>
                                    <p><GrSystem className=' text-[20px] text-teal-700' /></p>
                                    <p className='text-[15px] sm:text-[14px] tracking-wide'>Login method - <span className=' font-semibold'>Google</span></p>
                                </div>
                                <p className=' tracking-wide text-[14px] sm:text-[13px] text-stone-600 pt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quibusdam, cumque vitae architecto possimus quod magni quis eius suscipit delectus!</p>
                            </div>
                        </div>
                    </div>
                    <div className='px-10 sm:px-2 pt-7 flex flex-col gap-y-4'>
                        <div className='flex rounded-md w-full  items-center gap-x-3'>
                            <p><MdLocationPin className=' text-[22px]' /></p>
                            <p className='text-[16px] sm:text-[15px] tracking-wide'>located at ~ Lichubagan , chandraghonna , rungunia</p>
                        </div>
                        <div className='flex items-center gap-x-3'>
                            <p><BsFillBuildingsFill className=' text-[22px]' /></p>
                            <p className='text-[16px] sm:text-[15px] tracking-wide'>worked at ~ xyz.bank.lmt</p>
                        </div>
                        <div className='flex items-center gap-x-3'>
                            <p><MdCall className=' text-[22px]' /></p>
                            <p className='text-[16px] sm:text-[15px] tracking-wide'>+8801265253225</p>
                        </div>

                    </div>
                    <button className='flex justify-center mt-12 shadow-lg duration-150 hover:shadow-lg items-center bg-[#117688a1] w-full gap-x-3 py-3 text-white px-6 rounded-md'>
                        <p><FiEdit /></p>
                        <p className=' text-[14px] tracking-wide'>Edit profile info</p>
                    </button>
                </div>
            </div>
        </Layout>
    )
}

export default Profile