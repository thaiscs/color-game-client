import React, { Component } from "react";
import "./GameApp.css";
import Header from "./Header";
import ChoiceList from "./choiceList";
import * as colors from "./colors";
import superagent from "superagent";
import { connect } from "react-redux";

class GameApp extends Component {
  url = "http://localhost:4000";

  state = {
    level: 6,
    color: [],
    pickedColor: {},
    points: 0,
    status: "Click the button to start playing",
    correctAnswers: 0
  };

  componentDidMount = async () => {
    const { userData } = this.props;
    console.log("GameApp props:", this.props);

    this.startGame();
    try {
      const response = await superagent.put(`${this.url}/join`).send({
        points: 3,
        user: userData.id
      });

      console.log("Points response test:", response);
    } catch (error) {
      console.log(error);
    }
  };

  startGame = () => {
    let arr = [];
    for (let i = 0; i < this.state.level; i++) {
      arr.push(colors.createRandomColor());
    }
    this.setState({
      color: arr,
      pickedColor: colors.pickColor(arr),
      points: 0,
      status: "Click the button to start playing"
    });
  };

  generateColors = () => {
    let arr = [];
    for (let i = 0; i < this.state.level; i++) {
      arr.push(colors.createRandomColor());
    }
    this.setState({
      color: arr,
      pickedColor: colors.pickColor(arr)
    });
  };

  choiceHandler = event => {
    const { pickedColor } = this.state;
    const rightAnswer = Object.values(pickedColor).join(", ");
    const chosenColor = event.target.style.backgroundColor.slice(4, -1);
    if (chosenColor === rightAnswer) {
      console.log("correct");
      this.setState({
        points: this.state.points + 1,
        status: "Correct!",
        correctAnswers: this.state.correctAnswers + 1
      });
      this.generateColors();
      console.log("correct");
    } else {
      this.generateColors();
      console.log("wrong");
      this.setState({
        status: "Wrong! Guess again"
      });
    }
    this.chickenDinner();
  };

  chickenDinner = () => {
    if (this.state.correctAnswers > 4) {
      alert("Winner winner chicken dinner");
    } else {
      return null;
    }
  };

  render() {
    return (
      <div className="App">
        <Header
          color={this.state.pickedColor}
          startGame={this.startGame}
          points={this.state.points}
          status={this.state.status}
        />
        <ChoiceList click={this.choiceHandler} color={this.state.color} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    gamerooms: state.allGamerooms,
    userData: state.userData
  };
}

export default connect(mapStateToProps)(GameApp);
