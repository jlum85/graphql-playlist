import React, { Component } from "react";
import { graphql } from "react-apollo"; // pour binder la requ^te

import { getBookQuery } from "../queries/queries";

class BookDetails extends Component {
  render() {
    return (
      <div id="book-details">
        <p>Output book detailsher </p>
      </div>
    );
  }
}

export default graphql(getBookQuery)(BookDetails);
