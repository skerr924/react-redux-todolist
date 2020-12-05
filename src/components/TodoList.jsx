import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

function TodoList() {
  const todos = useSelector((state) => {
    return state.todos;
  });
  console.log(todos);
  return (
    <div className="my-4">
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
}
export default TodoList;
