
import CartContext from "./CartContext";
import AppReducer from './AppReducer'
import { useReducer } from "react";

const CartState = ({children}) => {



    const [state, dispatch] = useReducer(AppReducer, [])

 

    const info = {state, dispatch}



    return <CartContext.Provider value={info}>{children}</CartContext.Provider>
}

export default CartState