import React from 'react'
import "./Qidiruv.css"
import {FaSearch} from "react-icons/fa"
import {HiOutlineLocationMarker} from "react-icons/hi"
export default function Qidiruv() {
  return (
    <div className='qidiruv'>
       <div className='box'>
      <FaSearch className='icon'/>
       <input  type="text" placeholder='Обнавление рядом'/>
       </div>
       <div className='box'>
         <HiOutlineLocationMarker className='icon'/>
         <input type="text" placeholder='Вес Узбекистон' />
       </div>
        <button>Поиск <FaSearch className='icon'/></button>
    </div>
  )
}
