const express = require('express');
const bodyVerify = require('../middlewares/bodyVerify');
const taskControllers = require('../controllers/taskControllers');
const { updateQueryVerify } = require('../middlewares/queryVerify');

const router = express.Router();

router.get('/', taskControllers.getAll);
router.post('/', bodyVerify.newTask, taskControllers.newTask);
router.delete('/:id', taskControllers.deleteTask);
router.put('/:id', updateQueryVerify, bodyVerify.updateContent, taskControllers.updateTask);

module.exports = router;
