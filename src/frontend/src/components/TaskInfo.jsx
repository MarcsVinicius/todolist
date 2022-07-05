import React, { useContext, useState } from 'react';
import propTypes from 'prop-types';
import tasksContext from '../context/tasksContext';
import updateTask from '../services/updateTask';
import deleteTask from '../services/deleteTask';

export default function TaskInfo({ info }) {
  const { updateAllTasks } = useContext(tasksContext);
  const [editMode, setEditMode] = useState(false);
  const [editInput, setEditInputs] = useState({
    taskName: info.task,
    status: undefined,
  });
  const handleChangeSelect = async (e) => {
    setEditInputs((prevState) => ({
      ...prevState,
      status: e.target.value,
    }));
  };
  const handleChangeEditBtn = async () => {
    setEditMode((prevState) => !prevState);
  };
  const inputChange = (e) => {
    setEditInputs((prevState) => ({
      ...prevState,
      taskName: e.target.value,
    }));
  };
  const handleConfirmBtn = async () => {
    await updateTask(editInput.taskName, info.id, 'task');
    if (editInput.status !== 'none') {
      await updateTask(editInput.status, info.id, 'status');
    }
    updateAllTasks().then((handleChangeEditBtn));
  };
  const handleClickDeleteBtn = async () => {
    await deleteTask(info.id);
    updateAllTasks();
  };
  return (
    <tr className="whitespace-nowrap">
      { editMode === true
        ? (
          <>
            <td className="max-w-sm px-6 text-center py-4 bg-yellow">
              <input
                className="font-bold text-gray-600 text-center text-center bg-gray-200 appearance-none border-2 border-gray-200 rounded mx-15 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black-100"
                type="text"
                onChange={inputChange}
                value={editInput.taskName}
              />
            </td>
            <td className="max-w-sm px-6 text-center py-4">
              <select className="font-bold text-gray-600 text-center bg-gray-200 appearance-none border-2 border-gray-200 rounded mx-15 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black-100" name="status" onClick={handleChangeSelect}>
                <option value="none">Change status</option>
                <option value="0">Pendente</option>
                <option value="1">Em andamento</option>
                <option value="2">Concluído</option>
              </select>
            </td>
            <td className="min-w-sm px-6 text-center py-4">
              <button
                className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                onClick={handleConfirmBtn}
                type="button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Confirm
              </button>
              <button
                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr- dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                onClick={handleChangeEditBtn}
                type="button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Cancel
              </button>
            </td>
          </>
        )
        : (
          <>
            <td className="min-w-sm px-6 font-bold text-gray-600 text-center py-4">{`${info.task}`}</td>
            <td className="px-6 font-bold text-gray-600 text-center py-4">{info.status}</td>
            <td className="px-6 font-bold text-gray-600 text-center py-4">
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
                onClick={handleChangeEditBtn}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </button>
              <button
                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                type="button"
                onClick={handleClickDeleteBtn}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </td>
          </>
        )}
    </tr>
  );
}

TaskInfo.propTypes = {
  info: propTypes.shape({
    task: propTypes.string,
    id: propTypes.number,
    status: propTypes.string,
  }).isRequired,
};
