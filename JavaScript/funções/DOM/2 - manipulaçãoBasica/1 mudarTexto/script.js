// 1. Pegue um elemento pelo `id` e altere seu texto.

// buscando os elementos pelo IDs definidos no HTML
const botaoTexto = document.getElementById('botaoTexto');
let paragrafo = document.getElementById('paragrafo');
let input = document.getElementById('input');

botaoTexto.addEventListener('click', function (){
    // textContent serve para pegar ou alterar somente o texto de um elemento no DOM
    // input.value por mais que seja obvio, eu tenho que falar: input.value pega o valor de uma input 
    let textoDigitado = input.value;
    paragrafo.textContent = textoDigitado;

})