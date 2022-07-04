import React, { useContext, useEffect } from 'react';
import tasksContext from '../context/tasksContext';

export default function Tasks() {
  const { tasks, updateAllTasks } = useContext(tasksContext);
  useEffect(() => {
    const updateTasks = async () => {
      updateAllTasks();
    };

    return updateTasks;
  }, []);
  return (
    <section>
      { tasks !== undefined && tasks.length !== 0 ? tasks[0].task : <p>loading</p>}
    </section>
  );
}
