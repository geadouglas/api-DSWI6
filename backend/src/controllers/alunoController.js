const alunoModel = require('../models/alunoModel');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  getAllAlunos(req, res) {
    const alunos = alunoModel.findAll();
    res.json(alunos);
  },
  getAlunoById(req, res) {
    const aluno = alunoModel.findById(req.params.id);
    if (aluno) {
      res.json(aluno);
    } else {
      res.status(404).send('Aluno não encontrado');
    }
  },
  createAluno(req, res) {
    const novoAluno = { id: uuidv4(), ...req.body };
    const aluno = alunoModel.create(novoAluno);
    res.status(201).json(aluno);
  },
  updateAluno(req, res) {
    const alunoAtualizado = alunoModel.update(req.params.id, req.body);
    if (alunoAtualizado) {
      res.json(alunoAtualizado);
    } else {
      res.status(404).send('Aluno não encontrado');
    }
  },
  deleteAluno(req, res) {
    const alunoDeletado = alunoModel.delete(req.params.id);
    if (alunoDeletado) {
      res.json(alunoDeletado);
    } else {
      res.status(404).send('Aluno não encontrado');
    }
  }
};
