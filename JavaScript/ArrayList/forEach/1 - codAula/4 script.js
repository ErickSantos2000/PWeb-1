
// 4. Exemplo de Reduce para Soma de Propriedades de Objetos (linhas 34-44 da terceira imagem)

// Array de objetos 'pessoas'
const pessoas = [
    {nome: 'Beto', idade: 18, statusCivil: 'Solteiro'},
    {nome: 'ana', idade: 25, statusCivil: 'Casado'},
    {nome: 'Hiago', idade: 40, statusCivil: 'Casado'},
    {nome: 'Lucas', idade: 20, statusCivil: 'Solteiro'}
];

// Uso do reduce para somar a propriedade 'idade' de todos os objetos
function soma(total, pessoa){
    return total + pessoa.idade; 
}

let SomatoriaIdades = pessoas.reduce(soma, 0); // O valor inicial '0' é importante para garantir que a soma comece corretamente

console.log("Soma das idades: " + SomatoriaIdades); // Vai imprimir 103 (18 + 25 + 40 + 20)