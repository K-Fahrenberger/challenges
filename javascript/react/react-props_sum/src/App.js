import React from "react";
import "./styles.css";

export default function App() {
  return <Sum valueA={420} valueB={69} />;
}

function Sum({ valueA, valueB }) {

  const sum = Number(valueA) + Number(valueB);
  
  return (
    <p>
      {valueA} + {valueB} = {sum}
    </p>
  );
}