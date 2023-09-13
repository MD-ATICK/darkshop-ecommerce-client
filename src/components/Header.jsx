import React from 'react'
import { HiMail, HiShoppingCart } from 'react-icons/hi'
import { Link, NavLink } from 'react-router-dom'
import { FaUser, FaFacebookF } from 'react-icons/fa'
import { BiLogoGoogle } from 'react-icons/bi'
import { IoIosArrowDown, IoMdClose } from 'react-icons/io'
import { TbLanguage, TbWorld } from 'react-icons/tb'
import { HiOutlineMenu } from 'react-icons/hi'
import { AiFillHeart, AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai'
import { MdCall, MdOutlineCategory } from 'react-icons/md'
import { useState } from 'react'
import Loader from './Loader/Loader'
import CateLessHeader from './CateLessHeader'
import { useSelector } from 'react-redux'

function Header() {

    const { customer, fetch, status } = useSelector(state => state.auth)


    const [languageModal, setlanguageModal] = useState(false);
    const [categoryModal, setcategoryModal] = useState(false);
    const [language, setlanguage] = useState('English');

    const languageChangeHanlder = (language) => {
        setlanguage(language)
        setlanguageModal(false)
    }

    return (
        <div className=' w-full bg-white relative'>
            {/* header top */}
            <div className="md:hidden h-[45px] w-full bg-[#eaeaea] flex justify-center">
                <div className=" max-w-[1280px] w-full px-5 flex items-center justify-between">
                    {/* left */}
                    <div className="left flex items-center gap-x-5 ">
                        <div className='flex items-center gap-x-3 border-r border-gray-400 pr-5'>
                            <HiMail className=' text-stone-600' />
                            <p className='text-[13px] tracking-wide text-stone-600'>borhan@gmail.com</p>
                        </div>
                        <p className=' text-black text-[13px] font-[500] tracking-wide '>Multi Vendor E-commerce web</p>
                    </div>
                    {/* right */}
                    <div className="right flex items-center gap-x-6">
                        <ul className=' list-none flex items-center gap-x-5 pr-5 border-r border-stone-500'>
                            <li><FaFacebookF className='text-stone-500 hover:text-sky-700 cursor-pointer text-[18px]' /></li>
                            <li><AiOutlineTwitter className='text-stone-500 hover:text-sky-700 cursor-pointer text-[18px]' /></li>
                            <li><AiOutlineGithub className='text-stone-500 hover:text-sky-700 cursor-pointer text-[18px]' /></li>
                            <li><BiLogoGoogle className='text-stone-500 hover:text-sky-700 cursor-pointer text-[18px]' /></li>
                        </ul>
                        <div className=' relative'>
                            <button onClick={() => setlanguageModal(!languageModal)} className=' border-r flex items-center gap-x-[6px] border-stone-500 pr-5'>
                                {
                                    language === 'English' ?
                                        <img src="/language.png" className='h-[14px] w-6 object-cover' alt="" />
                                        :
                                        <img src="/bangladesh.png" className='h-[14px] w-6 object-cover' alt="" />
                                }
                                <p className='text-[12px] tracking-wide font-[500] text-gray-600'>{language === 'English' ? 'English' : 'Bangla'}</p>
                                <IoIosArrowDown className='text-[13px]' />
                            </button>
                            {
                                languageModal &&
                                <div className=' absolute top-6 right-4 bg-black w-[100px] py-1 overflow-hidden shadow-sm shadow-gray-300'>
                                    <button onClick={() => languageChangeHanlder('English')} className='text-[13px] p-1 tracking-wide text-white hover:bg-white hover:text-black w-full text-left px-4'>English</button>
                                    <button onClick={() => languageChangeHanlder('Bangla')} className='text-[13px] p-1 tracking-wide text-white hover:bg-white hover:text-black w-full  text-left px-4'>Bangla</button>
                                </div>
                            }
                        </div>
                        {
                            fetch && customer ?
                                <Link to={'/dashboard'} className='md:hidden block'>
                                    <div className='flex items-center gap-x-[8px] text-gray-600 hover:text-sky-700'>
                                        <img src={customer?.avatar || 'https://divedigital.id/wp-content/uploads/2022/07/11-Blank-Profile-Picture-Black.jpg'} className='h-[24px] w-[24px] rounded-full shadow-lg' alt="" />
                                        <p className='text-[15px]  font-[600] text-stone-600   '>{customer?.name.split(' ')[0]}</p>
                                    </div>
                                </Link>
                                :
                                <button className='md:hidden block border-l pl-2 border-gray-300'>
                                    <Link to={'/login'} className='flex items-center gap-x-[8px] text-gray-600 hover:text-sky-700'>
                                        <FaUser className='text-[14px]' />
                                        <p className='text-[13px] font-[500] tracking-wide  '>login</p>
                                    </Link>
                                </button>
                        }
                    </div>
                </div>
            </div>
            {/* header top end */}

            {/* Second ~ header */}
            <CateLessHeader />
            {/* Second ~ header end */}

            {/* Third ~ header  */}

            {/* <div className='sm:hidden h-[45px] mt-8'>
                <div className='px-3 h-full flex justify-between items-center max-w-7xl mx-auto border-black '>
                    <div className=' lg:hidden relative h-full'>
                        <button onClick={() => setcategoryModal(!categoryModal)} className='flex text-white px-12 shadow-md items-center gap-x-4 h-full bg-sky-600'>
                            <p> <MdOutlineCategory className='text-[22px]' /></p>
                            <p className=' text-[15px] tracking-wide  font-sans font-[600]'>All Category</p>
                            <p><IoIosArrowDown className=' text-gray-200' /></p>
                        </button>
                        <div className={`absolute ${categoryModal ? 'h-[400px] overflow-y-scroll py-1' : 'h-0 overflow-hidden'} transform duration-500   flex flex-col items-start top-[43px] left-0 w-[260px] z-[9999] bg-white shadow-sm shadow-stone-600 rounded-b-sm`}>
                            <button className='p-2 cursor-pointer w-full text-left px-6 text-[15px] tracking-wide font-sans font-[600] text-stone-600 hover:bg-gray-200 bg-white'>Shirt</button>
                            <button className='p-2 cursor-pointer w-full text-left px-6 text-[15px] tracking-wide font-sans font-[600] text-stone-600 hover:bg-gray-200 bg-white'>Pant</button>
                            <button className='p-2 cursor-pointer w-full text-left px-6 text-[15px] tracking-wide font-sans font-[600] text-stone-600 hover:bg-gray-200 bg-white'>Jercy</button>
                        </div>
                    </div>
                    <div className=' h-full lg:w-full border-[1.5px] border-stone-300 flex items-center'>
                        <div className=' h-full border lg:w-full  flex items-center '>
                            <button className='px-6 font-sans text-[15px] tracking-wide font-[600] text-stone-600 border-r border-gray-400 flex items-center gap-x-2 ' > Select Category <IoIosArrowDown /></button>
                            <input type="text" className=' h-full text-[14px] tracking-wide text-stone-900 placeholder:text-stone-400  px-4 w-[250px]' placeholder='what do you need?' />
                        </div>
                        <button className=' bg-teal-700 h-full sm:px-4 px-6 text-white text-[13px] tracking-wide'>Search</button>
                    </div>
                    <div className='lg:hidden flex items-center gap-x-4'>
                        <button className=' h-10 w-10 flex items-center justify-center rounded-full bg-[#ededed]'>
                            <MdCall className='text-[22px] text-[#1da860]' />
                        </button>
                        <div>
                            <p className='text-[14px] font-[500]'>+880125658552</p>
                            <p className='text-[12px] tracking-wide text-stone-600'>support 24/7 time</p>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* Third ~ header end */}
        </div >
    )
}

export default Header