import React, { useState } from "react";
import "./../styles/App.css";
import Todo from "./components/Todo";
function App() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const handleDelete = (id) => {
    console.log("deleted");
    setItems((oldItems) => {
      return oldItems.filter((arrEl, index) => {
        return index !== id;
      });
    });
  };

  const itemEvent = (e) => {
    setInputList(e.target.value);
  };
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>TODO-LIST</h1>
          <br />
          <input
            value={inputList}
            type="text"
            placeholder="Add a items"
            onChange={itemEvent}
          />
          <button className="add" onClick={listOfItems}>
            +
          </button>
          <ol>
            {/* <li>{inputList}</li> */}
            {items.map((itemvalue, index) => {
              return (
                <Todo
                  key={index}
                  id={index}
                  text={itemvalue}
                  onSelect={handleDelete}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
