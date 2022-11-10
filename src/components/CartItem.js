import React from 'react'
import CartButtons from '../smallComponents/CartButtons'

const CartItem = ({ product }) => {
  return (

        <div>
          <div>
            <img className='w-10' src={product.image} alt='product' />
          </div>
          <div>
            <h4>{product.title}</h4>
            <span>Price: ${product.price}</span>
            <span> * {product.quantity}</span>
            <span>= ${product.price * product.quantity}</span>
          </div>
          <div>
            <CartButtons product={product}/>
          </div>
        </div>
  )
}

export default CartItem