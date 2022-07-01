const taskModel = require('../model/taskModel');

const getAll = async () => {
  const result = await taskModel.getAll();

  return result;
};

module.exports = {
  getAll,
};
