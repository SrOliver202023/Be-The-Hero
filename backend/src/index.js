const express = require('express');
const app = express();
const routes = require('./routes');
/*
 Rota / Recurso
*/
/*
* Métodos HTTP:
*
* GET: Buscar/listar uma informação do back-end
* POST: Criar uma informação no back-end
* PUT: Alterar uma informação no back-end
* DELETE: Deletar uma informação no back-end
*/

/*
* Tipos de parâmetros:
* Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
* /users?page=2&name=Diego&

* Route Params: Parâmetros utilizados para identificar recursos 
* /users/:id = /users/231 com req.params

* request Body : Corpo da requisição Corpo da requisição, utilizado para criar ou alterar recursos
* JSON e POST
*/

/*
* SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
* NoSQL: MongoDB, CouchDB, etc
*/

/* 
* Driver: Select * FROM users
* Query Builder: table('users').select('*';)
* 
*/



app.use(express.json());

app.use(routes);
app.listen(3333,()=>{
    console.log('Hello World!');
});