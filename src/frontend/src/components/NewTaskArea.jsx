import React, { useState, useContext } from 'react';
import newTask from '../services/newTask';
import tasksContext from '../context/tasksContext';
import FilterButtons from './FilterButtons';

export default function NewTaskArea() {
  const [input, setInput] = useState('');
  const [isInvalid, setInvalid] = useState(false);
  const { updateAllTasks } = useContext(tasksContext);
  const handleChange = (e) => {
    setInput(() => e.target.value);
  };
  const handleClick = async () => {
    await newTask(input)
      .catch(() => setInvalid(true));
    updateAllTasks();
    setInput(() => '');
  };
  return (
    <div className="my-5">
      <label className="font-bold text-gray-600 mx-5" htmlFor="newTask">
        New task
        <br />
        <input
          className="text-center bg-gray-200 appearance-none border-2 border-gray-200 rounded mx-15 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black-100"
          id="newTask"
          value={input}
          onClick={() => { setInvalid(() => false); }}
          onChange={handleChange}
          placeholder="insert here"
        />
      </label>
      <button
        className="align-middle text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        onClick={handleClick}
        type="submit"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
          <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </button>
      { isInvalid === true ? <p>invalid task</p> : null}
      <FilterButtons />
    </div>
  );
}
