import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { deleteTodo, markCompleted } from "../reducers/todos";
import TodoNew from "./TodoNew";

const TodoList = () => {
  const [showAdd, setShowAdd] = useState(false);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const deleteTodoItem = (title) => {
    dispatch(deleteTodo(title));
    toast.success("Todo deleted successfully!");
  };

  return (
    <div style={styles.todosWrapper}>
      <div style={styles.todos}>
        <button
          className="btn"
          style={styles.button}
          onClick={() => setShowAdd(!showAdd)}
        >
          {showAdd ? "Todo list" : "Add New"}
        </button>
        <div>
          {showAdd ? (
            <TodoNew setShowAdd={setShowAdd} />
          ) : todos && todos.length > 0 ? (
            <ul className="collection">
              {todos.map((todo, index) => (
                <li
                  className="collection-item avatar"
                  style={styles.todo}
                  key={index}
                >
                  <div style={styles.title}>
                    <p
                      style={{
                        textDecoration: todo.isDone ? "line-through" : "unset",
                      }}
                    >
                      {todo.title}
                    </p>
                  </div>
                  <div>
                    {!todo.isDone && (
                      <button
                        className="btn"
                        style={styles.button}
                        onClick={() => dispatch(markCompleted(todo.title))}
                      >
                        Done
                      </button>
                    )}
                    <button
                      className="btn"
                      style={{ background: "red" }}
                      onClick={() => deleteTodoItem(todo.title)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div>
              <h4>No Todo item to display...</h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoList;

const styles = {
  todosWrapper: {
    width: "100%",
    height: "calc(100vh - 100px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: "50px",
  },
  todos: {
    width: "60%",
  },
  todo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 10px",
    minHeight: 50,
  },
  title: {
    width: "50%",
    overflow: "scroll",
  },
  button: {
    background: "#297B9B",
  },
};
