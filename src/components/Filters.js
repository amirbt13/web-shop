import React, { useState } from 'react'

import arrow from '../icons/down-arrow.svg'
import arrowWhite from '../icons/down-arrow-white.svg'

const Filters = ({ setProducts }) => {
  
  const [filterShow, setFilterShow] = useState({
    mainSection: false,
    category: false
  })


  const inputHandler = (event) => {
    
    setProducts(prevProducts => {

      if(event.target.value === 'all'){
        
        return prevProducts.map(product => {
          return {
            ...product,
             isShow: true
            }
          })
      
      } else {
     
        return prevProducts.map(product => {
        
        if(product.category !== event.target.value){
          return {
            ...product,
            isShow: false
          }
        } else {
          return {...product, isShow: true}
        }
      })
    }
    })

  }




  return (
    <div className='basis-1/4 md:basis-1/5 bg-gradient-to-r from-cyan-500 to-indigo-700 text-white transition-all ease-in duration-200 mt-1 rounded-sm sm:rounded-md sm:mx-2 sm:mt-[24px] sm:h-72'>
      
      <div className='text-center py-2 font-semibold flex justify-center' 
      onClick={() => setFilterShow(prevFilterShow => {
        return {
          ...prevFilterShow,
           mainSection: !prevFilterShow.mainSection}
      })}>Filters
        <img className='ml-1 mt-1 w-4' src={arrowWhite} alt='arrow-down' />
      </div>
      
      <form className={`${filterShow.mainSection ? "block" : "hidden"} sm:block bg-white text-gray-800 mb-2 mx-1 rounded-lg py-1 px-2`}>
        <div className='flex justify-between'
        onClick={() => setFilterShow(prevFilterShow => {
          return {
            ...prevFilterShow,
            category: !prevFilterShow.category
          }
        })}
        >
            <p>Categories </p>
            <img className=' w-4' src={arrow} alt='arrow-down' />
        </div>
        <section className={`${filterShow.category ? "flex" : "hidden"} flex-col`}>
         <div className='text-right'>
         <div> 
          <label className='mr-2'>All</label>
          <input onClick={inputHandler} type="radio" name='category' defaultChecked='true' value="all"/>
         </div>
         <div>
          <label className='mr-2'>men's clothing</label>
          <input onClick={inputHandler} type="radio" name='category' value="men's clothing"/>
         </div>
         <div>
          <label className='mr-2'>jewelery</label>
          <input onClick={inputHandler} type="radio" name='category' value="jewelery"/>
         </div>
         <div>
          <label className='mr-2'>electronics</label>
          <input onClick={inputHandler} type="radio" name='category' value="electronics"/>
         </div>
         <div>
          <label className='mr-2'>women's clothing</label>
          <input onClick={inputHandler} type="radio" name='category' value="women's clothing"/>
         </div>
         </div>
        </section>
      </form>
    </div>
  )
}

export default Filters