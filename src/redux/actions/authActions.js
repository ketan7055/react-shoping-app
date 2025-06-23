import { useDispatch } from "react-redux";

export const login = (email, password) => {
  return async (dispatch) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === "test@test.com" && password === "123456") {
          dispatch({ type: "LOGIN_SUCCESS", payload: { email } });
          resolve("Login successful");
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
    // await new Promise((res) => setTimeout(res, 1000));
    // useDispatch({ type: "SIGNUP_SUCCESS", payload: { email } });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === "test@test.com1" && password === "123456") {
          dispatch({ type: "SIGNUP", payload: { email } });
          resolve("SIGNUP successful");
        } else {
          reject("Invalid credentials");
        }
      }, 1000);
    });
  };
};
