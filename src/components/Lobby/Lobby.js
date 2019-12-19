import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Lobby extends Component {
  render() {
    console.log("props:", this.props);
    const { gamerooms, userData } = this.props;
    console.log("userData:", userData);

    const list = gamerooms.map(gameroom => (
      <div key={gameroom.id}>
        <Link to={`detailpage/${gameroom.id}`}>{gameroom.name}</Link>
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
    gamerooms: state.allGamerooms
  };
}

export default connect(mapStateToProps)(Lobby);
