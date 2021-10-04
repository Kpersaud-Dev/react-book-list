import React from 'react';
import ReactDOM from 'react-dom';

import { books } from './books';
import Book from './Book';
// CSS
import './index.css';

// setup vars




const BookList = () => {
  
  return (
    <section className="booklist">
      {books.map((book) => {
        return (
          <Book key={book.id} {...book}></Book>
        ) 
      })}
    </section>
  )
}




ReactDOM.render(
  <BookList />,
  document.getElementById('root')
);


