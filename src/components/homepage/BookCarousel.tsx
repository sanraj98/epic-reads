import React from 'react'
import '../../scss/bookcarousel.scss';
import { ReturnBooks } from './ReturnBooks';

export const BookCarousel = () => {
  return (
    <div className='container bookcarousel' style={{height:550}}>
        <div className="carousel-title">
            <h3>Recently books are arived stay up stuned</h3>
            <hr />
        </div>
        <div id='carouselExampleControls' className="carousel carousel-dark slide mt-5 d-none d-lg-block">
            {/* Desktop*/}
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="row d-flex justify-content-center">
                        <ReturnBooks/>
                        <ReturnBooks/>
                        <ReturnBooks/>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="row d-flex justify-content-center">
                        <ReturnBooks/>
                        <ReturnBooks/>
                        <ReturnBooks/>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        {/* mobile */}
        <div className="d-lg-none mt-3">
        <div className="row d-flex justify-content-center">
            <ReturnBooks/>
            <button className='btn btn-outline-primary'>view more</button>
            </div>
        </div>
    </div>
  )
}


