import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addTodo } from "../reducers/todos";

const iDATA = {
  title: "",
  isDone: false,
};

const TodoNew = ({ setShowAdd }) => {
  const [data, setData] = useState(iDATA);
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const addTodoHandler = () => {
    if (data.title) {
      const action = addTodo(data);
      if (action !== null) {
        dispatch(action);
        setShowAdd(false);
        toast.success("Todo added successfully...")
      }
    }
  };

  return (
    <div className="col s12" style={styles.form}>
      <div className="row">
        <div className="input-field col s12">
          <input
            id="title"
            type="text"
            className="validate"
            name="title"
            value={data.title}
            onChange={onChangeHandler}
          />
          <label htmlFor="title">Title</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <button
            className="btn"
            style={styles.button}
            onClick={addTodoHandler}
          >
            Add Todo
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoNew;

const styles = {
  form: {
    width: "100%",
    marginTop: "10px",
  },
  button: {
    background: "#297B9B",
    width: "100%",
  },
};
