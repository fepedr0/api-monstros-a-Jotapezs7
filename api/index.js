// 1. Importar o módulo Express
const express = require('express');
const cors = require('cors');

// 2. Criar uma instância do aplicativo Express
const app = express();
app.use(cors({ origin: '*' }));

// 3. Definir a porta
const PORT = process.env.PORT || 3000;

// 4. Carregar os dados dos monstros
const monstros = require('./monstros.json');

// --- Rotas da API ---

// GET /monstros — listar monstros com filtros opcionais
app.get('/monstros', (req, res) => {
    const { tipo_criatura, pontos_vida_min, pontos_vida_max, ataque_min, ataque_max, habitat, q } = req.query;

    let resultado = [...monstros];

    if (tipo_criatura) {
        resultado = resultado.filter(m => m.tipo_criatura === tipo_criatura);
    }

    if (pontos_vida_min) {
        resultado = resultado.filter(m => m.pontos_vida >= Number(pontos_vida_min));
    }

    if (pontos_vida_max) {
        resultado = resultado.filter(m => m.pontos_vida <= Number(pontos_vida_max));
    }

    if (ataque_max) {
        resultado = resultado.filter(m => m.ataque <= Number(ataque_max))
    }

    if (ataque_min) {
        resultado = resultado.filter(m => m.ataque >= Number(ataque_min));
    }

    if (habitat) {
        resultado = resultado.filter(m =>
            m.habitat && m.habitat.toLowerCase() === habitat.toLowerCase()
        );
    }

    if (q) {
        const texto = q.toLowerCase();
        resultado = resultado.filter(m =>
            (m.nome && m.nome.toLowerCase().includes(texto)) ||
            (m.descricao && m.descricao.toLowerCase().includes(texto))
        );
    }


    res.json(resultado);
});

// GET /monstros/random — retorna um monstro aleatório
app.get('/monstros/random', (req, res) => {
    if (monstros.length === 0) {
        return res.status(404).json({ erro: 'Nenhum monstro encontrado' });
    }

    const index = Math.floor(Math.random() * monstros.length);
    res.json(monstros[index]);
});

// --- Iniciar o Servidor ---
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Acesse: http://localhost:${PORT}/monstros`);
});
