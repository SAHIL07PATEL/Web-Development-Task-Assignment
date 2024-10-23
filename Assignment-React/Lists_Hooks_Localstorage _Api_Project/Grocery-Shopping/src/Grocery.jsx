import React, { useEffect, useState } from "react";

const Grocery = () => {
  const [items, setItems] = useState();
  const [editingItemId, setEditingItemId] = useState(null); 
  const [newItem, setNewItem] = useState("");
  const [newName, setNewName] = useState(""); 


  useEffect(() => {
    fetch("http://localhost:3001/grocery",{
      method:"GET",
      headers:{
        'content-type':'application/json'
      },
    })
    .then((res)=>res.json())
    .then((data)=>setItems(data))
  }, []);

  const handleEdit = (item) => {
    setEditingItemId(item.id); 
    setNewName(item.name); 
  };

  const handleInputChange = (e) => {
    setNewName(e.target.value); 
  };

  const saveEdit = (id) => {
    const updatedItem = { name: newName };

    fetch(`http://localhost:3001/grocery/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedItem)
    })
    .then((res) => res.json())
    .then(() => {
      setItems(
        items.map((item) =>
          item.id === id ? { ...item, name: newName } : item
        )
      );
      setEditingItemId(null); 
    });
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (newItem === "") {
      alert("Please fill in the data");
    } else {
      const newItemData = { name: newItem };

      fetch("http://localhost:3001/grocery", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newItemData)
      })
      .then((res) => res.json())
      .then((data) => {
        setItems([...items, data]);
        setNewItem("");
      });
    }
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/grocery/${id}`, {
      method: "DELETE"
    })
    .then(() => {
      setItems(items.filter((item) => item.id !== id));
    });
  };
  const handleListDelete = () =>{
    setItems([])
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-400">
      <div className="bg-gray-800 rounded-lg p-8 shadow-lg w-full max-w-md">
        <h1 className="text-white text-2xl font-bold mb-6 text-center">
          Grocery Shopping
        </h1>
        <div className="space-y-4">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Add something to your list"
              className="w-full px-4 py-2 rounded bg-gray-600 text-gray-400 focus:outline-none"
              onChange={(e)=>setNewItem(e.target.value)}
            />
            <button onClick={handleClick} className="px-6 py-2 rounded bg-gradient-to-r from-purple-500 to-blue-500 text-white">
              Add
            </button>
          </div>

          {items && items.map((item) => (
            <div key={item.id}>
              <div className="flex items-center space-x-4">
                {editingItemId === item.id ? (
                  
                  <input
                    type="text"
                    value={newName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded bg-gray-600 text-white focus:outline-none"
                  />
                ) : (
                  
                  <label className="w-full text-center px-4 py-2 rounded bg-gradient-to-r from-purple-500 to-blue-500 text-white focus:outline-none">
                    {item.name}
                  </label>
                )}
                {editingItemId === item.id ? (
                  
                  <button
                    onClick={() => saveEdit(item.id)}
                    className="text-white hover:text-green-500"
                  >
                    Save
                  </button>
                ) : (
                  <>
                    <button onClick={()=>{handleDelete(item.id)}} className="text-white hover:text-red-500">
                      <i className="ri-delete-bin-6-line" />
                    </button>
                    <button
                      onClick={() => handleEdit(item)}
                      className="text-white hover:text-yellow-500"
                    >
                      <i className="ri-edit-box-line" />
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}

          <div className="flex justify-center">
            <button onClick={handleListDelete} className="mt-4 px-6 py-2 rounded bg-white text-gray-800">
              Delete List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grocery;
