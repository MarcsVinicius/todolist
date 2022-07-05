import React, { useState, useMemo } from 'react';
import propTypes from 'prop-types';
import fetchAll from '../services/fetchAll';
import fetchFilter from '../services/filterTask';
import tasksContext from './tasksContext';

export default function TasksProvider({ children }) {
  const [tasks, setTask] = useState([]);

  const updateAllTasks = async () => {
    const getApi = await fetchAll();
    setTask(() => getApi);
  };

  const updateByFilter = async (type) => {
    const getApi = await fetchFilter(type);
    setTask(() => getApi);
  };

  const props = useMemo(() => ({
    tasks,
    updateAllTasks,
    updateByFilter,
  }));

  return (
    <tasksContext.Provider
      value={props}
    >
      { children }
    </tasksContext.Provider>
  );
}

TasksProvider.propTypes = {
  children: propTypes.node.isRequired,
};
