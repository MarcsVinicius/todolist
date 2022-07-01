const taskService = require('../services/taskService');

const getAll = async (_req, res, next) => {
  try {
    const service = await taskService.getAll();
    res.status(200).json(service);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAll,
};
