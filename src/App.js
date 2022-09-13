import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Redirect } from "react-router-dom";
import Header from "./Components/Header";
import AboutPage from "./Pages/AboutPage";
import ProjectsPage from "./Pages/ProjectsPage";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/projects" element={<ProjectsPage />} />
      </Routes>
    </div>
  );
}

export default App;
