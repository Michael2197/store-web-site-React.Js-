import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


export const Singlepg = () => {

    const [products,Setproducts] =useState()

    const params = useParams()
    const pid = params.id
     console.log(products)


    useEffect(()=>{

    axios.get(`https://fakestoreapi.com/products/${pid}`).then((resp)=>Setproducts(resp.data))
        
    },[])
  return (



    <div className="Con">
    <div className="singlepg">

   
      <img className="Simg" src={products?.image}alt={products?.title}/>
      </div>

      <br/>
      <div className='det'>
      <h1> {products?.brand} </h1>
      <br/>
      <h2>{products?. category}</h2>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      <p> {products?.description} </p>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      <br/>

      {/* <p> rate: {products?.rating} </p> */}
      <p> price: {products?.price} L.E</p>

      </div>



      


 <button className="tn"><Link to={'/'}>back</Link></button>

 </div>


  )
}


