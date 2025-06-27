const alumnoRepository = require('../repositories/alumnoRepository');

exports.getAll = () => alumnoRepository.getAll();
exports.getById = (id) => alumnoRepository.getById(id);
exports.create = (data) => alumnoRepository.create(data);
exports.update = (id, data) => alumnoRepository.update(id, data);
exports.remove = (id) => alumnoRepository.remove(id);
