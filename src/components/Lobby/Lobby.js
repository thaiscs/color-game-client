import React, { Component } from "react";
import { connect } from "react-redux";
import superagent from "superagent";
import { Link } from "react-router-dom";

class Lobby extends Component {
  url = "http://localhost:4000";

  onClick = async gameroomId => {
    console.log("gameroomId test:", gameroomId);
    const { userData } = this.props;

    try {
      const response = await superagent.put(`${this.url}/join`).send({
        gameroomId,
        userId: userData.id
      });

      console.log("response test:", response);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    console.log("props:", this.props);
    const { gamerooms, userData } = this.props;
    console.log("userData:", userData);

    const list = gamerooms.map(gameroom => (
      <div key={gameroom.id}>
        <Link to={`detailpage/${gameroom.id}`}>{gameroom.name}</Link>

        <button onClick={() => this.onClick(gameroom.id)}>Join</button>
      </div>
    ));

    return (
      <div>
        <h1>GAMEROOM</h1>
        <main>{list}</main>
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

export default connect(mapStateToProps)(Lobby);
