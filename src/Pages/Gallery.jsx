import React from 'react';

function Gallery() {
  return (
    <section className='main'>
        <section className='one'>
        <div className='container-fluid'>
           <div className="row">
            <div className="col-md-12 text-center">
                <h1>Our Gallery</h1>
            </div>
            <div className="row">
               <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                  <img src="assets/photos/elephantDark.jpg" alt="imageh" class="img-fluid" style ={{width:"100%" , height:"40vh"}} />
                  <div className='text-center' style ={{backgroundColor:"gray"}} >
                  <button className='btn fw-bold text-white'>The Elephant</button>
                  </div>
                  </div>
                </div>
               </div>
               <div className="col-md-4">
               <div className="card">
                  <div className="card-body">
                  <img src="assets/photos/leopard.jpg" alt="imageg" class="img-fluid" style ={{width:"100%" , height:"40vh"}} />
                  <div className='text-center' style ={{backgroundColor:"gray"}} >
                  <button className='btn fw-bold text-white'>The Leopard</button>
                  </div>
                  </div>
                </div>
               </div>
               <div className="col-md-4">
               <div className="card">
                  <div className="card-body">
                  <img src="assets/photos/touristFour.jpg" alt="imagef" class="img-fluid" style ={{width:"100%" , height:"40vh"}} />
                  <div className='text-center' style ={{backgroundColor:"gray"}} >
                  <button className='btn fw-bold text-white'>The Site</button>
                  </div>
                  </div>
                </div>
               </div>
               </div>

               <div className="row pt-2">
               <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                  <img src="assets/photos/peck.jpg" alt="images" class="img-fluid" style ={{width:"100% ", height:"40vh"}} />
                  <div className='text-center' style ={{backgroundColor:"gray"}} >
                  <button className='btn fw-bold text-white'>The Peck Bird</button>
                  </div>
                  </div>
                </div>
               </div>
               <div className="col-md-4">
               <div className="card">
                  <div className="card-body">
                  <img src="assets/photos/touristTwo.jpeg" alt="imagez" class="img-fluid" style ={{width:"100%", height:"40vh"}} />
                  <div className='text-center' style ={{backgroundColor:"gray"}} >
                  <button className='btn fw-bold text-white'>The Tourvan</button>
                  </div>
                  </div>
                </div>
               </div>
               <div className="col-md-4">
               <div className="card">
                  <div className="card-body">
                  <img src="assets/photos/zebra.jpg" alt="imagex" class="img-fluid" style ={{width:"100%", height:"40vh"}} />
                  <div className='text-center' style ={{backgroundColor:"gray"}} >
                  <button className='btn fw-bold text-white'>The Zebras</button>
                  </div>
                  </div>
                </div>
               </div>
               </div>

               <div className="row pt-2">
               <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                  <img src="assets/photos/blackWhite.jpg" alt="imagev" class="img-fluid" style ={{width:"100%", height:"40vh"}} />
                  <div className='text-center' style ={{backgroundColor:"gray"}} >
                  <button className='btn fw-bold text-white'>Black and white Duck</button>
                  </div>
                  </div>
                </div>
               </div>
               <div className="col-md-4">
               <div className="card">
                  <div className="card-body">
                  <img src="assets/photos/ostrich.jpeg" alt="imagen" class="img-fluid" style ={{width:"100%", height:"40vh"}} />
                  <div className='text-center' style ={{backgroundColor:"gray"}} >
                  <button className='btn fw-bold text-white'>The Ostrich</button>
                  </div>
                  </div>
                </div>
               </div>
               <div className="col-md-4">
               <div className="card">
                  <div className="card-body">
                  <img src="assets/photos/lions.jpg" alt="imagem" class="img-fluid" style ={{width:"100%", height:"40vh"}} />
                  <div className='text-center' style ={{backgroundColor:"gray"}} >
                  <button className='btn fw-bold text-white'>The Lions</button>
                  </div>
                  </div>
                </div>
               </div>
               </div>
           </div>
         </div>
        </section>
        
    </section>
  )
}

export default Gallery