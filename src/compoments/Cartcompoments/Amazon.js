import React from 'react'
import list from '../data'
import Shopcart from './Shopcart'
import "../Style/Amazon.css"
import { useState } from 'react'

const Amazon = ({handleClick}) => {

  return (
    <section>
       { list.map((item)=>(
        <Shopcart key={item.id} handleClick={handleClick} list={item}  />
        // console.log(item)
       ))}
    </section>
  )
}

export default Amazon