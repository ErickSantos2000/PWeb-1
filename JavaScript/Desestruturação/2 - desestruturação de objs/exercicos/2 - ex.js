const produto = {
  nome: "Camiseta",
  preco: 50,
  estoque: 100
};

// Desestruture o objeto para criar variáveis:
// n (nome), p (preco), e (estoque)

const {nome: n, preco: p, estoque: e} = produto;

console.log(n);
console.log(p);
console.log(e);


