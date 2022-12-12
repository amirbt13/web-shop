import React, { useState, useEffect } from 'react'

// icons
import arrowWhite from '../icons/down-arrow-white.svg'

// helper functions
import FilterSearch from './filterComponents/FilterSearch'
import FilterCategory from './filterComponents/FilterCategory'
import FilterPrice from './filterComponents/FilterPrice'


const Filters = ({ products, setProducts }) => {
  
  const [filterShow, setFilterShow] = useState({
    mainSection: false,
    category: false,
    search: false,
    price: false
  })

  const [filterValues, setFilterValues] = useState({
    category: "all",
    search: "",
    price: 0
  })

  


  useEffect(() => {
   setProducts(prevProducts => {
    return prevProducts.map(product => {
      return {
        ...product,
        isShow: true
      }
    })
   })
  }, [])

 


 


  return (
    <div className='basis-1/4 md:basis-1/5 bg-gradient-to-r from-cyan-500 to-indigo-700 text-white transition-all ease-in duration-200 mt-1 rounded-sm sm:rounded-md sm:mx-2 sm:mt-[24px] sm:h-72'>
      
      <div className='text-center py-2 font-semibold flex justify-center' 
      onClick={() => setFilterShow(prevFilterShow => {
        return {
          ...prevFilterShow,
           mainSection: !prevFilterShow.mainSection,
           }
      })}>Filters
        <img className='ml-1 mt-1 w-4' src={arrowWhite} alt='arrow-down' />
      </div>

      <form className={`${filterShow.mainSection ? "flex" : "hidden"} sm:flex flex-col`}>
        
          <FilterSearch filterShow={filterShow} setFilterShow={setFilterShow} filterValues={filterValues} setFilterValues={setFilterValues} setProducts={setProducts}/>

          <FilterCategory filterShow={filterShow} setFilterShow={setFilterShow} filterValues={filterValues} setFilterValues={setFilterValues} setProducts={setProducts}/>

          <FilterPrice filterShow={filterShow} setFilterShow={setFilterShow} filterValues={filterValues} setFilterValues={setFilterValues} setProducts={setProducts} products={products}/>
          
      </form>
    </div>
  )
}

export default Filters
          



  

          