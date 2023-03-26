import React from 'react'

function demo() {
  return (
    <section className='main'>

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
          <img src="assets/slideshow/image-000.jpg" alt="image" class="d-block" style ="width:100%" />
          <div class="carousel-caption">
            <h3>Study hard</h3>
            <p>Education is the key!</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="assets/slideshow/image-011.jpg" alt="image" class="d-block" style="width:100%"  />
          <div class="carousel-caption">
            <h3>Study hard</h3>
            <p>Education is the key!</p>
          </div> 
        </div>
        <div class="carousel-item">
          <img src="assets/slideshow/image-014.jpg" alt="image" class="d-block" style="width:100%"/>
          <div class="carousel-caption">
            <h3>Study hard</h3>
            <p>Education is the key!</p>
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
  )
}

export default demo