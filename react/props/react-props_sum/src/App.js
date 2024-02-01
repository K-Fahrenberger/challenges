import React from "react";
import "./styles.css";

import React from 'react';

const Sum = ({ valueA, valueB }) => {
  const result = valueA + valueB;
  return <p>{valueA} + {valueB} = {result}</p>;
};

const App = () => {
  return (
    <div className="App">
      <Sum valueA={5} valueB={7} />
    </div>
  );
};

export default App
