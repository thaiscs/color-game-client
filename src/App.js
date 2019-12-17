import React, { Component } from "react";
import "./App.css";
import SignUpContainer from "./components/SignUp/SignUpContainer";
import { Route } from "react-router-dom";
import LoginPage from "./components/Login/LoginPage";
import superagent from "superagent";

// global EventSource

class App extends Component {
  state = {
    name: ""
  };
  url = "http://localhost:4000";
  stream = new EventSource(`${this.url}/stream`);

  componentDidMount() {
    this.stream.onmessage = event => {
      const { data } = event;
      const action = JSON.parse(data);
      console.log(action);
    };
  }
  onSubmit = async event => {
    event.preventDefault();
    try {
      const response = await superagent
        .post(`${this.url}/gameroom`)
        .send({ name: this.state.name });
      console.log("response:", response);
    } catch (error) {
      console.warn("error:", error);
    }
  };
  onChange = event => {
    console.log("onChange typing:", this.state);
    const { value } = event.target;
    this.setState({ name: value });
  };
  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmit}>
          <input type="text" onChange={this.onChange} value={this.state.name} />
          <button>Submit</button>
        </form>
        <Route exact path="/" component={SignUpContainer} />
        <Route exact path="/login" component={LoginPage} />
      </div>
    );
  }
}
export default App;
