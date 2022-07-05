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
    <section className="h-screen bg-gray-300">
      <h1 className="text-blue-400 font-black text-center text-6xl px-6 py-7">Tasks</h1>
      <div className="bg-white h-40 py-2 my-3">
        <NewTaskArea />
      </div>
      <div className="container flex justify-center">
        <div className="w-full">
          <div className="border-b border-gray-200 shadow">
            <table className="w-screen divide-y divide-gray-300 ">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-2 text-xs text-gray-500">Name</th>
                  <th className="px-6 py-2 text-xs text-gray-500">Status</th>
                  <th className="px-6 py-2 text-xs text-gray-500">Edit</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-300">
                { tasks !== undefined && tasks.length !== 0
                  ? tasks.map((info) => <TaskInfo key={`${info.task}${info.id}`} info={info} />)
                  : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
