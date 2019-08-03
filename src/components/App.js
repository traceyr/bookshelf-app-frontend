import React, { Component } from 'react';
import SearchBar from './SearchBar';
import BookList from './BookList';
import axios from 'axios';

class App extends Component {

  state = {
    booksByAuthor: []
  }

  onTermSubmit = (term) => {
    console.log('Submitted and did nothing');
    console.log(term);
    axios.post('/api/hello', {
      term: term
    })
    .then(res => {
      let results = res.data.GoodreadsResponse.search.results.work;
      this.setState({ booksByAuthor: results });
    })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <BookList books={this.state.booksByAuthor} />
      </div>
    );
  }
}

export default App;
