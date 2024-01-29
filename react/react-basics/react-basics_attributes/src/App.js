import React from "react";
import "./styles.css";

export default function App() {
  return WriteArt();
}
function WriteArt() {
  return (
    <article className="article">
      <h2 className="article_title">text of your choice</h2>
      <label id = "label" htmlFor="input"></label>
      <input id="label"></input>
      <a className="aricle__link" href="https://en.wikipedia.org/">Wikipedia</a>
    </article>
  );
  //   - an `<article>` as a wrapper HTML element with the class `article`
  // - an `<h2>` with the class `article__title` and a text of your choice
  // - a `<label>` and `<input>` tag connected with `id` and `htmlFor` (!) attributes
  // - an `<a>` tag with the class `article__link` as well as text content and `href` attribute of your choice (What about a Wikipedia article?)
}
