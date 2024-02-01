import React from "react";
import "./styles.css";

export default function App() {

const Smiley = ({ isHappy }) => {
  return (
    <div>
      {isHappy ? (
        <span role="img" aria-label="Happy Smiley">😊</span>
      ) : (
        <span role="img" aria-label="Sad Smiley">😢</span>
      )}
    </div>
  );
};

const App = () => {
  const isHappy = true;

  return (
    <div className="App">
      <Smiley isHappy={isHappy} />
    </div>
  );
};
}
export default App;

