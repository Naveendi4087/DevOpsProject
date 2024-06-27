import React from 'react'
import "../styles/Services.css";

function ServicesItem({image, name, price}) {
  return (
    <div className='servicesItem'>
        <div style={{backgroundImage: `url(${image})`}}>
        </div>
        <h1>{name}</h1>
        <p>Rs {price}</p>
      
    </div>
  )
}

export default ServicesItem
