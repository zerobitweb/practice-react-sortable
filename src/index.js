import React from "react";
import ReactDOM from "react-dom";
import SortableTable from "./SortableTable";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <SortableTable />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
