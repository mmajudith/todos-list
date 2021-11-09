import { combineReducers } from "redux";
import authReducer from "./auth";
import todoReducer from "./todos";

const rootReducer = combineReducers({
  auth: authReducer,
  todos: todoReducer
});

export default rootReducer;
