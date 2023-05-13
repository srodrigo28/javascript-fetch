/**
 * Carregando nossas variaveis
 */
const button = document.querySelector('#adicionar')
const input = document.getElementById('item')
const listaCompleta = document.getElementById('lista')

// Criando uma lista para quardar os dados
let minhaListaDeItens = []

/** Criando nossas funcões */

// 1 pega o valor do input e adiciona na nossa lista
function adicionarNovaTarefa() {
    minhaListaDeItens.push(input.value)
    conculida: false
    mostrarTarefas()
}
// 2 funcao
function mostrarTarefas() {
    let novoItem = '';
    
    minhaListaDeItens.forEach((a, i) => {
            // novoItem = novoItem + `
            novoItem += ` 
                <div class="lista-item">
                    <i class="fa-solid fa-trash"
                        onclick="deleteItem(${i})"
                    ></i>
                        <p> ${a} </p>
                    <i class="fa-regular fa-circle-check"
                        onclick="marcarItem()"
                    ></i>
                </div>
            `
    })
    
    listaCompleta.innerHTML = novoItem;
}
function deleteItem(i) {
    alert('Deletando... ' + 'Posição: ' + i )
    minhaListaDeItens.splice(i, 1)
    mostrarTarefas()
}


const isJson = response.headers.get('content-type')?.includes('application/json')
/**
    //fetch('http://localhost:3001/recebi')
    fetch('http://localhost:3001/recebi', {
        method: "GET",
        isJson,
        headers: { "Content-type": "application/json;charset=UTF-8" }
    })
    .then( response => response.json() ) 
    .then( json => console.log(json) )
        .catch(err => console.log(err))
*/
// pegando e passando a função pegar Dados
button.addEventListener('click', adicionarNovaTarefa)
/**
(async () => {
    // DELETE request using fetch with async/await
    const element = document.querySelector('#delete-request-async-await .status');
    await fetch('https://reqres.in/api/posts/', { method: 'DELETE' });
    element.innerHTML = 'Delete successful';
})();

(async () => {
    // DELETE request using fetch with async/await
    const element = document.querySelector('#delete-request-async-await .status');
    await fetch('https://reqres.in/api/posts/1', { method: 'DELETE' });
    element.innerHTML = 'Delete successful';
})();

 */