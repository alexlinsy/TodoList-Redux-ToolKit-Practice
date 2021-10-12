import "./styles.css";
import Form from "./Form";
import Todo from "./Todo";
import {
  selectTodos,
  selectFilterTodos,
  selectStatus,
  handleFilterTodos
} from "./features/TodoSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect /*useState*/ } from "react";

export default function App() {
  //const [todos, setTodos] = useState([]);
  //const [status, setStatus] = useState("all");
  //const [filterTodos, setFilterTodos] = useState([]);

  const dispatch = useDispatch();
  const newTodos = useSelector(selectTodos);
  const newFilterTodos = useSelector(selectFilterTodos);
  const newStatus = useSelector(selectStatus);

  useEffect(() => {
    /*function handleFilter(status) {
      if (status === "uncompleted") {
        setFilterTodos(todos.filter((todo) => !todo.completed));
      } else if (status === "completed") {
        setFilterTodos(todos.filter((todo) => todo.completed));
      } else {
        setFilterTodos(todos);
      }
    }
    handleFilter(status);*/
    dispatch(handleFilterTodos(newStatus));
  }, [dispatch, newTodos, newStatus]);

  /*function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
    dispatch(removeTodos(id));
  }

  function handleComplete(id) {
    setTodos(
      todos.map((todo) => {
        if (get(todo, "id") === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
    dispatch(comleteTodo(id));
  }*/

  return (
    <div className="App">
      <div className="form-container">
        <Form
          todos={newTodos}
          //setTodos={setTodos}
          //setStatus={setStatus}
        />
      </div>
      <div className="todo-container">
        {newFilterTodos.map((item, index) => (
          <Todo
            todo={item}
            key={index}
            //deleteTodo={deleteTodo}
            //handleComplete={handleComplete}
          />
        ))}
      </div>
    </div>
  );
}
