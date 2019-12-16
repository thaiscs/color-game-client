const initialState = {
  accessToken: null
};

export default function LoginReducer(state = initialState, action = {}) {
  switch (action.type) {
    case "USER_LOGGED_IN": {
      return { ...state, accessToken: action.payload };
    }
    default: {
      return state;
    }
  }
}
