const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute(`
  SELECT * FROM Ebytr.task`);

  return result;
};

module.exports = {
  getAll,
};
