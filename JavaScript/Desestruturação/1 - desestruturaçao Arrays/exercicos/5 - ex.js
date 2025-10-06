const numeros = [1, 2, 3, 4, 5];

// Desestruture o array para obter:
// primeiro = 1
// resto = [2, 3, 4, 5]

const [primeira, ...resto] = numeros;

console.log(primeira);
console.log(resto);

