import React from 'react'
import "./Promax.css"
function Promax({img, nomi}) {
  return (
    <div className='promax'>
      <img src={img} alt="" />
      <h3>{nomi}</h3>
    </div>
  )
}

export default Promax