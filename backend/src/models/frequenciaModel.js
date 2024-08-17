let frequencias = [];

module.exports = {
  findAll() {
    return frequencias;
  },
  findById(id) {
    return frequencias.find(frequencia => frequencia.id === id);
  },
  create(frequencia) {
    frequencias.push(frequencia);
    return frequencia;
  },
  update(id, newFrequenciaData) {
    const index = frequencias.findIndex(frequencia => frequencia.id === id);
    if (index !== -1) {
      frequencias[index] = { ...frequencias[index], ...newFrequenciaData };
      return frequencias[index];
    }
    return null;
  },
  delete(id) {
    const index = frequencias.findIndex(frequencia => frequencia.id === id);
    if (index !== -1) {
      return frequencias.splice(index, 1)[0];
    }
    return null;
  }
};
