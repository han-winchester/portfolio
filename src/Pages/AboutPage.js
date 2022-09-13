import React from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import About from "../Components/About";
import Header from "../Components/Header";

const AboutPage = () => {
  return (
    <div>
      <Header />
      <About />
    </div>
  );
};

export default AboutPage;
