import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/TodoSlice";

export default configureStore({
  reducer: {
    todos: todosReducer
  }
});
