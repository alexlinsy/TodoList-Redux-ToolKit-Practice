import React, { useState } from "react";
import PropTypes from "prop-types";
import { addTodos, todoStatus } from "./features/TodoSlice";
import { useDispatch } from "react-redux";
import "./styles.css";

const Form = ({ todos, setTodos, setStatus }) => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  function textInputHandler(e) {
    e.preventDefault();
    setInputText(e.target.value);
  }

  function submitTodo() {
    if (inputText !== null) {
      /*setTodos([
        ...todos,
        {
          todo: inputText,
          completed: false,
          id: Math.random(100)
        }
      ]);*/
      dispatch(
        addTodos({
          todo: inputText,
          completed: false,
          id: Math.random(100)
        })
      );
    }
    setInputText(" ");
  }

  function handleStatus(e) {
    //setStatus(e.target.value);
    dispatch(todoStatus(e.target.value));
  }

  return (
    <div className="form">
      <p className="todo-title">To Do List</p>
      <div className="form-inputs">
        <input
          className="input-todo"
          onChange={textInputHandler}
          value={inputText}
        />
        <button className="todo-button" onClick={submitTodo}>
          <i className="fas fa-plus-square" id="plus"></i>
        </button>
        <div className="select">
          <select className="filter-todos" onChange={handleStatus}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </div>
    </div>
  );
};

Form.propTypes = {
  setTodos: PropTypes.func.isRequired,
  setStatus: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      todo: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired
    })
  )
};

export default Form;
