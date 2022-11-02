import React from 'react'
import { Route, Routes } from "react-router-dom";

// Components
import Products from './Products'
import ProductDetails from './ProductDetails'



const Store = () => {

    
  return (
    <>

    <Routes>
    <Route index element={<Products />}/>
    <Route path="/products/:id" element={<ProductDetails />} />
    </Routes>

    </>    
  )
}

export default Store