import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  let [showPara, setShowPara] = useState(false);

  function handleClick() {
    setShowPara(true);
  }
  return (
    <div id="main">

      <button id="click" onClick={handleClick}>Click me</button>

      {showPara && (
        <p id="para"> Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.</p>
      )}
    </div>
  );
}


export default App;
