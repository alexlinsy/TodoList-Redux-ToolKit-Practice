import React from "react";
import { get } from "loadsh";
import { useDispatch } from "react-redux";
import { removeTodos, comleteTodo } from "./features/TodoSlice";
import PropTypes from "prop-types";

const Todo = ({ todo, deleteTodo, handleComplete }) => {
  const dispatch = useDispatch();
  return (
    <div className="todo">
      <div className={`todo-text ${get(todo, "completed") ? "completed" : ""}`}>
        {get(todo, "todo")}
      </div>
      <button
        className="todo-complete"
        //onClick={() => handleComplete(get(todo, "id"))}
        onClick={() => dispatch(comleteTodo(get(todo, "id")))}
      >
        <i className="fas fa-check"></i>
      </button>
      <button
        className="todo-delete"
        //onClick={() => deleteTodo(get(todo, "id"))}
        onClick={() => dispatch(removeTodos(get(todo, "id")))}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    todo: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
  })
};

export default Todo;
