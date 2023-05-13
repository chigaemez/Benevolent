import React, { useContext } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
import './CartHolder.css'
import CartContext from '../../context/CartContext'

const CartHolder = ({ item }) => {



  const Globalstate = useContext(CartContext)
  const dispatch = Globalstate.dispatch;




  return (
    <div className='item-holder'>
      <img src={item.photo} alt='' />
      <h1>{item.name} </h1>
      <div className='increase'>
        <button onClick={() => dispatch({type:'INCREASE', payload:item}) }>
          <FaPlus />
        </button>


        <p className='quantity'>{item.quantity}</p>{' '}


        <button onClick={() => item.quantity > 1 ? dispatch({type:'DECREASE', payload:item}) : dispatch({type:'REMOVE', payload: item})}>
          <FaMinus />
        </button>


      </div>
      <p className='price'>${item.price}</p>
      <span className='amount'></span>
      <p className='subtotal'>${ item.quantity * item.price}</p>


      <h1 className='clear'  onClick={() => dispatch({type:'REMOVE', payload: item})}>x</h1>
    </div>
  )
}

export default CartHolder
