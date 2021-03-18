import React from "react";
import "./FinishedBooks.css";

class FinishedBooks extends React.Component {
  render() {
    return (
      <section className="finished-books">
        <h2>Finished Books</h2>
        <ul className="finished-books-list"></ul>
      </section>
    );
  }
}

export default FinishedBooks;
