import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "./action";
import "./signUp.css";
import { Link } from "react-router-dom";

class SignUpContainer extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };

  handleChange = event => {
    // console.log(event.target);
    console.log("getting input for SignUp:", this.state);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("handelSubmit in SignUp:");
    const { name, email, password } = this.state;
    this.props.dispatch(signUp(name, email, password));
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    return (
      <div>
        <header>
          {" "}
          <img
            className="rgbLogo"
            src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/06/RBG-2-column.png"
            alt="rgbLogo"
          />
        </header>
        <strong>Welcome to the Great RGB Game</strong>
        <p>Sign Up to start playing</p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <input
              type="text"
              name="name"
              placeholder="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </p>

          <p>
            <input
              type="email"
              name="email"
              placeholder="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <button type="submit">Sign Up</button>
          </p>
        </form>
        <div>
          <Link to="/login">Already have an account? LOGIN here</Link>
        </div>
      </div>
    );
  }
}

export default connect()(SignUpContainer);
