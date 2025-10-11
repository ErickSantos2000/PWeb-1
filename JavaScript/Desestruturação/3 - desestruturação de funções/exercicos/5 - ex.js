// Crie uma função que receba um objeto com várias propriedades
// Desestruture a propriedade principal e capture o resto em outro objeto
// Imprima o principal e o resto

function separarProps({ titulo, ...resto}) {
  console.log(titulo);
  console.log(resto);
  
  
}

separarProps({ titulo: "Livro", autor: "Lucas", ano: 2023, editora: "ABC" });
