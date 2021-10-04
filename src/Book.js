import React from 'react'

const Book = ({ img, title, author }) => {
  // attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e);
  }

  const complexExample = (author) => {
    console.log(author);
  }

  return (
    <article className="book" onMouseOver={() => {
      console.log(title);
    }}>
      <img src={img} alt="Book">
      </img>
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>Button
      </button>
      <button type="button" onClick={() => complexExample(author)}>Complex Button</button>
    </article>
  )
}

export default Book
