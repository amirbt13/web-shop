import React, { useEffect, useState, createContext } from 'react'

// API 
import { getProducts } from '../services/api'

export const ProductsContext = createContext()

const ProductsContextProvider = (props) => {

    
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setProducts(await getProducts())
        }
        fetchAPI()
      }, [])
        


  return (
    <ProductsContext.Provider value={{products, setProducts}}>
        {props.children}
    </ProductsContext.Provider>
  )
}

export default ProductsContextProvider