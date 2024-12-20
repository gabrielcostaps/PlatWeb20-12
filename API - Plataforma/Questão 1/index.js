const express = require('express');
const app = express();
const port = 3000;

app.get('/ola_servidor', (req, res) => {
    res.json({ message: "Oi coleguinhas. tudo tranquilo com vocês?" });
});

app.get('/que_horas_sao_por_favor', (req, res) => {
    const now = new Date();
    const formattedDate = now.toISOString().replace('T', ' ').substring(0, 19);
    res.json({ horaAtual: formattedDate });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});