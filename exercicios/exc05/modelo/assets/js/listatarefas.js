const inputTarefa = document.querySelector('.add-tarefa')
const inputBtn = document.querySelector('.button-add')
const addTarefas = document.querySelector('.tarefas')


function criaLi() {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

function limparInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    addTarefas.appendChild(li)
    limparInput();
    criaButtonApagar(li)
    saveTarefa();
}

function criaButtonApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'apagar esta tarefa');
    li.appendChild(botaoApagar);
}


inputBtn.addEventListener('click', function () {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function (e) {
    const el = e.target;
    if (el.classList.contains('apagar')) {
        el.parentElement.remove()
    }

});

function saveTarefa() {
    const liTarefas = addTarefas.querySelectorAll('li');
    const listaDeTarefas = [];
    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', ' ').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefaJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefaJSON); // valor usado para recuperar é o primeiro parametro STR
    console.log(tarefaJSON);
}