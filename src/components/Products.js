import React, { useContext } from 'react'

import Product from './Product'

// Context
import { ProductsContext }from '../contexts/ProductsContextProvider'


const Products = () => {

    const products = useContext(ProductsContext)
    console.log(products)

  return (
    <div className='grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-4 xl:grid-cols-5 my-6 mx-2'>
        {
        products.map(product => <Product key={product.id} product={product}/>)
    }
    </div>
  )
}

export default Products