import api from "./api";

export function signUp(name, email, password) {
  return function thunk(dispatch, getState) {
    api("/users", {
      method: "POST",
      body: {
        name: name,
        email: email,
        password: password
      }
    })
      .then(data => {
        console.log("data?", data);
        dispatch(userSignedUp(data));
      })
      .catch(err => console.log("err", err));
  };
}

export function userSignedUp(accessToken) {
  return {
    type: "USER_SIGNED_UP",
    payload: {
      accessToken: accessToken
    }
  };
}
