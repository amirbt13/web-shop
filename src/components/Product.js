import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

// helper
import { isInCart ,quantityCount } from '../helperF/functions'

// Context
import { CartContext } from '../contexts/CartContextProvider'


const Product = ({ product }) => {

  const {state, dispatch} = useContext(CartContext)

  return (
    <div className='container flex flex-col  items-center w-[10rem] xs:w-[13rem] mx-auto border-[1px] border-solid border-silver rounded-md shadow-lg justify-between' 
    onMouseDown={(e) => e.target.classList.add("shadow-inner")} 
    onMouseUp={(e) => e.target.classList.remove("shadow-inner")}
    >
      <Link to={`/store/products/${product.id}`} >

        <h4 className='text-center my-4 px-2'>
          {product.title.length > 30 ? `${product.title.substr(0, 37)}...` : product.title}
        </h4>

        <div className='w-[8rem] min-h-[8rem] mb-2 mx-auto'>
            <img className=' h-[9rem] rounded-md mx-auto' src={product.image} alt="product pic"/>
        </div>

      </Link>

        <div className='flex flex-col items-center'>

          <span className='mb-2 font-light text-sm bg-lime-200 rounded-sm px-1'>${product.price}
          </span>
          <div>
            {
                !isInCart(state, product.id)
                ? 
                <button onClick={() => dispatch({type: "ADD_ITEM", payload: product})}>ADD TO CART</button> :
                <button onClick={() => dispatch({type: "INCREASE", payload: product})}>+</button>

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
        </div>
        
    </div>

  )
}

export default Product