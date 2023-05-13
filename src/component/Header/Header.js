import React, { useContext } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Product from '../../Service/Dumm'
import CartContext from '../../context/CartContext'


const Header = () => {



  
  const GlobalState  = useContext(CartContext)

  const state = GlobalState.state
  
  
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light header-container">
      <div className="container-fluid">
        <a className="navbar-brand header" href="#">Sneaker</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item" >
             <Link to={'/'} className="nav-link">
                Store
             </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">men</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">women</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">contact</a>
            </li>
          </ul>

        </div>

        <div className='card-shopping'>
        <Link to={'/Carts'}>
            <FaShoppingCart className="icon"  />
          
              <div className="item-count">
                <span>{state.length}</span>
              </div>
           
            </Link>
        </div>
         
      
      </div>
    </nav>


  )
}

export default Header
