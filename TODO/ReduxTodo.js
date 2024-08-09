import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addAction,
  removeAction,
  removeAllAction,
} from "./actions/todoactions";
import EditTodo from "./EditTodo";
import "./ReduxTodo";
const ReduxTodo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const [editingTodoId, setEditingTodoId] = useState(null);

  const addTodo = (e) => {
    e.preventDefault();
    const todo = { name: e.target.name.value, status: e.target.status.value };
    dispatch(addAction(todo));
  };

  const deleteTodo = (id) => {
    dispatch(removeAction(id));
  };

  const deleteAllTodos = () => {
    dispatch(removeAllAction());
  };

  const startEditing = (id) => {
    setEditingTodoId(id);
  };

  const closeEdit = () => {
    setEditingTodoId(null);
  };

  return (
    <div className="todo">
      <form onSubmit={addTodo}>
        <input type="text" name="name" placeholder="Todo Name" />
        <select name="status">
          <option value="complete">Complete</option>
          <option value="incomplete">Incomplete</option>
        </select>
        <button type="submit">Add Todo</button>
      </form>

      <button onClick={deleteAllTodos}>Delete All Todos</button>

      {todos.map((todo) => (
        <div key={todo.id}>
          <div>Name: {todo.name}</div>
          <div>Status: {todo.status}</div>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          <button onClick={() => startEditing(todo.id)}>Edit</button>
        </div>
      ))}

      {editingTodoId && <EditTodo todoId={editingTodoId} onClose={closeEdit} />}
    </div>
  );
};

export default ReduxTodo;
