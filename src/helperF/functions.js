export const quantityCount = (state, id) => {
   const index = state.selectedItems.findIndex(item => item.id === id)
   if(index !== -1){
      return state.selectedItems[index].quantity
   } else {
      return false
   }
}

export const isInCart = (state, id) => {
   const resault = !!state.selectedItems.find(item => item.id === id)
   return resault
}