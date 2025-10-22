import { useState,useEffect } from "react";
import CallAPI from "./assets/callAPI.jsx";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CallAPI />
    </>
  );
}

export default App;
