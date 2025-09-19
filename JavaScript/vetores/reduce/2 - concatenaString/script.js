const letras = ["a", "b", "c"];

const resultado = letras.reduce(function(ac, l) {
    return ac + l;
}, "");

console.log(resultado); // "abc"
