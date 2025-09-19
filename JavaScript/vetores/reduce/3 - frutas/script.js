const frutas = ["maçã", "banana", "maçã"];

const contagem = frutas.reduce(function(ac, f) {
    ac[f] = (ac[f] || 0) + 1;
    return ac;
}, {});

console.log(contagem); // { maçã: 2, banana: 1 }