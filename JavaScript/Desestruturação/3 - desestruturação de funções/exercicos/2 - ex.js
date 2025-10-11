// Crie uma função que receba um array de 4 números
// Retorne a média dos elementos usando desestruturação

function media([a, b, c, d]) {
  let soma = a + b + c + d;
  return soma / 4; 
}

console.log(media([10, 20, 30, 40])); // 25
