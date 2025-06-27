const db = require('../configs/db-config');

exports.getAll = async () => {
  const result = await db.query('SELECT * FROM alumnos');
  return result.rows;
};

exports.getById = async (id) => {
  const result = await db.query('SELECT * FROM alumnos WHERE id = $1', [id]);
  return result.rows[0];
};

exports.create = async ({ nombre, edad, curso }) => {
  const result = await db.query(
    'INSERT INTO alumnos (nombre, edad, curso) VALUES ($1, $2, $3) RETURNING *',
    [nombre, edad, curso]
  );
  return result.rows[0];
};

exports.update = async (id, { nombre, edad, curso }) => {
  const result = await db.query(
    'UPDATE alumnos SET nombre = $1, edad = $2, curso = $3 WHERE id = $4 RETURNING *',
    [nombre, edad, curso, id]
  );
  return result.rows[0];
};

exports.remove = async (id) => {
  const result = await db.query('DELETE FROM alumnos WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
};
