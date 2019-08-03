import React from 'react';

const BookList = ({ books }) => {
  console.log(books);
  const renderedList = books.map(a => {
    return (
      <div key={a.id._text} role="listitem" className="item">
        <h2>{a.best_book.author.name._text}</h2>
        <h4>{a.best_book.title._text}</h4>
      </div>
    );
  })
  return <div role="list" className="ui divided relaxed list">{renderedList}</div>;
}

export default BookList;
