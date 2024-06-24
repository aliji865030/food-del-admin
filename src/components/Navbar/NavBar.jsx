import React from 'react'
import "./NavBar.css"
import {assets} from "../../assets/assets"

const NavBar = () => {
  return (
    <div className='navbar'>
        <span className="logo">
        <h1>Taste Trekker.</h1>
        <p>Admin Panel</p>
        </span>
        <span>
        <img className='profile' src={assets.profile_image} alt="" />
        </span>
      
    </div>
  )
}

export default NavBar
