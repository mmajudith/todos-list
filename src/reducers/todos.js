import { toast } from "react-toastify";
import { ADD_TODO_ITEM, DELETE_TODO_ITEM } from "../constants";

const INITIAL_STATE = [];

export const addTodo = (todo) => {
  let todos = JSON.parse(localStorage.getItem("todos"));
  if (!todos) {
    todos = [];
  }
  const exist = todos.filter(
    (item) => item.title.toLowerCase() === todo.title.toLowerCase()
  );
  if (exist.length > 0) {
    toast.warn("Todo already exists");
    return null;
  }
  todos = [...todos, todo];

  localStorage.setItem("todos", JSON.stringify(todos));
  return {
    type: ADD_TODO_ITEM,
    payload: todos,
  };
};

export const persistTodos = () => {
  const todos = JSON.parse(localStorage.getItem("todos"));
  return {
    type: ADD_TODO_ITEM,
    payload: todos,
  };
};

export const markCompleted = (title) => {
  let todos = JSON.parse(localStorage.getItem("todos"));
  todos = todos.map((todo) => {
    if (todo.title === title) {
      return { ...todo, isDone: true };
    }
    return todo;
  });
  localStorage.setItem("todos", JSON.stringify(todos));
  return {
    type: ADD_TODO_ITEM,
    payload: todos,
  };
};

export const deleteTodo = (title) => {
  let todos = JSON.parse(localStorage.getItem("todos"));
  todos = todos.filter((todo) => todo.title !== title);
  localStorage.setItem("todos", JSON.stringify(todos));
  return {
    type: ADD_TODO_ITEM,
    payload: todos,
  };
}

const todoReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TODO_ITEM:
      return payload;
    case DELETE_TODO_ITEM:
      return payload;
    default:
      return state;
  }
};

export default todoReducer;
