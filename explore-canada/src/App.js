import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import Tips from "./components/Tips";
import Footer from "./components/Footer";

import './App.scss';

function App() {
  return(
    <>
      <Header />
      <Hero />
      <Destinations />
      <Tips />
      <Footer />
    </>
  )
}

export default App;