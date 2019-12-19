import React, { Component } from "react";
import { connect } from "react-redux";
import superagent from "superagent";

class DetailPage extends Component {
  url = "https://protected-shelf-23100.herokuapp.com";

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
    console.log("Detail Page:", this.props);
    const id = this.props.match.params.id;
    const { gamerooms, userData } = this.props;
    const game = gamerooms.find(gameroom => gameroom.id === parseInt(id));

    return (
      <div>
        {game ? (
          <p>
            {game.name}
            <button onClick={() => this.onClick(game.id)}>Join</button>
          </p>
        ) : (
          <p>Loading...</p>
        )}
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

export default connect(mapStateToProps)(DetailPage);
