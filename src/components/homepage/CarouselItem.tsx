import React from 'react'
import banner1 from '../../images/book-banner1.jpg';
import '../../scss/home.scss';
import { Carousel, Button } from 'react-bootstrap';



export const CarouselItem = () => {
  return (
    <>
         <Carousel>
          <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <Button className="carousel-button" variant="dark">explore more</Button>
        </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

