import React, { useState, useContext } from 'react';
import newTask from '../services/newTask';
import tasksContext from '../context/tasksContext';

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
    <>
      <label htmlFor="newTask">
        New task
        <input
          id="newTask"
          value={input}
          onClick={() => { setInvalid(() => false); }}
          onChange={handleChange}
          placeholder="insert here"
        />
      </label>
      <button onClick={handleClick} type="submit">submit</button>
      { isInvalid === true ? <p>invalid task</p> : null}
    </>
  );
}
