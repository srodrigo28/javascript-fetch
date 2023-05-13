/**
 * Carregando nossas variaveis
 */
alert('Script atual');

const button = document.querySelector('#adicionar')
const input = document.getElementById('item')
const listaCompleta = document.getElementById('lista')

// Criando uma lista para quardar os dados
let minhaListaDeItens = []
/**  Exemplo 1
    const lista = fetch('http://localhost:3001/recebi')
        .then(function(res) {
            return res.json();
        })
        .then(function(a) {
            console.log(a)
            for (const post of a) {
                console.log(post.nome)    
            }
        })
        .catch(function(e) {
            console.log(e)
        })

*/

// Exemplo 2
//(async function() {
function listar() {
    try {
        const response = fetch('http://localhost:3001/recebi');
        const jsonData = response.json();
        
        for (const post of jsonData) {
          //  console.log(post[0].nome);
        }

    } catch(e) {
        console.log('Deu error: ' + e);
    }
}
listar()