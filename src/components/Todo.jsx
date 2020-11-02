import React, { useState } from "react";

const Todo = (props) => {
  return (
    <>
      <div>
        <li>
          <button
            className="delete"
            onClick={() => {
              props.onSelect(props.id);
            }}
            // key={index}
            // id={index}
          >
            x
          </button>
          {props.text}
        </li>
      </div>
    </>
  );
};

export default Todo;
