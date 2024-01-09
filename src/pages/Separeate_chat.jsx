import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { IoMdInformationCircle } from 'react-icons/io'
import { RiSendPlaneFill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import { toast } from 'react-toastify'
import api from '../api/api'
import { correct_id, getAllMessages, new_message } from '../store/reducers/MessageReducer'

function Separeate_chat({ socket }) {

    const location = useLocation()
    const chat = location.state
    const token = localStorage.getItem('dsc-token')
    const [message, setmessage] = useState('');
    const [images, setimages] = useState([]);
    const dispatch = useDispatch()
    console.log('location data', location.state)
    const navigate = useNavigate()

    const scrollRef = useRef(null)
    const getRef = useRef()
    const sendRef = useRef()

    const { chatMessages, fetch } = useSelector(state => state.message)
    const { customer } = useSelector(state => state.auth)


    const fileHanlder = async (e) => {
        const files = Array.from(e.target.files)
        if (files.length === 0) return;

        files.map(async (file) => {
            const form = new FormData()
            form.append('image', file)
            const { data: uploadData, status: uploadStatus } = await axios.post('https://api.imgbb.com/1/upload?key=57c12ab1dfd1e175a03c87dbdc436f90', form)
            if (uploadStatus === 200) {
                toast.success('uploaded.')
                return setimages(prev => [...prev, uploadData.data.url])
            }
        })
    }

    const message_send_hanlder = async (e) => {
        if (e.key === 'Enter' && customer) {
            setmessage('')
            setimages('')

            const randomId = Math.floor(Math.random() * 10000) + 90000
            dispatch(new_message({ _id: randomId, chat: chat._id, content: message, images, sender: customer }))
            if (scrollRef.current) {
                scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
            }

            const { data, status } = await api.post(`/v7/message/send-message`, { chatid: chat._id, content: message, images }, { headers: { Authorization: `Bearer ${token}` } })
            if (status === 201) {
                dispatch(correct_id({ oId: randomId, nId: data.message._id }))
                sendRef.current.play()
                socket.emit('message_send', data.message)
                console.log(data)
            }
        }
    }

    const allChatMessagesFetch = async () => {
        const token = localStorage.getItem('dsc-token')
        if (token) {
            return dispatch(getAllMessages(chat._id))
        }
        toast.info('auth is not validated.')
    }


    useEffect(() => {

        allChatMessagesFetch()

        if (socket) {
            console.log({ socket })
            socket.on('reciveMessage', (props) => {
                dispatch(new_message(props))
                getRef.current.play()
                toast.success('messsage get.')
                if (scrollRef.current) {
                    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
                }
            })

            socket.emit('join', chat._id)

            return () => {
                socket.off('reciveMessage')
            }
        }

    }, []);

    return (
        <div className='h-screen overflow-hidden'>
            <div id='top header' className=' z-[99] fixed top-0 left-0 md:absolute h-[55px] bg-gradient-to-r from-teal-700 to-teal-600 flex items-center justify-between px-6 text-white w-full'>
                <audio ref={getRef} src="/get-sound.mp3"></audio>
                <audio ref={sendRef} src="/send-sound.mp3"></audio>
                <div className='flex items-center gap-x-4'>
                    <button onClick={() => {
                        if (socket) {
                            socket.emit('leave', chat._id)
                            navigate('/chats')
                        }
                    }} className=' h-10 w-10 flex justify-center items-center hover:bg-[#188f8b72] rounded-md duration-200'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                    </button>
                    <div className='h-10 w-10 cursor-pointer'>
                        <div className=' relative h-10 w-10'>
                            <img src={chat.seller?.avatar || 'https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg'} className='h-10 w-10 object-cover shadow-lg rounded-full' alt="" />
                            <p className='h-4 w-4 absolute -top-0 -right-1 rounded-full bg-green-400 border-[3.5px] border-teal-700'></p>
                        </div>
                    </div>
                    <p className='tracking-wide text-[17px] font-[600]'>{chat.seller.name}</p>
                </div>
                <button><IoMdInformationCircle className=' text-white text-[30px]' /></button>
            </div>

            <div id="content_bar" className='py-[85px]'>
                {
                    fetch ?
                        <div ref={scrollRef} className=' h-[85vh] overflow-y-scroll scroll-smooth flex gap-y-2 flex-col w-full py-2 border-2 sm:px-2 px-6'>
                            <p className=' text-stone-600 text-[12px] mb-3 tracking-wide w-full text-center'>now start your chat with borhan uddin</p>
                            {
                                chatMessages.map(cm => {
                                    if (customer && cm.sender._id === customer._id) {
                                        return <div key={cm._id} className=' right flex w-full justify-end'>
                                            <div className="py-3 pl-4 pr-6 font-sans text-[16px] tracking-wide rounded-lg bg-teal-700 w-fit text-white">
                                                {cm.content}
                                            </div>
                                        </div>
                                    } else {
                                        return <div key={cm._id} className="left mt-2 py-3 pl-4 pr-6 font-sans font-[600] text-[15px] tracking-wide rounded-lg  bg-gray-200 w-fit text-black">
                                            {cm.content}
                                        </div>
                                    }
                                })
                            }
                        </div>
                        :
                        <div className=' w-full flex justify-center items-center py-6'>
                            <ClipLoader color='black' size={50} cssOverride={{ borderWidth: '5px' }} />
                        </div>
                }

            </div>

            <div id='search & msg send bar' className=' search w-full bg-gradient-to-r from-teal-600 to-teal-700 h-[75px] flex items-center md:gap-x-2 gap-x-4 md:px-2 px-8 fixed md:absolute bottom-0 left-0'>
                <input type="file" id='file' multiple={true} className=' hidden' />
                <label htmlFor='file' onClick={fileHanlder} className=' h-10 w-10 cursor-pointer bg-white rounded-full shadow-sm text-stone-600 text-[24px] transform rotate-0 duration-300 hover:rotate-180 flex justify-center items-center '>+</label>
                <div className=' relative h-[50px] md:p-0 pr-8 flex justify-end items-center flex-grow'>
                    <input value={message} onChange={(e) => setmessage(e.target.value)} onKeyDown={token && message_send_hanlder} type="text" className=' bg-gradient-t-r from-gray-200 to-gray-400 outline-none rounded-full w-full duration-500 h-full placeholder:text-stone-500 text-[16px] font-sans tracking-wide font-[600] px-4' placeholder='enter your message ...' />
                </div>
                <button className=' h-10 w-10  bg-white rounded-full shadow-sm text-stone-600 text-[24px]  duration-300 flex items-center pt-[1px] pr-[2px] justify-center '> <RiSendPlaneFill /></button>
            </div>
        </div>
    )
}

export default Separeate_chat