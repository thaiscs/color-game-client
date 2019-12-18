import { combineReducers } from "redux";
import LoginReducer from "./components/Login/reducer";
import SignedUpReducer from "./components/SignUp/reducer";
import allGameroomsReducer from "./components/Lobby/reducer";
import UserDataReducer from "./components/Join/reducer";

export default combineReducers({
  loggedIn: LoginReducer,
  signedUp: SignedUpReducer,
  allGamerooms: allGameroomsReducer,
  userData: UserDataReducer
});
