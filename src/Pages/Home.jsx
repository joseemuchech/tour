import { } from '@mui/system';
import React from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';



function Home() {
  return (
    <section className='main'>
      <section className='one'>
    <div className="container-fluid">
          <div class="row">
            <div class="col-md-12">
    {/* <!-- Carousel --> */}
    <div id="demo" class="carousel slide" data-bs-ride="carousel">

      {/* <!-- Indicators/dots --> */}
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        
      </div>
      
      {/* <!-- The slideshow/carousel --> */}
      <div class="carousel-inner">
     
        <div class="carousel-item active">
        
          <img src="assets/slideshow/lions.jpg" alt="imageq" class="d-block" style ={{width:"100%", height:"520px"}} />
          <div class="carousel-caption">
          
            <marquee behavior="" direction="up" height="300px"> <h3 className='pb-5'  style ={{color:"yellow", fontSize:"50px" , fontWeight:"700"}}>
              Welcome to Prince Safaris</h3></marquee>
            <p className='pb-5' style ={{color:"white", fontSize:"30px" , fontWeight:"500"}}>
              Your top tour guide</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="assets/slideshow/zebra.jpg" alt="imagew" class="d-block" style={{width:"100%" , height:"520px"}}  />
          <div class="carousel-caption">
            <h3> wild hike</h3> 
            <p>Our Adventure!</p>
          </div> 
        </div>
        <div class="carousel-item">
          <img src="assets/slideshow/tiger.jpg" alt="imagee" class="d-block" style={{width:"100%" , height:"520px"}}/>
          <div class="carousel-caption">
            <h3>Wild hike</h3>
            <p>Our Adventure!!</p>
          </div>  
        </div>
      </div>
      
      {/* <!-- Left and right controls/icons --> */}
      <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>
    
    
            </div>
          </div>
        </div>
        </section>

        <section className='two'>
          <div className="container-fluid">
            <div className="row">
            <div className="col-md-12 text-center justify-content-center pt-2">
              <h1>Classic Package</h1>
              <h3> <i>Kenya Best view</i></h3>
              <hr className='fw-bold' />
            </div>
            <div className="row">
               <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                  <img src="assets/photos/leopard.jpg" alt="image1" class="d-block" style ={{width:"100%"}} />
                  <div className='text-center' style ={{backgroundColor:"gray"}} >
                  <button className='btn fw-bold text-white'>POST REVIEWS ON HOT DEALS</button>
                  </div>
                  <h5 className='pt-2 text-center'><i>5 DAY THE BIG FIVE EXPERIENCE</i></h5> 
                  <div className='text-center'>
                    <button className='btn btn-secondary'>See more...</button>
                  </div>
                  </div>
                </div>
               </div>
               <div className="col-md-4">
               <div className="card">
                  <div className="card-body">
                  <img src="assets/photos/touristFour.jpg" alt="image2" class="d-block" style ={{width:"100%"}} />
                  <div className='text-center' style ={{backgroundColor:"gray"}} >
                  <button className='btn fw-bold text-white'>POST REVIEWS ON HOT DEALS</button>
                  </div>
                  <h5 className='pt-2 text-center'><i>HONEYMOONER AT AMBOSELI</i></h5>
                  <div className='text-center'>
                    <button className='btn btn-secondary'>See more...</button>
                  </div>
                  </div>
                </div>
               </div>
               <div className="col-md-4">
               <div className="card">
                  <div className="card-body">
                  <img src="assets/photos/lakeOne.jpeg" alt="image3" class="d-block" style ={{width:"100%"}} />
                  <div className='text-center' style ={{backgroundColor:"gray"}} >
                  <button className='btn fw-bold text-white'>POST REVIEWS ON HOT DEALS</button>
                  </div>
                  <h5 className='pt-2 text-center'><i>3 DAY THE MOUNTAIN HIKE</i></h5>
                  <div className='text-center'>
                    <button className='btn btn-secondary'>See more...</button>
                  </div>
                  </div>
                </div>
               </div>
               </div>
    
            </div>
          </div>
        </section>

        <section className='three'>
           <div className='container-fluid pt-2'>
            <hr />
              <div className="row">
                <div className="col-md-4 p-3">
                <h4>Why People</h4>
                <h2>LOVE OUR TOUR PACKAGES</h2>
                <p>
                We work hard to give all our clients the very best tour expeirence
                 in our nature parks, local tours for both cultural and wildlife
                  tours as we strive to create a memorable safari in Kenya. 
                
                </p>
                <div className='text-center'>
                    <button className='btn btn-secondary'>Read more...</button>
                </div>
                </div>
                <div className="col-md-4 text-center p-3">
                  <div className=' pt-2 text-center' >
                    < CalendarMonthIcon />
                    <h4>Schedule <i className='fw-bold'>Tour Flexibility</i></h4> 
                    <p>All our tour trips are tailor made</p>
                  </div>
                  <div className=' pt-2 text-center' >
                  < Diversity3Icon />
                    <h4>KTB <i className='fw-bold'>Certified Members</i></h4> 
                    <p>Kenya Certified Tour Guides</p>
                  </div>
                  <div className=' pt-2 text-center' >
                  < AccountBalanceIcon />
                    <h4>Flexible <i className='fw-bold'>Payment Options</i></h4> 
                    <p>Accept all methods of payments</p>
                  </div>
                </div>
                <div className="col-md-4 p-3">
                <img src="assets/photos/touristSix.jpg" alt="image4" class="d-block" style ={{width:"100%"}} />
                </div>

              </div>
           </div>
        </section>

        <section className='four'>
          <div className='container-fluid'>
            <div className="row">
              <div className="col-md-2 "></div>
              <div className="col-md-8 pt-3 d-flex justify-content-between">
                <div className='p-2'>
                  <img src="assets/photos/visa.jpeg" alt="imagea" class="img-fluid" style={{width:"100%" , height:"100px"}}  />
                  </div>
                <div className='p-2'>
                <img src="assets/photos/mpesa.png" alt="imageb" class="img-fluid" style={{width:"100%" , height:"100px"}}  />
                </div>
                <div className='p-2'>
                <img src="assets/photos/master.png" alt="imagec" class="img-fluid" style={{width:"100%" , height:"100px"}}  />
                </div>
                <div className='p-2'> 
                  <img src="assets/photos/transferBank.png" alt="imaged" class="img-fluid" style={{width:"100%" , height:"100px"}}  />
                </div>
              </div>
              <div className="col-md-2"></div>
              
              
            </div>
          </div>
        </section>
    </section>

  )
}

export default Home