import React from 'react';

const Header = () => {
  return (
    <nav className="segment">
      <div className="ui inverted top attached menu">
        <a href='/'><div className="header item" id="myTitle">MY BOOKSHOP</div></a>
        <a href="#" className="item">My Books</a>
        <a href="#" className="item">Search For Books</a>
        <a href="#" className="right item">My Profile</a>
      </div>
    </nav>
  )
};

export default Header;
