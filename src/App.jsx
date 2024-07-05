import React,{createContext, useState} from 'react'
import ProductList from './ProductList';
import Cart from './Cart';


export const ProductContext=createContext();
export const CartContext=createContext();

function App() {
  const [cartItems,setCartItems]=useState([]);
  
  function addToCart(product){
    setCartItems([...cartItems,product]);
  }

  function delFromCart(productToRemove){
    setCartItems(cartItems.filter(item=>item!=productToRemove));
  }

  return (
    <>
      <h1>Shopping Cart</h1>

      <ProductContext.Provider value={addToCart}>
        <ProductList addToCart={addToCart}/>
      </ProductContext.Provider>

      <CartContext.Provider value={delFromCart}>
        <Cart cartItems={cartItems} delFromCart={delFromCart}/>
      </CartContext.Provider>

    </>
  )
}

export default App
