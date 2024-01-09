import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { search, searchf } from '../store/reducers/webSmallControlsReducer'
import { useLocation, useNavigate } from 'react-router-dom'

function Search() {

    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    const { searchtext, fsearch, fcategroy, frating, fprice, fknock } = useSelector(state => state.controll)

    const searchHanlder = (e) => {
        dispatch(search(e.target.value))
    }



    return (
        <div className=' w-full sm:h-[65px] h-[75px] py-[12px] sm:mb-6 bg-gradient-to-r from-teal-600 to-teal-900'>
            <div className=' max-w-7xl h-full flex justify-between items-center mx-auto sm:px-2 px-4'>
                <div className=' h-full w-full flex items-center sm:gap-x-2 gap-x-6'>
                    <input value={searchtext} onChange={searchHanlder} onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            navigate(`/product?search=${searchtext}`)
                        }
                    }} type="text" className=' h-full bg-white w-full placeholder:text-stone-500  text-black px-5 tracking-wide font-sans sm:text-[15px] outline-none text-[17px]' placeholder='Searching product ...' />
                    <button onClick={() => {
                        navigate(`/product?search=${searchtext}`)
                        dispatch(search(''))
                    }} className=' h-full px-4 font-sans bg-gradient-to-tr from-pink-500 to-pink-800  tracking-wide shadow-md text-gray-100'>Search</button>
                </div>
                <div className=' pl-[200px] md:hidden flex text-white items-center gap-x-3'>
                    <p className=' h-10 w-10 flex justify-center bg-gray-200 rounded-full items-center text-black'>x</p>
                    <div>
                        <p className='font-[500] text-[13px] tracking-wide'>+01825658665</p>
                        <p className='pl-1 text-[12px] tracking-wide text-gray-100'> Full free time</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search