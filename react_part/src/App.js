import React from "react";
import { BrowserRouter, Switch,Route } from "react-router-dom";
import Navbar from "./components/layouts/navbar";
import Dashboard from "./components/dashboard/dashboard"
import ProjectDetails from "./components/projects/project_details"


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/project/:id" component={ProjectDetails}/>
          <Route path="/" component={Dashboard}/>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
