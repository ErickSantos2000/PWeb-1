const pessoas = ["João", "Maria", "Lucas"];

const mensagemPersonalizada = pessoas.map(function(pessoas){
   
    return "Olá, NOME".replace("NOME", pessoas); 
})


console.log(mensagemPersonalizada);
