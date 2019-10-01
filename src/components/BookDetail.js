import React from 'react';
import axios from 'axios';

class BookDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayBook: null
    }
  }
  // state = { displayBook: [] };

  componentDidMount() {
    let pathWithId = this.props.location.pathname
    let bookId = pathWithId.substr(pathWithId.lastIndexOf('/') + 1);
    console.log(this.props.location.state)
    axios.post('/api/bookDetails', {
      id: bookId
    })
    .then(res => {
      // let results = res;
      console.log(res.data.GoodreadsResponse);
      this.setState({ displayBook: res.data.GoodreadsResponse.book });
    })
  }

  render() {
    // console.log(this.state.displayBook[0].id);
    let bookDeets;
    if(this.state.displayBook) {
      bookDeets = this.state.displayBook;
    }

    console.log(bookDeets)
    if(this.state.displayBook) {
      return (
        <div className="ui segment">
          <div className="ui grid">
            <div className="row">
              <div className="three wide column">
                <img src={bookDeets.image_url._text} className="ui small image"/>
              </div>
              <div className="ten wide column">
                <h2 className="ui header">Title: {bookDeets.title._text}</h2>
                <h3>Author: {bookDeets.authors.author.name._text}</h3>
                <h3>Average Rating: {bookDeets.average_rating._text}</h3>
                <h5>ISBN Number: {bookDeets.isbn13._cdata}</h5>
                <h5>Language: {bookDeets.language_code._text}</h5>
                <h5>Published: {bookDeets.publication_month._text}/{bookDeets.publication_day._text}/{bookDeets.publication_year._text}</h5>
                <h5>Number of Pages: {bookDeets.num_pages._cdata || ' Unknown'}</h5>
                <p>Description:</p>
                <p>{bookDeets.description._cdata}</p>
              </div>
            </div>
          </div>
          <h2 className="header centered">{bookDeets._text}</h2>
        </div>
      );
    } else {
      return (
        <div className="ui section">
          <h2 className="ui header centered">Loading....</h2>
        </div>
      )
    }

  }
}

export default BookDetail
