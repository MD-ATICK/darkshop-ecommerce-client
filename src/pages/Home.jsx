import React, { useEffect } from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Category from '../components/Category'
import Footer from '../components/Footer'
import FutureProducts from '../components/Future Products/FutureProducts'
import AllCategoryProducts from '../components/All Category products/AllCategoryProducts'
import { useDispatch, useSelector } from 'react-redux'
import { categoryesFetch } from '../store/reducers/HomeReducer'
import Search from '../components/Search'
import { Link, useSearchParams } from 'react-router-dom'
import SearchItemBox from '../components/Search Item box/SearchItemBox'
import { search } from '../store/reducers/webSmallControlsReducer'

function Home() {

  const dispatch = useDispatch()
  const [searchParams, setSearchParams] = useSearchParams()
  const { searchtext } = useSelector(state => state.controll)
  const { categoryes, cate_status, cate_fetch, products, future_products, format_latest_products, format_topRated_products, format_discount_products, product_fetch } = useSelector(state => state.home)



  useEffect(() => {
    dispatch(search(''))
  }, [searchParams]);

  return (
    <div className=" w-full">
      <Header />
      <Search />
      {
        searchtext.length > 0 &&
        <SearchItemBox />
      }
      <Banner />
      <Category categoryes={categoryes} cate_fetch={cate_fetch} />
      <FutureProducts future_products={future_products} product_fetch={product_fetch} />
      <AllCategoryProducts format_latest_products={format_latest_products} format_topRated_products={format_topRated_products} format_discount_products={format_discount_products} product_fetch={product_fetch} />
      <Footer />
    </div>
  )
}

export default Home