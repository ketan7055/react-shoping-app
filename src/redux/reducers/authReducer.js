const initialState = {
  user: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
    case "SIGNUP_SUCCESS":
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
