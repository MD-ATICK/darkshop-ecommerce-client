import React, { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'
import Blog from './pages/Blog'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import Shipping from './pages/Shipping'
import { useDispatch, useSelector } from 'react-redux'
import { categoryesFetch, productsFetch } from './store/reducers/HomeReducer'
import Products from './pages/Products'
import Loader from './components/Loader/Loader'
import { toast } from 'react-toastify'
import { meFetch } from './store/reducers/AuthReducer'
import { get_wishlist } from './store/reducers/WishlistReducer'
import { get_cart } from './store/reducers/CartReducer'
import Payment from './pages/Payment'
import Profile from './pages/Profile'
import Dashboard from './pages/Dashboard'
import Settings from './pages/Settings'
import Myorders from './pages/Myorders'
import ChangePassoword from './pages/ChangePassoword'
import { customerOrderFetch } from './store/reducers/OrderReducer'

function App() {

  const dispatch = useDispatch()
  const dsc_token = localStorage.getItem('dsc-token')
  const { screenShowOnly } = useSelector(state => state.wishlist)
  const { customer, status, fetch, loading, token } = useSelector(state => state.auth)
  const { loading: orderLoading } = useSelector(state => state.order)

  useEffect(() => {
    console.log('run app.jsx.✅')
    dispatch(get_wishlist())
    dispatch(get_cart())
    dsc_token && dispatch(meFetch(dsc_token))
    dispatch(categoryesFetch())
    dispatch(productsFetch())
    dispatch(customerOrderFetch())
  }, []);




  return (
    <>
      {
        loading || orderLoading ?
          <Loader />
          :
          <div className={` ${screenShowOnly && 'h-screen overflow-hidden'}`}>
            {/* <div className=' w-full h-screen bg-[#0000007d] fixed top-0 left-0 z-[9998]'></div> */}
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />

                <Route path='/blog' element={<Blog />} />

                <Route path='/contact' element={<Contact />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/change-password' element={<ChangePassoword />} />

                <Route path='/dashboard' element={<Dashboard />} />

                <Route path='/login' element={<Login />} />

                <Route path='/product' element={<Products />} />
                <Route path='/payment' element={<Payment />} />
                <Route path='/product/details/:_id' element={<ProductDetails />} />
                <Route path='/profile' element={<Profile />} />

                <Route path='/my-orders' element={<Myorders />} />

                <Route path='/register' element={<Register />} />

                <Route path='/shipping' element={<Shipping />} />
                <Route path='/settings' element={<Settings />} />
              </Routes>
            </BrowserRouter>
          </div>
      }
    </>
  )
}

export default App