import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import ProjectsPage from "./projects/ProjectsPage";

// import AppNavBar from './components/AppNavBar';
// import ProjectList from './components/ProjectList';

// import { Provider } from "react-redux";
// import store from "../store";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
