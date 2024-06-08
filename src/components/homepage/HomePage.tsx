import React from 'react'
import { CarouselItem } from './CarouselItem'

export const HomePage = () => {
  return (
   
        <div className="carousel-banner mt-2">
         <CarouselItem/>
              <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="d-flex align-items-center">
              <div className="border rounded border-primary d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                <i className="bi bi-truck text-primary" style={{ fontSize: '30px' }}></i>
              </div>
              <span className="ms-2">Delivery in 30 minutes</span>
            </div>
          </div>
          <div className="col">
            <div className="d-flex align-items-center">
              <div className="border rounded border-primary d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                <i className="bi bi-wallet-fill text-primary" style={{ fontSize: '30px' }}></i>
              </div>
              <span className="ms-2">Delivery in 30 minutes</span>
            </div>
          </div>
          <div className="col">
            <div className="d-flex align-items-center">
              <div className="border rounded border-primary d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                <i className="bi bi-cash-coin text-primary" style={{ fontSize: '30px' }}></i>
              </div>
              <span className="ms-2">Delivery in 30 minutes</span>
            </div>
          </div>
          <div className="col">
            <div className="d-flex align-items-center">
              <div className="border rounded border-primary d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                <i className="bi bi-bank text-primary" style={{ fontSize: '30px' }}></i>
              
              </div>
              <span className="ms-2">Delivery in 30 minutes</span>
            </div>
          </div>
        </div>
      </div>

      </div>
 
  )
}


