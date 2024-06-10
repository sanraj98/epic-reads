import React from 'react'
import '../scss/header.scss';
import epic_book from '../images/bookc.png';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS
import '../scss/asset.scss';


export const Header = () => {
  return (

<nav className="navbar navbar-expand-lg bg-body-tertiary mt-2 shadow sticky-top p-3">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src={epic_book} alt="epic logo" width={35} height={35}/>
      <span className="ms-2">Epic Books</span>
    </a>
    <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
      <li>
        <a href="#">
        <i className="bi bi-cart bi-lg" style={{ fontSize: '28px', color:"black"}}></i>
        </a>
      </li>
      <li className='ms-3'>
        <button className='btn btn-primary rounded-pill'>My Account</button>
      </li>
    </ul>
   
  </div> 
</nav>
  )
}


