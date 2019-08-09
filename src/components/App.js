import React, { Component } from 'react';
import SearchBar from './SearchBar';
import BookList from './BookList';
import Header from './Header';
import './index.css'
import axios from 'axios';

class App extends Component {

  state = {
    booksByAuthor: []
  }

  onTermSubmit = (term, searchBy) => {
    axios.post('/api/hello', {
      term: term,
      searchBy: searchBy
    })
    .then(res => {
      let results = res.data.GoodreadsResponse.search.results.work;
      this.setState({ booksByAuthor: results });
    })
  }

  render() {
    return (
      <div className="ui container">
        <Header />
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <BookList books={this.state.booksByAuthor} />
      </div>
    );
  }
}

export default App;
