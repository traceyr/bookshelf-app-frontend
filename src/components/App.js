import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchBar from './SearchBar';
import BookDetail from './BookDetail';
import Header from './Header';
import './index.css'

class App extends Component {

  render() {
    return (
      <div className="ui container">
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={SearchBar} />
            <Route path="/book/:id" component={BookDetail} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
