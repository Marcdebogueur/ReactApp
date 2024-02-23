import React, { useState } from 'react'
import Navbar from './Cartcompoments/Navbar'
import Amazon from './Cartcompoments/Amazon'
import Shopcart from './Cartcompoments/Shopcart'

const Cartform = () => {
    const [show, setShow]=useState(true)
    const [cart, setCart]=useState([])

    const handleClick=(item)=>{
      // console.log(item)
      if(!cart.includes(item)){
        cart.push(item)
        console.log(cart)
      }else
      console.log(cart)
     
    }
  return (
    <div>
        <Navbar setShow={setShow}/>
        {/* <Amazon/> */}
        {show ? <Amazon handleClick={handleClick}/> : "cart"}
        <Shopcart/>
    </div>
  )
}

export default Cartform