import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav(props) {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/unread-page"}>Unread Books</Link>
        </li>
        <li>
          <Link to={"/finished-books"}>Finished Books</Link>
        </li>
      </ul>
    </nav>
  );
}
