import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "../Style/navbar.css"

const Navbar = ({setShow}) => {
  return (
    <nav>
        <div className="nav_box">
            <span className="my_shop" onClick={()=> setShow(true)}>
                My shop
            </span>
            <div className="cart" onClick={()=>setShow(false)}>
                <span>
                    <ShoppingCartIcon/>    
                </span>
                <span>
                    0
                 </span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar