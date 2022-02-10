import React, { Component } from 'react';
import BookList from '../containers/BookList';

class Books extends Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <BookList />
      </div>
    );
  }
}

export default Books;
