import { useDispatch, useSelector } from "react-redux";

import { addItem, removeItem } from "./CartSlice";

function App(){
    const quantity = useSelector((state)=> state.cart.quantity)

    console.log("cart Quantity:", quantity)

    const dispatch = useDispatch()
    return(
        <div>
            <h3>Flipkart</h3>

            <h3>Product : Iphone</h3>
            <p>Itemsin cart :{quantity}</p>

            <button onClick={()=> dispatch(addItem())}> Add Product</button>
           <button onClick={()=> dispatch(removeItem())}> Remove Product</button>
           
        </div>
    )
}


export default App