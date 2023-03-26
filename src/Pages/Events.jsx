import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

function Events() {
  return (
    <section className='main'> 
    
    <section className='one'>
        <div className="container-fluid text-center pt-5" style={{backgroundImage:`url("assets/photos/touristTwo.jpeg")` , height:"50vh", backgroundRepeat:"no-repeat", backgroundSize:"100%"}}>
             <h6 style={{color:"yellow", fontSize:"30px"}}> Welcome to our website</h6>
             <h1 style={{color:"white", fontSize:"50px"}}>All Events</h1>
        </div>
    </section>
    
    <section className='two'>
      <div className="container-fluid pt-3 bg-light text-center">
        <div className="row">
         
            <div className="col-md-8 p-3">
                <marquee behavior="" direction=""> <h4>Incoming Events</h4></marquee>
                <div className="card">
                  <div className="card-body">
                  <img className='img-fluid' src="assets/photos/event.jpg" alt="imagek"  style ={{width:"60%", height:"70vh"}} />
                  </div>
                </div>

            </div>

            <div className="col-md-4 p-3">
            <h4>Other Events</h4>
              <div className="card">
              <div className="card-body">
                <h5>Lake Nakuru Tour</h5>
                <img className='img-fluid' src="assets/photos/lake.jpg" alt="imagej"  style ={{width:"100%" , height:"30vh"}} />
                <p><span>Date</span>: 20th May 2023</p>
              </div>
              </div>

              <div className="card ">
              <div className="card-body pt-2">
                <h5>Aberder Ranges Tour</h5>
                <img className='img-fluid' src="assets/photos/tiger.jpg" alt="imageh"  style ={{width:"100%" , height:"30vh"}} />
                <p><span>Date</span>: 1st June 2023</p>
              </div>
              </div>

            </div>

        </div>
      </div>
    </section>

<section className='three'>
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

export default Events