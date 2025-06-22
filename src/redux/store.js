import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import authReducer from "./reducers/authReducer";

// const store = createStore(rootReducer, applyMiddleware(thunk));
const store = configureStore({
  reducer: {
    auth: authReducer,
    // other reducers...
  },
});
export default store;
