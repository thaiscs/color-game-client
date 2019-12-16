import React from "react";
import { connect } from "react-redux";
import { login } from "./action";

class LoginPage extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("handelSubmit in LoginPage - local state:", this.state);
    const { email, password } = this.state;
    this.props.dispatch(login(email, password));
  };

  handleChange = event => {
    console.log("getting input:", this.state);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <header>
          <img
            className="rgbLogo"
            src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/06/RBG-2-column.png"
          />
        </header>
        <strong>Welcome to the Great RGB Game</strong>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
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
            <button type="submit">Login</button>
          </p>
        </form>
      </div>
    );
  }
}

export default connect()(LoginPage);
