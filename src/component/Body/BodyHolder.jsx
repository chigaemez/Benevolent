import React from 'react'
import Body from './Body'

const BodyHolder = () => {




    const Product = [
        {
          photo: '../img/image-product-1.jpg',
          name: "Fall Limited Edition Sneakers",
          initialPrice: '$225.00',
          price: 125.28,
          percentage: '50%'
        },
      
      
      ];



  return (
    <div>
      {
        Product.map((item) => <Body kay={Product.id} item={item}/>)
      }
    </div>
  )
}

export default BodyHolder
