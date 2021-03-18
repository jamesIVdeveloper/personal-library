import React from "react";
import SignUp from "./SignUp/SignUp";
import "./LandingPage.css";

class LandingPage extends React.Component {
  render() {
    return (
      <section className="landing-page">
        <header>
          <h1 className="app-title">Personal Library</h1>
          <h2>Elevate Your Reading Experience</h2>
        </header>
        <div className="about-1">
          <h2>Grow Your To-Read List</h2>
          <p>
            If you are an avid reader, chances are you find new books that you
            want to read all of the time. It can be hard to remember them all.
            Your Personal Library allows you to keep a list of all books that
            you would like to read, with the ability to continue to add to that
            list.
          </p>
        </div>
        <div className="about-2">
          <h2>Track Read Books</h2>
          <p>
            After you finish a book, you can move it into the 'Finished' pile,
            along with a rating and a summary of what you gained from the book.
            This makes it easy to remember what books you have read, and see a
            summary in your own words for a quick refresher.
          </p>
        </div>
        <div className="signup-form">
          <SignUp />
        </div>
      </section>
    );
  }
}

export default LandingPage;
