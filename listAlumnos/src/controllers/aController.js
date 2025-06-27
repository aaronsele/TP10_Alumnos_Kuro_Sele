const alumnoService = require('../services/alumnoService');

exports.getAll = async (req, res) => {
  const alumnos = await alumnoService.getAll();
  res.json(alumnos);
};

exports.getById = async (req, res) => {
  const alumno = await alumnoService.getById(req.params.id);
  alumno ? res.json(alumno) : res.status(404).json({ error: 'Alumno no encontrado' });
};

exports.create = async (req, res) => {
  const nuevo = await alumnoService.create(req.body);
  res.status(201).json(nuevo);
};

exports.update = async (req, res) => {
  const actualizado = await alumnoService.update(req.params.id, req.body);
  actualizado ? res.json(actualizado) : res.status(404).json({ error: 'Alumno no encontrado' });
};

exports.remove = async (req, res) => {
  const eliminado = await alumnoService.remove(req.params.id);
  eliminado ? res.json({ success: true }) : res.status(404).json({ error: 'Alumno no encontrado' });
};