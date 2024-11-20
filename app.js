// --------------------------- CONFIGURATION --------------------------

const express = require('express');
// const cors = require('cors');
const app = express();

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ------------------------------ ROUTES -------------------------------

app.get('/', (req, res) => {
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
    console.log(`\x1b[43;1m Funcionou!!! \x1b[0m Servidor está rodando na porta: ${PORT}\x1b[0m\n`);
});