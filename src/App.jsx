import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { toast } from "react-toastify";
import io from "socket.io-client";
import Loader from "./components/Loader/Loader";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Cart from "./pages/Cart";
import ChangePassoword from "./pages/ChangePassoword";
import Chat from "./pages/Chat";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Myorders from "./pages/Myorders";
import Payment from "./pages/Payment";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import SellerProfile from "./pages/SellerProfile";
import Separeate_chat from "./pages/Separeate_chat";
import Shipping from "./pages/Shipping";
import { logout, meFetch } from "./store/reducers/AuthReducer";
import { get_cart } from "./store/reducers/CartReducer";
import { categoryesFetch, productsFetch } from "./store/reducers/HomeReducer";
import { customerOrderFetch } from "./store/reducers/OrderReducer";
import { get_wishlist } from "./store/reducers/WishlistReducer";

let socket;

function App() {
	const dispatch = useDispatch();
	const dsc_token = localStorage.getItem("dsc-token");
	const { screenShowOnly } = useSelector(state => state.wishlist);
	const { customer, status, fetch, loading, error } = useSelector(
		state => state.auth,
	);
	const { loading: orderLoading } = useSelector(state => state.order);

	const rootFetch = async () => {
		// const { data } = await axios.get('http://localhost:4000/api')
		const { data } = await axios.get(
			"https://darkshop-ecommerce-server.vercel.app/api",
		);
		console.log(data.message);
	};

	const other_kaj = () => {
		console.log("✅ useEffect of app.jsx.");
		rootFetch();
		dispatch(categoryesFetch());
		dispatch(productsFetch());
		dispatch(get_wishlist());
		dispatch(get_cart());
		dsc_token && dispatch(meFetch(dsc_token));
		dsc_token && dispatch(customerOrderFetch());
	};

	useEffect(() => {
		// socket = io("http://localhost:4000");
		socket = io("https://darkshop-ecommerce-server.vercel.app");
		other_kaj();

		if (customer && fetch && socket) {
			socket.emit("add_user", customer);
		}

		return;
	}, []);

	useEffect(() => {
		if (status === 223) {
			localStorage.removeItem("dsc-token");
			dispatch(logout());
			<Navigate to={"/"} />;
			toast.error("token is expried again login.");
		}
	}, [status]);

	return (
		<>
			{loading || orderLoading ? (
				<Loader />
			) : (
				<div className={` ${screenShowOnly && "h-screen overflow-hidden"}`}>
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
							<Route
								path='/product/details/:_id'
								element={<ProductDetails />}
							/>
							<Route path='/profile' element={<Profile />} />

							<Route path='/my-orders' element={<Myorders />} />

							<Route path='/register' element={<Register />} />

							<Route path='/shipping' element={<Shipping />} />
							<Route path='/chats' element={<Chat socket={socket} />} />
							<Route
								path='/chats/:id'
								element={<Separeate_chat socket={socket} />}
							/>
							<Route path='/seller-profile/:_id' element={<SellerProfile />} />
						</Routes>
					</BrowserRouter>
				</div>
			)}
		</>
	);
}

export default App;
