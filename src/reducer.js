import { combineReducers } from "redux";
import LoginReducer from "./components/Login/reducer";
import SignedUpReducer from "./components/SignUp/reducer";

export default combineReducers({
  loggedIn: LoginReducer,
  signedUp: SignedUpReducer
});
