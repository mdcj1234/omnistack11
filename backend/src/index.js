const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

/**
 * Métodos HTPP:
 * 
 * GET: Buscar uma informação no back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após '?'
 * Route Params: Parâmetros utilizados para identificar recursos ':'
 * Request Body: Corpo da requisição. Usado para criar ou alterar recursos.
 */

 /**
  * Banco de Dados:
  * 
  * Relacionais
  * Não Relacionais 
  */

app.listen(3333);