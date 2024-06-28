import React from 'react'
import '../../scss/home.scss';
import '../../scss/asset.scss'
import { CarouselItem } from './CarouselItem'
import { ShowAblities } from './ShowAblities';
import { BookCarousel } from './BookCarousel';
import { Heros } from './Heros';

export const HomePage = () => {
  return (
   
        <div className="home mt-2">
         <CarouselItem/>
         <ShowAblities />
         <BookCarousel />
         <Heros />
      </div>
 
  )
}


