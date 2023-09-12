import React from 'react'
import Layout from './Layout'
import { useState } from 'react'

function Settings() {

    const [darkmode, setdarkmode] = useState(false);

    return (
        <Layout>
            <div className='p-6'>
                <h1 className=' text-[22px] tracking-wide font-[600] text-stone-900'>Settings</h1>
                <div className='pl-6 mt-4'>
                    <div onClick={() => setdarkmode(!darkmode)} className='flex items-center gap-x-3'>
                        <p className=' text-[15px] tracking-wide'>Dark mode</p>
                        <div className=' relative cursor-pointer p-[4px] px-[6px] w-[50px] bg-gray-200 rounded-full h-6'>
                            <div className={`h-full w-[16px] transform  duration-200 ${darkmode ? 'translate-x-[22px]' : 'translate-x-0'} rounded-full bg-gradient-to-r from-stone-600 to-stone-800`}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Settings