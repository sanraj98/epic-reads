import React, { useEffect, useState } from 'react'
import '../../scss/bookcarousel.scss';
import { ReturnBooks } from './ReturnBooks';
import BookModel from '../../models/BookModel';
import { SpinnerLoading } from '../utils/SpinnerLoading';


export const BookCarousel = () => {
    const [books, setBooks] = useState<BookModel[]>([]);
    const [isLoading, setIsLoading] =useState(true);
    const [httpError,setHttpError]= useState(null);
    useEffect(() => {
        const url = "http://localhost:9090/api/books";
        
        const listOfBooks = async () => {
            try {
                let response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                let data = await response.json();
                let bookdata= data._embedded.books;
                console.log(bookdata);
                const loadedBooks: BookModel[] = [];

                for (const key in bookdata) {
                    loadedBooks.push({
                        id: bookdata[key].id,
                        title: bookdata[key].title,
                        author: bookdata[key].author,
                        description: bookdata[key].description,
                        copies: bookdata[key].copies,
                        copiesAvailable: bookdata[key].copiesAvailable,
                        category: bookdata[key].category,
                        img: bookdata[key].img,
                    });
                }
                setBooks(loadedBooks);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching the books:', error);
            }
        };

        listOfBooks().catch((error: any) => {
            setIsLoading(false);
            setHttpError(error.message);
        });
    }, []);
    if (isLoading) {
        return (
            <SpinnerLoading />
        );
    }
    if (httpError) {
        return (
            <div className="container m-5">
                <p>{httpError}</p>
            </div>
        );
    }
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
                        {books.slice(0,3).map(book=>(
                         <ReturnBooks book={book} key={book.id} />
                        )
                        )}
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="row d-flex justify-content-center">
                    {books.slice(3,6).map(book=>(
                         <ReturnBooks book={book} key={book.id} />
                        )
                        )}
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="row d-flex justify-content-center">
                    {books.slice(6,9).map(book=>(
                         <ReturnBooks book={book} key={book.id} />
                        )
                        )}
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
            <ReturnBooks book={books[0]}/>
            <button className='btn btn-outline-primary'>view more</button>
            </div>
        </div>
    </div>
  )
}


