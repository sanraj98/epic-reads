import React from 'react'
import BookModel from '../../models/BookModel'

export const ReturnBooks:React.FC<{book:BookModel}> = (props) => {
  return (
    <>
    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-4">
        <div className="text-center">
        {props.book.img ? (
                        <img src={`data:image/png;base64,${props.book.img}`} alt={props.book.title} height={233} width={151} />
                    ) : (
                        <div>No image available</div>
                    )}        <p className='mt-1'>{props.book.title}</p>
            <a className='btn btn-primary'>Reserve now</a>
        </div>
    </div>
    </>
  )
}


