import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { CartContext } from '../contexts/CartContextProvider'

import CartItem from './CartItem'

const Cart = () => {

    const {state, dispatch} = useContext(CartContext)



  return (
    <div className='flex flex-col-reverse md:flex-row min-h-[100vh] bg-slate-100'>
        <div className='basis-3/4 '>
            {state.selectedItems.map(item => <CartItem key={item.id} product={item} dispatch={dispatch}/>)}
        </div>
        <div className='basis-1/4'>
          
            {
              state.isChekedOut 
              &&
              <div className='bg-white w-5/6 mx-auto my-2 p-3 h-64 rounded-md shadow-md flex flex-col justify-evenly'>
                <h4 className='text-lg text-center'>Thank You For Your Purchse</h4>
                <button className='px-2 bg-blue-700 text-white font-medium rounded-lg'><Link to='../store'>BUY MORE</Link></button>
              </div>
            }
            {
              !state.isChekedOut
              &&
              <div className='flex flex-col justify-evenly bg-white w-5/6 mx-auto my-2 p-3 h-64 rounded-md shadow-md'>
                <div>
                  <div>
                    <h4 className=' text-lg font-bold text-blue-700 ml-2 inline-block'>Total Count: </h4>
                    <span className='text-lg ml-2'>${state.itemsCount}</span>
                  </div>
                  <div>
                    <h4 className=' text-lg font-bold text-blue-700 ml-2 inline-block'>Total Price: </h4>
                    <span className='text-lg ml-2'>${state.totalPrice}</span>
                  </div>
                </div>  
                  <div className='ml-2 flex justify-between xl:flex-row flex-col-reverse'>
                    <button className=' bg-slate-100 py-[1px] px-1 rounded-md' onClick={() => dispatch({type: "CLEAR"})}>CLEAR CART</button>
                    <button className='bg-blue-700 text-white px-2 rounded-md shadow-sm mb-2 xl:mb-0' onClick={() => dispatch({type: "CHECKOUT"})}>CHECK OUT</button>
                  </div>
              </div>
            }

          </div>
    </div>
  )
}

export default Cart