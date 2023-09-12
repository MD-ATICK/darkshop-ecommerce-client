import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../store/reducers/AuthReducer'
import { toast } from 'react-toastify'
import CateLessHeader from '../components/CateLessHeader'
import LeftRouteSlide from '../components/account/LeftRouteSlide'
import RightContent from '../components/account/RightContent'

function Layout({children}) {

   
    return (
        <div className=''>
            <CateLessHeader />
            <div className=' h-full w-full bg-[#ebf0f0]'>
                <div className=' max-w-7xl h-full mx-auto md:px-0 px-2 w-full flex'>
                    <LeftRouteSlide />
                    <RightContent>
                        {children}
                    </RightContent>
                </div>
            </div>
        </div>
    )
}

export default Layout