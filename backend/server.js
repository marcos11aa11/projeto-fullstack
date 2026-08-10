const express = require('express');
const app = express();

// 1. Define uma rota (endpoint)
app.get('/', (req, res) => {
    res.send('Hello World! Este é o primeiro servidor backend fumcionando');
});

// 2. Lida o servidor para escutar na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
})