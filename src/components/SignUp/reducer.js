const initialState = {
  accessToken: null
};

export default function SignedUpReducer(state = initialState, action = {}) {
  switch (action.type) {
    case "USER_SIGNED_UP": {
      return { ...state, accessToken: action.payload };
    }
    default: {
      return state;
    }
  }
}
