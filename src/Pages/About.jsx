import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';


function About() {
  return (
    <section className='main'> 
    
    <section className='one'>
        <div className="container-fluid text-center pt-5" style={{backgroundImage:`url("assets/photos/fall.jpeg")` , height:"50vh", backgroundRepeat:"no-repeat", backgroundSize:"100%"}}>
             <h6 style={{color:"yellow", fontSize:"30px"}}> Welcome to our website</h6>
             <h1 style={{color:"white", fontSize:"50px"}}>About us</h1>
        </div>
    </section>
    
    <section className='two'>
      <div className="container-fluid pt-3 bg-light">
        <div className="row">
            <div className="col-md-6">
            <img className='img-fluid' src="assets/photos/peck.jpg" alt="imagemn"  style ={{width:"100%", height:"70vh"}} />
            </div>

            <div className="col-md-6 p-3">
                <h4>About Us</h4>
                <h2><span style={{color:"gray"}} ><i>Prince Safaris</i></span> offers the
                Best Safaris/tours in all part in Kenya</h2>
                <p>
                Princes safaris is a privately owned company based in Naivasha Kenya 
                offering the best tours/safaris in Kenya.
                 The CEO is a former Tour leader who has over 10 years
                of experience in Tour guiding in all the East & Southern African
                tour destinations, namely Maasai Mara, Ngorongoro, Serengeti, 
                Bwindi forest, Amboseli, Samburu, Tsavo, Zanzibar, Queen Elizabeth,
                Nakuru and Many other destinations.
                We organize customized safaris, Educational tours,
                family tours, honeymooners, birders, mission tours, photographers and business tours.
                </p>
                <div className='text-center'>
                    <button className='btn btn-secondary'>Read more...</button>
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
                <h4 style={{ fontSize:"30px"}}>Customer Reviews</h4>
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

export default About