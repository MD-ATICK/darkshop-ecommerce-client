import React, { useEffect, useState } from 'react'
import { HiStar } from 'react-icons/hi'
import ReactStars from 'react-rating-stars-component'
import moment from 'moment'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { TfiCommentAlt } from 'react-icons/tfi'
import axios from 'axios'
import api from '../../api/api'
import { toast } from 'react-toastify'
import { delete_review, update_review } from '../../store/reducers/ReviewReducer'
import { ClipLoader } from 'react-spinners'
import Swal from 'sweetalert2'

function EachReviews({ review }) {

    const { customer, fetch } = useSelector(state => state.auth)
    const { rating, content, images, createdAt, reviewerid, _id } = review
    const [reviewShortModal, setreviewShortModal] = useState(false);
    const token = localStorage.getItem('dsc-token')
    const dispatch = useDispatch()

    const [rating1, setrating1] = useState('');
    const [content1, setcontent1] = useState('');
    const [images1, setimages1] = useState('');

    const [editLoad, seteditLoad] = useState(false);


    const [edit, setedit] = useState(false);

    const EditHanlder = async () => {
        seteditLoad(true)
        const { data, status } = await api.put('/v5/review/put', { rating: rating1, content: content1, images: images1, _id }, { headers: { Authorization: `Bearer ${token}` } })
        if (status === 201) {
            toast.success('updated')
            setedit(false)
            dispatch(update_review(data.editreview))
            seteditLoad(false)
        }
    }

    const DeleteHanlder = async () => {
        setreviewShortModal(false)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                const { data, status } = await api.delete(`/v5/review/delete/${_id}`, { headers: { Authorization: `Bearer ${token}` } })
                if (status === 202) {
                    toast.success('review deleted successed.')
                    dispatch(delete_review(_id))
                }
            }
        })
    }


    const ImagesHanlder = (e) => {
        const files = Array.from(e.target.files)
        if (files.length === 0) return;
        files.map(async (file) => {
            const form = new FormData()
            form.append('image', file)
            const { data: uploadData, status: uploadStatus } = await axios.post('https://api.imgbb.com/1/upload?key=57c12ab1dfd1e175a03c87dbdc436f90', form)
            if (uploadStatus === 200) {
                return setimages1(prev => [...prev, uploadData.data.url])
            }
        })
    }


    useEffect(() => {
        setrating1(rating)
        setcontent1(content)
        setimages1(images)
    }, [review]);

    return (
        <div onClick={() => reviewShortModal && setreviewShortModal(false)} className='eachReviews border-b border-b-gray-500 px-3 pb-4'>
            <div className='flex items-center justify-between'>
                <div className={!edit && 'pointer-events-none'}>
                    <ReactStars
                        value={rating}
                        onChange={(e) => setrating1(e)}
                        size={25}
                        isHalf={false}
                        emptyIcon={<i className="far fa-star"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#EAB308"
                    />
                </div>
                <p className='text-[14px] tracking-wide text-stone-500'>
                    {moment(createdAt).subtract(10, 'days').calendar()}
                </p>
            </div>
            <div className='flex items-center py-1 gap-x-3'>
                <img className='h-5 w-5  rounded-full' src={reviewerid?.avatar || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'} alt="" />
                <div className=' flex-grow w-full flex justify-between items-center pr-4'>
                    <p className='text-[14px] font-sans font-[600] tracking-wide text-stone-600 '>{reviewerid.name}</p>
                    {
                        customer._id === reviewerid._id &&
                        <div className=' relative'>
                            {
                                !edit &&
                                <button onClick={() => setreviewShortModal(!reviewShortModal)} className='text-[20px] bg-gray-100 hover:bg-gray-200 duration-200 p-2 rounded-full font-sans font-[600] tracking-wide text-stone-600 '>
                                    <BiDotsVerticalRounded />
                                </button>
                            }
                            {
                                reviewShortModal &&
                                <div onClick={(e) => e.stopPropagation()} className=' absolute flex flex-col top-0 -left-[120px] bg-teal-800 shadow-lg'>
                                    <button onClick={() => {
                                        setedit(true)
                                        setreviewShortModal(false)
                                    }} className=' font-sans hover:bg-teal-700 p-2 px-8 text-[16px] text-white font-[400]'>Edit</button>
                                    <button className=' font-sans hover:bg-teal-700 p-2 px-8 text-[16px] text-white font-[400]' onClick={token && DeleteHanlder}>Delete</button>
                                </div>
                            }
                        </div>
                    }

                </div>
            </div>
            <div className="description pt-1">
                {
                    edit ?
                        <textarea onChange={(e) => setcontent1(e.target.value)} value={content1} name="" id="" cols="0" className=' mt-1 h-auto w-full border-2 outline-none border-gray-400 focus:border-teal-700 rounded-lg p-2 placeholder:text-stone-500 text-[14px] tracking-wide' placeholder='enter your feedback ....'></textarea>
                        :
                        <p className='text-[13px] tracking->wide leading-[1.25rem] text-stone-600'>{content}</p>
                }
            </div>
            <div className='flex justify-between items-end'>
                <div className='flex items-center gap-x-2 mt-3'>
                    {images1.length > 0 && images1.map(i => {
                        return <div className=' relative h-[80px] w-auto'>
                            <img src={i} className=' h-full w-auto hover:scale-105 duration-200 rounded-sm shadow-lg' alt="" />
                            {
                                edit &&
                                <button onClick={() => {
                                    let fi = images1.filter(ir => ir !== i)
                                    setimages1(fi)
                                }} className=' absolute top-2 right-2 rounded-full bg-teal-700 h-8 w-8 text-white'>x</button>
                            }
                        </div>
                    })}
                    {edit &&
                        <div>
                            <input onChange={ImagesHanlder} id='file' type="file" multiple className=' hidden' />
                            <label htmlFor='file' className=' h-[80px] cursor-pointer w-[80px] bg-gray-300 rounded-md shadow-md flex justify-center items-center'>+</label>
                        </div>
                    }
                </div>
                {
                    edit ?
                        <div className='flex items-center gap-x-2'>
                            <button onClick={() => {
                                setrating1(rating)
                                setcontent1(content)
                                setimages1(images)
                                setedit(false)
                            }} className='text-[15px] font-sans tracking-wide font-semibold text-white bg-orange-400  hover:bg-orange-600 rounded-md py-1 px-3 mt-2'>close</button>
                            <button onClick={token && EditHanlder} className='text-[15px] font-sans tracking-wide font-semibold text-white bg-teal-600  hover:bg-teal-700 rounded-md py-1 px-3 mt-2'> {editLoad ? <ClipLoader size={18} color='white' cssOverride={{ borderWidth: '3px' }} /> : 'save'} </button>

                        </div>
                        :
                        <div className='flex items-center gap-x-4'>
                            <button className='text-[20px] flex gap-x-2 items-center bg-gray-100 hover:bg-gray-200 duration-200 p-2 px-4 rounded-full font-sans font-[600] tracking-wide text-stone-600 '>
                                <TfiCommentAlt /> <span className='text-[16px] font-sans'>0</span>
                            </button>
                            <button className='text-[15px] tracking-wide font-sans font-semibold text-orange-600 rounded-sm p-1 bg-orange-100 px-3'>reply</button>
                        </div>
                }
            </div>
        </div>
    )
}

export default EachReviews