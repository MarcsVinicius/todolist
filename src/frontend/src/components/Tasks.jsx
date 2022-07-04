import React, { useContext, useEffect } from 'react';
import tasksContext from '../context/tasksContext';
import TaskInfo from './TaskInfo';
import NewTaskArea from './NewTaskArea';

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
      <h1>Tasks</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          { tasks !== undefined && tasks.length !== 0
            ? tasks.map((info) => <TaskInfo key={`${info.task}${info.id}`} info={info} />)
            : null}
        </tbody>
      </table>
      <NewTaskArea />
    </section>
  );
}
