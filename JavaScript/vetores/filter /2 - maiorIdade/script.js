const pessoas = [
  {nome: "Ana", idade: 17},
  {nome: "Bruno", idade: 20},
  {nome: "Carla", idade: 16},
  {nome: "Diego", idade: 22}
];

const maiores = pessoas.filter(p => p.idade >= 18);

console.log(maiores);


