const numeros = [10, 20, 30];

const soma = numeros.reduce(function(acumulador, elemento) {
    return acumulador + elemento;
}, 0);

console.log(soma); // 60
