import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Images/josman.jpg';



function Navbar() {
  return (
    <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-light bg-light" >
   <Link className='navbar-brand' to="#" >
   <img class="img-fluid ps-3" src={Logo} alt="" width="120px"/>

   </Link>
   <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
    data-bs-target="#navbarNav" aria-controls="navbarNav"
     aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
   </button>
   <div class="collapse navbar-collapse" id="navbarNav">
     <ul class="navbar-nav ms-auto pe-5">
       <li class="nav-item">
         
         <Link className='nav-link ps-2' to="/" >Home</Link>
       </li>
       <li class="nav-item">
       <Link className='nav-link ps-2' to="/about" >About</Link>
       </li>
       <li class="nav-item">
       <Link className='nav-link ps-2' to="/service" >Services</Link>
       </li>
      
       <li class="nav-item">
       <Link className='nav-link ps-2' to="/events" >Events</Link>
       </li>

       <li class="nav-item">
       <Link className='nav-link ps-2' to="/gallery" >Gallery</Link>
       </li>

       <li class="nav-item">
       <Link className='nav-link ps-2' to="/contact" >Contact</Link>
       </li>
     </ul>
   </div>
   </nav>
 </div>

  )
}

export default Navbar