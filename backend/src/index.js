const express = require("express");
const cors   = require("cors");
const routes = require('./routes');

const app = express();

app.use(cors());

//Converte para json
app.use(express.json());

//Usa as rotas
app.use(routes);

//Ouvir a porta
app.listen(3333);