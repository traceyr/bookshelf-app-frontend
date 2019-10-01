import React from 'react';
import axios from 'axios';
import BookList from './BookList';

class SearchBar extends React.Component {
  state = {
    term: '',
    searchBy: '',
    bookslist: []
   };

  onSelectedBox = (event) => {
    this.setState({searchBy: event.target.value});
  }

  onInputChange = (event) => {
    this.setState({term: event.target.value});
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/bookSearch', {
      term: this.state.term,
      searchBy: this.state.searchBy
    })
    .then(res => {
      let results = res.data.GoodreadsResponse.search.results.work;
      // console.log(results);
      this.setState({ bookslist: results });
    })
    this.setState({term: '', searchBy: ''});
  };

  render() {
    return (
      <div className="inverted search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui inverted form">
          <div className="grouped fields">
            <label className="header">Search By Author or Book?</label>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio"
                    name="books"
                    value='author'
                    onChange={this.onSelectedBox} />
                  <label className="header">Author</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio"
                    name="books"
                    value='title'
                    onChange={this.onSelectedBox} />
                  <label className="header">Title</label>
                </div>
              </div>
          </div>
          <div className="field">
            <label className="header">Search For Books</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange} />
          </div>
        </form>
        <BookList books={this.state.bookslist} />
      </div>
    );
  }
}

export default SearchBar;
