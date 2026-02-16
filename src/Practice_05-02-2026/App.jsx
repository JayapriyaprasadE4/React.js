import { useSelector } from "react-redux";

import React from 'react'
import Product from "./components/Product";

function App() {

    let cartValue = useSelector((state)=> state.cart.cartCount)
  return (
    <div>
        <h2>Cart Items : {cartValue}</h2>
        <Product/>
    </div>
  )
}

export default App