import React from 'react'
import ProductInfo from '../components/Product Details/ProductInfo'
import ShortBanner from '../components/ShortBanner'
import Header from '../components/Header'
import ProductReviews from '../components/Product Details/ProductReviews'
import SellerShopProduct from '../components/Product Details/SellerShopProduct'
import RelatedProducts from '../components/Product Details/RelatedProducts'

function ProductDetails() {

    const routeChange = [
        {
            path: '/',
            name: 'home'
        },
        {
            path: '/product',
            name: 'product'
        },
        {
            path: '/product/details/fslflsjfl',
            name: 'details'
        },
    ]

    return (
        <div className=' w-full pb-40 overflow-hidden '>
            <Header />
            <ShortBanner routeChange={routeChange} />
            <ProductInfo />
            <div className=' max-w-7xl mx-auto flex md:flex-col flow-row sm:px-0 p-8'>
                <div className=' w-full flex-grow border-black'>
                    <ProductReviews />
                </div>
                <div className=' md:w-full w-[600px]'>
                    <SellerShopProduct />
                </div>
            </div>
            <RelatedProducts />
        </div>
    )
}

export default ProductDetails