import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import MyNavBar from "./Components/MyNavBar";
import ArticleList from "./Components/ArticleList";

function App() {
  return (
    <div>
      <MyNavBar />
      <ArticleList />
    </div>
  );
}

export default App;
