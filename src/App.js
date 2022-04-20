import React from "react";
import DateToday from "./components/Date";
import Time from "./components/Time";
import Quote from './components/Quote'
import Weather from "./components/Weather";

function App() {
  return (
    <div className="App">
      <Weather />
      <Time />
      <DateToday />
      <Quote />
    </div>
  );
}

export default App;
