const button = document.querySelector('.button-task')
const input = document.querySelector('.input-task')
const listacompleta = document.querySelector('.list-tasks')

let minhalistadeitens = []


function adicionarNovatarefa() {
    minhalistadeitens.push({
        tarefa: input.value,
        concluida: false
    })
    input.value = ''

    mostrarTarefas()
}

function mostrarTarefas() {

    let novaLi = ''

    minhalistadeitens.forEach((item, posicao) => {
        novaLi = novaLi + `
        <li class="task ${item.concluida && "done"}">
        <img src="./img/checked.png" alt="" onclick="concluirTarefa(${posicao})">
        <p>${item.tarefa}</p>
        <img src="./img/trash.png" alt="" onclick="deletarItem(${posicao})">
        </li>

        `
    })

    listacompleta.innerHTML = novaLi


    localStorage.setItem('lista', JSON.stringify(minhalistadeitens))
}

function concluirTarefa(posicao) {
    minhalistadeitens[posicao].concluida = !minhalistadeitens[posicao].concluida

    mostrarTarefas()
}



function deletarItem(posicao) {
    minhalistadeitens.splice(posicao, 1)

    mostrarTarefas()
}

function recarregarTarefas() {
    const tarefasDoLocalStorage = localStorage.getItem('lista')

    if(tarefasDoLocalStorage){
    minhalistadeitens = JSON.parse(tarefasDoLocalStorage)
}
    mostrarTarefas()
}


recarregarTarefas()
button.addEventListener('click', adicionarNovatarefa)