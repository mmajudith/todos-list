import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../reducers/auth";

const Header = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <nav style={{ background: "#3C3D6B" }}>
      <div className="nav-wrapper container">
        <Link to="/" className="brand-logo left">
          Todo-App
        </Link>
        <ul id="nav-mobile" className="right">
          {auth?.email ? (
            <Fragment>
              <li>
                <button
                  className="btn"
                  style={{ background: "#297B9B" }}
                  onClick={() => dispatch(logoutUser())}
                >
                  Logout
                </button>
              </li>
            </Fragment>
          ) : (
            <Fragment>
              <li>
                <Link to="/">Login</Link>
              </li>
            </Fragment>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
