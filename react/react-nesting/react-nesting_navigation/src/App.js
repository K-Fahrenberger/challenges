import React from "react";
import "./styles.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <>
      <Header className="header" />
      <Navigation />
    </>
  );
}
