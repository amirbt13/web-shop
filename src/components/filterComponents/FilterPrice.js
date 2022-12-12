import React, {useEffect} from 'react'

import { min, max } from '../../helperF/functions'


import arrow from '../../icons/down-arrow.svg'


const FilterPrice = ({products, filterShow, filterValues, setFilterShow, setFilterValues, setProducts}) => {

    const inputHandler = (event) => {

        const {name, value} = event.target
    
           setFilterValues(prevValues => {
            return {
              ...prevValues,
              [name]: value
            }
          })
      }

    useEffect(() => {

        setProducts(prevProducts => {
          return prevProducts.map(product => {
            if(product.price > filterValues.price){
              return {
                ...product,
                isShow: false
              }
            } else {
              return {
                ...product,
                isShow: true
              }
            }
          })
        })
      
    }, [filterValues.price])

  return (
    <section className='bg-white text-gray-800 mb-2 mx-1 rounded-lg py-1 px-2'>
            <div className='flex justify-between'
            onClick={() => setFilterShow(prevFilterShow => {
              return {
                ...prevFilterShow,
                price: !prevFilterShow.price,
                category: false,
                search: false
              }
            })}
            >
              <p>Price<span className={`${filterShow.price? "inline" : "hidden"}`}> : ${filterValues.price}</span></p>
              <img className='w-4' src={arrow} alt='arrow-down' />
            </div>
            <div className={`my-2 ${filterShow.price ? "flex" : "hidden"}`}>
              <label>${min(products)}</label>
              <input name='price' value={filterValues.price} className='w-full mx-1' type="range" min={min(products)} max={max(products)}
              onChange={inputHandler}
              />
              <label>${max(products)}</label>
            </div>
    </section>
  )
}

export default FilterPrice