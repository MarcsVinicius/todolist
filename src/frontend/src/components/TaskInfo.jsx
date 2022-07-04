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
    await updateTask(editInput.status, info.id, 'status');
    updateAllTasks().then(handleChangeEditBtn);
  };
  const handleClickDeleteBtn = async () => {
    await deleteTask(info.id);
    updateAllTasks();
  };
  return (
    <tr>
      { editMode === true
        ? (
          <>
            <td><input onChange={inputChange} value={editInput.taskName} /></td>
            <td>
              <select name="status" onClick={handleChangeSelect}>
                <option>Altere o status</option>
                <option value="0">Pendente</option>
                <option value="1">Em andamento</option>
                <option value="2">Concluído</option>
              </select>
            </td>
            <td>
              <button onClick={handleConfirmBtn} type="button">Confirm</button>
              <button onClick={handleChangeEditBtn} type="button">Cancel</button>
            </td>
          </>
        )
        : (
          <>
            <td>{`${info.task}`}</td>
            <td>{info.status}</td>
            <td>
              <button type="button" onClick={handleChangeEditBtn}>Edit</button>
              <button type="button" onClick={handleClickDeleteBtn}>Delete</button>
            </td>
            <td />
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
