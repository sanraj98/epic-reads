import React from 'react'

export const ReturnBooks = () => {
  return (
    <>
    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-4">
        <div className="text-center">
        <img src={require("../../images/books/cyber.png")} alt="book"  height={233} width={151}/>
        <p className='mt-1'>Cybernetic Stargazer</p>
            <a className='btn btn-primary'>Reserve now</a>
        </div>
    </div>
    </>
  )
}


