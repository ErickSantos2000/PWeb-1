
// 2. Pegue todos os elementos de uma determinada `class` e altere a cor de fundo.

// document.getElementsByClassName('classe') não retorna um único elemento, 
// mas sim uma coleção (HTMLCollection) de todos os elementos que têm essa classe
// por isso é necessario percorrer os elemento se quiser modificar a cor de cada um deles
// Pega todos os elementos com a classe
let classe = document.getElementsByClassName('classe');
const botaoCor = document.getElementById('botaoCor');

botaoCor.addEventListener('click', function (){
    // percorre todos e muda a cor
    for (let i = 0; i < classe.length; i++) {
        classe[i].style.backgroundColor = 'blue';
    }
});

// ## **1. Seleção e manipulação básica**


// 3. Use `querySelector` para selecionar o primeiro `<p>` da página e mudar a fonte.
// 4. Use `querySelectorAll` para selecionar todos os `<li>` e colocar o texto em maiúsculo.


