const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute(`
  SELECT * FROM Ebytr.task`);

  return result;
};

const getByAlphabetOrder = async () => {
  const [result] = await connection.execute(`
  SELECT * FROM Ebytr.task
  ORDER BY task`);

  return result;
};

const getByStatusOrder = async () => {
  const [result] = await connection.execute(`
  SELECT * FROM Ebytr.task
  ORDER BY status DESC`);

  return result;
};

const newTask = async (task) => {
  const [result] = await connection.execute(`
  INSERT INTO Ebytr.task (task) VALUES (?);`, [task]);

  return {
    id: result.insertId,
  };
};

const deleteTask = async (id) => {
  const [result] = await connection.execute(`
  DELETE FROM Ebytr.task WHERE id = ?;`, [id]);

  return result;
};

const updateTask = async (id, task) => {
  await connection.execute(`
  UPDATE Ebytr.task 
  SET task = ?
  WHERE id = ?;`, [task, id]);
};

const updateStatus = async (id, status) => {
  await connection.execute(`UPDATE Ebytr.task 
  SET status = ?
  WHERE id = ?;`, [status, id]);
  return { id };
};

module.exports = {
  getAll,
  getByAlphabetOrder,
  getByStatusOrder,
  newTask,
  deleteTask,
  updateTask,
  updateStatus,
};
