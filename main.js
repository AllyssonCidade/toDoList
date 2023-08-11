import BotaoConclui from "./componentes/concluiTarefa.js";
import BotaoDeleta from "./componentes/deletaTarefa.js";

const criarTarefa = (evento) => {
    evento.preventDefault();
    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input')
    const valor = input.value

    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${valor}</p>`

    const tarefaPronta = {
        "valor": valor,
        "clase": tarefa.className,
    }


    if (!valor.length == 0) {
        tarefa.innerHTML = conteudo
        tarefa.appendChild(BotaoConclui())
        tarefa.appendChild(BotaoDeleta())
        lista.appendChild(tarefa)
        input.value = ""
        const tarefasSalvas = JSON.parse(localStorage.getItem('tarefas')) || [];
        tarefasSalvas.push(tarefaPronta)

        localStorage.setItem("tarefas", JSON.stringify(tarefasSalvas));
    }

};

const carregarTarefasSalvas = () => {
    const tarefasSalvas = JSON.parse(localStorage.getItem('tarefas')) || [];
    const lista = document.querySelector('[data-list]');

    tarefasSalvas.forEach(tarefaSalva => {
        const tarefa = document.createElement('li');
        tarefa.className = tarefaSalva.clase
        const conteudo = `<p class="content">${tarefaSalva.valor}</p>`
        tarefa.innerHTML = conteudo
        tarefa.appendChild(BotaoConclui())
        tarefa.appendChild(BotaoDeleta())
        lista.appendChild(tarefa)

    });

}

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criarTarefa)

document.addEventListener('DOMContentLoaded', carregarTarefasSalvas);
