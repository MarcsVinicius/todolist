const taskService = require('../services/taskService');

const getAll = async (req, res, next) => {
  try {
    const service = await taskService.getAll(req.query.order);
    res.status(200).json(service);
  } catch (err) {
    next(err);
  }
};

const newTask = async (req, res, next) => {
  try {
    const { task } = req.body;
    const service = await taskService.newTask(task);
    res.status(201).json(service);
  } catch (err) {
    next(err);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    await taskService.deleteTask(id);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};

const updateTask = async (req, res, next) => {
  try {
    const { type } = req.query;
    const { id } = req.params;
    const { content } = req.body;
    await taskService.updateTask(parseInt(id, 10), content, type);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAll,
  newTask,
  deleteTask,
  updateTask,
};
