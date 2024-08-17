let alunos = [];

module.exports = {
  findAll() {
    return alunos;
  },
  findById(id) {
    return alunos.find(aluno => aluno.id === id);
  },
  create(aluno) {
    alunos.push(aluno);
    return aluno;
  },
  update(id, newAlunoData) {
    const index = alunos.findIndex(aluno => aluno.id === id);
    if (index !== -1) {
      alunos[index] = { ...alunos[index], ...newAlunoData };
      return alunos[index];
    }
    return null;
  },
  delete(id) {
    const index = alunos.findIndex(aluno => aluno.id === id);
    if (index !== -1) {
      return alunos.splice(index, 1)[0];
    }
    return null;
  }
};
