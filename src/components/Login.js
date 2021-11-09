import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfoAccordion from "./InfoAccordion";
import { loginUser } from "../reducers/auth";
import { Navigate } from "react-router";
import { toast } from "react-toastify";

const iFORMDATA = {
  email: "",
  password: "",
};

const Login = () => {
  const [formData, setFormData] = useState(iFORMDATA);

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const onChangeHandler = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitFormHandler = () => {
    if (!formData.email || !formData.password) {
      return toast.warn("both email and password field are required!");
    }
    const action = loginUser(formData);
    if (action) {
      dispatch(action);
    }
  };

  if (auth && auth.email) {
    return <Navigate to="/todo" />;
  }

  return (
    <div style={styles.loginWrapper}>
      <div className="col s12" style={styles.form}>
        <InfoAccordion />
        <div className="row">
          <div className="input-field col s12">
            <input
              id="email"
              type="email"
              className="validate"
              name="email"
              value={formData.email}
              onChange={onChangeHandler}
            />
            <label htmlFor="email">Email</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={onChangeHandler}
            />
            <label htmlFor="password">Password</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <button
              className="btn"
              style={styles.button}
              onClick={submitFormHandler}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

const styles = {
  loginWrapper: {
    width: "100%",
    height: "calc(100vh - 100px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: "50px",
  },
  form: {
    width: "60%",
  },
  button: {
    background: "#297B9B",
    width: "100%",
  },
};
