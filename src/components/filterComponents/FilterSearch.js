import React, {useEffect} from 'react'

import arrow from '../../icons/down-arrow.svg'


const FilterSearch = ({filterShow, filterValues, setFilterShow, setFilterValues, setProducts}) => {

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
        if(filterValues.search !== ""){
    
          setProducts(prevProducts => prevProducts.map(product => {
    
            if(product.title.toLowerCase().includes(filterValues.search)){
              return {
                ...product,
                isShow: true
              }
            } else {
              return {
                ...product,
                isShow: false
              }
            }
          }))
        } else {
          setProducts(prevProducts => prevProducts.map(product => {
            return {...product, isShow: true}
          }))
        }
      }, [filterValues.search])

  return (
    
        <div className='bg-white mb-2 mx-1 py-1 px-2 rounded-lg text-gray-800'>
              <div className='flex justify-between'
              onClick={() => setFilterShow(prevFilterShow => {
                return {
                  ...prevFilterShow,
                  search: !prevFilterShow.search,
                  category: false,
                  price: false
                }
              })}
              >
                <p>Search</p>
                <img className='w-4' src={arrow} alt='arrow-down' />
              </div>
              <div className={`${filterShow.search ? "block" : "hidden"} mt-1`}>
                <input name='search' value={filterValues.search} className='w-full px-2 py-1 my-1 bg-slate-300 rounded-lg' type="text"
                onChange={inputHandler}/>
              </div>
            </div>
    
  )
}

export default FilterSearch