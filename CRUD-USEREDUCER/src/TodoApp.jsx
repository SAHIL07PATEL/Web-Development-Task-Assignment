/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useReducer, useState } from "react";

const dummyData = [];

const handleItem = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, { id: state.length + 1, name: action.name }];

    case "save":
      return state.map((v) => {
        if (v.id === action.id) {
          return { ...v, name: action.name };
        }
        return v;
      });

    case "delete":
      return state.filter((v) => v.id !== action.id);
    
    default:
      return state;
  }
};
const TodoApp = () => {
  const [items, setItems] = useReducer(handleItem, dummyData);
  const [newItem, setNewItem] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [updatedVal, setUpdatedVal] = useState("");

  const handleAddItem = () => {
    if (newItem !== "") {
      setItems({ type: "add", name: newItem });
      setNewItem("");
    }
  };

  const handleSave = (id) => {
    setItems({ type: "save", id, name: updatedVal });
    setEditingId(null);
  }



  return (
    <div>
      <input
        type="text"
        value={newItem}
        onChange={(e) => {
          setNewItem(e.target.value);
        }}
        placeholder="Enter Your Data"
      />
      <button
         onClick={handleAddItem}
        style={{ background: "blue", marginLeft: "10px" }}
      >
        Add Item
      </button>
      <br />
      <br />
      <br />
      <table border={1} cellPadding={30} cellSpacing={0}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        {
          (items.length === 0) ? (
            <tbody>
              <tr>
                <td colSpan="4">No Data Found</td>
              </tr>
            </tbody>
          ) : (
            items.map((item, index) => (
              <tbody key={index}>
                <tr>
                  <td>{item.id}</td>
                  <td>
                    {editingId === item.id ? (
                      <>
                        <input
                          type="text"
                          value={updatedVal}
                          onChange={(e) => {
                            setUpdatedVal(e.target.value);
                          }}
                          placeholder="Update Your Note"
                        />
                        <br /> <br />
                        <button
                          onClick={() => {
                            handleSave(item.id);
                          }}
                        >
                          Save
                        </button>
                      </>
                    ) : (
                      item.name
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        setEditingId(item.id);
                        setUpdatedVal(item.name);
                      }}
                      style={{ background: "green" }}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button onClick={()=>{setItems({type:"delete",id:item.id})}} style={{ background: "red" }}>Delete</button>
                  </td>
                </tr>
              </tbody>
            ))
          )
        }
      </table>
    </div>
  );
};

export default TodoApp;
