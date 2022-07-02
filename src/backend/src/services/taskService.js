const taskModel = require('../model/taskModel');

const getAll = async (query) => {
  let result;
  switch (query) {
    case 'a':
      result = await taskModel.getByAlphabetOrder();
      break;
    case 's':
      result = await taskModel.getByStatusOrder();
      break;
    default:
      result = await taskModel.getAll();
  }
  return result.map((task) => {
    let status;
    switch (task.status) {
      case 0:
        status = 'Pendente';
        break;
      case 1:
        status = 'Em andamento';
        break;
      case 2:
        status = 'Concluido';
        break;
      default:
        status = 'Invalid';
    }
    return {
      ...task,
      status,
    };
  });
};

const newTask = async (task) => {
  const newTaskModel = await taskModel.newTask(task);

  return { task, ...newTaskModel };
};

const deleteTask = async (task) => {
  await taskModel.deleteTask(task);
};

const updateTask = async (id, content, query) => {
  const exists = await getAll()
    .then((tasks) => tasks.find((t) => t.id === id));
  if (!exists) {
    const err = {
      status: 404,
      message: 'Task not found',
    };
    throw err;
  }
  if (query === 'status' && content > 2) {
    const err = {
      status: 406,
      message: 'A valid status is required, check readme',
    };
    throw err;
  }
  switch (query) {
    case 'task':
      await taskModel.updateTask(id, content);
      break;
    case 'status':
      await taskModel.updateStatus(id, content);
      break;
    default:
  }
};

module.exports = {
  getAll,
  newTask,
  deleteTask,
  updateTask,
};
