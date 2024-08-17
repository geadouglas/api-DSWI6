const express = require('express');
const app = express();
const alunoRoutes = require('./routes/alunoRoutes');
const frequenciaRoutes = require('./routes/frequenciaRoutes');

app.use(express.json());

app.use('/alunos', alunoRoutes);
app.use('/frequencias', frequenciaRoutes);

module.exports = app;
