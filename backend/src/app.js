const express = require('express'); //importa express
const router = require('./router'); //importa router da pasta ./src/router.js

const app = express();

app.use(router); //define que toda requisição vai para o router




module.exports = app;