import React, { useContext } from 'react';
import tasksContext from '../context/tasksContext';

export default function FilterButtons() {
  const { updateByFilter } = useContext(tasksContext);
  const handleChange = (e) => {
    if (e.target.value !== 'none') updateByFilter(e.target.value);
  };
  return (
    <div className="m-5">
      <select className="font-bold text-gray-600 text-center bg-gray-200 appearance-none border-2 border-gray-200 rounded mx-15 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black-100" onClick={handleChange}>
        <option value="none">Select a filter</option>
        <option value="a">by A-Z</option>
        <option value="s">by status</option>
      </select>
    </div>
  );
}
