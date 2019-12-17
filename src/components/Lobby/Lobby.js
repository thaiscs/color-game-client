import React, { Component } from "react";
import { connect } from "react-redux";

class Lobby extends Component {
  render() {
    console.log("props:", this.props);
    const { gamerooms } = this.props;

    const list = gamerooms.map(gameroom => (
      <p key={gameroom.id}>{gameroom.name}</p>
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
    gamerooms: state.allGamerooms
  };
}

export default connect(mapStateToProps)(Lobby);
