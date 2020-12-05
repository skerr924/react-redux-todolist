import React from "react";

function TodoItem() {
  return (
    <div>
      <h3>Todo Item</h3>
      <div className="row">
        <div>#1</div>
        <div>Title</div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
}
export default TodoItem;
