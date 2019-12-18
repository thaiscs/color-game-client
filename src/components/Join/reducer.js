export default function UserDataReducer(state = null, action = {}) {
  switch (action.type) {
    case "USER_ID_AND_NAME":
      return action.payload;

    default:
      return state;
  }
}
