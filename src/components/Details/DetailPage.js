import React, { Component } from "react";
import { connect } from "react-redux";
import superagent from "superagent";

class DetailPage extends Component {
  //   url = "http://localhost:4000";

  //   onClick = async gameroomId => {
  //     console.log("gameroomId test:", gameroomId);
  //     const { userData } = this.props;

  //     try {
  //       const response = await superagent.put(`${this.url}/join`).send({
  //         gameroomId,
  //         userId: userData.id
  //       });

  //       console.log("response test:", response);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  render() {
    console.log("Detail Page:", this.props);
    const id = this.props.match.params.id;
    const { gamerooms, userData } = this.props;
    const game = gamerooms.filter(gameroom => {
      if (gameroom.id == id) {
        return gameroom.name;
      }
    });
    const gameDetails = game.name;
    console.log(game[0]);

    // const list = gamerooms.map(gameroom => (
    //     <div key={gameroom.id}>
    //       <Link to={`detailpage/${gameroom.id}`}>{gameroom.name}</Link>

    //       <button onClick={() => this.onClick(gameroom.id)}>Join</button>
    //     </div>
    //   ));

    return (
      <div>
        <p>{gameDetails}</p>
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
