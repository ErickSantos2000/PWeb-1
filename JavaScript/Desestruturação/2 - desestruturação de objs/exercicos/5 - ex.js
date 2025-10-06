const dados = {
  nome: "Lucas",
  idade: 30,
  cidade: "Belo Horizonte",
  pais: "Brasil"
};

// Desestruture para obter:
// nome
// resto = { idade, cidade, pais }

const {nome, ...resto} = dados;

console.log(nome);
console.log(resto)
