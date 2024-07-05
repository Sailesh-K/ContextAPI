import React,{useContext} from "react";
import { ProductContext } from "./App";


const Products=({product})=>{

    const pro=useContext(ProductContext);

    return(
        <div className="product-card">
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <p>{product.description}</p>
            <p>Rating:{product.rating}⭐</p>
            <button onClick={()=>pro(product)}>Add to Cart</button><br />
        </div>
    );
};

export default Products;