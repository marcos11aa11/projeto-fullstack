const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log("Acesso:", req.method, req.url);
    next();
});

app.get("/", (req, res) => {
    res.send(`
        <h1>Menu</h1>
        <a href="/inicio">Ir para inicio</a><br>
        <a href="/aluno/Milena">Ir para aluno</a><br>
        <a href="/status">Ir para status</a><br>
        <a href="/soma/3/2">Ir para soma(3 + 2)</a><br>
        <a href="/subtracao/10/1">Ir para subtracao(10 - 1)</a><br>
        <a href="/multiplicacao/4/4">Ir para multiplicacao(4 * 4)</a>
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
});

app.get("/aluno/:a/:b", (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    const resultado = a + b;
    res.send(`O resultado é ${resultado}!`);
});

app.get("/status", (req, res) => {
    res.json({
        servidor: "online",
        disciplina: "CPW3",
        professora: "Milena",
        hora: new Date().toLocaleString()
    });
});

app.get("/inicio", (req, res) => {
    res.send('Seja bem-vindo!');
});

app.get("/soma/:a/:b", (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    const resultado = a + b;
    res.send(`O resultado é: ${resultado}!`);
});

app.get("/subtracao/:a/:b", (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    const resultado = a - b;
    res.send(`O resultado é: ${resultado}!`);
});

app.get("/multiplicacao/:a/:b", (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    const resultado = a * b;
    res.send(`O resultado é: ${resultado}!`);
});

// 2. Liga o servidor para escutar na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});