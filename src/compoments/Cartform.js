import React, { useState } from 'react'
import Navbar from './Cartcompoments/Navbar'
import Amazon from './Cartcompoments/Amazon'
import Shopcart from './Cartcompoments/Shopcart'
import Cart from './Cartcompoments/Cart'

const Cartform = () => {
    const [show, setShow]=useState(true)
    const [cart, setCart]=useState([])

    const handleClick=(item)=>{
      // console.log(item)
    //   if(!cart.includes(item)){
    //     cart.push(item)
    //     console.log(cart)
    //   }else
    //   console.log(cart)
    if(cart.indexOf(item)!==-1) return;
    setCart([...cart, item])  
    };
    const handleChange = (item, d)=>{
        const ind =cart.indexOf(item);
        const arr =cart
         console.log(ind, arr)
        arr[ind].amount =+d;

        if(arr[ind].amount === 0){
            arr[ind].amount =1
        }else{
            setCart([...arr]);
        }
    };


  return (
    <div>
        <Navbar setShow={setShow} size={cart.length}/>
        {/* <Amazon/> */}
        {show ? (<Amazon handleClick={handleClick}/> )
        :( <Cart cart={cart} setCart={setCart} handleChange={handleChange} />)}
        
    </div>
  )
}

export default Cartform