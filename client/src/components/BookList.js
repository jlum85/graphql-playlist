import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo"; // pour binder la requ^te

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

class BookList extends Component {
  displayBooks() {
    const data = this.props.data;
    if (data.loading) {
      return <div>Loading books...</div>;
    } else {
      return data.books.map((book) => {
        console.log(book);
        return <li key={book.id}>{book.name}</li>;
      });
    }
  }

  render() {
    return (
      <>
        <ul id="book-list">{this.displayBooks()}</ul>
      </>
    );
  }
}

export default graphql(getBooksQuery)(BookList);