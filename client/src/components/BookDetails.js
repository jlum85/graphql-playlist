import React, { Component } from "react";
import { graphql } from "react-apollo"; // pour binder la requ^te

import { getBookQuery } from "../queries/queries";

class BookDetails extends Component {
  displayBookdetails() {
    const { book } = this.props.data;
    // console.log(book);
    if (book) {
      return (
        <div>
          <h2> {book.name}</h2>
          <p> {book.genre}</p>
          <p> {book.author.name}</p>
          <p> All books by this author</p>
          <ul className="other-book">
            {book.author.books.map((item) => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </ul>
        </div>
      );
    } else {
      return <div> No book selected</div>;
    }
  }

  render() {
    return <div id="book-details">{this.displayBookdetails()}</div>;
  }
}

export default graphql(getBookQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.bookId,
      },
    };
  },
})(BookDetails);
