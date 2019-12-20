import React, { Component } from "react";
import superagent from "superagent";
import { connect } from "react-redux";

class Join extends Component {
  //   url = "https://protected-shelf-23100.herokuapp.com";
  url = "http://localhost:4000";

  onClick = async () => {
    const { userData } = this.props;

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

  render() {
    // const points = 1;
    return (
      <div>
        <button onClick={this.onClick}>START</button>
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

export default connect(mapStateToProps)(Join);
