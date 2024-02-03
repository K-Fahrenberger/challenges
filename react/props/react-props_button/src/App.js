import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    console.log("button clicked!");
  }
  return (
    <Button
      color={"green"}
      disabled={false}
      text={"I am a button"}
      onHandleClick={handleClick}
    />
  );
}
function Button(props) {
  const { color, disabled, text, onHandleClick } = props;
  return (
    <button
      type="button"
      style={{ backgroundColor: color }}
      disabled={disabled}
      onClick={onHandleClick}
    >
      {text}
    </button>
  );
}

