import React, {useContext} from 'react'

import { isInCart ,quantityCount } from '../helperF/functions'

import { CartContext } from '../contexts/CartContextProvider'


const CartButtons = ({ product }) => {

    const {state, dispatch} = useContext(CartContext)


  return (
    <div>
            {
                !isInCart(state, product.id)
                ? 
                <button onClick={() => dispatch({type: "ADD_ITEM", payload: product})}>ADD TO CART</button> :
                <button onClick={() => dispatch({type: "INCREASE", payload: product})}>+</button>

            }
            {
              quantityCount(state,product.id) >= 1 
              &&
              <span>{quantityCount(state,product.id)}</span>
            }
            {
              quantityCount(state, product.id) === 1 
              &&
              <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: product})}>REMOVE</button>
            }
            { 
             quantityCount(state, product.id) > 1
             &&
             <button onClick={() => dispatch({type: "DECREASE", payload: product})}>-</button>  
            }

          </div>
  )
}

export default CartButtons