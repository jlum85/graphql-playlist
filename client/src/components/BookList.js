import React, { Component } from "react";
import { graphql } from "react-apollo"; // pour binder la requ^te
import { flowRight as compose } from "lodash"; // quand on a plusieurs queries

import { getBooksQuery, deleteBookMutation } from "../queries/queries";
import BookDetails from "./BookDetails";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    };
  }
  displayBooks() {
    const data = this.props.getBooksQuery;
    if (data.loading) {
      return <div>Loading books...</div>;
    } else {
      return data.books.map((book) => {
        //console.log(book);
        return (
          <li key={book.id}>
            <span
              onClick={(e) => {
                this.setState({ selected: book.id });
              }}
            >
              {book.name}{" "}
            </span>
            <span
              className="deleteBtn"
              onClick={() => {
                console.log(book.id);
                this.props.deleteBookMutation({
                  variables: {
                    id: book.id,
                  },
                  // après la mutation on relance getBooksQuery
                  refetchQueries: [{ query: getBooksQuery }],
                });
                if (this.state.selected === book.id) {
                  this.setState({ selected: null });
                }
              }}
            >
              x
            </span>
          </li>
        );
      });
    }
  }

  render() {
    return (
      <>
        <ul id="book-list">{this.displayBooks()}</ul>
        <BookDetails bookId={this.state.selected} />
      </>
    );
  }
}

// export default graphql(getBooksQuery)(BookList);
export default compose(
  graphql(getBooksQuery, { name: "getBooksQuery" }),
  graphql(deleteBookMutation, { name: "deleteBookMutation" })
)(BookList);
