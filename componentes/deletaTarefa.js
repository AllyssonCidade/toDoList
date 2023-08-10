const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button');

    botaoDeleta.classList.add('check-button');
    botaoDeleta.innerText = 'deletar';
    botaoDeleta.addEventListener('click', deletarTarefa);

    return botaoDeleta;
};

const deletarTarefa = (evento) => {
    const botaoDeleta = evento.target;

    const tarefaCompleta = botaoDeleta.parentElement;
    const valorTarefa = tarefaCompleta.querySelector('.content').textContent;

    tarefaCompleta.remove();

    removerDoLocalStorage(valorTarefa);

    return botaoDeleta;
};

const removerDoLocalStorage = (valorTarefa) => {
    const tarefasSalvas = JSON.parse(localStorage.getItem('tarefas'));

    const tarefasAtualizadas = tarefasSalvas.filter(tarefa => tarefa.valor !== valorTarefa);

    localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas));
};

export default BotaoDeleta;
