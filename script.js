function atualizarStatus(idProjeto) {
    const projeto = document.getElementById(idProjeto);
    const statusSpan = projeto.querySelector('span');

    if (statusSpan.classList.contains('status-em-andamento') || statusSpan.classList.contains('status-pendente')) {
        statusSpan.textContent = 'Concluído';
        statusSpan.classList.remove('status-em-andamento', 'status-pendente');
        statusSpan.style.color = '#28a745'; // Cor verde para concluído
        alert('Projeto concluído com sucesso!');
    }
}

function adicionarProjeto() {
    const novoProjeto = prompt('Digite o nome do novo projeto:');
    if (novoProjeto) {
        const listaProjetos = document.querySelector('.projeto-lista');
        const novoCard = document.createElement('div');
        const novoId = 'proj-' + Date.now();
        
        novoCard.className = 'projeto-card';
        novoCard.id = novoId;
        novoCard.innerHTML = `
            <h3>${novoProjeto}</h3>
            <p>Status: <span class="status-pendente">Pendente</span></p>
            <button onclick="atualizarStatus('${novoId}')">Concluir</button>
        `;
        listaProjetos.appendChild(novoCard);
        alert('Novo projeto adicionado: ' + novoProjeto);
    }
}