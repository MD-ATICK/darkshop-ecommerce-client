import React from 'react'
import { useSelector } from 'react-redux'
import SearchSingleProduct from './SearchSingleProduct'

function SearchItemBox() {

  const { searchtext } = useSelector(state => state.controll)
  const { allproducts, product_fetch } = useSelector(state => state.home)

  const futureProducts = [
    {
      name: 'Long Sleeve causa Shirt for man',
      image: 'https://fabrilife.com/image-gallery/6388945749713-square.jpg',
      discount: 8,
      price: 899,
      avarageRatings: 4
    },
    {
      name: 'Long Sleeve causa Shirt for man and pant more.',
      image: 'https://fabrilife.com/image-gallery/638741f4ba04f-square.jpg',
      discount: 15,
      price: 1599,
      avarageRatings: 3
    },
    {
      name: 'Long Sleeve causa Shirt for man',
      image: 'https://fabrilife.com/image-gallery/638741f4b169a-square.jpg',
      discount: 9,
      price: 299,
      avarageRatings: 1
    },
    {
      name: 'Long Sleeve causa Shirt for man',
      image: 'https://fabrilife.com/image-gallery/6388945749713-square.jpg',
      discount: 8,
      price: 899,
      avarageRatings: 4
    },
    {
      name: 'Long Sleeve causa Shirt for man and pant if more skillable.',
      image: 'https://fabrilife.com/image-gallery/638741f4ba04f-square.jpg',
      discount: 15,
      price: 1599,
      avarageRatings: 3
    },
    {
      name: 'Long Sleeve causa Shirt for man',
      image: 'https://fabrilife.com/image-gallery/638741f4b169a-square.jpg',
      discount: 9,
      price: 299,
      avarageRatings: 1
    },
    {
      name: 'Long Sleeve causa Shirt for man',
      image: 'https://fabrilife.com/image-gallery/6388945749713-square.jpg',
      discount: 8,
      price: 899,
      avarageRatings: 4
    },
    {
      name: 'Long Sleeve causa Shirt for man and pant if more skillable.',
      image: 'https://fabrilife.com/image-gallery/638741f4ba04f-square.jpg',
      discount: 15,
      price: 1599,
      avarageRatings: 3
    },
    {
      name: 'Long Sleeve causa Shirt for man',
      image: 'https://fabrilife.com/image-gallery/638741f4b169a-square.jpg',
      discount: 9,
      price: 299,
      avarageRatings: 1
    },

  ]

  const FilteredProds = product_fetch && allproducts.filter(fp => fp.name.toLowerCase().includes(searchtext.toLowerCase()))

  return (
    product_fetch && <div className=' w-full md:max-h-[600px] max-h-[500px] h-full absolute mx-auto left-0 md:top-[130px] top-[200px] z-[9999]' >
      <div className='md:w-full w-[800px] p-4 mx-auto bg-white shadow-lg shadow-gray-400 rounded-xl h-full'>
        <p className='text-[16px] font-sans font-semibold tracking-wide text-stone-600'>Suggested product searching by <span className='text-[16px] font-sans text-white font-semibold tracking-wide px-1 bg-teal-700'>{searchtext}</span> ({FilteredProds.length})</p>
        <main className='search_products h-[95%] mt-3 flex flex-col gap-y-1 px-1 overflow-y-scroll'>
          {
            FilteredProds.map((ssp, i) => {
              return <SearchSingleProduct key={i} ssp={ssp} />
            })
          }
          {
            FilteredProds.length < 7 && <p className='text-[14px] tracking-wide text-stone-600 w-full text-center'>no more found.</p>
          }
        </main>
      </div>
    </div>
  )
}

export default SearchItemBox