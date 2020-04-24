import React from "react";
import { BrowserRouter, Switch,Route } from "react-router-dom";
import Navbar from "./components/layouts/navbar";
import Dashboard from "./components/dashboard/dashboard"
import ProjectDetails from "./components/projects/project_details"
import SignIn from "./components/auth/sign_in" 
import SignUp from "./components/auth/sign_up" 
import CreateProject from "./components/projects/create_project"


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/project/:id" component={ProjectDetails}/>
          <Route exact path="/signin" component={SignIn}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/create" component={CreateProject}/>

          <Route path="/" component={Dashboard}/>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
