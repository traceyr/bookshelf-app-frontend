import React from 'react';

const BookList = ({ books }) => {
  let renderedList;
  if(books) {
    renderedList = books.map(a => {
      return (
        <div key={a.id._text} className="ui segment">
          <div role="listitem" className="item">
            <h2 className="header">{a.best_book.author.name._text}</h2>
            <h4>{a.best_book.title._text}</h4>
          </div>
        </div>
      );
    })
  } else {
    renderedList = (
        <div className="ui segment">
          <div className="ui negative message">
            <h3 className="header">You did not enter a valid search term</h3>
            <p>Please enter a search term in the box above</p>
          </div>
        </div>
      )
    }

  return <div role="list" className="ui divided relaxed list">{renderedList}</div>;
}

export default BookList;
