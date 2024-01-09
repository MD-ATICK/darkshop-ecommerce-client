import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import CateLessHeader from '../components/CateLessHeader'
import Footer from '../components/Footer'
import OrderDetails from '../components/Shipping/OrderDetails'
import AddressBox from '../components/Shipping/AddressBox'
import OrderProductDetails from '../components/Shipping/OrderProductDetails'
import ShortBanner from '../components/ShortBanner'
import { useSelector } from 'react-redux'
import moment from 'moment'

function Shipping() {

    const { carts, worked } = useSelector(state => state.cart)

    const stock_product = carts.filter(c => c.stock !== 0)
    const [stock_product_shops, setstock_product_shops] = useState([]);
    const [shipping_address, setshipping_address] = useState('');


    const stockProductFunc = () => {
        const stockp_shops = [];

        for (let s = 0; s < stock_product.length; s++) {
            const find = stockp_shops.find(ts => ts.sellerId === stock_product[s].sellerId?._id || stock_product[s].sellerId)
            !find && stockp_shops.push({ sellerId: stock_product[s].sellerId?._id || stock_product[s].sellerId, shopName: stock_product[s].shopName });
        }
        stockp_shops.length > 0 && setstock_product_shops(stockp_shops);
    }


    useEffect(() => {
        if (worked) {
            stockProductFunc()
        }
    }, [carts]);

    useEffect(() => {
        const stringify_address = localStorage.getItem('dsc_shipping_address')
        if (stringify_address) return setshipping_address(JSON.parse(stringify_address))
    }, []);

    const routeChange = [
        {
            path: '/',
            name: 'home'
        },
        {
            path: '/cart',
            name: 'cart'
        },
        {
            path: '/shipping',
            name: 'shipping'
        },
    ]

    return (
        <div>
            <CateLessHeader />
            <ShortBanner routeChange={routeChange} />

            {/* content */}
            <div className=' w-full bg-gray-200'>

                <div className=' max-w-7xl sm:pt-6 py-12 px-2 items-start mx-auto flex gap-x-6 md:flex-col flex-row'>
                    <div className='flex flex-col gap-y-5 w-full'>
                        <AddressBox shipping_address={shipping_address} setshipping_address={setshipping_address} />
                        <OrderProductDetails stock_product={stock_product} stock_product_shops={stock_product_shops} />
                    </div>
                    <OrderDetails stock_product={stock_product} stock_product_shops={stock_product_shops} shipping_address={shipping_address} />
                </div>
            </div>
            {/* content */}

            <Footer />
        </div>
    )
}

export default Shipping