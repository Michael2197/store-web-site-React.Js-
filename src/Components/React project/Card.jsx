import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Products from './Products'
import Cartslice from './Cartslice'

export const Card = () => {

    const productdata = useSelector((state)=>state?.cart?.items)

    const arr=productdata.filter((value,index,self) =>
    index ===self.findIndex((t)=>(
      t.id === value.id

    )))



    const dispatch = useDispatch()
  return (
    <div>
      {
        arr?.map((r)=>(

          <div className="single-product" key={r.id}>
          <img src={r.image}alt={r?.title}/>
          <h3>{r?.title}</h3>
          <p> price: {r?.price} L.E</p>
          <div >
            
            {/* <button onClick={()=>dispatch(Cartslice.actions.)
            }className="product-btn">Remove</button> */}
    
    
    
    
          </div>
         </div>

        ))
        
        
        
        
        
      }
    </div>
  )
}

export default Card
