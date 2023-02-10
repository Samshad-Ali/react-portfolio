import React from "react";
import Header, { PhoneHeader } from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

const App = () => {


  return (
    <>
      <PhoneHeader />
      <Header/>
      <Home />
      <Work />
      <Skills />
      <Contact />
      <Toaster />
      <Footer />
    </>
  );
};

export default App;
