import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import M from "materialize-css";

import ProtectedRoute from "./components/ProtectedRoute";
import Header from "./components/Header";
import Login from "./components/Login";
import { useDispatch } from "react-redux";
import { persistLogin } from "./reducers/auth";
import TodoList from "./components/TodoList";
import { persistTodos } from "./reducers/todos";
import { ToastContainer } from "react-toastify";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(persistLogin());
    dispatch(persistTodos());
    M.AutoInit();
  }, [dispatch]);

  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route
              exact
              path="/todo"
              element={
                <ProtectedRoute>
                  <TodoList />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
