const express = require('require');
const routes = express.Router();

routes.get('/', (req, res)=>{
    return res.send('Hello World!');
});

app.post('/getjson', (req, res)=>{
    const params = req.body;
    console.log(params);
    return res.json({
        evento:'Semana OmniStack 11.0',
        aluno: 'Cleiton Souza'
    });
});

module.exports ={}