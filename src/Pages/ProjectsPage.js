import React from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import Projects from "../Components/Projects";
import Header from "../Components/Header";

const ProjectsPage = () => {
  return (
    <div>
      <Header />
      <Projects />
    </div>
  );
};

export default ProjectsPage;
