import React from "react";
import "./AddBook.css";

class AddBook extends React.Component {
  render() {
    return (
      <section className="add-book-to-list">
        <h2>Add a Book</h2>
        <form className="add-book-form">
          <div className="form-line">
            <label htmlFor="book-title">Book Title: </label>
            <input
              placeholder="Book Title"
              type="text"
              name="book-title"
              id="book-title"
            />
          </div>
          <div className="form-line">
            <label htmlFor="author">Author: </label>
            <input placeholder="Author" type="text" name="author" id="author" />
          </div>
          <div className="add-book-btn">
            <button type="submit">Add</button>
          </div>
        </form>
      </section>
    );
  }
}

export default AddBook;
