const aluno = {
  nome: "Maria",
  idade: 22
};

// Desestruture o objeto para pegar:
// nome, idade, curso (valor padrão: "Desconhecido")

const {nome, idade, curso = "Desconhecido"} = aluno;

console.log(curso);
