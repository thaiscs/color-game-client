import api from "../SignUp/api";

export function login(email, password) {
  return function thunk(dispatch, getState) {
    api("/login", {
      method: "POST",
      body: {
        email: email,
        password: password
      }
    })
      .then(data => {
        console.log("data?", data);
        dispatch(userLoggedIn(data.jwt));
      })

      .catch(err => console.log("err", err));
  };
}

export function userLoggedIn(accessToken, userData) {
  return {
    type: "USER_LOGGED_IN",
    payload: {
      accessToken
    }
  };
}
