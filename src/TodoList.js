import React from "react";

const TodoList = (props) => {
  return (
    <li>
      <input
        type="checkbox"
        defaultChecked={props.tufal}
        onChange={props.handleChange}
      />
      <label id="todolabel">{props.task}</label>
      {props.show && (
        <button className="edit" onClick={props.editTask}>
          Edit
        </button>
      )}
      <button className="delete" onClick={props.delTask}>
        Delete
      </button>
    </li>
  );
};

export default TodoList;
