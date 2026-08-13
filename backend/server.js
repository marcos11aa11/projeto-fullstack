const express = require('express');
const app = express();

app.use((req, res, next)=> {
    console.log("Acesso:", req.method, req.url);
    next();
})

app.get("/", (req, res) => {
    res.send(`
        <h1>Menu</h1>
        <a href="/aluno/Milena">Ir para aluno</a><br>
        <a href="/status">Ir para status</a>
        `);
});

// 1. Define uma rota (endpoint)
app.get('/', (req, res) => {
    res.send('Hello World! Este é o primeiro servidor backend funcionando');
});

app.get('/aluno', (req, res) => {
    res.send('ROTA OK')
});

app.get("/aluno/:nome", (req, res) => {
    const nome = req.params.nome;
    res.send(`Olá, ${nome}!`)
})

app.get("/aluno/:a/:b", (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    const resultado = a + b;
    res.send(`O resultado é ${resultado}!`);
})

app.get("/status", (req, res) => {
    res.json({
        servidor: "online",
        disciplina: "CP3",
        professora: "Milena",
        hora: new Date().toLocaleString()
    })
})

// 2. Lida o servidor para escutar na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
})