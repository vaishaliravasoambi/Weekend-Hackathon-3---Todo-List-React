import React from "react";
import "./../styles/App.css";
import { useState } from "react";
function App() {
  const [items, setItems] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [todoId, setTodoId] = useState(0);
  const [showEditBox, setShowEditBox] = useState(false);
  const [editId, setEditId] = useState(1);
  const [editBoxText, setEditBoxText] = useState("");
  const handleChange = (event) => {
    setItems(event.target.value);
  };
  const handleAdd = () => {
    let todoListCopy = [...todoList];
    todoListCopy.push({ id: todoId, text: items });
    setTodoId(todoId + 1);
    setTodoList(todoListCopy);
    setItems("");
  };
  const handleEdit = (id) => {
    setShowEditBox(!showEditBox);
    setEditId(id);
  };
  const handleDelete = (id) => {
    let newTodoList = todoList.filter((task) => task !== todoList[id]);
    setTodoList(newTodoList);
  };
  const handleEditBox = (event) => {
    let text = event.target.value;
    setEditBoxText(text);
  };

  const saveEdit = () => {
    const tempList = [...todoList];
    tempList.forEach((task) => {
      if (task.id === editId) {
        task.text = editBoxText;
      }
    });
    setTodoList(tempList);
    setShowEditBox(false);
    setEditBoxText("");
  };

  return (
    <>
      <div id="main">
        <textarea id="task" value={items} onChange={handleChange} />
        <button id="btn" disabled={!items} onClick={handleAdd}>
          Add
        </button>
        <hr />
        {todoList.length === 0 ? (
          "No Task"
        ) : (
          <>
            {todoList.map((task, id) => {
              return (
                <div>
                  <li key={id} className="list">
                    {task.text}
                  </li>
                  <button className="edit" onClick={() => handleEdit(id)}>
                    Edit
                  </button>
                  <button className="delete" onClick={() => handleDelete(id)}>
                    Delete
                  </button>
                </div>
              );
            })}
          </>
        )}
        {showEditBox ? (
          <div>
            <textarea
              className="editTask"
              value={editBoxText}
              onChange={handleEditBox}
            />
            <button
              className="saveTask"
              disabled={!editBoxText}
              onClick={() => saveEdit()}
            >
              Save
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default App;
