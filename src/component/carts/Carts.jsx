import React, { useContext } from 'react'
import CartHolder from './CartHolder'
import './Cart.css'
import { FaTimes } from 'react-icons/fa'
import CartContext from '../../context/CartContext'

const Carts = () => {
  const GlobalState = useContext(CartContext) 
  const state = GlobalState.state
  const dispatch = GlobalState.dispatch

  const total = state.reduce((total, item) =>{
    return total + item.price * item.quantity 
}, 0)

  return (
    <>
      <div className='cart'>
        <div className='cart'>
          <div className='cart-head'>
            <h4 className='cart-header'></h4>
            <FaTimes
              aria-hidden='true'
              style={{ cursor: 'pointer', textAlign: 'right' }}
              className='close-btn'
            />
          </div>
          <hr />
          <ul>{state.map((item, index) => (<CartHolder key={index} item={item} />))}</ul>

          <button>Check Out</button>

          <div className='cart-total'>
            <div style={{ marginLeft: 5, marginTop: 10 }}>
              <p>Cart Total:${ total}</p>
            </div>

            <button className='clearbnt'  onClick={() => dispatch({type:'CLEAR'})}>CLEAR</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Carts
