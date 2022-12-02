import React from 'react'
import CartButtons from '../smallComponents/CartButtons'

const CartItem = ({ product }) => {

  const totalPrice = product.price * product.quantity
  return (

        <div className='my-2 rounded-md flex justify-between items-center h-40 bg-white w-3/4 mx-auto shadow-md'>
          <div className='my-2'>
            <img className=' w-20 ml-2 mr-4' src={product.image} alt='product' />
          </div>
          <div className='flex justify-evenly w-3/4'>
            <h4 className='mb-2'>{product.title.length > 20 ? `${product.title.substr(0, 17)}...` : product.title}</h4>
            
            <span className='mb-2 font-light text-sm bg-lime-200 rounded-sm px-2'>Price: ${product.price}</span>
            <span> X </span>
            <CartButtons product={product} />
            <span>= ${totalPrice.toFixed(2)}</span>
          </div>
        </div>
  )
}

export default CartItem