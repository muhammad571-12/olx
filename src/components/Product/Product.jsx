import React from 'react'
import "./Product.css"
import {maxsulot} from "../../maxsulot"
import Promax from '../Promax/Promax'
function Product() {
  return (
    <div className='product'>
      <h1>Главные категории</h1>
      <div className='map'>
       {maxsulot.map((item,index)=>(
       <Promax key={index} {...item}/>
       ))}
      </div>
    </div>
  )  
}

export default Product