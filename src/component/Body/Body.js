import React, { useContext, useState } from 'react'
import image from '../Images/ImageHolder'
import { FaMinus, FaPlus, FaShoppingCart } from 'react-icons/fa'
import CartContext from '../../context/CartContext'


const Body = ({ item }) => {


    const [selectedImage, setSelectedImages] = useState(image[3])


    const Globalstate = useContext(CartContext)
    const dispatch = Globalstate.dispatch;

    {
       item.  quantity = 1
    }


    return (

        <div className="container-fluid body-container">
            <div className='container'>
                <div className='image-holder'>
                    <img src={selectedImage} alt="" />
                </div>
                <div className='image-container'>

                    {
                        image.map((img, index) => (
                            <img src={img} alt="" key={index} onClick={() => setSelectedImages(img)} />
                        ))
                    }

                </div>
            </div>

            <div className='body'>
                <p className='company' > {item.name}</p>
                <h3 className='text' > These low - profile sneakers are your perfect casual wears companion.Featuring a durable rubber outer sole, they will withstand everything the weather can offer </h3>

                <h2 className='percent' > ${item.price} <span> {item.percentage}</span></h2>



                <div className='cartFlexer' >


                    <button className='Add-cart' onClick={() => dispatch({type: 'ADD', payload:item})} > <FaShoppingCart /> <span className='span'>Add to Cart</span> </button>

                </div>
            </div>

        </div>


    )
}

Body.defaultProps = {
    text: 'Sneakers Company'
}

export default Body






