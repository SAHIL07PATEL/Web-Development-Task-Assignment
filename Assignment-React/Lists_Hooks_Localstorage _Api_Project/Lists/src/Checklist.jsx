import React from 'react';

const Checklist = () => {
  const items = [
    'Use Array.map',
    'Not a for loop',
    'Give each item a unique key',
    'Avoid using array index as the key',
  ];

  return (
    <div className="bg-green-200 p-6 rounded-lg max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">The "React Way" to Render a List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="flex items-center mb-3">
            <span className="text-green-600 text-xl mr-2">&#10003;</span>
            <span className="text-lg">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Checklist;
