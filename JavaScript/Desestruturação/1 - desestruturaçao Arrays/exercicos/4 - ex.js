let a = 1;
let b = 2;

// Use desestruturação para trocar os valores de a e b
// Resultado: a = 2, b = 1

const letras = [a, b]

const [primeiro, segundo] = letras

a = segundo
b = primeiro

console.log("Forma forma que eu fiz");

console.log(`a = ${a} b = ${b}`);

// OUTRA FORMA DE SE FAZER
let a1 = 1;
let b2 = 2;

// Troca usando desestruturação
[a1, b2] = [b2, a1];

console.log("Forma simples");

console.log(`a = ${a1} b = ${b2}`); // a = 2 b = 1
