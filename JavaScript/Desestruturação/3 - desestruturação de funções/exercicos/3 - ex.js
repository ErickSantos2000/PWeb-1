// Crie uma função que receba um objeto pessoa
// Desestruture nome, idade e cidade no parâmetro
// Imprima "Nome: X, Idade: Y, Cidade: Z"

function imprimirPessoa({nome, idade, cidade}) {
  console.log(`Nome: ${nome}\nIdade: ${idade}\nCidade: ${cidade}`);
  
}

imprimirPessoa({ nome: "Ana", idade: 28, cidade: "Curitiba" });
