import React from "react";
import CartItems from "./CartItems";

const Cart=({cartItems})=>{
    return(
        <div className="container"> 
            <h2>Cart</h2>
            <div className="cart">
                {
                    cartItems.map((item,index)=>(
                        <>
                        <CartItems key={index} item={item}/>
                        </>
                    ))
                }
            </div>
        </div>
    );
};

export default Cart;