import React from "react";
import axios from "../../axios";
import "./styles.css";
const ListContainerClass = "ListContainer";
const RowClass = "Row";
const TextClass = "Text";
const DeleteIconClass = "DeleteIcon";

function TodoList({ todos, fetchData }) {
  const updateTodo = async (id) => {
    try {
      const response = await axios.put(`/todos/${id}`, {
        id,
      });
      fetchData();
      return response.data.json;
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const response = await axios.delete(`/todos/${id}`, {
        id,
      });
      fetchData();
      return response.data.json;
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <ul className={ListContainerClass}>
        {todos?.map((todo) => (
          <li key={todo._id} className={RowClass}>
            <span
              className={TextClass + (todo.completed ? " isCompleted" : "")}
              onClick={() => updateTodo(todo._id)}
            >
              {todo.text}
            </span>
            <span
              className={DeleteIconClass}
              data-testid="close"
              onClick={() => deleteTodo(todo._id)}
            >
              X
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
