import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <button>deez</button>
      <button>nesting</button>
      <button>good</button>
      <button>children</button>
    </main>
  );
}

function Button({children}) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
