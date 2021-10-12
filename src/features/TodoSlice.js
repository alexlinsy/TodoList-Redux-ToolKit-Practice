import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    filterTodos: [],
    status: "all"
  },
  reducers: {
    addTodos: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    removeTodos: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    comleteTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      });
    },
    handleFilterTodos: (state, action) => {
      if (action.payload === "uncompleted") {
        state.filterTodos = state.todos.filter((todo) => !todo.completed);
      } else if (action.payload === "completed") {
        state.filterTodos = state.todos.filter((todo) => todo.completed);
      } else {
        state.filterTodos = state.todos;
      }
    },
    todoStatus: (state, action) => {
      state.status = action.payload;
    }
  }
});

export const {
  addTodos,
  removeTodos,
  handleFilterTodos,
  comleteTodo,
  todoStatus
} = slice.actions;

export const selectTodos = (state) => state.todos.todos;
export const selectFilterTodos = (state) => state.todos.filterTodos;
export const selectStatus = (state) => state.todos.status;

export default slice.reducer;
