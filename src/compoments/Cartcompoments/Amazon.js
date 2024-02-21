import React from 'react'
import list from '../data'
import Shopcart from './Shopcart'
import "../Style/Amazon.css"

const Amazon = () => {
    
  return (
    <section>
       { list.map((item)=>(
        <Shopcart key={item.id} list={item}/>
        // console.log(item)
       ))}
    </section>
  )
}

export default Amazon