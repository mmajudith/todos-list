import { toast } from "react-toastify";
import { LOGIN_USER, LOGOUT_USER } from "../constants";
import defaultUser from "../services/defaultUser";

const INITIAL_STATE = false;

export const loginUser = (formData) => {
  const userExists =
    defaultUser.email === formData.email &&
    defaultUser.password === formData.password;
  sessionStorage.setItem("user", JSON.stringify(formData));
  if (userExists) {
    return {
      type: LOGIN_USER,
      payload: formData,
    };
  } else {
    toast.warn("Invalid login details!");
    return;
  }
};

export const persistLogin = () => {
  const userData = JSON.parse(sessionStorage.getItem("user"));
  return {
    type: LOGIN_USER,
    payload: userData,
  };
};

export const logoutUser = () => {
  const user = sessionStorage.getItem("user");
  if (user) {
    sessionStorage.removeItem("user");
  }
  return {
    type: LOGOUT_USER,
  };
};

const authReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_USER:
      return payload;
    case LOGOUT_USER:
      return false;
    default:
      return state;
  }
};

export default authReducer;
