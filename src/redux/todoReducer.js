// import {addTodo, deleteTodo, updateTodo} from "./actions";
import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "./actions";
import defaultState from "./states";

let todoReducer = (state = defaultState, action) => {
  let { todos } = state;
  let newTodos = [...todos];
  switch (action.type) {
    case ADD_TODO:
      newTodos.push(action.payload);
      break;
    case DELETE_TODO:
      newTodos = newTodos.filter((todo) => todo.id !== action.payload);
      break;
    case UPDATE_TODO:
      let index = -1;
      console.log(action);

      for (let i = 0; i < newTodos.length; i++) {
        index++;

        if (newTodos[i].id === action.payload.id) {
          break;
        }
      }
      if (index !== -1) {
        newTodos[index] = action.payload;
      }
      break;
    default:
      break;
  }
  console.log(newTodos, Object.assign(state, { todos: newTodos }));
  return Object.assign(state, { todos: newTodos });
};

export default todoReducer;
