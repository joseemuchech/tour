import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { Link } from 'react-router-dom';

function Service() {
  return (
    <section className='main'> 
    
    <section className='one'>
        <div className="container-fluid text-center pt-5 " style={{backgroundImage:`url("assets/photos/touristFour.jpg")` , height:"50vh", backgroundRepeat:"no-repeat", backgroundSize:"100%"}}>
             <h6 style={{color:"yellow", fontSize:"30px"}}> Welcome to our website</h6>
             <h1 style={{color:"white", fontSize:"50px"}}>Our Services</h1>
        </div>
    </section>
    
    <section className='two'>
      <div className="container-fluid pt-3 bg-light">
        <div className="row">
            <div className="col-md-8 p-5">
                <h4>BOOK A RIDE</h4>
                <h2># Landcruiser/Van/Minivan.</h2>
                <p>
                Prince Safaris offers you a variety of car options to hire for either
                 self drive or a driver can be hired for your safari/tour. 
                 The rates depend on the location of the safari the duration the 
                 cost may vary on peak tourist months due to the demand of the 
                 vehicles and drivers
                </p>
                <div className='text-center'>
                    <button className='btn btn-secondary'>Read more...</button>
                </div>
            </div>

            <div className="col-md-4">
            <img className='img-fluid' src="assets/photos/lions.jpg" alt="imager"  style ={{width:"100%", height:"40vh"}} />
            </div>

        </div>
      </div>
    </section>

<section className='three'>
<div className="container-fluid pt-1">
    <div className="row ">
        <div className="col-md-3 p-4"> 
         <img className='img-fluid rounded ' src="assets/photos/touristSix.jpg" alt="imaget"  style ={{width:"100%", height:"30vh"}} />
         <Link to="" style={{textDecoration:"none"}}>
         <h4 className='text-center pt-2'>Hotel Booking</h4>
         </Link>
        </div>
        <div className="col-md-3 p-4">
        <img className='img-fluid rounded ' src="assets/photos/touristFour.jpg" alt="imagey"  style ={{width:"100%", height:"30vh"}} />
        <Link to="" style={{textDecoration:"none"}}>
         <h4 className='text-center pt-2'>Tour Safari Booking</h4>
         </Link>
        </div>
        <div className="col-md-3 p-4">
        <img className='img-fluid rounded ' src="assets/photos/touristTwo.jpeg" alt="imageu"  style ={{width:"100%", height:"30vh"}} />
        <Link to="" style={{textDecoration:"none"}}>
         <h4 className='text-center pt-2'>Vehicle / Driver Booking</h4>
         </Link>
        </div>
        <div className="col-md-3 p-4">
        <img className='img-fluid rounded ' src="assets/photos/touristFive.jpg" alt="imagei"  style ={{width:"100%", height:"30vh"}} />
         <Link to="" style={{textDecoration:"none"}}>
         <h4 className='text-center pt-2'>Other Services</h4>
         </Link>
        </div>

    </div>
</div>
</section>

<section className='four'>
    <div className="container-fluid pt-2">
        <div className="row">
            <div className="col-md-4 text-center">
                <h1 style={{color:"green", fontSize:"80px", fontWeight:"900"}}>4.6</h1>
                <h4 style={{ fontSize:"30px"}}>Tour Package Ratings</h4>
                 < StarIcon style={{color:"red"}}/>
                 < StarIcon style={{color:"red"}}/>
                 < StarIcon style={{color:"red"}}/>
                 < StarIcon style={{color:"red"}}/>
                 < StarIcon style={{color:"red"}}/>

            </div>
            <div className="col-md-4 text-center">
            <h1 style={{color:"green", fontSize:"80px", fontWeight:"900"}}>120+</h1>
                <h4 style={{ fontSize:"30px"}}>Customers Review</h4>
                 < StarIcon style={{color:"red"}}/>
                 < StarIcon style={{color:"red"}}/>
                 < StarIcon style={{color:"red"}}/>
                 < StarIcon style={{color:"red"}}/>
                 < StarHalfIcon style={{color:"red"}}/>
            </div>

            <div className="col-md-4 text-center">
            <h1 style={{color:"green", fontSize:"80px", fontWeight:"900"}}>24/7</h1>
                <h4 style={{ fontSize:"30px"}}>100% Package Availability</h4>
                 < StarIcon style={{color:"red"}}/>
                 < StarIcon style={{color:"red"}}/>
                 < StarIcon style={{color:"red"}}/>
                 < StarIcon style={{color:"red"}}/>
                 < StarIcon style={{color:"red"}}/>
            </div>

            </div>

        </div>
    
</section>

    </section>
  )
}

export default Service