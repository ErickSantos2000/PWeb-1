const cores = ["vermelho"];

// Desestruture o array para obter:
// primeira = "vermelho"
// segunda = "azul" (valor padrão, caso não exista no array)

const [vermelho, segunda = "azul"] = cores;

console.log(vermelho);
console.log(segunda);

