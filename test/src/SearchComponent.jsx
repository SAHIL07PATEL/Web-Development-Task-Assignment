import React, { useState } from 'react';

const SearchComponent = () => {
  // Data you want to search through
  const [data, setData] = useState([
    'Apple', 'Banana', 'Orange', 'Grapes', 'Mango'
  ]);
  

  // State to store the search input
  const [searchTerm, setSearchTerm] = useState('');

  // Filtered results based on the search input
  const filteredData = data.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
const fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.includes("Banana"));  // Output: true
console.log(fruits.includes("Orange"));  // Output: false

  

  return (
    <div className="p-4">
      {/* Search input */}
      <input
        type="text"
        className="border p-2 mb-4"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      {/* Display the filtered results */}
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
