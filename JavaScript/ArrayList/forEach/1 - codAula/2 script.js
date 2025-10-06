
// 1. Inicialização do Array 'numeros'
let numeros = [];

let initNumeros = (quantidade) => {
    let i = 0;
    while (i < quantidade) {
        numeros.push(i);
        i++;
    }
};

initNumeros(10); 

// for (let numero of numeros) {
//     console.log(numero + " of "); 
// }

// função de callback para o forEach 
let exibirItem = (numero) => {
    console.log(numero + " each ");
};

// iteração usando forEach 
numeros.forEach(exibirItem); 

