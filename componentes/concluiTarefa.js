const BotaoConclui = () => {
    const botaoConclui = document.createElement('button');

    botaoConclui.classList.add('check-button');
    botaoConclui.innerText = 'concluir';
    botaoConclui.addEventListener('click', concluirTarefa);

    return botaoConclui;
};

const concluirTarefa = (evento) => {
    const botaoConclui = evento.target;

    const tarefaCompleta = botaoConclui.parentElement;
    tarefaCompleta.classList.toggle('done'); // Alterna a classe "done" no DOM

    const valorTarefa = tarefaCompleta.querySelector('.content').textContent;
    atualizarClasseTarefaLocalStorage(valorTarefa, tarefaCompleta.classList.contains('done'));
};

const atualizarClasseTarefaLocalStorage = (valorTarefa, concluida) => {
    const tarefasSalvas = JSON.parse(localStorage.getItem('tarefas')) || [];

    const tarefaEncontrada = tarefasSalvas.find(tarefa => tarefa.valor === valorTarefa);

    if (tarefaEncontrada) {
        tarefaEncontrada.clase = concluida ? 'task done' : 'task';

        localStorage.setItem('tarefas', JSON.stringify(tarefasSalvas));
    }
};

export default BotaoConclui;
