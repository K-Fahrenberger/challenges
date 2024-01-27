import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>This is an article</h1>
      <p>It looks spectacular</p>
    </article>
  );
}
