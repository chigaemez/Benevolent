const CartReducer = (state, action) => {
  switch (action.type) {


    
    case "ADD":


      const tempState = state.filter((item) => action.payload.id == item.id)
      if (tempState.length > 0) {

        return state
      } else {
        return [...state, action.payload]


      }


      case 'DECREASE':
      const tempState2 = state.map((item) => {
        if (item.id == action.payload.id) {
          return { ...item, quantity: item.quantity - 1 }
        } else {
          return item
        }
      })

      return tempState2






      case 'INCREASE':
        const tempState3 = state.map((item) => {
          if (item.id == action.payload.id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
  
        return tempState3


        case 'REMOVE':

     
          const tempState4 = state.filter((item) => item.id !== action.payload.id)
    
    
    
          return tempState4



          case 'CLEAR':
         
            const tempState5 = state.filter((item) => item == [])
      
            return tempState5
    







    default:
      return state
  }
}

export default CartReducer
