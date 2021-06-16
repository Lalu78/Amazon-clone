import React from 'react'
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{basket,user}, dispatch] = useStateValue();
  return (
      <div className="checkout">
          <div className="checkout_left">
              <img className="checkout_ads" src="https://i1.wp.com/www.whyit.in/wp-content/uploads/2019/03/free-membership-of-amazon-prime-video-whyit.in_.png?fit=1024%2C576&ssl=1" />
              <div >
                  <h3> {user.email}</h3>
                  <h3> {user.Password}</h3>
                  <h2 className="checkout_title"> Shoping Basket</h2>

                  {basket.map(item => (
                      <CheckoutProduct
                          id={item.id}
                          title={item.title}
                          image={item.image}
                          price={item.price}
                          rating={item.rating}
                      />
                  ))}
              </div>

          </div>
          <div className="checkout_right">
              <Subtotal/>
             </div>
             

    
    </div>
  )
}

export default Checkout
