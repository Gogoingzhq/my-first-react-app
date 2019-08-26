import React from 'react';
import './index.css';
import './App.css';
//自定义标签
import A from "./components/A.js";
import B from "./components/B.js";

function App() {
  return (
    <div className="App">
        我的APP
        <A />
        <B />
    </div>
  );
}

export default App;
