import React from 'react'
import '../../scss/home.scss';



export const CarouselItem = () => {
  return (
    <>
         <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
         <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="banner1">
              <button className='btn btn-dark carousel-button btn-lg'>Explore more</button>
            </div>
           </div>
           <div className="carousel-item">
            <div className="banner2">
            ji
            </div>
           </div>
           <div className="carousel-item">
            <div className="banner3">
            ja
            </div>
           </div>
          </div>
        </div>
    </>
  )
}

