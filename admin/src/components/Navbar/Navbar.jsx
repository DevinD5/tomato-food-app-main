import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'


const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='la_foodie_admin_panel' src={assets.la_foodie_admin_panel} alt="Logo"/>
      <img className='profile_image' src={assets.profile_image} alt="" />
    </div>
  )
}
<img src="/src/assets/la_foodie_admin_panel.png" alt="Direct Test" style={{ width: '200px' }} />



export default Navbar
