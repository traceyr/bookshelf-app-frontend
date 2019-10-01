import React from 'react';
import { Link } from 'react-router-dom';
import './BookList.css';

const BookList = (props) => {
  let books = props.books;
  let bookToSend = [];

  let renderedList;
  console.log(books);
  if(books) {
    renderedList = books.map(a => {
      let thisBooksId = a.best_book.id._text;
      return (
        <div key={a.best_book.id._text} className="ui segment">
          <div role="listitem" className="item">
            <h2 className="header">{a.best_book.author.name._text}</h2>
            <h4>{a.best_book.title._text}</h4>
          </div>
          <Link to={{
              pathname: `/book/${a.best_book.id._text}`,
              state: {
                books: books
              }
          }}>
            <button className="ui button">More Details</button>
          </Link>

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
