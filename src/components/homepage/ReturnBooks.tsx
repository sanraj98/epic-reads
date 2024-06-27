import React from 'react'
import BookModel from '../../models/BookModel'

export const ReturnBooks:React.FC<{book:BookModel}> = (props) => {
  return (
    <>
    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-4">
        <div className="text-center">
        <img src={props.book.img} alt="book"  height={233} width={151}/>
        <p className='mt-1'>{props.book.title}</p>
            <a className='btn btn-primary'>Reserve now</a>
        </div>
    </div>
    </>
  )
}


