import React, { useReducer, createContext } from 'react'

let initialState = {
    selectedItems : [],
    isChekedOut : false,
    itemsCounter: 0,
    totalPrice: 0
}

const cartReducer = (state, action) => {
    console.log(state)
    switch (action.type) {

        case "ADD_ITEM":
            if(!state.selectedItems.find(item => item.id === action.payload.id)){
                return state.selectedItems.push(
                    {
                        ...action.payload,
                         quantity: 1
                    }
                )
            }
            return {
                ...state,
                selectedItems: [...state.selectedItems]
            }

        case "REMOVE_ITEM":
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id)
            return {
                ...state,
                selectedItems: [...newSelectedItems]
            }    

        case "INCREASE":
         const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id)
         state.selectedItems[indexI].quantity++;
         return {...state}

        case "DECREASE":
         const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id)
         state.selectedItems[indexD].quantity--;
         return {...state}
         
         case "CHECKOUT":
           return {
                ...initialState,
                isChekedOut: true
           }
         case "CLEAR":
            return {...initialState}
            
            default: return state
    }
}

export const CartContext = createContext()

const CartContextProvider = (props) => {

    const [state, dispatch] = useReducer(cartReducer, initialState)

  return (
    <CartContext.Provider value={{state, dispatch}}>
       {props.children}
    </CartContext.Provider>
  )
}

export default CartContextProvider