
let numeros = [];

let initNumeros = (quantidade) => {
    let i = 0;
    while (i < quantidade) {
        numeros.push(i);
        i++;
    }
};

initNumeros(10);

function getSomatoria(total, numero) {
    let resultado = total + numero; 
    return resultado;
}

let total = numeros.reduce(getSomatoria, 0); 

console.log(total);