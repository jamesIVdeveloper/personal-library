import React from "react";
import AddBook from "./AddBook/AddBook";
import "./UnreadPage.css";

class UnreadPage extends React.Component {
  render() {
    return (
      <section className="unread-page">
        <h1>Unread Books</h1>
        <div className="add-book">
          <AddBook />
        </div>
        <div className="book-list">
          <h2>Book List</h2>
          <ul className="books">
            <li>"It" by Stephen King</li>
            <li>"The Name of the Wind" by Patrick Rothfuss</li>
            <li>"A Darker Shade of Magic" by V.E. Schwab</li>
            <li>"The Canterbury Tales" by Geoffrey Chaucer</li>
          </ul>
        </div>
      </section>
    );
  }
}

export default UnreadPage;
