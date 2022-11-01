import React from 'react'


const Product = ({ product }) => {
  return (
    <div className=''>

        <h4>{product.title.length > 30 ? `${product.title.substr(0, 30)}...` : product.title}</h4>

        <div className=''>
            <img src={product.image} alt="product pic"/>
        </div>

        <span>{product.category}</span>

        
    </div>

  )
}

export default Product