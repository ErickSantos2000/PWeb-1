// são executadas linha por linha na ordem em que aparecem
// cada instrução bloqueia a proxima ate terminar

function tarefa1() {
  console.log("Executando tarefa 1");
}

function tarefa2() {
  console.log("Executando tarefa 2");
}

tarefa1();
tarefa2();

// aqui é tudo sequencial, so quando uma termina que a outra executa