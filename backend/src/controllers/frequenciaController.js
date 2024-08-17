const frequenciaModel = require('../models/frequenciaModel');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  getAllFrequencias(req, res) {
    const frequencias = frequenciaModel.findAll();
    res.json(frequencias);
  },
  getFrequenciaById(req, res) {
    const frequencia = frequenciaModel.findById(req.params.id);
    if (frequencia) {
      res.json(frequencia);
    } else {
      res.status(404).send('Frequência não encontrada');
    }
  },
  createFrequencia(req, res) {
    const novaFrequencia = { id: uuidv4(), ...req.body };
    const frequencia = frequenciaModel.create(novaFrequencia);
    res.status(201).json(frequencia);
  },
  updateFrequencia(req, res) {
    const frequenciaAtualizada = frequenciaModel.update(req.params.id, req.body);
    if (frequenciaAtualizada) {
      res.json(frequenciaAtualizada);
    } else {
      res.status(404).send('Frequência não encontrada');
    }
  },
  deleteFrequencia(req, res) {
    const frequenciaDeletada = frequenciaModel.delete(req.params.id);
    if (frequenciaDeletada) {
      res.json(frequenciaDeletada);
    } else {
      res.status(404).send('Frequência não encontrada');
    }
  }
};
