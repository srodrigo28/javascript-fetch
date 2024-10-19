/**
 * document.getElementById
 * document.querySelector
 * document.getElementsByClassName
 */

/**
 * Carregando nossas variaveis
 */
const button = document.querySelector('#adicionar')
const input = document.getElementById('item')
const listaCompleta = document.getElementById('lista')

/**
 * Criando uma lista para quardar os dados
 */
let minhaListaDeItens = []

/**
 * Criando nossas funcões
 */

// 1  pegar o valor do input
function pegarDadosInput() {
    console.log(input.value)
}
// 2 pega o valor do input e adiciona na nossa lista
function adicionarNovaTarefa() {
    minhaListaDeItens.push(input.value)

    mostrarTarefas()
    // console.log(minhaListaDeItens)
}
// 3 funcao
function mostrarTarefas() {
    let novoItem = '';
    
    minhaListaDeItens.forEach((item) => {
            novoItem = novoItem + ` 
                <div class="lista-item">
                    <i class="fa-solid fa-trash"></i>
                        <p>${item} </p>
                    <i class="fa-regular fa-circle-check"></i>
                </div>
            `
        })
    
    listaCompleta.innerHTML = novoItem;
    
}
// pegando e passando a função pegar Dados
button.addEventListener('click', adicionarNovaTarefa)