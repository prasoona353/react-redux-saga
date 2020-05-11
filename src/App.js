import React from "react";
import "./App.css";
import provider from "react-redux";
import Header from "./components/Header";
import ImageGrid from "./components/ImageGrid";
import configureStore from "./store";
const store = configureStore();

function App() {
  return (
    // <provider store={store}>
      <div className="App">
        <Header />
        <ImageGrid />
      </div>
    // </provider>
  );
}

export default App;
