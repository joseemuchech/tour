import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Contact() {
  return (
    <section className='main'>
    <section className='one'>
    <div className='container-fluid pt-2 d-light'>
       <div className="row">
        <div className="col-md-4 text-center">
            <h1>Contact Us</h1>
        </div>
        <div className="col-md-8 text-end">
        <h5 className='pe-5 pt-3'>Home/Contact</h5>
        </div>
         <div className="row">
            <div className="col-md-4 px-2">
            <img src="assets/photos/touristFive.jpg" alt="imageo" class="img-fluid" style ={{width:"100%", height:"450px"}} />
            </div>
            <div className="col-md-4">
               <div className="card">
              
                <div className="card body text-center shadow">
                  <div>
                    <h5>Address</h5>
                    <p><i>Buffallo Mall,Naivasha</i></p>
                  </div>
                  <div>
                    <h5>Telephone</h5>
                    <p><i>+254712828282</i></p>
                  </div>
                  <div>
                    <h5>Email</h5>
                    <p><i>princesafaris@gmail.com</i></p>
                  </div>
                  <div>
                    <h5>Social Media</h5>
                    <p>
                    <Link class="pe-2" to="#" style={{textDecoration:"none"}}> < FacebookIcon/> </Link>
                 <Link class="pe-2" to="#" style={{textDecoration:"none"}}> <TwitterIcon/> </Link>
                 <Link class="pe-2" to="#" style={{textDecoration:"none"}}> <InstagramIcon/> </Link>
                    </p>
                  </div>
                </div>
                <img src="assets/photos/zebra.jpg" alt="imagep" class="img-fluid" style ={{width:"100%", height:"25vh"}} />
               </div>

            </div>
            <div className="col-md-4 px-2">
            <img src="assets/photos/touristThree.jpg" alt="imagel" class="img-fluid" style ={{width:"100%", height:"450px"}} />
            </div>

         </div>
       </div>
     </div>
    </section>
    
</section>
  )
}

export default Contact