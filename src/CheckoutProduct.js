//import CheckoutProduct from "./CheckoutProduct";
//import { useState } from "react";
import "./CheckoutProduct.css"
import { useStateValue } from "./StateProvider";


function CheckoutProduct({ id, title, image, price, rating }) {
 
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id:id,
        })
         
        
    }
    return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt="product image" />

      <div className="checkoutProduct_info">
        <p> {title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <strong>*</strong>
            ))}
              </div>
              <button className="btn" onClick={removeFromBasket}>Remove to Basket</button>
      </div>

      
    </div>
  );
}

export default CheckoutProduct;
