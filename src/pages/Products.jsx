import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ShortBanner from '../components/ShortBanner'
import ShopMain from '../components/shop/ShopMain'
import { useDispatch, useSelector } from 'react-redux'
import Search from '../components/Search'
import SearchItemBox from '../components/Search Item box/SearchItemBox'
import FilterSection from '../components/shop/FilterSection'
import Footer from '../components/Footer'
import { search, searchf } from '../store/reducers/webSmallControlsReducer'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from '../api/api'
import { filter_product } from '../store/reducers/HomeReducer'

function Products() {

    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { searchtext, fsearch, fcategroy, frating, fprice, fknock } = useSelector(state => state.controll)

    const [searchParams, setSearchParams] = useSearchParams()
    const searchv = searchParams.get('search')

    const [filter_fetch_load, setfilter_fetch_load] = useState(false);

    // http://localhost:4000/api/v3/get-product?search=pant&rating=0&category=Kids-Genjy&max=900&min=600

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

    const product_filtering_fetch = async () => {
        try {
            setfilter_fetch_load(true)
            const { data, status } = await api.get(`/v3/get-product?search=${searchtext}&rating=${frating}&category=${fcategroy}&price=${fprice}`, { headers: { Authorization: `access gained.` } })
            if (status === 200) {
                setfilter_fetch_load(false)
                dispatch(filter_product(data.products))
            }
        } catch (error) {
            setfilter_fetch_load(false)
            toast.error('error held : product 43')
        }
    }


    useEffect(() => {
        if (location.pathname === '/product' && searchv) {
            dispatch(search(searchv))
        }
    }, []);

    useEffect(() => {
        product_filtering_fetch()
    }, [searchv, fknock]);

    return (
        <>
            <Header />
            {/* {
                searchtext.length > 0 &&
                <SearchItemBox />
            } */}
            <ShortBanner routeChange={routeChange} />
            <Search />
            <FilterSection />
            <ShopMain filter_fetch_load={filter_fetch_load} searchv={searchv} />
            <Footer />
        </>
    )
}

export default Products