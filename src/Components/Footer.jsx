import React from 'react';
import Logo from '../Images/josman.jpg';
import PhoneInTalkTwoToneIcon from '@mui/icons-material/PhoneInTalkTwoTone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return ( 
    <div class="container-fluid mt-3 bg-light">
    <div class="row pt-2">
      <div className="col-md-4 pb-2">
          <div className="card">
            <img className="img-fluid mx-auto d-block pt-2" src={Logo} alt="" width="100px" />
            <div className="card-body">
              <h6 className='text-center'>Kenya top tour guide partner</h6>
              <div className='text-center'>
                 <a class="pe-2" href="#" style={{textDecoration:"none"}}> < FacebookIcon/> </a>
                 <a class="pe-2" href="#" style={{textDecoration:"none"}}> <TwitterIcon/> </a>
                 <a class="pe-2" href="#" style={{textDecoration:"none"}}> <InstagramIcon/> </a>
                 <a class="" href="#" style={{textDecoration:"none"}}> <MailOutlineIcon/> </a>
             </div>
            </div>

          </div>
      </div>
      <div className="col-md-4 text-center pb-2">
        <div className="card">
          <div className="card-body">
          <a class="" href="/about" style={{textDecoration:"none"}}>About</a> <br/>
           <a class="" href="/service" style={{textDecoration:"none"}}>Services</a>  <br/>
           <a class="" href="/events" style={{textDecoration:"none"}}>Events</a>  <br/>
           <a class="" href="/gallery" style={{textDecoration:"none"}}>Gallery</a>  <br/>
           <a class="" href="/contact" style={{textDecoration:"none"}}>Contact</a> <br/>
           <a class="" href="#" style={{textDecoration:"none"}}>Terms & Condition</a>
          </div>
        </div>
           </div>
      
      <div className="col-md-4 pb-2">
          <div className="card">
            <div className="card-body ps-5">
              <h4>Nakuru County <br/>
                   Naivasha.
              </h4>
              <div className="pt-3" >
              <a class="" style={{textDecoration:"none"}} href="tel:+(254) 785746351"><PhoneInTalkTwoToneIcon /> +(254) 785746351</a><br/>
            
               <a class="" style={{textDecoration:"none"}} href="mailto:josman@gmail.com"><MailOutlineIcon /> josman@gmail.com</a>
              </div>
              
            </div>
          </div>

      </div>
      
      <hr/>
        <div class="col-md-12 text-center pt-2" >
           <h6>Copyright @copy 2023 <i className='text-warning h4'>Prince Safaris</i> - All rights reserved</h6>
           
        </div>
     </div>
</div>
   
  )
}

export default Footer