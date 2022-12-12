import React, {useEffect} from 'react'

import arrow from '../../icons/down-arrow.svg'


const FilterCategory = ({filterShow, filterValues, setFilterShow, setFilterValues, setProducts}) => {

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
       
              if(filterValues.category === 'all'){
               
                return prevProducts.map(product => {
                  return {
                    ...product,
                     isShow: true
                    }
                  })
             
              } else {
            
                return prevProducts.map(product => {
               
                if(product.category !== filterValues.category){
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
         }, [filterValues.category])

  return (
        <section className={` bg-white text-gray-800 mb-2 mx-1 rounded-lg py-1 px-2`}>
            <div className='flex justify-between'
            onClick={() => setFilterShow(prevFilterShow => {
              return {
                ...prevFilterShow,
                category: !prevFilterShow.category,
                search: false,
                price: false
              }
            })}>
                <p>Categories </p>
                <img className=' w-4' src={arrow} alt='arrow-down' />
            </div>
            <div className={`${filterShow.category ? "flex" : "hidden"} flex-col`}>
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
            </div>
        </section>
  )
}

export default FilterCategory