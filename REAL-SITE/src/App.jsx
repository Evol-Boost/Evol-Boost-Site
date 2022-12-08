import "./App.css";

import React, { Component }  from 'react';

import Collection from "./Components/Collection";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Section2 from "./Components/Section2";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Nav />
      <Section2 />
      <Collection />
      <Contact />
    </div>
  );
}

export default App;
