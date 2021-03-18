import React from "react";
import { Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import LandingPage from "./components/LandingPage/LandingPage";
import UnreadPage from "./components/UnreadPage/UnreadPage";
import FinishedBooks from "./components/FinishedBooks/FinishedBooks";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <main className="App">
        <Nav />
        <div className="content" aria-live="polite">
          <Route exact path="/" component={LandingPage} />
          <Route path="/unread-page" component={UnreadPage} />
          <Route path="/finished-books" component={FinishedBooks} />
        </div>
      </main>
    );
  }
}

export default App;
