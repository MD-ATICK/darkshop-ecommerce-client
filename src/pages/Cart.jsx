import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ShortBanner from '../components/ShortBanner'
import OrderSummary from '../components/cart/OrderSummary'
import SingleCart from '../components/cart/SingleCart'
import { useSelector } from 'react-redux'
import ShopStockProductShow from '../components/stock & outstock cart/ShopStockProductShow'
import ShopOutStockProductShow from '../components/stock & outstock cart/ShopOutStockProductShow'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

function Cart() {

    const navigate = useNavigate()

    const { customer, fetch } = useSelector(state => state.auth)
    const { carts, worked } = useSelector(state => state.cart)
    const [stock_product_shops, setstock_product_shops] = useState([]);
    const [outstock_product_shops, setoutstock_product_shops] = useState([]);

    const routeChange = [
        {
            path: '/',
            name: 'home'
        },
        {
            path: '/cart',
            name: 'cart'
        },
    ]


    const stock_product = carts.filter(c => c.stock !== 0)
    const out_stock_product = carts.filter(c => c.stock === 0)

    const stockProductFunc = () => {
        const stockp_shops = [];

        for (let s = 0; s < stock_product.length; s++) {
            const find = stockp_shops.find(ts => ts.sellerId === stock_product[s].sellerId)
            if (!find) {
                stockp_shops.push({ sellerId: stock_product[s].sellerId, shopName: stock_product[s].shopName });
            }
        }

        stockp_shops.length > 0 && setstock_product_shops(stockp_shops);
    }

    const outStockProductFunc = () => {
        const outstockp_shops = [];

        for (let s = 0; s < out_stock_product.length; s++) {
            const find = outstockp_shops.find(ts => ts.sellerId === out_stock_product[s].sellerId)
            if (!find) {
                outstockp_shops.push({ sellerId: out_stock_product[s].sellerId, shopName: out_stock_product[s].shopName });
            }
        }

        outstockp_shops.length > 0 && setoutstock_product_shops(outstockp_shops);
    }


    useEffect(() => {
        if (worked) {
            stockProductFunc()
            outStockProductFunc()
        }
    }, [carts]);

    useEffect(() => {
        const token = localStorage.getItem('dsc-token')
        if (!token) {
            navigate('/login', { state: { pathname: '/cart' } })
        }
    }, []);


    return (
        <div>
            <Header />
            <ShortBanner routeChange={routeChange} />
            <div className=' bg-gray-200 p-2 w-full'>
                {
                    carts.length === 0 ?
                        <div className=' h-[70vh] flex justify-center items-center flex-col gap-y-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[200px] h-[200px]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                            <p className='text-[15px] tracking-wide font-sans'>No cart added by you.</p>
                        </div>
                        :
                        <div className='flex md:flex-col-reverse flex-row min-h-screen md:py-4 py-10 gap-x-6 max-w-7xl mx-auto'>

                            {
                                worked && <div className='flex-[0.7] flex flex-col gap-8'>
                                    {/* stock products */}
                                    {
                                        worked && stock_product.length > 0 &&
                                        <ShopStockProductShow stock_product={stock_product} stock_product_shops={stock_product_shops} />
                                    }
                                    {/* stock products end */}


                                    {/* OUT stock products */}
                                    {
                                        worked && out_stock_product.length > 0 &&
                                        <ShopOutStockProductShow out_stock_product={out_stock_product} outstock_product_shops={outstock_product_shops} />
                                    }

                                    {/* OUT stock products end */}
                                </div>
                            }

                            {/* order summary ~ components */}
                            {
                                worked && carts.length > 0 &&
                                <OrderSummary stock_product={stock_product} stock_product_shops={stock_product_shops} />
                            }
                            {/* order summary ~ components end */}

                        </div>
                }
            </div>
            <Footer />
        </div>
    )
}

export default Cart