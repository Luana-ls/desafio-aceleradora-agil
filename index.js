const tarefaInput = document.getElementById("tarefaDia");
const botao = document.getElementById("adicionar");
const listaTarefas = document.getElementById("dia");
const tarefaInputNoite = document.getElementById("tarefaNoite");
const botao2 = document.getElementById("adicionar2");
const listaTarefasNoite = document.getElementById("noite");


botao.addEventListener("click", adicionarDia);
tarefaInput.addEventListener("keypress", function (e) {
if (e.key === "Enter") {
    adicionarDia();}
    });

function adicionarDia() {
    const tarefaTexto = tarefaInput.value;
        if (tarefaTexto.trim() !== "") {
        const novaTarefa = document.createElement("li");
        novaTarefa.innerHTML = `
            ${tarefaTexto} <button class="excluir">Excluir</button>
        `;
        listaTarefas.appendChild(novaTarefa);
        tarefaInput.value = "";
    }
}

listaTarefas.addEventListener("click", function (e) {
    if (e.target.classList.contains("excluir")) {
        e.target.parentElement.remove();
    }
});


botao2.addEventListener("click", adicionarNoite);
tarefaInputNoite.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
         adicionarNoite();
    }
});

function adicionarNoite() {
    const tarefaTexto2 = tarefaInputNoite.value;
        if (tarefaTexto2.trim() !== "") {
            const novaTarefa2 = document.createElement("li");
            novaTarefa2.innerHTML = `
                ${tarefaTexto2} <button class="excluir2">Excluir</button>
            `;
            listaTarefasNoite.appendChild(novaTarefa2);
            tarefaInputNoite.value = "";
        }
}

        listaTarefasNoite.addEventListener("click", function (e) {
            if (e.target.classList.contains("excluir2")) {
                e.target.parentElement.remove();
            }
        });
        