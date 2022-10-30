import React, { useContext } from 'react'

import Product from './Product'

// Context
import { ProductsContext }from '../contexts/ProductsContextProvider'

// CSS
import styles from "./Products.module.css"

const Products = () => {

    const products = useContext(ProductsContext)
    console.log(products)

  return (
    <div className={styles.container}>
        {
        products.map(product => <Product key={product.id} product={product}/>)
    }
    </div>
  )
}

export default Products