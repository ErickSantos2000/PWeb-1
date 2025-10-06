const numeros = [1, 2, 3, 4, 5];

// map é um método de arrays que executa uma função em cada elemento
// e retorna um novo array com o resultado dessa função
// ele não altera o array original

// aqui é passada uma função callback que multiplica cada numero por 2
const numerosMultiplicadosPorDois = numeros.map(function(numero) {
    return numero * 2;
});

console.log(numeros); // [1, 2, 3, 4, 5]

console.log(numerosMultiplicadosPorDois); // [2, 4, 6, 8, 10]
