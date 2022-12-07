import React from 'react'

const Filters = ({ setProducts }) => {
  


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
    <div className='basis-1/4 bg-red-200'>
      <form>
        <p>Categories: </p>
        <section>
          <label>All</label>
          <input onClick={inputHandler} type="radio" name='category' value="all"/>
          <label>men's clothing</label>
          <input onClick={inputHandler} type="radio" name='category' value="men's clothing"/>
          <label>jewelery</label>
          <input onClick={inputHandler} type="radio" name='category' value="jewelery"/>
          <label>electronics</label>
          <input onClick={inputHandler} type="radio" name='category' value="electronics"/>
          <label>women's clothing</label>
          <input onClick={inputHandler} type="radio" name='category' value="women's clothing"/>
        </section>
      </form>
    </div>
  )
}

export default Filters