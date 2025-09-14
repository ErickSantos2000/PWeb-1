// 2. Alterar texto de um título
// Tenha um <h1> no HTML. Ao clicar em um botão, use uma função anônima para 
// trocar o texto do <h1> para "Texto alterado com função anônima!".

const botao = document.getElementById("Mudar titulo");

botao.addEventListener('click', function (){
    const h1 = document.getElementById("Gigante");
    h1.textContent = "O maior!";
})