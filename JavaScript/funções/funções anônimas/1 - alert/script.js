// 1. Clique no botão

// Crie um botão no HTML.
// Use addEventListener com uma função anônima 
// para mostrar um alert quando o botão for clicado.


// Document é um obj espacial do navegador, ele representa toda pagina web carregada
// Ele procura na página HTML um elemento que tenha o id especificado.
// Se encontrar → retorna esse elemento.
// Se não encontrar → retorna null.

const botao = document.getElementById("botao-funcao");

// É um método que permite você ouvir eventos em um elemento HTML
// Quando o evento acontece:
// (ex: clique, tecla pressionada, mouse passando), ele executa uma função que você definiu.


// define uma função anônima como parâmetro do addEventListener,
// que sera executada quando o evento click acontecer
botao.addEventListener('click', function () {
    alert("Usuário clicou aqui!");
});