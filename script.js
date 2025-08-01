async function carregarMonstros() {
    try {
        const response = await fetch('http://localhost:3000/monstros'); // Use a URL da sua API
        const monstros = await response.json();

        const listaMonstros = document.getElementById('listaMonstros');
        listaMonstros.innerHTML = ''; // Limpa a lista antes de adicionar

        monstros.forEach(monstro => {
            const li = document.createElement('li');

            li.innerHTML = `${monstro.nome}`;

            const pDescricao = document.createElement('p');
            pDescricao.innerHTML = `<b>Descrição</b>: ${monstro.descricao}`;
            li.appendChild(pDescricao);

            const pTipo = document.createElement('p');
            pTipo.innerHTML = `<b>Tipo</b>: ${monstro.tipo_criatura}`;
            li.appendChild(pTipo);

            const pVida = document.createElement('p');
            pVida.innerHTML = `<b>Vida</b>: ${monstro.pontos_vida}`;
            li.appendChild(pVida);

            const pAtaque = document.createElement('p');
            pAtaque.innerHTML = `<b>Ataque</b>: ${monstro.ataque}`;
            li.appendChild(pAtaque);

            const pDefesa = document.createElement('p');
            pDefesa.innerHTML = `<b>Defesa</b>: ${monstro.defesa}`;
            li.appendChild(pDefesa);

            const pHabitat = document.createElement('p');
            pHabitat.innerHTML = `<b>Habitat</b>: ${monstro.habitat}`;
            li.appendChild(pHabitat);

            listaMonstros.appendChild(li);
        });

    } catch (error) {
        console.error('Erro ao carregar monstros:', error);
        const listaMonstros = document.getElementById('listaMonstros');
        listaMonstros.textContent = 'Não foi possível carregar os monstros. A API está online?';
    }
}

carregarMonstros();