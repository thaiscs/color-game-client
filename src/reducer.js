import { combineReducers } from "redux";
import LoginReducer from "./Login/reducer";
import SignedUpReducer from "./SignUp/reducer";

export default combineReducers({
  loggedIn: LoginReducer,
  signedUp: SignedUpReducer
});
