import React from 'react'
import Thankyou_icon from '../Components/Assets/Thankyou1.png'
import './CSS/Checkout.css'

const Checkout = () => {
  return (
    <>
    <div className="checkout-new">
        <h1>Your Order has been Placed Sucessfully</h1>
        
    </div>
    <div className="checkout">
        <h1>Thank you </h1>
        <div className="checkout-img"><img src={Thankyou_icon} alt="" /></div>
    </div>
    </>
  )
}

export default Checkout