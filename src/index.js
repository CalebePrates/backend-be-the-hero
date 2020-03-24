const express = require('express');
const cors = require('cors')
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); //Informando para o app que utilizaremos JSON nas requisições
app.use(routes);

app.listen(3333);