import React, { useEffect, useState } from 'react'
import ProductInfo from '../components/Product Details/ProductInfo'
import ShortBanner from '../components/ShortBanner'
import Header from '../components/Header'
import ProductReviews from '../components/Product Details/ProductReviews'
import SellerShopProduct from '../components/Product Details/SellerShopProduct'
import RelatedProducts from '../components/Product Details/RelatedProducts'
import Footer from '../components/Footer'
import { useParams, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import api from '../api/api'
import { toast } from 'react-toastify'
import Loader from '../components/Loader/Loader'
import { reviewFetch } from '../store/reducers/ReviewReducer'

function ProductDetails() {

    const { products, product_fetch } = useSelector(state => state.home)
    const [rootLoad, setrootLoad] = useState(true);

    const [singleProdFetched, setsingleProdFetched] = useState(false);
    const { prodReviews } = useSelector(state => state.review)

    const [singleProd, setsingleProd] = useState('');
    // const [prodReviews, setprodReviews] = useState('');
    const [shopProds, setshopProds] = useState('');
    const [relatedProds, setrelatedProds] = useState('');
    const dispatch = useDispatch()


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

    const { _id } = useParams()
    const fpid = _id.split('~')[1]

    const singleProdFetch = async () => {
        const { data, status } = await api.get(`/v3/single-get-product/${fpid}`, { headers: { Authorization: 'acccess gained' } })
        if (status === 200) {
            setsingleProdFetched(true)
            return setsingleProd(data.product)
        } else {
            toast.error('error held in product')
        }
    }


    const shopProdFetch = async () => {
        if (singleProd) {
            const { data, status } = await api.get(`/v3/one-shop-products/get/${singleProd.sellerId?._id}`, { headers: { Authorization: 'acccess gained' } })
            if (status === 200) {
                setshopProds(data.shopProds)
            } else {
                toast.error('error held in shop props')
            }
        }
    }

    const relatedProdFetch = async () => {
        if (singleProd) {
            const { data, status } = await api.get(`/v3/related-products/get?category=${singleProd.category}`, { headers: { Authorization: 'acccess gained' } })
            if (status === 200) {
                setrelatedProds(data.relatedProds)
            } else {
                toast.error('error held in related prods')
            }
        }
    }




    useEffect(() => {
        setrootLoad(true) // Load st
        singleProdFetch()
        dispatch(reviewFetch(fpid))
        // reviewFetch()
    }, [_id]);

    useEffect(() => {
        shopProdFetch()
        relatedProdFetch()
        setrootLoad(false) // Load end
    }, [singleProd]);


    return (
        rootLoad || !singleProd || !shopProds || !relatedProds || !prodReviews ? <Loader /> :
            <div className=' w-full overflow-hidden '>
                <Header />
                <ShortBanner routeChange={routeChange} />
                <ProductInfo singleProd={singleProd} rl={prodReviews.length} />
                <div className=' max-w-7xl mx-auto flex md:flex-col flow-row sm:px-0 p-8'>
                    <div className=' w-full flex-grow border-black'>
                        <ProductReviews prodReviews={prodReviews} sellerid={singleProd.sellerId?._id} productid={fpid} />
                    </div>
                    <div className=' md:w-full w-[600px]'>
                        <SellerShopProduct shopProds={shopProds} shopname={singleProd.shopName} />
                    </div>
                </div>
                <RelatedProducts relatedProds={relatedProds} />
                <Footer />
            </div>
    )
}

export default ProductDetails