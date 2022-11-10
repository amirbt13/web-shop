import React, { useContext } from 'react'

import { CartContext } from '../contexts/CartContextProvider'

import CartItem from './CartItem'

const Cart = () => {

    const {state, dispatch} = useContext(CartContext)

  return (
    <div>
        <div>
            {state.selectedItems.map(item => <CartItem key={item.id} product={item} dispatch={dispatch}/>)}
        </div>
        <div>
          <h4>Total Count:</h4>
          <span></span>
          <h4>Total Price:</h4>
          <span></span>
          <div>
            <button>CLEAR CART</button>
            <button>CHECK OUT</button>
          </div>
        </div>
    </div>
  )
}

export default Cart