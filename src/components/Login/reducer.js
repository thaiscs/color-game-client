const initialState = {
  accessToken: null,
  userData: null
};

export default function LoginReducer(state = initialState, action = {}) {
  switch (action.type) {
    case "USER_LOGGED_IN": {
      return {
        accessToken: action.payload.accessToken,
        userData: action.payload.accessToken
      };
    }
    default: {
      return state;
    }
  }
}
