import React from 'react'
import { Link } from 'react-router-dom'
import {cart} from '../Pages/Cart'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const items = useSelector((state) => state.cart)
    return (
        <div className='Nav1' style={{ fontSize: 25, fontFamily: "initial", margin: 0, padding: 30 }}>
            <span>REDUX</span>
           <div className='Nav2'> 
            <Link className='link1' to="/cart">Cart</Link>
            <span className='itemssc'>Items : {items.length}</span>
            </div>
        </div>

    )
}

export default Navbar