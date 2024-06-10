import React from 'react'
import '../../scss/home.scss';
import '../../scss/asset.scss'
import { CarouselItem } from './CarouselItem'
import { ShowAblities } from './ShowAblities';
import { BookCarousel } from './BookCarousel';

export const HomePage = () => {
  return (
   
        <div className="carousel-banner mt-2">
         <CarouselItem/>
         <ShowAblities />
         <BookCarousel />
  
      </div>
 
  )
}


