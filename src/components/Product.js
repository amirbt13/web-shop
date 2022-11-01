import React from 'react'

// CSS
import styles from "./Product.module.css"

const Product = ({ product }) => {
  return (
    <div className={styles.container}>

        <h4>{product.title.length > 30 ? `${product.title.substr(0, 30)}...` : product.title}</h4>

        <div className={styles.productImage}>
            <img src={product.image} alt="product pic"/>
        </div>

        <span>{product.category}</span>

        
    </div>

  )
}

export default Product