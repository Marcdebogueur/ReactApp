import React, { useState } from 'react'
import Navbar from './Cartcompoments/Navbar'
import Amazon from './Cartcompoments/Amazon'
// import Shopcart from './Cartcompoments/Shopcart'
import Cart from './Cartcompoments/Cart'
import './Cartform.css'
import { TenMp } from '@mui/icons-material'

const Cartform = () => {
    const [show, setShow]=useState(true)
    const [cart, setCart]=useState([])
    const [warning, setWarning]=useState(false)

    const handleClick=(item)=>{
      let ispresent= false
    cart.forEach((product)=>{
      if(item.id === product.id) ispresent=true
    });
    if(ispresent){
      setWarning(true);
      setTimeout(()=>{
        setWarning(false)
      }, 2000)
      return
    }
    setCart([...cart, item])
    };
    const handleChange = (item, d)=>{
      let ind =-1
      cart.forEach((data, index)=>{
        if(data.id === item.id) ind =index
      })
      const tempArr= cart
    tempArr[ind].amount +=d
      if(tempArr[ind].amount === 0) tempArr[ind].amount=1
      setCart([...tempArr]);
      console.log(tempArr)
    };


  return (
    <div>
        <Navbar setShow={setShow} size={cart.length}/>
        <h1 className='heading_content'>
              Meet the internet's favourite skincare
        </h1>
        {/* <Amazon/> */}
        {show ? (<Amazon handleClick={handleClick}/> )
        :( <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
        )}{warning && (
          <div className='warning'>Item is laready added to your cart</div>
        )}
        
    </div>
  )
}

export default Cartform