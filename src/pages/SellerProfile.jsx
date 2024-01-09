import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import SPcontent from '../components/SellerPorfile/SPcontent'
import ShortBanner from '../components/ShortBanner'

function SellerProfile() {

    // const { _id, name, images, discount, price, avgRating } = product // my ssc res id : 2114420633

    const temp_prods = {
        _id: 1,
        name: 'sclosive pant made in bangadesh.',
        images: ['https://rukminim1.flixcart.com/image/550/650/km9ht3k0/shirt/s/5/g/42-12947614-roadster-original-imagf75yghbnsgww.jpeg?q=90&crop=false', 'https://m.media-amazon.com/images/I/41ti9DrhjvL._AC_UY1100_.jpg'],
        discount: 5,
        price: 599,
        avgRating: 3
    }


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
        <div>
            <Header />
            {/* <ShortBanner routeChange={routeChange} /> */}
            <SPcontent temp_prods={temp_prods} />
            <Footer />
        </div>
    )
}

export default SellerProfile