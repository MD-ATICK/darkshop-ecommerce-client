import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Layout from './Layout';
import api from '../api/api';
import { toast } from 'react-toastify';
import { SyncLoader } from 'react-spinners'

function ChangePassoword() {

    const navigate = useNavigate()

    const [oldpass, setoldpass] = useState('');
    const [newpass, setnewpass] = useState('');
    const [changepassLoading, setchangepassLoading] = useState(false);

    const changePasswordHanlder = async (e) => {
        e.preventDefault()
        const token = localStorage.getItem('dsc-token')
        setchangepassLoading(true)
        const { data, status } = await api.post('/v9/change-password', { oldpass, newpass }, { headers: { Authorization: `Bearer ${token}` } })
        if (status === 201) {
            setchangepassLoading(false)
            navigate('/profile')
            toast.success('change password successed.')
        } else {
            setchangepassLoading(false)
            toast.error('change password unsuccessed.')
        }
    }

    return (
        <Layout>

            <div className=' w-full h-full flex items-center flex-col  sm:p-3 px-10 pb-28 '>
                <form onSubmit={changePasswordHanlder} className='max-w-[500px] mt-10 w-full flex flex-col gap-y-5 bg-white rounded-2xl sm:p-6 py-12 px-6 sm:mb-16 '>
                    <h1 className='text-[30px]  mb-6 font-bold text-stone-900'><span className='text-sky-600 text-[40px]'>D</span>-Shop ~ change pass</h1>
                    <div className='flex gap-1 flex-col-reverse'>
                        {/* <p className='text-red-500 text-[12px] tracking-wide'>* user not exist with this email</p> */}
                        <input id='email' value={oldpass} onChange={(e) => setoldpass(e.target.value)} name='email' type="text" placeholder='Enter Your old Password' className='email border-b-[1.5px] p-2 py-1 focus:outline-none  placeholder:text-stone-500 focus:border-stone-500 border-stone-300 text-[13px] tracking-wide' required />
                        <label htmlFor="email" className='email-label text-[13px] text-stone-800 tracking-wide'>* old password</label>
                    </div>
                    <div className='flex gap-1 flex-col-reverse'>
                        {/* <p className='text-red-500 text-[12px] tracking-wide'>* password is not match</p> */}
                        <input id='password' value={newpass} onChange={e => setnewpass(e.target.value)} name='password' type="password" placeholder='Enter Your new Password' className='email border-b-[1.5px] p-2 py-1 focus:outline-none  placeholder:text-stone-500 focus:border-stone-500 border-stone-300 text-[13px] tracking-wide' required />
                        <label htmlFor="password" className='email-label text-[13px] text-stone-800 tracking-wide'>* new password</label>
                    </div>
                    <div className='flex gap-x-3 items-center cursor-pointer'>
                        <input id='check' type="checkbox" className=' py-1 accent-sky-500' required />
                        <label htmlFor="check" className='text-[13px] tracking-wide cursor-pointer py-1 text-stone-700'>I agree to privacy policy & terms</label>
                    </div>
                    <div>
                        <Link to={'/forget-password'} className='forget text-[12px] tracking-wide text-right text-stone-600  hover:text-sky-800 underline' ><p>forget password?</p></Link>
                    </div>
                    {/* <p className='forget py-0 text-[12px] tracking-wide text-right text-stone-600  hover:text-sky-800 underline' >or</p> */}
                    <div className=' px-2 w-full'>
                        <button type='submit' className='bg-teal-800 rounded-lg mt-3 shadow-lg py-[14px] w-full text-white text-[14px] duration-150 hover:scale-105 tracking-wide flex items-center gap-x-3 justify-center'>Change {changepassLoading && <SyncLoader color='white' size={11} />}</button>
                    </div>

                </form>
            </div>
        </Layout>
    )
}

export default ChangePassoword