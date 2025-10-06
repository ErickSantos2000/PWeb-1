function imprimirPessoa({nome: X, idade: Y, cidade: Z}) {
  // Desestruture o objeto pessoa no parâmetro da função
  // e imprima: "Nome: X, Idade: Y, Cidade: Z"
  console.log(`Nome ${X}, Idade: ${Y}, Cidade: ${Z}`);

}

imprimirPessoa({ nome: "Carlos", idade: 25, cidade: "Rio de Janeiro" });
