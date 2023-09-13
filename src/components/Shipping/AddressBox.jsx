import React, { useEffect, useState } from 'react'
import { LiaShippingFastSolid } from 'react-icons/lia'
import { useSelector } from 'react-redux';
import { AiFillEdit } from 'react-icons/ai'
import { RiDeleteBin6Line } from 'react-icons/ri'


function AddressBox({ shipping_address, setshipping_address }) {

  const { customer, status } = useSelector(state => state.auth)

  const [addressRefair, setaddressRefair] = useState(false);
  const [name, setname] = useState('');
  const [address, setaddress] = useState('noyakali');
  const [phoneNo, setphoneNo] = useState('0135685656');
  const [postCode, setpostCode] = useState('4360');
  const [province, setprovince] = useState('noyakali');
  const [city, setcity] = useState('dhaka');
  const [area, setarea] = useState('lichubagan');
  const [freetime, setfreetime] = useState('');

  const addAddressHanlder = async (e) => {
    e.preventDefault()
    console.log({ name, address, phoneNo, postCode, province, city, area, freetime })
    localStorage.setItem('dsc_shipping_address', JSON.stringify({ name, address, phoneNo, postCode, province, city, area, freetime }))
    setshipping_address({ name, address, phoneNo, postCode, province, city, area, freetime })
    setaddressRefair(false)
  }

  const addressRefairHanlder = () => {
    setname(shipping_address.name)
    setaddress(shipping_address.address)
    setphoneNo(shipping_address.phoneNo)
    setpostCode(shipping_address.postCode)
    setprovince(shipping_address.province)
    setcity(shipping_address.city)
    setarea(shipping_address.area)
    setaddressRefair(true)
  }

  const deleteHanlder = () => {
    localStorage.removeItem('dsc_shipping_address')
    setname('')
    setaddress('')
    setphoneNo('')
    setpostCode('')
    setprovince('')
    setcity('')
    setarea('')
    setshipping_address('')
  }

  useEffect(() => {
    if (customer) {
      setname(customer.name)
    }
  }, [customer]);

  return (
    <div className=''>
      {
        !addressRefair && shipping_address ?
          <div className=' bg-white p-7 py-5 rounded-lg shadow-md sm:mb-0 '>
            <div className=' w-full justify-between flex items-center'>
              <h1 className='text-[16px] font-[600] tracking-wide text-stone-900 font-sans'>Deliverd to <span className=' text-teal-800 font-sans text-[17px] font-[600]'>{shipping_address.name}</span> </h1>
              <div className='flex items-center gap-x-3'>
                <button onClick={addressRefairHanlder} className='h-8 w-8 shadow-lg duration-150 hover:scale-105 rounded-md flex bg-yellow-500 justify-center items-center text-white text-xl'> <AiFillEdit /> </button>
                <button onClick={deleteHanlder} className='h-8 w-8 shadow-lg duration-150 hover:scale-105 rounded-md flex bg-red-700 justify-center items-center text-white text-xl'> <RiDeleteBin6Line /> </button>
              </div>
            </div>
            <p className=' mt-3  font-[400] tracking-wider text-[13px] text-stone-700 leading-8 '>
              <span className='border-2 border-purple-700 rounded-md font-sans text-[14px] font-[500] tracking-wide py-1 mr-2 px-3 text-black bg-[#54129236]'>Home</span>
              {`${shipping_address.address} ||  ${shipping_address.address} ||  ${shipping_address.phoneNo} ||  ${shipping_address.postCode} ||  ${shipping_address.province} ||  ${shipping_address.city} ||  ${shipping_address.area} ||  ${shipping_address.freetime}`}
            </p>
          </div> :
          <div className=' w-full bg-white rounded-xl shadow-md p-6'>
            <h1 className=' font-sans font-[700] text-stone-600 text-[22px] flex items-center gap-x-3'><LiaShippingFastSolid className=' text-3xl text-teal-700' /> Shipping Imformation</h1>
            <form action="" onSubmit={addAddressHanlder} className='py-6 pb-2 flex flex-col gap-y-4'>
              <div className='flex items-center gap-x-6'>
                <div className=' w-full flex flex-col-reverse gap-y-2'>
                  <input required={true} value={name} onChange={(e) => setname(e.target.value)} type="text" className=' font-sans w-full text-[16px] font-[500] tracking-wide placeholder:text-stone-500 px-4 py-[10px] outline-none border-2 border-stone-400 focus:border-teal-700 rounded-lg' placeholder='Enter your name' />
                  <label htmlFor="" className=' font-sans tracking-wide font-[500] pl-1 text-stone-600'>Name</label>
                </div>
                <div className=' w-full flex flex-col-reverse gap-y-2'>
                  <input required={true} value={address} onChange={(e) => setaddress(e.target.value)} type="text" className=' font-sans text-[16px] w-full font-[500] tracking-wide placeholder:text-stone-500 px-4 py-[10px] outline-none border-2 border-stone-400 focus:border-teal-700 rounded-lg' placeholder='Enter your address' />
                  <label htmlFor="" className=' font-sans tracking-wide font-[500] pl-1 text-stone-600'>Address</label>
                </div>
              </div>
              <div className='flex items-center gap-x-6'>
                <div className=' w-full flex flex-col-reverse gap-y-2'>
                  <input required={true} value={phoneNo} onChange={(e) => setphoneNo(e.target.value)} type="number" className=' font-sans w-full text-[16px] font-[500] tracking-wide placeholder:text-stone-500 px-4 py-[10px] outline-none border-2 border-stone-400 focus:border-teal-700 rounded-lg' placeholder='Enter your phone no' />
                  <label htmlFor="" className=' font-sans tracking-wide font-[500] pl-1 text-stone-600'>Phone</label>
                </div>
                <div className=' w-full flex flex-col-reverse gap-y-2'>
                  <input required={true} value={postCode} onChange={(e) => setpostCode(e.target.value)} type="text" className=' font-sans text-[16px] w-full font-[500] tracking-wide placeholder:text-stone-500 px-4 py-[10px] outline-none border-2 border-stone-400 focus:border-teal-700 rounded-lg' placeholder='Enter your post code' />
                  <label htmlFor="" className=' font-sans tracking-wide font-[500] pl-1 text-stone-600'>Post</label>
                </div>
              </div>
              <div className='flex items-center gap-x-6'>
                <div className=' w-full flex flex-col-reverse gap-y-2'>
                  <input required={true} value={province} onChange={(e) => setprovince(e.target.value)} type="text" className=' font-sans w-full text-[16px] font-[500] tracking-wide placeholder:text-stone-500 px-4 py-[10px] outline-none border-2 border-stone-400 focus:border-teal-700 rounded-lg' placeholder='Enter your province' />
                  <label htmlFor="" className=' font-sans tracking-wide font-[500] pl-1 text-stone-600'>Province</label>
                </div>
                <div className=' w-full flex flex-col-reverse gap-y-2'>
                  <input required={true} value={city} onChange={(e) => setcity(e.target.value)} type="text" className=' font-sans text-[16px] w-full font-[500] tracking-wide placeholder:text-stone-500 px-4 py-[10px] outline-none border-2 border-stone-400 focus:border-teal-700 rounded-lg' placeholder='Enter your city' />
                  <label htmlFor="" className=' font-sans tracking-wide font-[500] pl-1 text-stone-600'>City</label>
                </div>
              </div>
              <div className='flex items-center gap-x-6'>
                <div className=' w-full flex flex-col-reverse gap-y-2'>
                  <input required={true} value={area} onChange={(e) => setarea(e.target.value)} type="text" className=' font-sans w-full text-[16px] font-[500] tracking-wide placeholder:text-stone-500 px-4 py-[10px] outline-none border-2 border-stone-400 focus:border-teal-700 rounded-lg' placeholder='Enter your area' />
                  <label htmlFor="" className=' font-sans tracking-wide font-[500] pl-1 text-stone-600'>Area</label>
                </div>
                <div className=' w-full flex flex-col-reverse gap-y-2'>
                  {/* error */}
                  <select required={true} onChange={(e) => setfreetime(e.target.value)} className=' font-sans text-[16px] w-full font-[500] tracking-wide placeholder:text-stone-500 px-4 py-[10px] outline-none border-2 text-stone-600 border-stone-400 focus:border-teal-700 rounded-lg' >
                    <option value="">Select free time</option>
                    <option value="9.00AM-1.00PM" className=''>9.00AM to 1.00PM</option>
                    <option value="3.00PM-7.00PM" className=''>3.00PM to 7.00PM</option>
                  </select>
                  <label htmlFor="" className=' font-sans tracking-wide font-[500] pl-1 text-stone-600'>Free time</label>
                </div>
              </div>
              <button type='submit' className=' mt-8 py-3 text-[15px] tracking-wide font-sans font-[600] bg-teal-700 text-white shadow-md rounded-lg duration-150 hover:scale-105 w-full'>Save Address</button>
            </form>
          </div>
      }
    </div>
  )
}

export default AddressBox