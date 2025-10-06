// ex.js

// 1. Inicialização do Array 'numeros'
let numeros = [];

let initNumeros = (quantidade) => {
    let i = 0;
    while (i < quantidade) {
        numeros.push(i);
        i++;
    }
};

// Preenche o array 'numeros' com 0, 1, 2, ..., 9
initNumeros(10); 

