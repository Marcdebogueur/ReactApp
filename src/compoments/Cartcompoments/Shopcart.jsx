import React from 'react'
import "../Style/Shopcart.css"

const Shopcart = ({ list, handleClick }) => {
 
  
    if(list){
    const {title, price, img}=list
   
  return (
    <section>
        <div className='cards'>
            <div className='image_box'>
                <img src={img} alt="" className='imgbottle'/>
            </div>
            <div className="details">
                    <p>{title}</p>
                    <p>{price}</p>
                    <button onClick={()=>handleClick(list)}>add to cart</button>
            </div>
            
        </div>
    </section> 
  )}else{
    return <p>there is no item</p>
  }
}

export default Shopcart