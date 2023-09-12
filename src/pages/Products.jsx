import React from 'react'
import Header from '../components/Header'
import ShortBanner from '../components/ShortBanner'
import ShopMain from '../components/shop/ShopMain'
import { useSelector } from 'react-redux'

function Products() {

    const { categoryes, cate_fetch, products, product_fetch } = useSelector(state => state.home)

    const routeChange = [
        {
            name: 'home',
            path: '/'
        },
        {
            name: 'shop',
            path: '/shop'
        },
    ]

    return (
        <>
            <Header />
            <ShortBanner routeChange={routeChange} />
            <ShopMain categoryes={categoryes} cate_fetch={cate_fetch} products={products} product_fetch={product_fetch} />
        </>
    )
}

export default Products