import React from 'react'
import { HiMail, HiShoppingCart } from 'react-icons/hi'
import { Link, NavLink } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import { IoIosArrowDown, IoMdClose } from 'react-icons/io'
import { TbLanguage, TbWorld } from 'react-icons/tb'
import { HiOutlineMenu } from 'react-icons/hi'
import { AiFillHeart, AiOutlineDelete, AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai'
import { MdClose, MdDashboard, MdPassword } from 'react-icons/md'
import { useState } from 'react'
import Loader from './Loader/Loader'
import { useDispatch, useSelector } from 'react-redux'
import SingleWishlistCard from './Wishlist/SingleWishlistCard'
import { changeScreenShow } from '../store/reducers/WishlistReducer'
import { BiCart, BiHome, BiLogOut, BiUser } from 'react-icons/bi'
import { GrSettingsOption } from 'react-icons/gr'


function CateLessHeader() {

    const dispatch = useDispatch()

    const { customer, fetch } = useSelector(state => state.auth)
    const { wishlists } = useSelector(state => state.wishlist)
    const { carts } = useSelector(state => state.cart)

    const [language, setlanguage] = useState('English');
    const [navbarSlideShow, setnavbarSlideShow] = useState(false);
    const [wishlistSlideShow, setwishlistSlideShow] = useState(false);

    const [deleteArray, setdeleteArray] = useState([]);
    const [wshow, setwshow] = useState(true);

    const itemDeleteHanlder = (id) => {
        const find = deleteArray.find(d => d._id === id)
        if (find) {
            deleteArray.filter(d => d._id !== id)
            return setdeleteArray(deleteArray)
        }

        setdeleteArray([...deleteArray, { _id: id }])
    }

    const languageChangeHanlder = (language) => {
        setlanguage(language)
    }

    return (
        <div>

            {/* main row nav  */}
            <div className=" h-[65px]  shadow-lg">
                <div className=" max-w-[1280px] flex items-center justify-between xs:px-2 px-4 h-full mx-auto w-full">
                    <div className='flex items-center xs:gap-x-2 gap-x-3'>
                        <p onClick={() => {
                            dispatch(changeScreenShow(true))
                            setnavbarSlideShow(true)
                        }} className=' md:block hidden cursor-pointer hover:bg-teal-800  rounded-full bg-teal-700 mt-1 shadow-sm'><HiOutlineMenu className='text-[35px] p-[6px] text-white' /></p>
                        <Link to={'/'} className='text-[40px] sm:text-[28px] pb-1 font-sans font-bold '>shopp <span className=' -ml-2 font-bold sm:text-[28px] text-[42px] text-teal-700'>.my</span></Link>

                    </div>
                    <nav className='md:hidden flex items-center gap-x-10 text-[16px] tracking-wide font-[600] text-stone-500 '>
                        <NavLink to='/' className=' hover:text-[#02615d]' >HOME</NavLink>
                        <NavLink to='/product' className=' hover:text-[#02615d]' >PRODUCTS</NavLink>
                        <NavLink to='/blog' className=' hover:text-[#02615d]' >BLOG</NavLink>
                        <NavLink to='/about' className=' hover:text-[#02615d]' >ABOUT</NavLink>
                        <NavLink to='/contact' className=' hover:text-[#02615d]' >CONTACT</NavLink>
                    </nav>
                    <div className='flex items-center sm:gap-x-3 gap-x-5'>
                        <button onClick={() => {
                            dispatch(changeScreenShow(true))
                            setwishlistSlideShow(true)
                        }} className=' relative sm:h-[32px] sm:w-[32px] h-9 w-9 flex items-center justify-center rounded-full bg-gray-200'>
                            <AiFillHeart className='text-[20px] sm:text-[18px] text-[#0a6969]' />
                            {wishlists.length > 0 && <span className=' absolute -top-1 -right-[10px] flex items-center justify-center text-[12px]  bg-sky-600  text-white h-6 w-6 border-[3px] border-white rounded-full font-[600]'>{wishlists.length}</span>}
                        </button>
                        <Link to={'/cart'} className=' relative sm:h-[32px] sm:w-[32px] h-9 w-9 flex items-center justify-center rounded-full bg-gray-200'>
                            <HiShoppingCart className='text-[20px] sm:text-[18px] text-[#0a6969]' />
                            {carts.length > 0 && <span className=' absolute -top-1 -right-[10px] flex items-center justify-center text-[12px]  bg-sky-600  text-white h-6 w-6 border-[3px] border-white rounded-full font-[600]'>{carts.length}</span>}
                        </Link>
                        {
                            fetch && customer ?
                                <button title='account' className='md:block hidden border-l pl-[10px] border-gray-300'>
                                    <Link to={'/dashboard'} className='flex items-center gap-x-[8px] text-gray-600 hover:text-sky-700'>
                                        <img src={customer?.avatar || 'https://divedigital.id/wp-content/uploads/2022/07/11-Blank-Profile-Picture-Black.jpg'} className='h-[24px] w-[24px] rounded-full shadow-lg' alt="" />
                                        <p className='text-[14px]  font-[600] text-stone-600   '>{customer.name.split(' ')[0]}</p>
                                    </Link>
                                </button>
                                :
                                <button className='md:block hidden border-l pl-2 border-gray-300'>
                                    <Link to={'/login'} className='flex items-center gap-x-[8px] text-gray-600 hover:text-sky-700'>
                                        <FaUser className='text-[14px]' />
                                        <p className='text-[13px] font-[500] tracking-wide  '>login</p>
                                    </Link>
                                </button>
                        }
                    </div>
                </div>
            </div>
            {/* main row nav end */}


            {/* Navbar ==> left 320px navbar slide. */}
            {/* <div onClick={(e) => {
                dispatch(changeScreenShow(false))
                setnavbarSlideShow(false)
            }} className={` fixed top-0 left-0 h-screen duration-500 whitespace-nowrap ${navbarSlideShow ? 'w-full' : 'w-0 overflow-hidden'} bg-[#0000008a]  z-[9999] `}>
                <div onClick={(e) => e.stopPropagation()} className={`absolute top-0 left-0 h-full duration-300 ${navbarSlideShow ? 'xs:w-[85%] w-[350px]' : 'w-0'} bg-[#ffffff]    `}>
                    <div className={`w-full p-4 relative whitespace-nowrap ${navbarSlideShow && ' overflow-hidden'}`}>
                        <button onClick={() => {
                            dispatch(changeScreenShow(false))
                            setnavbarSlideShow(false)
                        }} className={` ${navbarSlideShow ? 'h-10 w-10' : 'h-0 w-0 overflow-hidden'}  absolute top-2 right-2 flex justify-center items-center rounded-full shadow-md bg-teal-700 text-white hover:shadow-lg duration-100 hover:scale-105`}>
                            <IoMdClose className='text-[23px]' />
                        </button>
                        <p className='text-[42px] sm:text-[35px] font-sans font-bold '>shopp <span className=' -ml-2 font-bold sm:text-[36px] text-[45px] text-teal-700'>.my</span></p>
                        <ul className=' list-none w-full px-12 py-5 flex gap-y-5 flex-col items-start justify-start '>
                            <li className=' w-full'>
                                <NavLink to='/' className='font-sans w-full text-[20px] font-[700] hover:text-[#006960] text-stone-600' >Home</NavLink>
                            </li>
                            <li className=''>
                                <NavLink to='/product' className='font-sans text-[20px] font-[700] hover:text-[#006960] text-stone-600' >Products</NavLink>
                            </li>
                            <li className=''>
                                <NavLink to='/about' className='font-sans text-[20px] font-[700] hover:text-[#006960] text-stone-600' >About</NavLink>
                            </li>
                            <li className=''>
                                <NavLink to='/blog' className='font-sans text-[20px] font-[700] hover:text-[#006960] text-stone-600' >Blog</NavLink>
                            </li>
                            <li className=''>
                                <NavLink to='/contact' className='font-sans text-[20px] font-[700] hover:text-[#006960] text-stone-600' >Contact</NavLink>
                            </li>


                        </ul>
                        <div className="left flex flex-col mt-12 gap-3 ">
                            <div className='flex items-center gap-x-3 border-gray-400 pr-5'>
                                <HiMail className=' text-stone-600' />
                                <p className='text-[13px] tracking-wide text-stone-600'>borhan@gmail.com</p>
                            </div>
                            <div className='flex items-center gap-x-3 border-gray-400 pr-5'>
                                <TbWorld className=' text-stone-600' />
                                <p className=' text-black text-[13px] font-[500] tracking-wide '>Multi Vendor E-commerce web</p>
                            </div>
                        </div>
                        <div className=' relative flex items-center gap-x-3 mt-3'>
                            <TbLanguage className='text-[18px]' />
                            <button onClick={() => setlanguageModal(!languageModal)} className=' flex items-center gap-x-[6px] border-stone-500 pr-5'>
                                {
                                    language === 'English' ?
                                        <img src="/language.png" className='h-[14px] w-6 object-cover' alt="" />
                                        :
                                        <img src="/bangladesh.png" className='h-[14px] w-6 object-cover' alt="" />
                                }
                                <p className='text-[12px] tracking-wide font-[500] text-gray-600'>{language === 'English' ? 'English' : 'Bangla'}</p>
                                <IoIosArrowDown className='text-[13px]' />
                            </button>
                        </div>
                    </div>
                </div>
            </div> */}
            <div onClick={() => setnavbarSlideShow(true)} className={`fixed top-0 left-0 duration-100 ${navbarSlideShow ? 'w-full' : 'w-0 overflow-hidden'} h-screen bg-[#0000007a] z-[9999]`}>
                <div onClick={(e) => e.stopPropagation()} className={`fixed left-0 top-0 h-screen ${navbarSlideShow ? 'w-[350px] px-5' : 'w-0 p-0 overflow-hidden'} duration-500 shadow-lg opacity-[0.98] py-5 bg-[#edf3f3] z-[9999]`}>
                    <button onClick={() => setnavbarSlideShow(false)} className='hover:scale-105 duration-150 absolute top-5 right-5'> <MdClose className='text-[32px] text-teal-800' /> </button>
                    <div>
                        <Link to={'/'} className=' text-[15px] font-[500]' >Home <span className=' text-stone-400'>/</span></Link>
                        <Link to={'/'} className=' text-[15px] font-[500] text-teal-700' > account</Link>
                    </div>
                    <h1 className=' pt-6 pb-8 text-[24px] text-stone-700 font-[600] tracking-wide'>My Account</h1>
                    <div className=' w-full pl-4'>
                        <div className='account flex flex-col gap-y-1'>
                            <NavLink to={'/'} className='flex items-center duration-150 hover:bg-[#dae1e1] gap-x-3 py-3  px-4  rounded-md'>
                                <p><BiHome /></p>
                                <p className=' text-[15px] tracking-wide'>Home</p>
                            </NavLink>
                            <NavLink to={'/products'} className='flex items-center duration-150 hover:bg-[#dae1e1] gap-x-3 py-3 text-stone-700 px-4 rounded-md'>
                                <p><BiUser /></p>
                                <p className=' text-[15px] tracking-wide'>Products</p>
                            </NavLink>
                            <NavLink to={'/blog'} className='flex items-center duration-150 hover:bg-[#dae1e1] gap-x-3 py-3 text-stone-700 px-4 rounded-md'>
                                <p><BiCart /></p>
                                <p className=' text-[15px] tracking-wide'>Blog</p>
                            </NavLink>
                            <NavLink to={'/about'} className='flex items-center duration-150 hover:bg-[#dae1e1] gap-x-3 py-3 text-stone-700 px-4 rounded-md'>
                                <p><MdPassword /></p>
                                <p className=' text-[15px] tracking-wide'>About</p>
                            </NavLink>
                            <NavLink to={'/contact'} className='flex items-center duration-150 hover:bg-[#dae1e1] gap-x-3 py-3 text-stone-700 px-4 rounded-md'>
                                <p><GrSettingsOption className='' /></p>
                                <p className=' text-[15px] tracking-wide'>Contact</p>
                            </NavLink>


                        </div>

                    </div>
                    <div className="left flex flex-col mt-12 gap-3 ">
                        <div className='flex items-center gap-x-3 border-gray-400 pr-5'>
                            <HiMail className=' text-stone-800' />
                            <p className='text-[13px] tracking-wide text-stone-700'>borhan@gmail.com</p>
                        </div>
                        <div className='flex items-center gap-x-3 border-gray-400 pr-5'>
                            <TbWorld className=' text-stone-800' />
                            <p className=' text-black text-[13px] font-[500] tracking-wide '>Multi Vendor E-commerce web</p>
                        </div>
                    </div>
                    <div className=' relative flex items-center gap-x-3 mt-3'>
                        <TbLanguage className='text-[18px]' />
                        <button onClick={() => setlanguageModal(!languageModal)} className=' flex items-center gap-x-[6px] border-stone-500 pr-5'>
                            {
                                language === 'English' ?
                                    <img src="/language.png" className='h-[14px] w-6 object-cover' alt="" />
                                    :
                                    <img src="/bangladesh.png" className='h-[14px] w-6 object-cover' alt="" />
                            }
                            <p className='text-[12px] tracking-wide font-[500] text-gray-700'>{language === 'English' ? 'English' : 'Bangla'}</p>
                            <IoIosArrowDown className='text-[13px]' />
                        </button>
                    </div>
                </div>
            </div>
            {/* Navbar ==> left 320px navbar slide. end */}

            {/* Wishlist ==> left 320px wishlist slide. */}
            <div onClick={(e) => {
                dispatch(changeScreenShow(false))
                setwishlistSlideShow(false)
            }} className={` fixed top-0 right-0 h-screen duration-500 whitespace-nowrap ${wishlistSlideShow ? 'w-full' : 'w-0 overflow-hidden'} bg-[#0000008a]  z-[9999] `}>
                <div onClick={(e) => e.stopPropagation()} className={`absolute top-0 right-0 h-full overflow-y-scroll duration-300 ${wishlistSlideShow ? 'xs:w-[90%] w-[450px]' : 'w-0'} bg-[#e5ebeb]`}>
                    <header className=' sticky top-0 left-0 h-[50px] bg-teal-700 flex justify-between items-center w-full shadow-lg px-4'>
                        <button onClick={() => {
                            dispatch(changeScreenShow(false))
                            setwishlistSlideShow(false)
                        }} className=' w-[55px] flex justify-start items-center border-white'>
                            <MdClose className='text-[30px] text-white' />
                        </button>
                        <p className='-ml-6 text-white w-full text-center tracking-wide font-sans text-[18px]'>All Wishlist</p>
                    </header>
                    <div className='p-2 flex flex-col gap-y-2'>
                        {
                            wishlists.length > 0 ? wishlists.map(w => {
                                return <SingleWishlistCard key={w._id} product={w} />
                            })
                                :
                                <p className=' w-full text-center tracking-wide mt-4 font-sans text-[15px]'>
                                    No any wishlist input here.!
                                </p>
                        }
                    </div>

                </div>
            </div>
            {/* Wishlist ==> left 320px wishlist slide. end. */}

        </div >
    )
}

export default CateLessHeader