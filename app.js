// --------------------------- CONFIGURATION --------------------------

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ------------------------------ ROUTES -------------------------------

app.get('/', (_req, res) => {
    res.status(200).json({
        data: true
    });
});

app.post('/', (req, res) => {
    const { user, pass } = req.body;

    res.status(200).json({
        nome: user,
        senha: pass
    });
});

// ------------------------------ SERVER -------------------------------

app.listen(3000, () => {
    console.log(`\x1b[43;1m Funcionou!!! \x1b[0m Servidor está rodando na porta: 3000\x1b[0m\n`);
});