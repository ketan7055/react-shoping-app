import { useDispatch } from "react-redux";

export const login = (email, password) => {
  return async (dispatch) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === "test@test.com" && password === "123456") {
          dispatch({ type: "LOGIN_SUCCESS", payload: { email } });
          resolve("Login succes sful");
        } else {
          reject("Invalid credentials");
        }
      }, 1000);
    });
  };
};

export const signup = (email, password) => {
  return async (dispatch) => {
    // Placeholder async call
    await new Promise((res) => setTimeout(res, 1000));
    useDispatch({ type: "SIGNUP_SUCCESS", payload: { email } });
  };
};
