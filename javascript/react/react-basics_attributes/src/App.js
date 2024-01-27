import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  <article className="article">
    <h2 className="article_title">
      React is so epic. I can not believe how great it is.
    </h2>
    <label htmlFor="inputField">See how epic React is</label>
    <input name="inputField" id="inputField"></input>
    <a
      className="article__link"
      href="https://en.wikipedia.org/wiki/React_(JavaScript_library)"
    >
      Link to Wikipedia article about epic React
    </a>
  </article>;
}
