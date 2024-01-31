import axios from "axios"
import React,{ useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cartslice from "./Cartslice";



export default function Products() {
    const [products,setproducts] =useState()

    const dispatch=useDispatch()



useEffect(()=>{

axios.get("https://fakestoreapi.com/products").then((resp)=>setproducts(resp.data))

},[])


const navigate = useNavigate()





  return (
    <div className="product-main">
      <h1>Our products</h1>
      <div className='Products-container'>
{ 
    products?.map((prod)=>


      <div className="single-product" key={prod?.id}>
      <img src={prod.image}alt={prod?.title}/>
      <p>{prod?.title}</p>
      <p> price: {prod?.price} L.E</p>
      <div >
        <button onClick={()=>dispatch(Cartslice.actions.addcar(prod))
        }className="product-btn">Add to cart</button>
        
        <button onClick={()=>navigate(`${prod.id}`)}className="product-btn">Show more</button>




      </div>
     </div>

    
    
    )}   


   </div>
    </div>
  )
}
