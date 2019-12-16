import React from "react";
import "./App.css";
import SignUpContainer from "./components/SignUp/SignUpContainer";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import LoginPage from "./components/Login/LoginPage";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={SignUpContainer} />
      <Route exact path="/login" component={LoginPage} />
    </div>
  );
}

export default App;
