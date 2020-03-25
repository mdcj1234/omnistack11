const express = require('express');

const app = express();

app.use(express.json());

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
  * Relacionais
  * Não Relacionais 
  */

  
app.post('/users', (request, response) => {

    const body = request.body;

    console.log(body);

    return response.json({
        evento : 'Semana Omnistack 11.0',
        aluno : 'Marcio Jr',
    });
})

app.listen(3333);