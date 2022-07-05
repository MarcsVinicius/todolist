import React, { useContext } from 'react';
import tasksContext from '../context/tasksContext';

export default function FilterButtons() {
  const { updateByFilter } = useContext(tasksContext);
  const handleChange = (e) => {
    if (e.target.value !== 'none') updateByFilter(e.target.value);
  };
  return (
    <select onClick={handleChange}>
      <option value="none">Select a filter</option>
      <option value="a">by A-Z</option>
      <option value="s">by status</option>
    </select>
  );
}
