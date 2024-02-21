import React from 'react'
import Navbar from './Cartcompoments/Navbar'
import Amazon from './Cartcompoments/Amazon'
import Shopcart from './Cartcompoments/Shopcart'

const Cartform = () => {
  return (
    <div>
        <Navbar/>
        <Amazon/>
        {/* <Shopcart/> */}
    </div>
  )
}

export default Cartform