import Footer from '../components/Footer'
import CateLessHeader from '../components/CateLessHeader'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { AiOutlineGoogle } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { loginFetch } from '../store/reducers/AuthReducer';
import { useDispatch, useSelector } from 'react-redux';

function Login() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const { customer, status, fetch, loading, token, error } = useSelector(state => state.auth)

    console.log({ location })

    const LoginHanlder = (e) => {
        e.preventDefault()
        dispatch(loginFetch({ email, password }))
    }

    useEffect(() => {
        if (fetch && status === 201) {
            localStorage.setItem('dsc-token', token)
            navigate(location?.state?.pathname || '/')
            toast.success('customer login Successfully.')
        } else if (status === 222) {
            toast.error(error)   // code vull ar karone customer ar modde data o error rakci main difind kori status diye oky bye.
        }
    }, [customer]);


    // jodi nicce broswrRoutes ar modde jei componnet use krci oigular modde kono kaj krte navigate() use korle hobe but jeheto app.jsx joko router component a nai so <Navigate /> use krte hobe.

    return (
        <>
            <CateLessHeader />
            <div>
                {/* login  */}
                <div className=' w-full h-full flex items-center flex-col bg-teal-700 sm:p-3 px-10 pt-8 pb-28 '>
                    <div className='flex justify-between w-full bg-transparent items-center'>
                        <Link to={'/'} className=' bg-transparent'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 cursor-pointer bg-transparent">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </Link>
                        <Link to='/register' className=' text-white underline cursor-pointer text-[15px] tracking-[0.020em] bg-transparent' >Register</Link>
                    </div>
                    <form onSubmit={LoginHanlder} className='max-w-[500px] mt-10 w-full flex flex-col gap-y-5 bg-white rounded-2xl shadow-lg sm:p-6 py-12 px-6 sm:mb-16 '>
                        <h1 className='text-[30px] font-bold text-stone-900'><span className='text-sky-600 text-[40px]'>D</span>-Shop ~ Login</h1>
                        <div className='flex gap-1 flex-col-reverse'>
                            {/* <p className='text-red-500 text-[12px] tracking-wide'>* user not exist with this email</p> */}
                            <input id='email' value={email} onChange={(e) => setemail(e.target.value)} name='email' type="email" placeholder='Enter Your Email' className='email border-b-[1.5px] p-2 py-1 focus:outline-none  placeholder:text-stone-500 focus:border-stone-500 border-stone-300 text-[13px] tracking-wide' required />
                            <label htmlFor="email" className='email-label text-[13px] text-stone-800 tracking-wide'>* email</label>
                        </div>
                        <div className='flex gap-1 flex-col-reverse'>
                            {/* <p className='text-red-500 text-[12px] tracking-wide'>* password is not match</p> */}
                            <input id='password' value={password} onChange={e => setpassword(e.target.value)} name='password' type="password" placeholder='Enter Your Password' className='email border-b-[1.5px] p-2 py-1 focus:outline-none  placeholder:text-stone-500 focus:border-stone-500 border-stone-300 text-[13px] tracking-wide' required />
                            <label htmlFor="password" className='email-label text-[13px] text-stone-800 tracking-wide'>* password</label>
                        </div>
                        <div className='flex gap-x-3 items-center cursor-pointer'>
                            <input id='check' type="checkbox" className=' py-1 accent-sky-500' required />
                            <label htmlFor="check" className='text-[13px] tracking-wide cursor-pointer py-1 text-stone-700'>I agree to privacy policy & terms</label>
                        </div>
                        <div>
                            <Link to={'/forget-password'} className='forget text-[12px] tracking-wide text-right text-stone-600  hover:text-sky-800 underline' ><p>forget password?</p></Link>
                        </div>
                        {/* <p className='forget py-0 text-[12px] tracking-wide text-right text-stone-600  hover:text-sky-800 underline' >or</p> */}
                        <div className='flex flex-col'>
                            <button type='submit' className='bg-sky-500 rounded-lg mt-3 shadow-lg py-3 w-full text-white text-[13px] tracking-wide'>Login</button>
                            <p className=' w-full text-center text-[14px] mt-2'>or</p>
                            <p className='bg-teal-700  text-center rounded-md mt-3 shadow-lg py-3 w-full text-white text-[13px] tracking-wide flex items-center gap-x-3 justify-center'>Sign in with google <AiOutlineGoogle className='text-2xl' /> </p>
                            <p className='bg-teal-700 text-center rounded-md mt-3 shadow-lg py-3 w-full text-white text-[13px] tracking-wide flex items-center gap-x-3 justify-center'>Sign in with facebook <FaFacebook className='text-2xl' /> </p>
                        </div>
                    </form>
                </div>
                {/* login end */}

                <Footer />
            </div>
        </>
    )
}

export default Login