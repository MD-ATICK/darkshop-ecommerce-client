import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import CateLessHeader from '../components/CateLessHeader'
import Footer from '../components/Footer'
import { AiOutlineGoogle } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { registerFetch } from '../store/reducers/AuthReducer';

function Register() {


    const { customer, status, fetch, loading, token } = useSelector(state => state.auth)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [comfirmpassword, setcomfirmpassword] = useState('');


    const RegisterHanlder = (e) => {
        e.preventDefault()
        dispatch(registerFetch({ name, email, password, comfirmpassword }))
    }


    useEffect(() => {
        if (fetch && status === 201) {
            localStorage.setItem('dsc-token', token)
            navigate('/')
            toast.success('customer login Successfully.')
        } else if (status === 222) {
            toast.error(customer)   // code vull ar karone customer ar modde data o error rakci main difind kori status diye oky bye.
        }
    }, [customer]);


    // jodi nicce broswrRoutes ar modde jei componnet use krci oigular modde kono kaj krte navigate() use korle hobe but jeheto app.jsx joko router component a nai so <Navigate /> use krte hobe.

    return (
        <>
            <CateLessHeader />

            {/* register */}
            <div className=' w-full h-full pt-8 pb-16 flex items-center flex-col bg-teal-700 sm:p-3 px-10  '>
                <div className='flex justify-between w-full bg-transparent items-center'>
                    <Link to={'/login'} className=' bg-transparent'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-5 h-5 cursor-pointer bg-transparent">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </Link>
                    <Link to='/' className=' text-white underline cursor-pointer text-[14px] tracking-[0.020em] bg-transparent' >home</Link>
                </div>
                <form onSubmit={RegisterHanlder} className='max-w-[500px] sm:mb-16 mt-8  w-full flex flex-col gap-y-6 bg-white rounded-2xl shadow-lg p-7'>
                    <h1 className='text-[28px] font-bold text-stone-900'><span className='text-sky-600 text-[40px]'>D</span>-Shop ~ Register</h1>
                    <div className='flex gap-1 flex-col-reverse'>
                        {/* <p className='text-red-500 text-[12px] tracking-wide'>* user not exist with this email</p> */}
                        <input value={name} onChange={(e) => setname(e.target.value)} id='name' name='name' type="name" placeholder='enter your name' className='email border-b-[1.5px] p-2 py-1 focus:outline-none  placeholder:text-stone-500 focus:border-stone-500 border-stone-300 text-[13px] tracking-wide' required />
                        <label htmlFor="name" className='email-label text-[13px] text-stone-800 tracking-wide'>* name</label>
                    </div>
                    <div className='flex gap-1 flex-col-reverse'>
                        {/* <p className='text-red-500 text-[12px] tracking-wide'>* user not exist with this email</p> */}
                        <input value={email} onChange={(e) => setemail(e.target.value)} id='email' name='email' type="email" placeholder='enter Your Email' className='email border-b-[1.5px] p-2 py-1 focus:outline-none  placeholder:text-stone-500 focus:border-stone-500 border-stone-300 text-[13px] tracking-wide' required />
                        <label htmlFor="email" className='email-label text-[13px] text-stone-800 tracking-wide'>* email</label>
                    </div>
                    <div className='flex gap-1 flex-col-reverse'>
                        {/* <p className='text-red-500 text-[12px] tracking-wide'>* password is not match</p> */}
                        <input value={password} onChange={(e) => setpassword(e.target.value)} id='password' name='password' type="password" placeholder='new password' className='email border-b-[1.5px] p-2 py-1 focus:outline-none  placeholder:text-stone-500 focus:border-stone-500 border-stone-300 text-[13px] tracking-wide' required />
                        <label htmlFor="password" className='email-label text-[13px] text-stone-800 tracking-wide'>* password</label>
                    </div>
                    <div className='flex gap-1 flex-col-reverse'>
                        {/* <p className='text-red-500 text-[12px] tracking-wide'>* password is not match</p> */}
                        <input value={comfirmpassword} onChange={(e) => setcomfirmpassword(e.target.value)} id='newpassword' name='newpassword' type="password" placeholder='again type new Password' className='email border-b-[1.5px] p-2 py-1 focus:outline-none  placeholder:text-stone-500 focus:border-stone-500 border-stone-300 text-[13px] tracking-wide' required />
                        <label htmlFor="newpassword" className='email-label text-[13px] text-stone-800 tracking-wide'>* comfirm password</label>
                    </div>
                    <div className='flex gap-x-3 items-center'>
                        <input id='check' type="checkbox" className=' accent-sky-500' required />
                        <label htmlFor="check" className='text-[13px] tracking-wide text-stone-700 cursor-pointer'>I agree to privacy policy & terms</label>
                    </div>
                    {/* <Link to={'/forget-password'} className='forget text-[12px] tracking-wide text-right text-stone-600  hover:text-sky-600 underline' >forget password?</Link> */}
                    <div className='flex flex-col'>
                        <button type='submit' className='bg-sky-500 rounded-lg mt-3 shadow-lg py-3 w-full text-white text-[13px] tracking-wide'>Register</button>
                        <p className=' w-full text-center text-[14px] mt-2'>or</p>
                        <p className='bg-teal-700  text-center rounded-md mt-3 shadow-lg py-3 w-full text-white text-[13px] tracking-wide flex items-center gap-x-3 justify-center'>Sign in with google <AiOutlineGoogle className='text-2xl' /> </p>
                        <p className='bg-teal-700 text-center rounded-md mt-3 shadow-lg py-3 w-full text-white text-[13px] tracking-wide flex items-center gap-x-3 justify-center'>Sign in with facebook <FaFacebook className='text-2xl' /> </p>
                    </div>
                    <div>

                    </div>
                </form>
            </div>
            {/* register end */}

            <Footer />
        </>
    )
}

export default Register